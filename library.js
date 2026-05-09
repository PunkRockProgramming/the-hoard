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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "title": "Scott Pilgrim vs. the World: The Game \u2013 Complete Edition",
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
    ]
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
    ]
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
    "description": "The complete Control experience including both DLC expansions \u2014 The Foundation and AWE, which directly ties into the Alan Wake universe.",
    "riyl": [
      "Alan Wake Remastered",
      "Prey",
      "Quantum Break"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      "Abz\u00fb",
      "Alba: A Wildlife Adventure"
    ]
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
    ]
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
    ]
  },
  {
    "title": "The Witcher 3: Wild Hunt \u2013 Complete Edition",
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
    ]
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
    ]
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
    "description": "One of gaming's all-time great settings \u2014 the underwater libertarian dystopia of Rapture. Plasmid-augmented combat, iconic villain Andrew Ryan, and a legendary twist.",
    "riyl": [
      "BioShock 2",
      "BioShock Infinite",
      "Prey"
    ]
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
    ]
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
    ]
  },
  {
    "title": "Sekiro: Shadows Die Twice \u2013 Game of the Year Edition",
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
    "description": "FromSoftware's samurai masterpiece. Posture-breaking sword duels replace stamina bars \u2014 the most rhythmic and mechanically pure of the Soulsborne games.",
    "riyl": [
      "Elden Ring",
      "Nioh",
      "Ghost of Tsushima"
    ]
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
    ]
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
    "description": "Playdead's follow-up to Limbo \u2014 a wordless, monochromatic nightmare about a boy infiltrating a totalitarian facility. Disturbing, beautiful, and unforgettable.",
    "riyl": [
      "Limbo",
      "Little Nightmares",
      "Bramble: The Mountain King"
    ]
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
    ]
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
    "description": "The penultimate numbered MK entry \u2014 refined fatalities, a cinematic story mode spanning timelines, and the deepest customization in the series at that point.",
    "riyl": [
      "Mortal Kombat 1",
      "Injustice 2",
      "Street Fighter 6"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "A Metroidvania built around a Ikaruga-style polarity mechanic \u2014 switch between light and dark to absorb or deflect matching bullets. Beautiful Mesoamerican aesthetic.",
    "riyl": [
      "Ori and the Blind Forest",
      "Hollow Knight",
      "Guacamelee!"
    ]
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
    ]
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
    ]
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
    "description": "Soccer with rocket-powered cars. One of the most purely skill-expressive competitive games ever made \u2014 the ceiling for mastery is essentially infinite.",
    "riyl": [
      "Supersonic Acrobatic Rocket-Powered Battle-Cars",
      "Turbo Golf Racing",
      "Geometry Wars"
    ]
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
    "description": "The original Saints Row \u2014 a GTA-style open-world crime game before the series fully embraced absurdist comedy. Rough around the edges but a strong foundation.",
    "riyl": [
      "Saints Row IV",
      "GTA V",
      "True Crime: Streets of LA"
    ]
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
    ]
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
    ]
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
    "description": "The original Titanfall \u2014 wall-running pilots and giant mechs in a fast, fluid multiplayer shooter. No campaign worth noting, but the movement system was years ahead of its time.",
    "riyl": [
      "Titanfall 2",
      "Apex Legends",
      "Doom Eternal"
    ]
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
    "description": "Renaissance Italy through the eyes of Ezio Auditore. The game that turned AC into a cultural phenomenon \u2014 a generational leap over the original.",
    "riyl": [
      "Assassin's Creed III",
      "AC: Brotherhood",
      "AC Valhalla"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "Bungie's original shared-world shooter \u2014 flawed at launch but foundational to the genre. Beautiful Halo-lineage gunplay meets light MMO structure.",
    "riyl": [
      "Destiny 2",
      "Borderlands 3",
      "The Division 2"
    ]
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
    "description": "Id Software's legendary revival. Rip and tear through Hell's forces at full sprint \u2014 a kinetic, metal-soundtrack power fantasy that redefined the boomer shooter.",
    "riyl": [
      "Doom Eternal",
      "Wolfenstein II",
      "Turbo Overkill"
    ]
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
    ]
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
    ]
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
    "description": "Dani Rojas fights Ant\u00f3n Castillo's dictatorship on the fictional Caribbean island of Yara. Giancarlo Esposito as the villain is the best thing about it.",
    "riyl": [
      "Far Cry 5",
      "Far Cry Primal",
      "Just Cause 4"
    ]
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
    ]
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
    ]
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
    "description": "The final Lionhead Fable \u2014 you lead a revolution, become ruler, and face a greater threat from the darkness. More streamlined than Fable II with a strong first half.",
    "riyl": [
      "Hogwarts Legacy",
      "The Elder Scrolls V: Skyrim",
      "Dragon Age: Origins"
    ]
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
    ]
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
      "God of War: Ragnar\u00f6k",
      "Sekiro",
      "The Last of Us Remastered"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "Adam Jensen navigates a fractured world of augmented-human apartheid in Prague. Multiple approaches to every objective in a deep cyberpunk RPG \u2014 though it ends abruptly.",
    "riyl": [
      "Cyberpunk 2077",
      "Prey",
      "Dishonored 2"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "Three playable characters \u2014 Nero, Dante, and the mysterious V \u2014 face the Qliphoth demon tree. The Special Edition adds Vergil and ray tracing on PS5.",
    "riyl": [
      "Bayonetta 3",
      "NieR: Automata",
      "Metal Gear Rising"
    ]
  },
  {
    "title": "Middle-earth: Shadow of Mordor \u2013 Game of the Year Edition",
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
    ]
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
    "description": "A stunning return for the franchise \u2014 a 2.5D Metroidvania with time-manipulation combat, excellent level design, and a surprisingly strong narrative.",
    "riyl": [
      "Hollow Knight",
      "Ori and the Will of the Wisps",
      "Blasphemous 2"
    ]
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
    ]
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
    "description": "The most ambitious entry in the series \u2014 seamless ecosystems, dynamic weather, and new wound mechanics in a living world where monster behavior is tied to environment.",
    "riyl": [
      "Monster Hunter World",
      "God Eater 3",
      "Wild Hearts"
    ]
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
    "description": "Two classics in one collection \u2014 the legendary Symphony of the Night plus the PC Engine classic Rondo of Blood. Essential Castlevania.",
    "riyl": [
      "Castlevania Anniversary Collection",
      "Bloodstained: Ritual of the Night",
      "Hollow Knight"
    ]
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
    "description": "Hazelight's follow-up to It Takes Two \u2014 two writers get trapped inside their own stories and must cooperate through wildly varying genre environments to escape.",
    "riyl": [
      "It Takes Two",
      "A Way Out",
      "Unravel Two"
    ]
  },
  {
    "title": "God of War: Ragnar\u00f6k",
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
    ]
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
    ]
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
    ]
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
    "description": "Far Cry stripped down to a prehistoric setting \u2014 no guns, just spears, clubs, and tamed animals. Surprisingly atmospheric and distinct from its siblings.",
    "riyl": [
      "Far Cry 5",
      "Far Cry 6",
      "Horizon Zero Dawn"
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    "title": "Ghost of Y\u014dtei",
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
    ]
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
    "description": "Cal Kestis continues his story five years after Fallen Order \u2014 a more confident Soulslike-adjacent Star Wars adventure with improved combat stances and a genuinely moving narrative.",
    "riyl": [
      "Star Wars Jedi: Fallen Order",
      "Sekiro",
      "God of War (2018)"
    ]
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
    "description": "Peter and Miles share the screen \u2014 and a map \u2014 in Insomniac's most ambitious Spider-Man yet. The Venom storyline and symbiote combat expand the formula significantly.",
    "riyl": [
      "Marvel's Spider-Man",
      "Batman: Arkham Knight",
      "Wolverine (upcoming)"
    ]
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
    ]
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
    "description": "Two protagonists \u2014 ninja Naoe and samurai Yasuke (the historical African samurai) \u2014 navigate feudal Japan in Ubisoft's most visually striking AC in years.",
    "riyl": [
      "Ghost of Tsushima",
      "Assassin's Creed Valhalla",
      "Nioh 2"
    ]
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
    "description": "Nintendo's reinvention of Zelda and arguably open-world design itself. Hyrule is a physics playground \u2014 every problem has multiple solutions and the world rewards curiosity.",
    "riyl": [
      "Tears of the Kingdom",
      "Genshin Impact",
      "Elden Ring"
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "A limited-release collection of three 3D Mario classics \u2014 Super Mario 64, Sunshine, and Galaxy \u2014 with minor upscaling and the Galaxy soundtrack in stereo.",
    "riyl": [
      "Super Mario Odyssey",
      "Super Mario 3D World",
      "A Hat in Time"
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "Mario's most creative 3D adventure. Cappy possession mechanics turn every enemy and object into a toy \u2014 a relentlessly inventive collectathon.",
    "riyl": [
      "Super Mario 3D World",
      "Banjo-Kazooie",
      "A Hat in Time"
    ]
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
    "description": "The definitive Borderlands on a portable platform \u2014 the base game plus all major DLC including Tiny Tina's Assault on Dragon Keep.",
    "riyl": [
      "Borderlands 3",
      "Tiny Tina's Wonderlands",
      "Risk of Rain 2"
    ]
  },
  {
    "title": "Scott Pilgrim vs. the World: The Game \u2013 Complete Edition (Switch)",
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
    "description": "Scott Pilgrim on Switch \u2014 the cult classic belt scroller back from digital death. Best played with friends.",
    "riyl": [
      "River City Girls",
      "Castle Crashers",
      "Streets of Rage 4"
    ]
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
    ]
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
    "description": "Twelve classic Street Fighter titles in one package \u2014 from the original to Street Fighter III: 3rd Strike. Essential for fighting game historians.",
    "riyl": [
      "Street Fighter 6",
      "Capcom Fighting Collection",
      "SNK 40th Anniversary Collection"
    ]
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
    ]
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
    ]
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
    ]
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
    "description": "Build and share Mario courses across five game styles. The online course browser has years of community content \u2014 from trivially easy to humanity-breaking.",
    "riyl": [
      "Super Mario Bros. Wonder",
      "LittleBigPlanet 3",
      "Dreams"
    ]
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
    ]
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
    "description": "99-player Tetris battle royale. Send garbage to opponents while managing incoming attacks \u2014 a genuinely tense reinvention of one of the oldest game concepts.",
    "riyl": [
      "Puyo Puyo Tetris 2",
      "Lumines Remastered",
      "Rollerdrome"
    ]
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
    ]
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
    ]
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
    "description": "The 2D Metroid series returns after 19 years. Samus vs. EMMI robots on Planet ZDR \u2014 tense, fast, and beautifully designed with some of the best boss fights in the series.",
    "riyl": [
      "Metroid Prime Remastered",
      "Hollow Knight",
      "Prince of Persia: The Lost Crown"
    ]
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
    "description": "Four-player 3D Mario co-op \u2014 the Wii U gem finally on Switch with the Bowser's Fury expansion. Cat suit mechanics and multiplayer chaos at their best.",
    "riyl": [
      "Super Mario Odyssey",
      "Super Mario Bros. Wonder",
      "Kirby and the Forgotten Land"
    ]
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
    "description": "Control a hole in the ground that grows as it swallows things. Short, absurdist, and charming \u2014 a one-sitting experience with a great lo-fi soundtrack.",
    "riyl": [
      "Time on Frog Island",
      "A Short Hike",
      "Katamari Damacy"
    ]
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
    ]
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
    "description": "The origin story of the Master Sword and the cycle of Zelda, Link, and Ganon. Controversial motion controls now fully optional \u2014 a much more accessible version of the divisive Wii original.",
    "riyl": [
      "Breath of the Wild",
      "Link's Awakening",
      "Okami HD"
    ]
  }
];
