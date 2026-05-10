// ============================================================
// STATE
// ============================================================
let activePlatforms = new Set();
let activeSources = new Set();
let activeGenres = new Set();
let statusFilter = 'all';
let viewMode = 'grid';
let sortMode = 'default';
let searchQuery = '';
let STATUS = {};
let META = {};
let openGame = null;

// ============================================================
// PERSISTENCE — played/beat tracked locally
// ============================================================
function loadPersisted() {
  try { STATUS = JSON.parse(localStorage.getItem('hoard_status') || '{}'); } catch(e) { STATUS = {}; }
  try { META = JSON.parse(localStorage.getItem('hoard_meta') || '{}'); } catch(e) { META = {}; }
}

function saveStatus() {
  localStorage.setItem('hoard_status', JSON.stringify(STATUS));
  updateStatBar();
}

function saveHoardMeta() {
  localStorage.setItem('hoard_meta', JSON.stringify(META));
}

function getStatus(game) {
  const override = STATUS[game.title];
  if (override) return override;
  if (game.beat) return 'beat';
  if (game.played) return 'played';
  return 'unplayed';
}

// ============================================================
// DERIVED DATA
// ============================================================
const PLATFORMS = [...new Set(GAMES.map(g => g.console_family))].sort();
const SOURCES = [...new Set(GAMES.map(g => g.source))].sort();
const GENRES = [...new Set(GAMES.flatMap(g => g.genres))].sort();

const PLATFORM_COUNTS = {};
PLATFORMS.forEach(p => { PLATFORM_COUNTS[p] = GAMES.filter(g => g.console_family === p).length; });

// ============================================================
// FILTERS & SORT
// ============================================================
function filtered() {
  let list = GAMES;

  if (activePlatforms.size) list = list.filter(g => activePlatforms.has(g.console_family));
  if (activeSources.size)   list = list.filter(g => activeSources.has(g.source));
  if (activeGenres.size)    list = list.filter(g => g.genres.some(gen => activeGenres.has(gen)));

  if (statusFilter !== 'all') {
    list = list.filter(g => getStatus(g) === statusFilter);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.genres.some(gen => gen.toLowerCase().includes(q)) ||
      (g.description || '').toLowerCase().includes(q)
    );
  }

  if (sortMode === 'title') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
  if (sortMode === 'score-desc') list = [...list].sort((a, b) => (b.metacritic_score || 0) - (a.metacritic_score || 0));
  if (sortMode === 'score-asc')  list = [...list].sort((a, b) => (a.metacritic_score || 0) - (b.metacritic_score || 0));

  return list;
}

// ============================================================
// STAT BAR
// ============================================================
function updateStatBar() {
  const beatCount = GAMES.filter(g => getStatus(g) === 'beat').length;
  const playedCount = GAMES.filter(g => getStatus(g) === 'played').length;
  const unplayedCount = GAMES.filter(g => getStatus(g) === 'unplayed').length;
  document.getElementById('statTotal').textContent = GAMES.length;
  document.getElementById('statPlayed').textContent = playedCount;
  document.getElementById('statBeat').textContent = beatCount;
  document.getElementById('statBacklog').textContent = unplayedCount;
}

// ============================================================
// SCORE HELPERS
// ============================================================
function scoreClass(score) {
  if (!score) return 'score-none';
  if (score >= 85) return 'score-great';
  if (score >= 70) return 'score-good';
  return 'score-mixed';
}

function scoreLabel(score) {
  return score ? String(score) : '—';
}

// ============================================================
// RENDER
// ============================================================
function render() {
  const list = filtered();
  document.getElementById('statShowing').textContent = list.length;
  document.getElementById('resultsCount').textContent = `${list.length} of ${GAMES.length} games`;

  const grid = document.getElementById('gameGrid');

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state"><div class="big">🐉</div><div>No games match those filters.</div></div>`;
    return;
  }

  if (viewMode === 'grid') {
    grid.className = 'grid';
    grid.innerHTML = list.map(g => {
      const status = getStatus(g);
      return `
        <div class="card" data-title="${encodeURIComponent(g.title)}">
          <div class="status-dot ${status}"></div>
          <div class="card-title">${g.title}</div>
          <div class="card-meta">
            <span class="platform-tag platform-${g.console_family}">${g.console_family}</span>
            <span>${g.source}</span>
            <span class="score-badge ${scoreClass(g.metacritic_score)}">${scoreLabel(g.metacritic_score)}</span>
          </div>
          <div class="card-genres">
            ${g.genres.slice(0, 3).map(gen => `<span class="genre-tag">${gen}</span>`).join('')}
          </div>
        </div>`;
    }).join('');
  } else {
    grid.className = 'list-view';
    grid.innerHTML = list.map(g => {
      const status = getStatus(g);
      const statusLabel = status === 'beat' ? '✓ BEAT' : status === 'played' ? '▷ PLAYING' : '—';
      return `
        <div class="list-row" data-title="${encodeURIComponent(g.title)}">
          <div class="list-title">${g.title}</div>
          <div class="list-platform platform-tag platform-${g.console_family}">${g.console_family}</div>
          <div class="list-genres">${g.genres.slice(0, 2).join(', ')}</div>
          <div class="list-score ${scoreClass(g.metacritic_score)}">${scoreLabel(g.metacritic_score)}</div>
          <div class="list-status">${statusLabel}</div>
        </div>`;
    }).join('');
  }

  grid.querySelectorAll('.card, .list-row').forEach(el => {
    el.addEventListener('click', () => {
      const title = decodeURIComponent(el.dataset.title);
      const game = GAMES.find(g => g.title === title);
      if (game) openModal(game);
    });
  });
}

