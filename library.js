const GAMES = [
  {
    "title": "WWE 2K25",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 76,
    "metacritic_url": "https://www.metacritic.com/game/wwe-2k25/",
    "played": false,
    "beat": false,
    "genres": [
      "Sports",
      "Fighting",
      "Simulation"
    ],
    "description": "The latest entry in 2K's long-running wrestling sim, featuring an extensive roster, deep career modes, and the returning MyFaction card-collecting system.",
    "riyl": [
      "AEW: Fight Forever",
      "Fire Pro Wrestling World",
      "WWE 2K23"
    ],
    "image": "https://media.rawg.io/media/screenshots/75c/75ca72f55bbf12059fd17e650bdf8c0f.jpg"
  },
  {
    "title": "Mortal Kombat 1",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/mortal-kombat-1/",
    "played": false,
    "beat": false,
    "genres": [
      "Fighting"
    ],
    "description": "A series reboot set in a rebooted timeline ruled by Liu Kang. Brutal, cinematic fatalities meet a revamped Kameo fighter assist system and a surprisingly strong story mode.",
    "riyl": [
      "Street Fighter 6",
      "Injustice 2",
      "Tekken 8"
    ],
    "image": "https://media.rawg.io/media/games/155/155087d7b9c1225cda0ab9e586b6374d.jpg"
  },
  {
    "title": "Elden Ring",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 96,
    "metacritic_url": "https://www.metacritic.com/game/elden-ring/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Soulslike",
      "Open World"
    ],
    "description": "FromSoftware's open-world masterpiece, built on Soulsborne DNA and co-written with George R.R. Martin. Vast, punishing, and endlessly rewarding.",
    "riyl": [
      "Dark Souls III",
      "Sekiro: Shadows Die Twice",
      "Blasphemous 2"
    ],
    "image": "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg"
  },
  {
    "title": "Street Fighter 6",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 92,
    "metacritic_url": "https://www.metacritic.com/game/street-fighter-6/",
    "played": false,
    "beat": false,
    "genres": [
      "Fighting"
    ],
    "description": "Capcom's best-in-class fighter in decades. Drive System mechanics add tactical depth, World Tour mode is a surprisingly fleshed-out single-player RPG, and the rollback netcode is excellent.",
    "riyl": [
      "Mortal Kombat 1",
      "Guilty Gear Strive",
      "King of Fighters XV"
    ],
    "image": "https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg"
  },
  {
    "title": "Blazing Chrome",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/blazing-chrome/",
    "played": false,
    "beat": false,
    "genres": [
      "Run and Gun",
      "Action",
      "Arcade"
    ],
    "description": "A pitch-perfect love letter to Contra and Metal Slug set in a dystopian robot-ruled future. Two-player co-op, gorgeous pixel art, and merciless difficulty.",
    "riyl": [
      "Contra III",
      "Metal Slug 3",
      "Cuphead"
    ],
    "image": "https://media.rawg.io/media/games/650/650a77b1ea5632a4b99194ac7f082191.jpg"
  },
  {
    "title": "Borderlands 3",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/borderlands-3/",
    "played": false,
    "beat": false,
    "genres": [
      "Looter Shooter",
      "Action RPG",
      "Co-op"
    ],
    "description": "The series' biggest entry with billions of procedurally generated guns, four-player co-op, and a massive campaign. Story is weaker than 2 but the gunplay is the tightest yet.",
    "riyl": [
      "Borderlands 2",
      "Tiny Tina's Wonderlands",
      "Outriders"
    ],
    "image": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
  },
  {
    "title": "Scott Pilgrim vs. the World: The Game – Complete Edition",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 77,
    "metacritic_url": "https://www.metacritic.com/game/scott-pilgrim-vs-the-world-the-game-complete-edition/",
    "played": false,
    "beat": false,
    "genres": [
      "Beat 'em Up",
      "Co-op",
      "Arcade"
    ],
    "description": "Ubisoft's cult classic belt scroller based on Bryan Lee O'Malley's comics, with RPG leveling, incredible chiptune soundtrack by Anamanaguchi, and up to four-player co-op.",
    "riyl": [
      "River City Girls",
      "Castle Crashers",
      "Streets of Rage 4"
    ],
    "image": "https://media.rawg.io/media/games/b23/b2375c9b0b01394bb55093269b36168c.jpg"
  },
  {
    "title": "Control",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/control/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Third-Person Shooter",
      "Metroidvania"
    ],
    "description": "Remedy's SCP-adjacent supernatural thriller set in a Brutalist government building called the Oldest House. Telekinetic combat, incredible atmosphere, and deep lore.",
    "riyl": [
      "Alan Wake Remastered",
      "Prey",
      "Quantum Break"
    ],
    "image": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
  },
  {
    "title": "Control Ultimate Edition",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/control-ultimate-edition/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Third-Person Shooter",
      "Metroidvania"
    ],
    "description": "The complete Control experience including both DLC expansions — The Foundation and AWE, which directly ties into the Alan Wake universe.",
    "riyl": [
      "Alan Wake Remastered",
      "Prey",
      "Quantum Break"
    ],
    "image": "https://media.rawg.io/media/games/a74/a7462cb98ad1ed06f646afd0a5a1454d.jpg"
  },
  {
    "title": "Hogwarts Legacy",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/hogwarts-legacy/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World"
    ],
    "description": "An open-world RPG set in the 1800s Wizarding World. Build your character, attend classes, and uncover a goblin rebellion. The most fleshed-out Hogwarts experience in any medium.",
    "riyl": [
      "Fable III",
      "The Witcher 3",
      "Dragon's Dogma 2"
    ],
    "image": "https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg"
  },
  {
    "title": "Rocksmith 2014",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/rocksmith-2014/",
    "played": false,
    "beat": false,
    "genres": [
      "Music",
      "Educational",
      "Rhythm"
    ],
    "description": "The only game that actually teaches you real guitar. Plug in a real instrument and learn songs through adaptive difficulty. More lesson tool than game.",
    "riyl": [
      "Guitar Hero III",
      "Yousician",
      "Synthesia"
    ],
    "image": "https://media.rawg.io/media/games/dbf/dbff098afac582351d1d96c7d666f137.jpg"
  },
  {
    "title": "Bramble: The Mountain King",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 75,
    "metacritic_url": "https://www.metacritic.com/game/bramble-the-mountain-king/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Horror",
      "Adventure"
    ],
    "description": "A dark Scandinavian folklore adventure following two siblings through a nightmarish fairy tale world. Gorgeous, harrowing, and surprisingly brutal.",
    "riyl": [
      "Little Nightmares II",
      "Inside",
      "Limbo"
    ],
    "image": "https://media.rawg.io/media/games/d1f/d1f058e4c29abbfbb2ce16c08f626e62.jpg"
  },
  {
    "title": "No Place Like Home",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 63,
    "metacritic_url": "https://www.metacritic.com/game/no-place-like-home/",
    "played": false,
    "beat": false,
    "genres": [
      "Farming Sim",
      "Casual",
      "Adventure"
    ],
    "description": "A cozy farming and exploration game set on a trashed Earth where you vacuum up garbage, grow crops, and befriend locals to restore your grandmother's home.",
    "riyl": [
      "Stardew Valley",
      "Slime Rancher",
      "Stranded Sails"
    ],
    "image": "https://media.rawg.io/media/screenshots/499/499e6ae2565fc60f4363f53da3ef06ea.jpg"
  },
  {
    "title": "Spirit of the North: Enhanced Edition",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 63,
    "metacritic_url": "https://www.metacritic.com/game/spirit-of-the-north-enhanced-edition/",
    "played": false,
    "beat": false,
    "genres": [
      "Adventure",
      "Puzzle",
      "Atmospheric"
    ],
    "description": "A wordless, dialogue-free journey across Iceland as a fox accompanied by the spirit of the Northern Lights. Meditative, beautiful, and short.",
    "riyl": [
      "Journey",
      "Abzû",
      "Alba: A Wildlife Adventure"
    ],
    "image": "https://media.rawg.io/media/screenshots/9ea/9ea4638d6f9edf881aa6bafee0a40711.jpg"
  },
  {
    "title": "Stranded Sails: Explorers of the Cursed Islands",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 63,
    "metacritic_url": "https://www.metacritic.com/game/stranded-sails-explorers-of-the-cursed-islands/",
    "played": false,
    "beat": false,
    "genres": [
      "Farming Sim",
      "Adventure",
      "Casual"
    ],
    "description": "A shipwreck survival sim with farming, exploration, and light RPG elements. Set up camp, feed your crew, and explore mysterious islands.",
    "riyl": [
      "No Place Like Home",
      "Stardew Valley",
      "Spiritfarer"
    ],
    "image": "https://media.rawg.io/media/screenshots/2ea/2ea1c616eb26bdace8f9b43b25ec8670.jpg"
  },
  {
    "title": "Time on Frog Island",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 66,
    "metacritic_url": "https://www.metacritic.com/game/time-on-frog-island/",
    "played": false,
    "beat": false,
    "genres": [
      "Adventure",
      "Casual",
      "Puzzle"
    ],
    "description": "A wordless trading and exploration game on a charming island of frogs. Barter your way to repairs and sail home. Light, breezy, and whimsical.",
    "riyl": [
      "Donut County",
      "A Short Hike",
      "Spirit of the North"
    ],
    "image": "https://media.rawg.io/media/screenshots/b61/b6135869da80675b337d5a831dcd3b21.jpg"
  },
  {
    "title": "The Witcher 3: Wild Hunt – Complete Edition",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 93,
    "metacritic_url": "https://www.metacritic.com/game/the-witcher-3-wild-hunt/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Fantasy"
    ],
    "description": "Widely considered one of the greatest RPGs ever made. Play as Geralt of Rivia hunting for his adopted daughter in a war-ravaged open world packed with morally complex quests.",
    "riyl": [
      "Elden Ring",
      "Dragon Age: Inquisition",
      "Horizon Zero Dawn"
    ],
    "image": "https://media.rawg.io/media/games/52b/52be96c19be0d79eeb8664e4ca2aabd5.jpg"
  },
  {
    "title": "Rise of the Tomb Raider",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/rise-of-the-tomb-raider/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Stealth"
    ],
    "description": "Lara Croft races a shadowy organization to Siberia in search of the secret of immortality. Tight traversal, satisfying bow combat, and gorgeous environments.",
    "riyl": [
      "Uncharted 4",
      "Shadow of the Tomb Raider",
      "Horizon Zero Dawn"
    ],
    "image": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
  },
  {
    "title": "BioShock Remastered",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 96,
    "metacritic_url": "https://www.metacritic.com/game/bioshock-remastered/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Horror",
      "RPG"
    ],
    "description": "One of gaming's all-time great settings — the underwater libertarian dystopia of Rapture. Plasmid-augmented combat, iconic villain Andrew Ryan, and a legendary twist.",
    "riyl": [
      "BioShock 2",
      "BioShock Infinite",
      "Prey"
    ],
    "image": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
  },
  {
    "title": "BioShock Infinite: The Complete Edition",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 94,
    "metacritic_url": "https://www.metacritic.com/game/bioshock-infinite/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Action",
      "RPG"
    ],
    "description": "Abandon Rapture for Columbia, a city in the clouds riven by class warfare and religious fanaticism. Sky-hook traversal, vigors, and a mind-bending narrative.",
    "riyl": [
      "BioShock Remastered",
      "Wolfenstein II",
      "Dishonored"
    ],
    "image": "https://media.rawg.io/media/screenshots/519/51913588cccacfd779bd5a0d8ed17ed6.jpg"
  },
  {
    "title": "BioShock 2 Remastered",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/bioshock-2/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Horror",
      "RPG"
    ],
    "description": "Return to Rapture as a Big Daddy hunting for your Little Sister. More combat-focused than the original with strong DLC (Minerva's Den) that rivals the base game.",
    "riyl": [
      "BioShock Remastered",
      "Dead Space 2",
      "Prey"
    ],
    "image": "https://media.rawg.io/media/games/7c4/7c448374df84b607f67ce9182a3a3ca7.jpg"
  },
  {
    "title": "Sekiro: Shadows Die Twice – Game of the Year Edition",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/sekiro-shadows-die-twice/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Soulslike",
      "Stealth"
    ],
    "description": "FromSoftware's samurai masterpiece. Posture-breaking sword duels replace stamina bars — the most rhythmic and mechanically pure of the Soulsborne games.",
    "riyl": [
      "Elden Ring",
      "Nioh",
      "Ghost of Tsushima"
    ],
    "image": "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
  },
  {
    "title": "Mad Max",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 68,
    "metacritic_url": "https://www.metacritic.com/game/mad-max/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Driving"
    ],
    "description": "A competent open-world brawler set in the post-apocalyptic Wasteland. Car combat is its strongest suit; on-foot melee borrows liberally from the Arkham games.",
    "riyl": [
      "Just Cause 4",
      "Rage 2",
      "Fallout 4"
    ],
    "image": "https://media.rawg.io/media/games/d7d/d7d33daa1892e2468cd0263d5dfc957e.jpg"
  },
  {
    "title": "Inside",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 91,
    "metacritic_url": "https://www.metacritic.com/game/inside/",
    "played": false,
    "beat": false,
    "genres": [
      "Puzzle Platformer",
      "Horror",
      "Atmospheric"
    ],
    "description": "Playdead's follow-up to Limbo — a wordless, monochromatic nightmare about a boy infiltrating a totalitarian facility. Disturbing, beautiful, and unforgettable.",
    "riyl": [
      "Limbo",
      "Little Nightmares",
      "Bramble: The Mountain King"
    ],
    "image": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
  },
  {
    "title": "It Takes Two",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/it-takes-two/",
    "played": false,
    "beat": false,
    "genres": [
      "Co-op",
      "Platformer",
      "Adventure"
    ],
    "description": "A mandatory two-player adventure about a couple on the brink of divorce, shrunk to tiny size and forced to work together through constantly reinventing gameplay segments.",
    "riyl": [
      "A Way Out",
      "Unravel Two",
      "Split Fiction"
    ],
    "image": "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg"
  },
  {
    "title": "Mortal Kombat 11",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/mortal-kombat-11/",
    "played": false,
    "beat": false,
    "genres": [
      "Fighting"
    ],
    "description": "The penultimate numbered MK entry — refined fatalities, a cinematic story mode spanning timelines, and the deepest customization in the series at that point.",
    "riyl": [
      "Mortal Kombat 1",
      "Injustice 2",
      "Street Fighter 6"
    ],
    "image": "https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg"
  },
  {
    "title": "Saints Row IV",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 79,
    "metacritic_url": "https://www.metacritic.com/game/saints-row-iv/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Comedy"
    ],
    "description": "The Saints become the President of the United States and then fight a Matrix-style alien simulation with superpowers. Completely unhinged in the best way.",
    "riyl": [
      "Saints Row (Xbox 360)",
      "Sunset Overdrive",
      "Destroy All Humans!"
    ],
    "image": "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg"
  },
  {
    "title": "Tony Hawk's Pro Skater 1 + 2",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/tony-hawks-pro-skater-1-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Sports",
      "Skating",
      "Arcade"
    ],
    "description": "A near-perfect remake of two of the most beloved skateboarding games ever made. Same levels, same soundtrack, completely rebuilt visuals and tightened controls.",
    "riyl": [
      "OlliOlli World",
      "Skate 3",
      "Session"
    ],
    "image": "https://media.rawg.io/media/games/088/0885c48293746aad6df30735f30d0836.jpg"
  },
  {
    "title": "Dead Space 2",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/dead-space-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Survival Horror",
      "Third-Person Shooter",
      "Sci-Fi"
    ],
    "description": "Isaac Clarke fights Necromorphs on a massive space station above Saturn's moon Titan. More action-oriented than the original but absolutely relentless in its horror.",
    "riyl": [
      "Dead Space Remake",
      "BioShock Remastered",
      "Alien: Isolation"
    ],
    "image": "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg"
  },
  {
    "title": "Epic Mickey 2: The Power of Two",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 59,
    "metacritic_url": "https://www.metacritic.com/game/epic-mickey-2-the-power-of-two/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Co-op",
      "Adventure"
    ],
    "description": "Mickey and Oswald team up in a musical Disney theme park adventure. Co-op focused and less dark than the original, with branching choices affecting the world.",
    "riyl": [
      "Epic Mickey",
      "Rayman Legends",
      "A Hat in Time"
    ],
    "image": "https://media.rawg.io/media/screenshots/0af/0affd676990f5b2ee4dbae6ed9dfc976.jpg"
  },
  {
    "title": "Assassin's Creed III",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/assassins-creed-iii/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Stealth",
      "Open World"
    ],
    "description": "The American Revolution through the eyes of Connor Kenway, half-Mohawk assassin. Naval combat debuts here, and the frontier wilderness is a memorable setting.",
    "riyl": [
      "Assassin's Creed Valhalla",
      "AC: Black Flag",
      "The Last of Us"
    ],
    "image": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
  },
  {
    "title": "Borderlands 2",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/borderlands-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Looter Shooter",
      "Action RPG",
      "Co-op"
    ],
    "description": "The peak of the Borderlands series. Handsome Jack is one of gaming's best villains, the writing is sharp, and the loot loop is deeply satisfying.",
    "riyl": [
      "Borderlands 3",
      "Tiny Tina's Wonderlands",
      "Risk of Rain 2"
    ],
    "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
  },
  {
    "title": "Star Wars: The Force Unleashed",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 73,
    "metacritic_url": "https://www.metacritic.com/game/star-wars-the-force-unleashed/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure"
    ],
    "description": "Play as Vader's secret apprentice Starkiller between Episodes III and IV. Force powers feel genuinely powerful, and the story bridges Revenge of the Sith to A New Hope.",
    "riyl": [
      "Star Wars Jedi: Survivor",
      "Batman: Arkham Asylum",
      "The Darkness"
    ],
    "image": "https://media.rawg.io/media/games/932/93221053809511fde4a0c6a9fddaf558.jpg"
  },
  {
    "title": "Outland",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/outland/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Action",
      "Metroidvania"
    ],
    "description": "A Metroidvania built around a Ikaruga-style polarity mechanic — switch between light and dark to absorb or deflect matching bullets. Beautiful Mesoamerican aesthetic.",
    "riyl": [
      "Ori and the Blind Forest",
      "Hollow Knight",
      "Guacamelee!"
    ],
    "image": "https://media.rawg.io/media/games/f80/f805774c679cca1a1a472d9ac39c78b7.jpg"
  },
  {
    "title": "Super Meat Boy",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/super-meat-boy/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Hardcore",
      "Arcade"
    ],
    "description": "A brutally precise platformer where a cube of meat races through sawblades to rescue his girlfriend. One of the defining indie games of its era.",
    "riyl": [
      "Celeste",
      "N++",
      "The End Is Nigh"
    ],
    "image": "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
  },
  {
    "title": "DC Universe Online",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 75,
    "metacritic_url": "https://www.metacritic.com/game/dc-universe-online/",
    "played": false,
    "beat": false,
    "genres": [
      "MMORPG",
      "Action",
      "Superhero"
    ],
    "description": "A free-to-play MMORPG set in the DC universe where you create a hero or villain in a world alongside Batman, Superman, and their rogues.",
    "riyl": [
      "Marvel Heroes",
      "City of Heroes",
      "Champions Online"
    ],
    "image": "https://media.rawg.io/media/screenshots/0cd/0cddbca1ecf96f944a218160c7cdead0.jpg"
  },
  {
    "title": "Rocket League",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 86,
    "metacritic_url": "https://www.metacritic.com/game/rocket-league/",
    "played": false,
    "beat": false,
    "genres": [
      "Sports",
      "Arcade",
      "Driving"
    ],
    "description": "Soccer with rocket-powered cars. One of the most purely skill-expressive competitive games ever made — the ceiling for mastery is essentially infinite.",
    "riyl": [
      "Supersonic Acrobatic Rocket-Powered Battle-Cars",
      "Turbo Golf Racing",
      "Geometry Wars"
    ],
    "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
  },
  {
    "title": "Saints Row (Xbox 360)",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 81,
    "metacritic_url": "https://www.metacritic.com/game/saints-row/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World"
    ],
    "description": "The original Saints Row — a GTA-style open-world crime game before the series fully embraced absurdist comedy. Rough around the edges but a strong foundation.",
    "riyl": [
      "Saints Row IV",
      "GTA V",
      "True Crime: Streets of LA"
    ],
    "image": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
  },
  {
    "title": "Borderlands (Xbox 360)",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/borderlands/",
    "played": false,
    "beat": false,
    "genres": [
      "Looter Shooter",
      "Action RPG",
      "Co-op"
    ],
    "description": "The original that started the cel-shaded loot-shooter genre. Rougher than its sequels but holds up as a co-op loot hunt on the alien planet Pandora.",
    "riyl": [
      "Borderlands 2",
      "Borderlands 3",
      "Tiny Tina's Wonderlands"
    ],
    "image": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg"
  },
  {
    "title": "Child of Light",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/child-of-light/",
    "played": false,
    "beat": false,
    "genres": [
      "RPG",
      "Platformer",
      "Fairy Tale"
    ],
    "description": "A watercolor fairy tale RPG written entirely in verse, built on an Active Time Battle system. Aurora's journey through the kingdom of Lemuria is short but deeply beautiful.",
    "riyl": [
      "Ori and the Blind Forest",
      "Transistor",
      "Ikenfell"
    ],
    "image": "https://media.rawg.io/media/games/c47/c4796c4c49e7e06ad328e07aa8944cdd.jpg"
  },
  {
    "title": "Titanfall",
    "platform": "Xbox Series X/S",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 86,
    "metacritic_url": "https://www.metacritic.com/game/titanfall/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Multiplayer",
      "Sci-Fi"
    ],
    "description": "The original Titanfall — wall-running pilots and giant mechs in a fast, fluid multiplayer shooter. No campaign worth noting, but the movement system was years ahead of its time.",
    "riyl": [
      "Titanfall 2",
      "Apex Legends",
      "Doom Eternal"
    ],
    "image": "https://media.rawg.io/media/games/979/979155841412068e7adf8c83dee94a4a.jpg"
  },
  {
    "title": "Assassin's Creed II",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/assassins-creed-ii/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Stealth",
      "Open World"
    ],
    "description": "Renaissance Italy through the eyes of Ezio Auditore. The game that turned AC into a cultural phenomenon — a generational leap over the original.",
    "riyl": [
      "Assassin's Creed III",
      "AC: Brotherhood",
      "AC Valhalla"
    ],
    "image": "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg"
  },
  {
    "title": "Halo Combat Evolved (Uprising)",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 97,
    "metacritic_url": "https://www.metacritic.com/game/halo-combat-evolved-anniversary/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Sci-Fi",
      "Action"
    ],
    "description": "The Anniversary remaster of the game that defined console shooters. Master Chief vs. the Flood and the Covenant on a mysterious ring world.",
    "riyl": [
      "Halo 2",
      "Doom (2016)",
      "Titanfall 2"
    ],
    "image": "https://media.rawg.io/media/games/abf/abffd94ed6fe34027c720bee593c06d2.jpg"
  },
  {
    "title": "Metal Slug 3",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/metal-slug-3/",
    "played": false,
    "beat": false,
    "genres": [
      "Run and Gun",
      "Arcade",
      "Co-op"
    ],
    "description": "The pinnacle of SNK's legendary run-and-gun series. Alien invasions, absurd transformations, branching paths, and the most detailed pixel art in the series.",
    "riyl": [
      "Blazing Chrome",
      "Cuphead",
      "Contra III"
    ],
    "image": "https://media.rawg.io/media/screenshots/df1/df1a27300bf1e4696734b437d81b0fcf.jpg"
  },
  {
    "title": "Castlevania: Symphony of the Night (Xbox 360)",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 93,
    "metacritic_url": "https://www.metacritic.com/game/castlevania-symphony-of-the-night/",
    "played": false,
    "beat": false,
    "genres": [
      "Metroidvania",
      "Action RPG",
      "Gothic"
    ],
    "description": "The game that defined an entire genre. Alucard explores Dracula's inverted castle in a masterwork of exploration, RPG depth, and gothic atmosphere.",
    "riyl": [
      "Castlevania Anniversary Collection",
      "Hollow Knight",
      "Bloodstained: Ritual of the Night"
    ],
    "image": "https://media.rawg.io/media/games/45d/45da4dc311d84b79230317d7b24a3dec.jpg"
  },
  {
    "title": "Portal",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "digital",
    "console_family": "Xbox",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/portal/",
    "played": false,
    "beat": false,
    "genres": [
      "Puzzle",
      "First-Person",
      "Sci-Fi"
    ],
    "description": "Valve's deceptively simple portal-gun puzzle game. Short, brilliant, and home to one of gaming's most iconic antagonists in GLaDOS.",
    "riyl": [
      "Portal 2",
      "The Turing Test",
      "Antichamber"
    ],
    "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
  },
  {
    "title": "Cyberpunk 2077",
    "platform": "Xbox One",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 86,
    "metacritic_url": "https://www.metacritic.com/game/cyberpunk-2077/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Sci-Fi"
    ],
    "description": "CD Projekt Red's troubled-launch-to-triumph RPG set in Night City. As V, a mercenary with a legend's personality overwriting your mind, you navigate a neon-drenched dystopia.",
    "riyl": [
      "Deus Ex: Mankind Divided",
      "The Witcher 3",
      "Ghostrunner"
    ],
    "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
  },
  {
    "title": "Assassin's Creed Valhalla",
    "platform": "Xbox",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/assassins-creed-valhalla/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Stealth"
    ],
    "description": "Viking Eivor raids and settles across 9th-century England in the longest AC game yet. More RPG than stealth game, with a massive world and strong Norse mythology threads.",
    "riyl": [
      "Assassin's Creed Shadows",
      "God of War (2018)",
      "Hellblade II"
    ],
    "image": "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg"
  },
  {
    "title": "Destiny",
    "platform": "Xbox One",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 76,
    "metacritic_url": "https://www.metacritic.com/game/destiny/",
    "played": false,
    "beat": false,
    "genres": [
      "Looter Shooter",
      "MMO",
      "Sci-Fi"
    ],
    "description": "Bungie's original shared-world shooter — flawed at launch but foundational to the genre. Beautiful Halo-lineage gunplay meets light MMO structure.",
    "riyl": [
      "Destiny 2",
      "Borderlands 3",
      "The Division 2"
    ],
    "image": "https://media.rawg.io/media/games/062/062420d85c7143f72ad3557f32c41ead.jpg"
  },
  {
    "title": "DOOM (2016)",
    "platform": "Xbox One",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 85,
    "metacritic_url": "https://www.metacritic.com/game/doom/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Action",
      "Hardcore"
    ],
    "description": "Id Software's legendary revival. Rip and tear through Hell's forces at full sprint — a kinetic, metal-soundtrack power fantasy that redefined the boomer shooter.",
    "riyl": [
      "Doom Eternal",
      "Wolfenstein II",
      "Turbo Overkill"
    ],
    "image": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg"
  },
  {
    "title": "Watch Dogs: Legion",
    "platform": "Xbox",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 73,
    "metacritic_url": "https://www.metacritic.com/game/watch-dogs-legion/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Stealth",
      "Sci-Fi"
    ],
    "description": "A near-future London under authoritarian surveillance where you recruit any NPC in the city into your resistance cell. The 'play as anyone' concept is more interesting in theory than execution.",
    "riyl": [
      "Watch Dogs 2",
      "Cyberpunk 2077",
      "Assassin's Creed Valhalla"
    ],
    "image": "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg"
  },
  {
    "title": "The Elder Scrolls V: Skyrim Special Edition",
    "platform": "Xbox One",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 95,
    "metacritic_url": "https://www.metacritic.com/game/the-elder-scrolls-v-skyrim-special-edition/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Fantasy"
    ],
    "description": "You know what Skyrim is. Dovahkiin, dragons, and a thousand hours of Nordic open-world RPG. Special Edition adds remastered visuals and official mod support.",
    "riyl": [
      "The Witcher 3",
      "Oblivion",
      "Dragon's Dogma 2"
    ],
    "image": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
  },
  {
    "title": "Far Cry 6",
    "platform": "Xbox",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 73,
    "metacritic_url": "https://www.metacritic.com/game/far-cry-6/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Open World",
      "Action"
    ],
    "description": "Dani Rojas fights Antón Castillo's dictatorship on the fictional Caribbean island of Yara. Giancarlo Esposito as the villain is the best thing about it.",
    "riyl": [
      "Far Cry 5",
      "Far Cry Primal",
      "Just Cause 4"
    ],
    "image": "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg"
  },
  {
    "title": "Guitar Hero II",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 95,
    "metacritic_url": "https://www.metacritic.com/game/guitar-hero-ii/",
    "played": false,
    "beat": false,
    "genres": [
      "Music",
      "Rhythm",
      "Party"
    ],
    "description": "The sequel that cemented Guitar Hero as a cultural phenomenon. Expanded song list, cooperative play, and the track selection that defined a generation of plastic guitar games.",
    "riyl": [
      "Guitar Hero III",
      "Rock Band 4",
      "Rocksmith 2014"
    ],
    "image": "https://media.rawg.io/media/games/459/459cabfce77a504a7ae995d8318381bb.jpg"
  },
  {
    "title": "Guitar Hero III: Legends of Rock",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/guitar-hero-iii-legends-of-rock/",
    "played": false,
    "beat": false,
    "genres": [
      "Music",
      "Rhythm",
      "Party"
    ],
    "description": "The biggest-selling entry in the series. Through the Fire and Flames. Enough said.",
    "riyl": [
      "Guitar Hero II",
      "Rock Band 4",
      "Rocksmith 2014"
    ],
    "image": "https://media.rawg.io/media/games/444/444d319b3156101aeef3d1a8df219f3f.jpg"
  },
  {
    "title": "Fable III",
    "platform": "Xbox 360",
    "type": "video game",
    "source": "physical",
    "console_family": "Xbox",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/fable-iii/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Fantasy"
    ],
    "description": "The final Lionhead Fable — you lead a revolution, become ruler, and face a greater threat from the darkness. More streamlined than Fable II with a strong first half.",
    "riyl": [
      "Hogwarts Legacy",
      "The Elder Scrolls V: Skyrim",
      "Dragon Age: Origins"
    ],
    "image": "https://media.rawg.io/media/games/827/8276bc29cdc27752e27802b94aea255e.jpg"
  },
  {
    "title": "Wolfenstein II: The New Colossus",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 87,
    "metacritic_url": "https://www.metacritic.com/game/wolfenstein-ii-the-new-colossus/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Action",
      "Narrative"
    ],
    "description": "BJ Blazkowicz fights to liberate Nazi-occupied America. One of the most politically charged and cinematically ambitious shooters ever made.",
    "riyl": [
      "Doom (2016)",
      "BioShock Infinite",
      "Titanfall 2"
    ],
    "image": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
  },
  {
    "title": "God of War (2018)",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 94,
    "metacritic_url": "https://www.metacritic.com/game/god-of-war/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Mythology"
    ],
    "description": "Kratos reinvented. A single-shot cinematic journey through Norse mythology with his son Atreus. Combat, storytelling, and world-building at the highest level.",
    "riyl": [
      "God of War: Ragnarök",
      "Sekiro",
      "The Last of Us Remastered"
    ],
    "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
  },
  {
    "title": "Injustice 2",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/injustice-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Fighting",
      "Superhero"
    ],
    "description": "NetherRealm's DC fighter with a deep gear-based RPG system and a surprisingly well-written story mode. The best superhero fighting game ever made.",
    "riyl": [
      "Mortal Kombat 11",
      "Mortal Kombat 1",
      "Marvel vs. Capcom Infinite"
    ],
    "image": "https://media.rawg.io/media/games/e42/e428e70c97064037326d7863a43a0454.jpg"
  },
  {
    "title": "Horizon Zero Dawn",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/horizon-zero-dawn/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Sci-Fi"
    ],
    "description": "Aloy hunts robot dinosaurs in a post-post-apocalyptic Earth reclaimed by nature. Excellent bow combat, a genuinely surprising world mystery, and stunning visuals.",
    "riyl": [
      "Horizon Forbidden West",
      "Elden Ring",
      "The Witcher 3"
    ],
    "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg"
  },
  {
    "title": "Grand Theft Auto V",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 97,
    "metacritic_url": "https://www.metacritic.com/game/grand-theft-auto-v/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Crime"
    ],
    "description": "Three interconnected protagonists pull heists across a satirical Los Angeles. The heist missions are some of the best designed sequences in open-world history.",
    "riyl": [
      "Saints Row IV",
      "L.A. Noire",
      "Red Dead Redemption 2"
    ],
    "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
  },
  {
    "title": "Marvel's Spider-Man",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 87,
    "metacritic_url": "https://www.metacritic.com/game/marvels-spider-man/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Superhero",
      "Open World"
    ],
    "description": "Insomniac's web-slinging masterpiece. Peter Parker juggles superheroics and personal life in the most fun traversal system ever put in a game.",
    "riyl": [
      "Spider-Man 2",
      "Batman: Arkham Knight",
      "Miles Morales"
    ],
    "image": "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg"
  },
  {
    "title": "Uncharted 4: A Thief's End",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 93,
    "metacritic_url": "https://www.metacritic.com/game/uncharted-4-a-thiefs-end/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Narrative"
    ],
    "description": "Nathan Drake's final adventure, chasing the mythical pirate colony of Libertalia with his brother Sam. Naughty Dog's technical and narrative peak in the series.",
    "riyl": [
      "Uncharted: The Lost Legacy",
      "The Last of Us Remastered",
      "Rise of the Tomb Raider"
    ],
    "image": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg"
  },
  {
    "title": "NBA 2K19",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 86,
    "metacritic_url": "https://www.metacritic.com/game/nba-2k19/",
    "played": false,
    "beat": false,
    "genres": [
      "Sports",
      "Simulation",
      "Basketball"
    ],
    "description": "A polished basketball sim that was widely considered one of the stronger 2K entries before aggressive microtransaction systems became the norm.",
    "riyl": [
      "NBA 2K20",
      "NBA Playgrounds",
      "College Basketball 25"
    ],
    "image": "https://media.rawg.io/media/games/442/442792baf387bad3b99041be74276ba2.jpg"
  },
  {
    "title": "Uncharted: The Lost Legacy",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/uncharted-the-lost-legacy/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Narrative"
    ],
    "description": "Chloe Frazer and Nadine Ross hunt for the Tusk of Ganesh in India. A tighter, leaner Uncharted experience with two of the series' best characters.",
    "riyl": [
      "Uncharted 4",
      "Rise of the Tomb Raider",
      "Shadow of the Tomb Raider"
    ],
    "image": "https://media.rawg.io/media/games/560/56056a71c74f751552c9baedebf8f317.jpg"
  },
  {
    "title": "Deus Ex: Mankind Divided",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/deus-ex-mankind-divided/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Stealth",
      "Sci-Fi"
    ],
    "description": "Adam Jensen navigates a fractured world of augmented-human apartheid in Prague. Multiple approaches to every objective in a deep cyberpunk RPG — though it ends abruptly.",
    "riyl": [
      "Cyberpunk 2077",
      "Prey",
      "Dishonored 2"
    ],
    "image": "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg"
  },
  {
    "title": "NieR: Automata",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/nier-automata/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Hack and Slash",
      "Philosophical"
    ],
    "description": "2B, 9S, and A2 fight a proxy war between machines and androids on a post-human Earth. Yoko Taro's genre-defying masterpiece demands multiple playthroughs to fully reveal itself.",
    "riyl": [
      "Nier Replicant",
      "Bayonetta",
      "Astral Chain"
    ],
    "image": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
  },
  {
    "title": "The Last of Us Remastered",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 95,
    "metacritic_url": "https://www.metacritic.com/game/the-last-of-us-remastered/",
    "played": false,
    "beat": false,
    "genres": [
      "Survival",
      "Action",
      "Narrative",
      "Horror"
    ],
    "description": "Joel and Ellie's cross-country survival journey through a fungal-apocalypse America. The benchmark for narrative-driven action games.",
    "riyl": [
      "The Last of Us Part II",
      "Uncharted 4",
      "God of War (2018)"
    ],
    "image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
  },
  {
    "title": "Nioh",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/nioh/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Soulslike"
    ],
    "description": "William Adams fights yokai and samurai in a dark fantasy Sengoku Japan. More aggressive and loot-focused than Dark Souls, with a demanding stance-switching combat system.",
    "riyl": [
      "Sekiro",
      "Elden Ring",
      "Ghost of Tsushima"
    ],
    "image": "https://media.rawg.io/media/games/f84/f84c7c45e074117fb81fecf427f8b41f.jpg"
  },
  {
    "title": "Prey",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 82,
    "metacritic_url": "https://www.metacritic.com/game/prey/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Immersive Sim",
      "Sci-Fi"
    ],
    "description": "Arkane's criminally underplayed immersive sim. Morgan Yu wakes on a space station overrun by alien Typhon. GOOS gun, mimics, and one of the most elegant ability systems in any game.",
    "riyl": [
      "Deus Ex: Mankind Divided",
      "Control",
      "System Shock"
    ],
    "image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
  },
  {
    "title": "South Park: The Fractured But Whole",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 81,
    "metacritic_url": "https://www.metacritic.com/game/south-park-the-fractured-but-whole/",
    "played": false,
    "beat": false,
    "genres": [
      "RPG",
      "Comedy",
      "Turn-Based"
    ],
    "description": "The New Kid becomes a superhero in South Park's second Ubisoft San Francisco RPG. Tighter grid-based tactical combat than Stick of Truth with equally savage satire.",
    "riyl": [
      "South Park: The Stick of Truth",
      "Costume Quest",
      "Undertale"
    ],
    "image": "https://media.rawg.io/media/games/63c/63cb04333dea1726e90b38dc3d10258f.jpg"
  },
  {
    "title": "Far Cry 5",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 77,
    "metacritic_url": "https://www.metacritic.com/game/far-cry-5/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Open World",
      "Action"
    ],
    "description": "A cult takes over Hope County, Montana. Sandbox shooting and co-op in a rural American setting with one of the series' most atmospheric tones.",
    "riyl": [
      "Far Cry 6",
      "Far Cry Primal",
      "Dying Light"
    ],
    "image": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
  },
  {
    "title": "L.A. Noire",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 83,
    "metacritic_url": "https://www.metacritic.com/game/la-noire/",
    "played": false,
    "beat": false,
    "genres": [
      "Detective",
      "Open World",
      "Noir"
    ],
    "description": "Cole Phelps works Los Angeles homicides, vice, and arson cases in a meticulous 1940s recreation. The MotionScan facial tech still holds up for interrogation reads.",
    "riyl": [
      "Disco Elysium",
      "Heavy Rain",
      "Condemned: Criminal Origins"
    ],
    "image": "https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg"
  },
  {
    "title": "Devil May Cry 5 Special Edition",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/devil-may-cry-5-special-edition/",
    "played": false,
    "beat": false,
    "genres": [
      "Hack and Slash",
      "Action"
    ],
    "description": "Three playable characters — Nero, Dante, and the mysterious V — face the Qliphoth demon tree. The Special Edition adds Vergil and ray tracing on PS5.",
    "riyl": [
      "Bayonetta 3",
      "NieR: Automata",
      "Metal Gear Rising"
    ],
    "image": "https://media.rawg.io/media/games/d22/d2275ec49a1897191625fb04367bb702.jpg"
  },
  {
    "title": "Middle-earth: Shadow of Mordor – Game of the Year Edition",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/middle-earth-shadow-of-mordor/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Stealth"
    ],
    "description": "The Nemesis System alone makes this essential. Orcs remember you, rise through ranks, and develop grudges. Arkham combat in Middle-earth with a great revenge narrative.",
    "riyl": [
      "Shadow of War",
      "Batman: Arkham Knight",
      "Assassin's Creed Valhalla"
    ],
    "image": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
  },
  {
    "title": "Prince of Persia: The Lost Crown",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 87,
    "metacritic_url": "https://www.metacritic.com/game/prince-of-persia-the-lost-crown/",
    "played": false,
    "beat": false,
    "genres": [
      "Metroidvania",
      "Action",
      "Platformer"
    ],
    "description": "A stunning return for the franchise — a 2.5D Metroidvania with time-manipulation combat, excellent level design, and a surprisingly strong narrative.",
    "riyl": [
      "Hollow Knight",
      "Ori and the Will of the Wisps",
      "Blasphemous 2"
    ],
    "image": "https://media.rawg.io/media/games/cca/ccaa933775fe1ffcebe40a01f52545db.jpg"
  },
  {
    "title": "Blasphemous 2",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/blasphemous-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Metroidvania",
      "Action",
      "Soulslike"
    ],
    "description": "The Penitent One returns in a darker, more mechanically refined follow-up. Three weapon types with distinct movesets, stunning pixel art steeped in Spanish Catholic imagery.",
    "riyl": [
      "Hollow Knight",
      "Elden Ring",
      "Prince of Persia: The Lost Crown"
    ],
    "image": "https://media.rawg.io/media/games/73b/73bcfec00beec38a3d3527db4f9b8c53.jpg"
  },
  {
    "title": "Monster Hunter Wilds",
    "platform": "PS4/PS5",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/monster-hunter-wilds/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Co-op",
      "Hunting"
    ],
    "description": "The most ambitious entry in the series — seamless ecosystems, dynamic weather, and new wound mechanics in a living world where monster behavior is tied to environment.",
    "riyl": [
      "Monster Hunter World",
      "God Eater 3",
      "Wild Hearts"
    ],
    "image": "https://media.rawg.io/media/games/91b/91b4edd8fecf88b2b5ca0752321382ee.jpg"
  },
  {
    "title": "Castlevania Requiem: Symphony of the Night & Rondo of Blood",
    "platform": "PS4",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/castlevania-requiem-symphony-of-the-night-rondo-of-blood/",
    "played": false,
    "beat": false,
    "genres": [
      "Metroidvania",
      "Action",
      "Gothic"
    ],
    "description": "Two classics in one collection — the legendary Symphony of the Night plus the PC Engine classic Rondo of Blood. Essential Castlevania.",
    "riyl": [
      "Castlevania Anniversary Collection",
      "Bloodstained: Ritual of the Night",
      "Hollow Knight"
    ],
    "image": "https://media.rawg.io/media/screenshots/276/2765d6d02b9d2fc49bd918f64ca94171.jpg"
  },
  {
    "title": "Split Fiction",
    "platform": "PS5",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/split-fiction/",
    "played": false,
    "beat": false,
    "genres": [
      "Co-op",
      "Action",
      "Platformer"
    ],
    "description": "Hazelight's follow-up to It Takes Two — two writers get trapped inside their own stories and must cooperate through wildly varying genre environments to escape.",
    "riyl": [
      "It Takes Two",
      "A Way Out",
      "Unravel Two"
    ],
    "image": "https://media.rawg.io/media/games/02a/02ac22b3b90717dabaa535640c38534c.jpg"
  },
  {
    "title": "God of War: Ragnarök",
    "platform": "PS5",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 94,
    "metacritic_url": "https://www.metacritic.com/game/god-of-war-ragnarok/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Mythology"
    ],
    "description": "Kratos and Atreus face the Norse apocalypse across all Nine Realms. Larger in scope than 2018, with more playable characters and one of gaming's most emotional finales.",
    "riyl": [
      "God of War (2018)",
      "Horizon Forbidden West",
      "Sekiro"
    ],
    "image": "https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg"
  },
  {
    "title": "Astro's Playroom",
    "platform": "PS5",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 83,
    "metacritic_url": "https://www.metacritic.com/game/astros-playroom/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Tech Demo",
      "Nostalgia"
    ],
    "description": "A free PS5 pack-in that doubles as a love letter to PlayStation history and the best DualSense showcase in existence. Joyful, inventive, and surprisingly substantial.",
    "riyl": [
      "Super Mario Odyssey",
      "Ratchet & Clank: Rift Apart",
      "Knack"
    ],
    "image": "https://media.rawg.io/media/games/bfe/bfe7780b7d4342540be2e5273d49e54c.jpg"
  },
  {
    "title": "Final Fantasy X/X-2 HD Remaster",
    "platform": "PS4",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 85,
    "metacritic_url": "https://www.metacritic.com/game/final-fantasy-x-x-2-hd-remaster/",
    "played": false,
    "beat": false,
    "genres": [
      "JRPG",
      "Turn-Based",
      "Fantasy"
    ],
    "description": "Two classic PS2 JRPGs remastered. FFX is a linear emotional epic about a blitzball player and a summoner; FFX-2 is a complete tonal swerve into a job-system action RPG.",
    "riyl": [
      "Final Fantasy VII Remake",
      "Persona 5 Royal",
      "Xenoblade Chronicles 3"
    ],
    "image": "https://media.rawg.io/media/games/a14/a14acef284eaa4854f83c99e80fc15d8.jpg"
  },
  {
    "title": "Far Cry Primal",
    "platform": "PS4",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 73,
    "metacritic_url": "https://www.metacritic.com/game/far-cry-primal/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Shooter",
      "Open World",
      "Action"
    ],
    "description": "Far Cry stripped down to a prehistoric setting — no guns, just spears, clubs, and tamed animals. Surprisingly atmospheric and distinct from its siblings.",
    "riyl": [
      "Far Cry 5",
      "Far Cry 6",
      "Horizon Zero Dawn"
    ],
    "image": "https://media.rawg.io/media/games/119/119bb59e64c7956171a33df0d35aee6b.jpg"
  },
  {
    "title": "Cult of the Lamb",
    "platform": "PS4/PS5",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 83,
    "metacritic_url": "https://www.metacritic.com/game/cult-of-the-lamb/",
    "played": false,
    "beat": false,
    "genres": [
      "Roguelike",
      "Simulation",
      "Action"
    ],
    "description": "Run a cult and fight heretics in a darkly adorable roguelite. Base building and follower management between Binding of Isaac-style dungeon runs.",
    "riyl": [
      "The Binding of Isaac",
      "Hades",
      "Darkest Dungeon"
    ],
    "image": "https://media.rawg.io/media/games/ab8/ab8217a1fe2ced388a388722734e6d16.jpg"
  },
  {
    "title": "Alan Wake Remastered",
    "platform": "PS4/PS5",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/alan-wake-remastered/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Horror",
      "Psychological Thriller"
    ],
    "description": "Troubled author Alan Wake fights the Dark Presence in a Pacific Northwest resort town in this Twin Peaks-soaked psychological thriller. Directly connected to Control.",
    "riyl": [
      "Control",
      "Quantum Break",
      "Silent Hill 2"
    ],
    "image": "https://media.rawg.io/media/games/685/685812b147f42b08e94391defa972898.jpg"
  },
  {
    "title": "Ghost of Tsushima",
    "platform": "PS5",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 83,
    "metacritic_url": "https://www.metacritic.com/game/ghost-of-tsushima-directors-cut/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Stealth",
      "Samurai"
    ],
    "description": "Sucker Punch's samurai epic set during the 1274 Mongol invasion of Tsushima. Gorgeous painterly visuals, fluid katana combat, and a surprisingly resonant story about honor vs. necessity.",
    "riyl": [
      "Sekiro",
      "Nioh 2",
      "Assassin's Creed Valhalla"
    ],
    "image": "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg"
  },
  {
    "title": "Ghost of Yōtei",
    "platform": "PS5",
    "type": "video game",
    "source": "physical/digital",
    "console_family": "PlayStation",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/ghost-of-yotei/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Open World",
      "Samurai"
    ],
    "description": "Sucker Punch's follow-up set in 1603 Hokkaido. New protagonist Atsu hunts the Wolf Gang across the volcanic landscapes of Ezo in a new chapter of the Ghost saga.",
    "riyl": [
      "Ghost of Tsushima",
      "Sekiro",
      "Rise of the Ronin"
    ],
    "image": "https://media.rawg.io/media/games/30b/30b195c2321d763f807366967ffad793.jpg"
  },
  {
    "title": "Star Wars Jedi: Survivor",
    "platform": "PS5",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 84,
    "metacritic_url": "https://www.metacritic.com/game/star-wars-jedi-survivor/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Soulslike"
    ],
    "description": "Cal Kestis continues his story five years after Fallen Order — a more confident Soulslike-adjacent Star Wars adventure with improved combat stances and a genuinely moving narrative.",
    "riyl": [
      "Star Wars Jedi: Fallen Order",
      "Sekiro",
      "God of War (2018)"
    ],
    "image": "https://media.rawg.io/media/games/3e4/3e43e29ae126ef951842393f5ff7f33a.jpg"
  },
  {
    "title": "Marvel's Spider-Man 2",
    "platform": "PS5",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 90,
    "metacritic_url": "https://www.metacritic.com/game/marvels-spider-man-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Superhero",
      "Open World"
    ],
    "description": "Peter and Miles share the screen — and a map — in Insomniac's most ambitious Spider-Man yet. The Venom storyline and symbiote combat expand the formula significantly.",
    "riyl": [
      "Marvel's Spider-Man",
      "Batman: Arkham Knight",
      "Wolverine (upcoming)"
    ],
    "image": "https://media.rawg.io/media/games/7ae/7ae5a14cdb4ab222a134c15f4629e430.jpg"
  },
  {
    "title": "The Messenger",
    "platform": "PS5",
    "type": "video game",
    "source": "physical",
    "console_family": "PlayStation",
    "metacritic_score": 86,
    "metacritic_url": "https://www.metacritic.com/game/the-messenger/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Metroidvania",
      "Action"
    ],
    "description": "A ninja platformer that starts as a loving Ninja Gaiden tribute and secretly evolves into something far stranger. One of the best genre pivots in recent indie history.",
    "riyl": [
      "Shovel Knight",
      "Hollow Knight",
      "Prince of Persia: The Lost Crown"
    ],
    "image": "https://media.rawg.io/media/screenshots/16c/16c1f5e91a061e064f373406164d1e40.jpg"
  },
  {
    "title": "Assassin's Creed Shadows",
    "platform": "PS5",
    "type": "video game",
    "source": "digital",
    "console_family": "PlayStation",
    "metacritic_score": 79,
    "metacritic_url": "https://www.metacritic.com/game/assassins-creed-shadows/",
    "played": false,
    "beat": false,
    "genres": [
      "Action RPG",
      "Open World",
      "Stealth",
      "Samurai"
    ],
    "description": "Two protagonists — ninja Naoe and samurai Yasuke (the historical African samurai) — navigate feudal Japan in Ubisoft's most visually striking AC in years.",
    "riyl": [
      "Ghost of Tsushima",
      "Assassin's Creed Valhalla",
      "Nioh 2"
    ],
    "image": "https://media.rawg.io/media/games/526/526881e0f5f8c1550e51df3801f96ea3.jpg"
  },
  {
    "title": "The Legend of Zelda: Breath of the Wild",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "physical",
    "console_family": "Nintendo",
    "metacritic_score": 97,
    "metacritic_url": "https://www.metacritic.com/game/the-legend-of-zelda-breath-of-the-wild/",
    "played": false,
    "beat": false,
    "genres": [
      "Action Adventure",
      "Open World",
      "Puzzle"
    ],
    "description": "Nintendo's reinvention of Zelda and arguably open-world design itself. Hyrule is a physics playground — every problem has multiple solutions and the world rewards curiosity.",
    "riyl": [
      "Tears of the Kingdom",
      "Genshin Impact",
      "Elden Ring"
    ],
    "image": "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg"
  },
  {
    "title": "Super Mario Bros. Wonder",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 92,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-bros-wonder/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Co-op"
    ],
    "description": "Nintendo's most inventive 2D Mario since the SNES era. Wonder Flowers transform levels in completely unexpected ways, and the badge system enables real build variety.",
    "riyl": [
      "Super Mario Odyssey",
      "Donkey Kong Country: Tropical Freeze",
      "Kirby and the Forgotten Land"
    ],
    "image": "https://media.rawg.io/media/games/1fd/1fd3f030bee73452d46a0678084a7ed9.jpg"
  },
  {
    "title": "Super Mario Party Jamboree",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 79,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-party-jamboree/",
    "played": false,
    "beat": false,
    "genres": [
      "Party",
      "Mini-Games",
      "Co-op"
    ],
    "description": "The largest Mario Party board count ever, with online play and new mini-game categories. A substantial improvement over the divisive Super Mario Party.",
    "riyl": [
      "Super Mario Party",
      "Mario Party Superstars",
      "Pummel Party"
    ],
    "image": "https://media.rawg.io/media/games/66f/66fcdc18586ac8c0aa17b2c83fee558d.jpg"
  },
  {
    "title": "The Legend of Zelda: Link's Awakening",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 87,
    "metacritic_url": "https://www.metacritic.com/game/the-legend-of-zelda-links-awakening/",
    "played": false,
    "beat": false,
    "genres": [
      "Action Adventure",
      "Puzzle",
      "Dungeon Crawler"
    ],
    "description": "A faithful remake of the 1993 Game Boy classic with a charming toy-box aesthetic. Link washes up on Koholint Island in one of the series' most dreamlike and melancholy stories.",
    "riyl": [
      "Breath of the Wild",
      "Cadence of Hyrule",
      "Tunic"
    ],
    "image": "https://media.rawg.io/media/games/1bb/1bb38f1354db6596ccd6bdcb4a7f6cbc.jpg"
  },
  {
    "title": "Super Mario Party",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 76,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-party/",
    "played": false,
    "beat": false,
    "genres": [
      "Party",
      "Mini-Games",
      "Co-op"
    ],
    "description": "A return to classic Mario Party fundamentals after the divisive car-based Mario Party 9/10. Short boards and a solid mini-game roster, though light on content at launch.",
    "riyl": [
      "Mario Party Superstars",
      "Super Mario Party Jamboree",
      "Pummel Party"
    ],
    "image": "https://media.rawg.io/media/games/d8b/d8bfed2209bf96866506cca8022db5b7.jpg"
  },
  {
    "title": "Nintendo Switch Sports",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 71,
    "metacritic_url": "https://www.metacritic.com/game/nintendo-switch-sports/",
    "played": false,
    "beat": false,
    "genres": [
      "Sports",
      "Party",
      "Motion Controls"
    ],
    "description": "A spiritual successor to Wii Sports with six sports including volleyball, badminton, and bowling. Soccer added leg strap support post-launch.",
    "riyl": [
      "Wii Sports",
      "Mario Tennis Aces",
      "Fitness Boxing"
    ],
    "image": "https://media.rawg.io/media/games/ea1/ea1a98c673cdd4c290aa29bc2e2fbd9b.jpg"
  },
  {
    "title": "The Legend of Zelda: Tears of the Kingdom",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 96,
    "metacritic_url": "https://www.metacritic.com/game/the-legend-of-zelda-tears-of-the-kingdom/",
    "played": false,
    "beat": false,
    "genres": [
      "Action Adventure",
      "Open World",
      "Puzzle"
    ],
    "description": "Breath of the Wild's successor adds the Ultrahand and Fuse mechanics, turning Hyrule into an engineering sandbox. Sky islands, underground depths, and a more ambitious story.",
    "riyl": [
      "Breath of the Wild",
      "Elden Ring",
      "Outer Wilds"
    ],
    "image": "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg"
  },
  {
    "title": "Super Mario 3D All-Stars",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 81,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-3d-all-stars/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Collection"
    ],
    "description": "A limited-release collection of three 3D Mario classics — Super Mario 64, Sunshine, and Galaxy — with minor upscaling and the Galaxy soundtrack in stereo.",
    "riyl": [
      "Super Mario Odyssey",
      "Super Mario 3D World",
      "A Hat in Time"
    ],
    "image": "https://media.rawg.io/media/games/58a/58a051c3626dcac72bc111fb056b082c.jpg"
  },
  {
    "title": "Cuphead",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/cuphead/",
    "played": false,
    "beat": false,
    "genres": [
      "Run and Gun",
      "Hardcore",
      "Arcade"
    ],
    "description": "A boss-rush run-and-gun with hand-drawn 1930s cartoon animation. Every boss is a masterpiece of design. One of the most difficult and beautiful games ever made.",
    "riyl": [
      "Blazing Chrome",
      "Metal Slug 3",
      "Hollow Knight"
    ],
    "image": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
  },
  {
    "title": "Metroid Prime Remastered",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 94,
    "metacritic_url": "https://www.metacritic.com/game/metroid-prime-remastered/",
    "played": false,
    "beat": false,
    "genres": [
      "First-Person Adventure",
      "Metroidvania",
      "Sci-Fi"
    ],
    "description": "A stunning remaster of the GameCube classic. Samus explores the alien world of Tallon IV in a first-person adventure that remains one of the most atmospheric games ever made.",
    "riyl": [
      "Metroid Dread",
      "Hollow Knight",
      "Prey"
    ],
    "image": "https://media.rawg.io/media/games/f2f/f2f9f11997ee841550ba2b8ccf3c51e9.jpg"
  },
  {
    "title": "Super Mario Bros. U Deluxe",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "physical",
    "console_family": "Nintendo",
    "metacritic_score": 81,
    "metacritic_url": "https://www.metacritic.com/game/new-super-mario-bros-u-deluxe/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Co-op"
    ],
    "description": "A polished Wii U port of one of the best traditional 2D Marios in years. Multiple characters with different playstyles, tight controls, and excellent level design.",
    "riyl": [
      "Super Mario Bros. Wonder",
      "Donkey Kong Country Returns",
      "Rayman Legends"
    ],
    "image": "https://media.rawg.io/media/games/61c/61cf09a86fe686a01a0c9863fc4230a7.jpeg"
  },
  {
    "title": "Super Mario Odyssey",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "physical/digital",
    "console_family": "Nintendo",
    "metacritic_score": 97,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-odyssey/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Open World"
    ],
    "description": "Mario's most creative 3D adventure. Cappy possession mechanics turn every enemy and object into a toy — a relentlessly inventive collectathon.",
    "riyl": [
      "Super Mario 3D World",
      "Banjo-Kazooie",
      "A Hat in Time"
    ],
    "image": "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg"
  },
  {
    "title": "Borderlands 2: Game of the Year Edition (Switch)",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 89,
    "metacritic_url": "https://www.metacritic.com/game/borderlands-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Looter Shooter",
      "Action RPG",
      "Co-op"
    ],
    "description": "The definitive Borderlands on a portable platform — the base game plus all major DLC including Tiny Tina's Assault on Dragon Keep.",
    "riyl": [
      "Borderlands 3",
      "Tiny Tina's Wonderlands",
      "Risk of Rain 2"
    ],
    "image": "https://media.rawg.io/media/screenshots/9da/9da53e99675cc6acf64b0ad09ec91315.jpg"
  },
  {
    "title": "Scott Pilgrim vs. the World: The Game – Complete Edition (Switch)",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 77,
    "metacritic_url": "https://www.metacritic.com/game/scott-pilgrim-vs-the-world-the-game-complete-edition/",
    "played": false,
    "beat": false,
    "genres": [
      "Beat 'em Up",
      "Co-op",
      "Arcade"
    ],
    "description": "Scott Pilgrim on Switch — the cult classic belt scroller back from digital death. Best played with friends.",
    "riyl": [
      "River City Girls",
      "Castle Crashers",
      "Streets of Rage 4"
    ],
    "image": "https://media.rawg.io/media/games/b23/b2375c9b0b01394bb55093269b36168c.jpg"
  },
  {
    "title": "Borderlands: The Pre-Sequel Ultimate Edition",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 75,
    "metacritic_url": "https://www.metacritic.com/game/borderlands-the-pre-sequel/",
    "played": false,
    "beat": false,
    "genres": [
      "Looter Shooter",
      "Action RPG",
      "Co-op"
    ],
    "description": "The Borderlands side story set on Pandora's moon Elpis, focused on Handsome Jack's origin. Low-gravity combat and laser weapons distinguish it from the mainline games.",
    "riyl": [
      "Borderlands 2",
      "Borderlands 3",
      "Tiny Tina's Wonderlands"
    ],
    "image": "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg"
  },
  {
    "title": "Street Fighter 30th Anniversary Collection",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 75,
    "metacritic_url": "https://www.metacritic.com/game/street-fighter-30th-anniversary-collection/",
    "played": false,
    "beat": false,
    "genres": [
      "Fighting",
      "Arcade",
      "Collection"
    ],
    "description": "Twelve classic Street Fighter titles in one package — from the original to Street Fighter III: 3rd Strike. Essential for fighting game historians.",
    "riyl": [
      "Street Fighter 6",
      "Capcom Fighting Collection",
      "SNK 40th Anniversary Collection"
    ],
    "image": "https://media.rawg.io/media/games/940/9402ce92d212bd2cae9ff99dea6d4fb8.jpg"
  },
  {
    "title": "Castlevania Anniversary Collection",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 77,
    "metacritic_url": "https://www.metacritic.com/game/castlevania-anniversary-collection/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Action",
      "Gothic",
      "Collection"
    ],
    "description": "Eight classic Castlevania games from the NES/SNES/Game Boy era plus a book of historical documents. Includes the previously Japan-only Kid Dracula.",
    "riyl": [
      "Castlevania Requiem",
      "Bloodstained: Ritual of the Night",
      "Contra Anniversary Collection"
    ],
    "image": "https://media.rawg.io/media/games/d56/d56412cd670313ef306da64669c381d8.jpg"
  },
  {
    "title": "Mario Kart 8 Deluxe",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "physical/digital",
    "console_family": "Nintendo",
    "metacritic_score": 92,
    "metacritic_url": "https://www.metacritic.com/game/mario-kart-8-deluxe/",
    "played": false,
    "beat": false,
    "genres": [
      "Racing",
      "Party",
      "Arcade"
    ],
    "description": "The definitive kart racer. Every course from MK8 plus DLC tracks, a repaired Battle Mode, and the Booster Course Pass adding 48 more tracks.",
    "riyl": [
      "Crash Team Racing Nitro-Fueled",
      "Team Sonic Racing",
      "Fall Guys"
    ],
    "image": "https://media.rawg.io/media/games/6f8/6f846e941c78cfbabe53cd67e55ced83.jpg"
  },
  {
    "title": "Hades",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 93,
    "metacritic_url": "https://www.metacritic.com/game/hades/",
    "played": false,
    "beat": false,
    "genres": [
      "Roguelike",
      "Action",
      "Hack and Slash"
    ],
    "description": "Supergiant's masterpiece. Zagreus escapes the Underworld in a roguelite where narrative progress is built into every failed run. Combat, story, and systems in perfect harmony.",
    "riyl": [
      "Dead Cells",
      "Cult of the Lamb",
      "Transistor"
    ],
    "image": "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
  },
  {
    "title": "Super Mario Maker 2",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-maker-2/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Level Editor",
      "Co-op"
    ],
    "description": "Build and share Mario courses across five game styles. The online course browser has years of community content — from trivially easy to humanity-breaking.",
    "riyl": [
      "Super Mario Bros. Wonder",
      "LittleBigPlanet 3",
      "Dreams"
    ],
    "image": "https://media.rawg.io/media/games/25f/25f1b4a7b6ed811a5f6e34e43d6cc550.jpg"
  },
  {
    "title": "Luigi's Mansion 3",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 86,
    "metacritic_url": "https://www.metacritic.com/game/luigis-mansion-3/",
    "played": false,
    "beat": false,
    "genres": [
      "Action",
      "Adventure",
      "Puzzle"
    ],
    "description": "Luigi rescues his friends from a haunted hotel floor by floor. The Gooigi co-op mechanic and inventive boss fights make it the series' best entry.",
    "riyl": [
      "Luigi's Mansion (GameCube)",
      "Pikmin 4",
      "Captain Toad: Treasure Tracker"
    ],
    "image": "https://media.rawg.io/media/games/3d9/3d972802b9ee793098b73ecf676b687e.jpeg"
  },
  {
    "title": "Tetris 99",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/tetris-99/",
    "played": false,
    "beat": false,
    "genres": [
      "Puzzle",
      "Battle Royale",
      "Arcade"
    ],
    "description": "99-player Tetris battle royale. Send garbage to opponents while managing incoming attacks — a genuinely tense reinvention of one of the oldest game concepts.",
    "riyl": [
      "Puyo Puyo Tetris 2",
      "Lumines Remastered",
      "Rollerdrome"
    ],
    "image": "https://media.rawg.io/media/screenshots/d53/d539b82df1642578d33e57462536daf5.jpeg"
  },
  {
    "title": "Mario Party Superstars",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 80,
    "metacritic_url": "https://www.metacritic.com/game/mario-party-superstars/",
    "played": false,
    "beat": false,
    "genres": [
      "Party",
      "Mini-Games",
      "Co-op"
    ],
    "description": "A best-of collection featuring five classic N64 Mario Party boards and 100 remastered mini-games. Full online play makes this the definitive Mario Party.",
    "riyl": [
      "Super Mario Party Jamboree",
      "Super Mario Party",
      "Pummel Party"
    ],
    "image": "https://media.rawg.io/media/games/92c/92cb7c505365879a95d08fe11cc6ac8b.jpg"
  },
  {
    "title": "Mario Golf: Super Rush",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 69,
    "metacritic_url": "https://www.metacritic.com/game/mario-golf-super-rush/",
    "played": false,
    "beat": false,
    "genres": [
      "Sports",
      "Golf",
      "Arcade"
    ],
    "description": "A golf game with Speed Golf and Battle Golf modes that inject chaos into the format. Adventure mode is a light RPG. Good fun, if a bit thin at launch.",
    "riyl": [
      "Mario Tennis Aces",
      "Everybody's Golf",
      "Golf Story"
    ],
    "image": "https://media.rawg.io/media/screenshots/78e/78e89d605b0f4edd14bb53463f476d09.jpg"
  },
  {
    "title": "Metroid Dread",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 88,
    "metacritic_url": "https://www.metacritic.com/game/metroid-dread/",
    "played": false,
    "beat": false,
    "genres": [
      "Metroidvania",
      "Action",
      "Sci-Fi"
    ],
    "description": "The 2D Metroid series returns after 19 years. Samus vs. EMMI robots on Planet ZDR — tense, fast, and beautifully designed with some of the best boss fights in the series.",
    "riyl": [
      "Metroid Prime Remastered",
      "Hollow Knight",
      "Prince of Persia: The Lost Crown"
    ],
    "image": "https://media.rawg.io/media/games/c26/c262f8b54b46edc72594c4a9bb8ee13e.jpg"
  },
  {
    "title": "Super Mario 3D World",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 93,
    "metacritic_url": "https://www.metacritic.com/game/super-mario-3d-world-bowsers-fury/",
    "played": false,
    "beat": false,
    "genres": [
      "Platformer",
      "Co-op"
    ],
    "description": "Four-player 3D Mario co-op — the Wii U gem finally on Switch with the Bowser's Fury expansion. Cat suit mechanics and multiplayer chaos at their best.",
    "riyl": [
      "Super Mario Odyssey",
      "Super Mario Bros. Wonder",
      "Kirby and the Forgotten Land"
    ],
    "image": "https://media.rawg.io/media/games/cb7/cb78e5b2ada0e38cafb14cd00cfafbd7.jpg"
  },
  {
    "title": "Donut County",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 79,
    "metacritic_url": "https://www.metacritic.com/game/donut-county/",
    "played": false,
    "beat": false,
    "genres": [
      "Puzzle",
      "Casual",
      "Indie"
    ],
    "description": "Control a hole in the ground that grows as it swallows things. Short, absurdist, and charming — a one-sitting experience with a great lo-fi soundtrack.",
    "riyl": [
      "Time on Frog Island",
      "A Short Hike",
      "Katamari Damacy"
    ],
    "image": "https://media.rawg.io/media/games/035/035b7bd6d015e07e501d2234ec629dc3.jpg"
  },
  {
    "title": "Dead Cells",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 91,
    "metacritic_url": "https://www.metacritic.com/game/dead-cells/",
    "played": false,
    "beat": false,
    "genres": [
      "Roguelike",
      "Metroidvania",
      "Action"
    ],
    "description": "A relentless roguelite Metroidvania with tight parry-based combat and endless build variety. One of the best-feeling games to simply move around in.",
    "riyl": [
      "Hades",
      "Hollow Knight",
      "Blasphemous 2"
    ],
    "image": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg"
  },
  {
    "title": "The Legend of Zelda: Skyward Sword HD",
    "platform": "Nintendo Switch",
    "type": "video game",
    "source": "digital",
    "console_family": "Nintendo",
    "metacritic_score": 81,
    "metacritic_url": "https://www.metacritic.com/game/the-legend-of-zelda-skyward-sword-hd/",
    "played": false,
    "beat": false,
    "genres": [
      "Action Adventure",
      "Puzzle",
      "Dungeon Crawler"
    ],
    "description": "The origin story of the Master Sword and the cycle of Zelda, Link, and Ganon. Controversial motion controls now fully optional — a much more accessible version of the divisive Wii original.",
    "riyl": [
      "Breath of the Wild",
      "Link's Awakening",
      "Okami HD"
    ],
    "image": "https://media.rawg.io/media/games/624/624ee5ea783877a9ad8ccf68b8d8300b.jpg"
  }
];