// ============================================================
// MODAL
// ============================================================
function openModal(game) {
  openGame = game;
  const status = getStatus(game);

  document.getElementById('modalTitle').textContent = game.title;

  const meta = document.getElementById('modalMeta');
  meta.innerHTML = `
    <span class="platform-tag platform-${game.console_family}">${game.console_family}</span>
    <span class="platform-tag" style="background:var(--pill-bg);border:1px solid var(--border);color:var(--muted)">${game.source}</span>
    <span class="score-badge ${scoreClass(game.metacritic_score)}">${scoreLabel(game.metacritic_score)} MC</span>
    ${game.metacritic_url ? `<a class="mc-link" href="${game.metacritic_url}" target="_blank" rel="noopener">↗ metacritic</a>` : ''}
  `;

  document.getElementById('modalDesc').textContent = game.description || '';

  const genreSection = document.getElementById('modalGenresSection');
  if (game.genres?.length) {
    genreSection.style.display = '';
    document.getElementById('modalGenres').innerHTML = game.genres.map(gen =>
      `<span class="modal-genre-tag" data-genre="${gen}">${gen}</span>`
    ).join('');
    document.getElementById('modalGenres').querySelectorAll('.modal-genre-tag').forEach(el => {
      el.addEventListener('click', () => {
        activeGenres.add(el.dataset.genre);
        closeModal();
        renderSidebar();
        render();
      });
    });
  } else {
    genreSection.style.display = 'none';
  }

  const riylSection = document.getElementById('modalRiylSection');
  if (game.riyl?.length) {
    riylSection.style.display = '';
    document.getElementById('modalRiyl').innerHTML = game.riyl.map(r =>
      `<span class="riyl-tag">${r}</span>`
    ).join('');
  } else {
    riylSection.style.display = 'none';
  }

  renderModalActions(status);

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
}

function renderModalActions(status) {
  const actions = document.getElementById('modalActions');
  actions.innerHTML = `
    <button class="btn ${status === 'beat' ? 'primary' : ''}" id="btnBeat">
      ${status === 'beat' ? '✓ BEAT' : 'MARK BEAT'}
    </button>
    <button class="btn ${status === 'played' ? 'active-status' : ''}" id="btnPlayed">
      ${status === 'played' ? '▷ PLAYING' : 'MARK PLAYING'}
    </button>
    <button class="btn" id="btnUnplayed">RESET</button>
  `;

  document.getElementById('btnBeat').addEventListener('click', () => {
    STATUS[openGame.title] = 'beat';
    saveStatus();
    renderModalActions(getStatus(openGame));
    render();
  });
  document.getElementById('btnPlayed').addEventListener('click', () => {
    STATUS[openGame.title] = 'played';
    saveStatus();
    renderModalActions(getStatus(openGame));
    render();
  });
  document.getElementById('btnUnplayed').addEventListener('click', () => {
    delete STATUS[openGame.title];
    saveStatus();
    renderModalActions(getStatus(openGame));
    render();
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  openGame = null;
}

// ============================================================
// SIDEBAR
// ============================================================
function renderSidebar() {
  // Platforms
  const platformPills = document.getElementById('platformPills');
  platformPills.innerHTML = PLATFORMS.map(p => `
    <div class="platform-pill ${activePlatforms.has(p) ? 'active' : ''}" data-platform="${p}">
      <span>${p}</span>
      <span class="pill-count">${PLATFORM_COUNTS[p]}</span>
    </div>
  `).join('');
  platformPills.querySelectorAll('.platform-pill').forEach(el => {
    el.addEventListener('click', () => {
      const p = el.dataset.platform;
      activePlatforms.has(p) ? activePlatforms.delete(p) : activePlatforms.add(p);
      renderSidebar(); render();
    });
  });

  // Sources
  const sourceChips = document.getElementById('sourceChips');
  sourceChips.innerHTML = SOURCES.map(s => `
    <div class="chip ${activeSources.has(s) ? 'active' : ''}" data-source="${s}">${s}</div>
  `).join('');
  sourceChips.querySelectorAll('.chip').forEach(el => {
    el.addEventListener('click', () => {
      const s = el.dataset.source;
      activeSources.has(s) ? activeSources.delete(s) : activeSources.add(s);
      renderSidebar(); render();
    });
  });

  // Genres
  const genreChips = document.getElementById('genreChips');
  genreChips.innerHTML = GENRES.map(gen => `
    <div class="chip ${activeGenres.has(gen) ? 'active' : ''}" data-genre="${gen}">${gen}</div>
  `).join('');
  genreChips.querySelectorAll('.chip').forEach(el => {
    el.addEventListener('click', () => {
      const gen = el.dataset.genre;
      activeGenres.has(gen) ? activeGenres.delete(gen) : activeGenres.add(gen);
      renderSidebar(); render();
    });
  });
}

// ============================================================
// INIT
// ============================================================
function init() {
  loadPersisted();
  renderSidebar();
  updateStatBar();
  render();

  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      statusFilter = tab.dataset.status;
      render();
    });
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    render();
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', e => {
    sortMode = e.target.value;
    render();
  });

  // View mode
  document.getElementById('btnGrid').addEventListener('click', () => {
    viewMode = 'grid';
    document.getElementById('btnGrid').classList.add('active');
    document.getElementById('btnList').classList.remove('active');
    render();
  });
  document.getElementById('btnList').addEventListener('click', () => {
    viewMode = 'list';
    document.getElementById('btnList').classList.add('active');
    document.getElementById('btnGrid').classList.remove('active');
    render();
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

init();
