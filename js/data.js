/* ============================================================
   JOLLOF PAGES — Sample Story Data
   The Shadow Chronicles
   ============================================================ */

const JP_DATA = {

  project: {
    title: "The Shadow Chronicles",
    subtitle: "The Veil Between Worlds",
    tagline: "Some doors were never meant to be opened.",
    code: "TSC-001",
    genre: "Dark Fantasy",
    subgenre: "Occult Thriller",
    tone: "Grim, atmospheric, morally complex",
    audience: "Mature / Adult",
    maturity: "18+",
    pacing: "Slow burn with explosive pivots",
    framework: "Three-Act + Mystery Layer",
    structure: "5-Volume Series",
    perspective: "Third-person limited, dual protagonist",
    premise: "Two investigators stumble upon a centuries-old druid conspiracy buried beneath the city they thought they knew. As they descend deeper, the line between uncovering truth and becoming part of the myth begins to blur.",
    coreConflict: "John and Maya must recover the Binding Relic before the Cult of the Sealed Eye can use it to tear open the Veil — a dimensional membrane separating the mortal world from the Void.",
    themes: ["power and sacrifice", "identity vs. obligation", "forbidden knowledge", "ancestral burden", "loyalty tested by survival"],
    issueTarget: 24,
    pageTarget: "480–520",
    volumes: 5,
    wordTarget: "8,500–10,000 per issue",
    rules: [
      "No character has full information. Ever.",
      "Magic has visible physical cost — always show the toll.",
      "The Cult is never monolithic — internal conflict is constant.",
      "No deaths without consequence shown across subsequent issues.",
      "Visual motifs: spirals, torchlight, crumbling stone, aged manuscripts."
    ]
  },

  characters: [
    {
      id: "c001",
      name: "John Walker",
      alias: "The Reluctant",
      role: "Protagonist",
      status: "Active",
      arc: "Denial → Acceptance → Sacrifice",
      faction: "Independent",
      bio: "A former military cartographer turned freelance investigator. John doesn't believe in the supernatural — until he can no longer afford not to.",
      wound: "Lost his unit in a mission he wasn't supposed to survive.",
      desire: "To find and protect a reason to stay alive.",
      fear: "That he is fundamentally incapable of protecting anyone.",
      lie: "\"I work better alone.\"",
      truth: "He needs the people around him more than any mission.",
      secret: "He found the first Druid symbol three years ago — and burned the evidence.",
      skills: ["Combat", "Cartography", "Infiltration", "Tactical analysis"],
      flaws: ["Emotionally sealed", "Self-destructive", "Arrogance under pressure"],
      affiliations: ["None (formerly: Special Forces Unit 9)"],
      costume: "Dark tactical coat, worn leather boots, fingerless gloves. Torch always present from Issue 2 onward.",
      colorNotes: "Desaturated grays and deep navy. Muted palette. Never bright.",
      scars: "Long scar across left forearm. Burn mark on right palm.",
      currentStatus: "Active / Injured (minor)",
      issueAppearances: [1, 2, 3, 4],
      knownFacts: ["The Relic exists", "Maya has partial druid lineage", "The Cult knows his name"],
      hiddenFacts: ["The binding ritual requires his bloodline", "He is the third generation seeker"],
      emotions: "Guarded, controlled, erupts only under direct threat to others"
    },
    {
      id: "c002",
      name: "Maya Reed",
      alias: "The Inheritor",
      role: "Protagonist / Relic Ally",
      status: "Active",
      arc: "Discovery → Burden → Command",
      faction: "Order of the Sealed Circle (unwitting member)",
      bio: "A folklore researcher and archivist who has spent her career documenting \"myths\" that keep turning out to be accurate. She is the last living descendant of the First Circle.",
      wound: "Her mentor was killed by the cult — and she watched it happen.",
      desire: "To understand what she was born into — and whether she has any choice in it.",
      fear: "That she has already been chosen, and free will is an illusion.",
      lie: "\"I'm just a researcher. I observe. I don't act.\"",
      truth: "She is the only one who can bind the Relic back to the Veil.",
      secret: "She has already touched the Relic once — and felt it speak to her.",
      skills: ["Ancient languages", "Ritual knowledge", "Lore research", "Spatial memory"],
      flaws: ["Overthinking under pressure", "Emotional vulnerability", "Tendency to sacrifice herself"],
      affiliations: ["Independent; unknowingly tied to Order of the Sealed Circle"],
      costume: "Long structured coat (burgundy/dark), always carries a worn journal and satchel. Hair tied back when working.",
      colorNotes: "Deep burgundy, aged parchment tones, occasional gold accent jewelry.",
      scars: "A faint spiral mark on her left wrist — she thinks it's a birthmark.",
      currentStatus: "Active / Mentoring mode",
      issueAppearances: [1, 2, 3, 4],
      knownFacts: ["First Circle history", "Ritual binding theory", "Cult leadership structure"],
      hiddenFacts: ["She is the intended vessel for the binding", "The spiral mark is a seal"],
      emotions: "Curious, compassionate, increasingly haunted"
    },
    {
      id: "c003",
      name: "Elder Voss",
      alias: "The Archon",
      role: "Primary Antagonist",
      status: "Active / Hidden",
      arc: "Control → Desperation → Revelation",
      faction: "Cult of the Sealed Eye — High Leadership",
      bio: "The current leader of the Cult's inner circle. Appears as a respected academic and city archivist. Has been orchestrating the relic's recovery for forty years.",
      wound: "Lost his daughter to the Void when he was young — the cult offered answers.",
      desire: "To open the Veil and retrieve what was taken from him.",
      fear: "That the Void took his daughter because she chose to stay.",
      lie: "\"The Veil must be opened for the good of all.\"",
      truth: "He wants one thing — and will sacrifice everything to get it.",
      secret: "He is not fully human anymore. Three prior rituals have left marks.",
      skills: ["Manipulation", "Occult mastery", "Political influence", "Memory suppression ritual"],
      flaws: ["Obsession overrides judgment", "Underestimates John specifically"],
      affiliations: ["Cult of the Sealed Eye", "City Archive Board", "Ancient Scholars League"],
      costume: "Academic robes in public. In cult context: layered dark ceremonial vestments, hood with spiral clasp.",
      colorNotes: "Publicly: warm browns and greens. In shadow: blacks, deep violet.",
      currentStatus: "Hidden / Maneuvering",
      issueAppearances: [2, 3, 4],
      emotions: "Cold authority, flashes of grief, occasional genuine warmth (used as weapon)"
    },
    {
      id: "c004",
      name: "Seraph Nox",
      alias: "The Blade of the Eye",
      role: "Antagonist / Enforcer",
      status: "Active / Hunting",
      arc: "Weapon → Doubt → Choice",
      faction: "Cult of the Sealed Eye — Field Agent",
      bio: "Voss's primary field operative. Utterly loyal — until the moment she isn't. She does not know what the Void actually is.",
      wound: "Raised inside the cult. Has never known anything else.",
      desire: "To prove herself worthy of trust.",
      fear: "That her entire life has been built on a constructed myth.",
      lie: "\"Loyalty is the only honest thing left.\"",
      truth: "She can think for herself — she just hasn't been allowed to.",
      secret: "She let Maya escape in Issue 2 intentionally.",
      costume: "Fitted all-black operative gear. Always masked in the field. Unmasked only once so far (Issue 3, Page 7).",
      colorNotes: "Pure black. No accent color. Her face is the only color.",
      currentStatus: "Hunting John and Maya. Beginning to question orders.",
      issueAppearances: [2, 3, 4],
      emotions: "Controlled precision, brief cracks of doubt when alone"
    },
    {
      id: "c005",
      name: "Dorin Fell",
      alias: "The Archivist",
      role: "Supporting / Ally",
      status: "Active",
      arc: "Skeptic → True Believer",
      faction: "City Archive (civilian)",
      bio: "A retired city record keeper who accidentally documented three cult-related disappearances in the 1990s. Has been waiting for someone to come asking.",
      wound: "Was dismissed as paranoid when he tried to report his findings.",
      desire: "Validation — that he was right and wasn't crazy.",
      costume: "Rumpled suit, always disheveled. Thick-rimmed glasses. Ink stains.",
      colorNotes: "Greens and tans. Warm, lived-in palette. Contrast to the cold protagonists.",
      currentStatus: "Informational ally. Location: City Archive sub-basement.",
      issueAppearances: [1, 3, 4],
      emotions: "Nervous energy, rapid-fire speech, genuine warmth"
    }
  ],

  locations: [
    {
      id: "l001",
      name: "The Thornwall Catacombs",
      type: "Underground / Ancient Structure",
      summary: "A network of pre-city tunnels beneath the old quarter, predating any known construction record by 600 years. Used by the Druid First Circle as ritual space.",
      atmosphere: "Cold, damp, oppressive weight. The deeper you go, the more the stone changes — becomes smoother, intentional.",
      sensory: "Smell of damp limestone and old ash. Sound of distant water echoes. No bird noise. Perfect silence below 40 feet.",
      controls: "Nominally city property. Actually monitored by the Cult.",
      history: "Built by the First Circle as a containment vessel for Relic overflow energy. Partially collapsed in 1687. Re-mapped by city surveyors in 1901 — three of whom disappeared.",
      status: "Active — Protagonists currently exploring",
      recurringProps: ["Spiral carved stones", "Druidic wall symbols", "Ancient torch brackets", "Sealed chamber doors"],
      lighting: "Near-total dark. All light is character-carried. Strong contrast environments.",
      colorTone: "Deep black with warm amber torchlight. Stone is gray-brown.",
      linkedScenes: ["5a", "5b", "6a"]
    },
    {
      id: "l002",
      name: "City Archive — Sub-Basement B",
      type: "Interior / Institutional",
      summary: "The real archive. Below the public floors, accessible only with old keys. Dorin Fell operates here. Boxes of undigitized records going back to 1840.",
      atmosphere: "Dusty, cluttered, somehow comforting. Warm lamplight. The smell of paper decay.",
      status: "Active — Recurring location",
      linkedScenes: ["1b", "3a"]
    },
    {
      id: "l003",
      name: "The Sealed Chamber",
      type: "Underground / Ritual Space",
      summary: "The deepest room in the Catacombs. Never fully mapped. Where the Binding Relic was last placed by the First Circle. The door requires blood activation.",
      atmosphere: "Wrong. Something resonates at the wrong frequency. Even torchlight dims here.",
      status: "Not yet reached — planned Issue 5 reveal",
      linkedScenes: ["Planned: 9a"]
    },
    {
      id: "l004",
      name: "Voss's Study",
      type: "Interior / Private",
      summary: "Appears to be a scholar's working room. Behind the secondary bookshelf: a cult operations room with active ritual maps and surveillance feeds.",
      atmosphere: "Two faces: warm academic authority in front, cold obsession behind.",
      status: "Active",
      linkedScenes: ["3b", "4a"]
    }
  ],

  factions: [
    {
      id: "f001",
      name: "Cult of the Sealed Eye",
      publicName: "The Archival Society",
      type: "Cult / Secret Order",
      ideology: "The Veil between worlds is an aberration. It must be undone to restore the natural order — or so they claim.",
      leadership: "Elder Voss (High Archon), The Seven (inner council, names unknown)",
      resources: "Substantial wealth through academic and civic front organizations. Significant occult artifacts.",
      method: "Long game. Patience. Infiltration. Removal of witnesses without visible violence where possible.",
      hiddenAgenda: "Elder Voss's personal agenda (retrieve his daughter) is unknown to most members.",
      symbol: "A single unblinking eye within a spiral seal.",
      color: "Deep violet and black. Spiral motif on all ritual items.",
      enemies: ["Order of the Sealed Circle", "Maya Reed (targeted)"],
      linkedChars: ["c003", "c004"],
      linkedLocations: ["l003", "l004"]
    },
    {
      id: "f002",
      name: "Order of the Sealed Circle",
      publicName: "None — operates in absolute secret",
      type: "Protective Order / Druid Remnant",
      ideology: "The Veil is a necessary protection. The Relic must remain bound. The First Circle's duty passes to each generation.",
      leadership: "Currently leaderless — the last known leader was Maya's mentor (deceased)",
      resources: "Ancient lore, ritual knowledge, bloodline network across 12 families",
      method: "Protection through obscurity. The best defense is that most members don't know they are members.",
      hiddenAgenda: "Maya is the designated inheritor and must be guided to choose willingly — not forced.",
      symbol: "A sealed spiral within a circle — mirror inverse of the Cult's eye.",
      linkedChars: ["c002"],
      linkedLocations: ["l001"]
    },
    {
      id: "f003",
      name: "Special Forces Unit 9",
      publicName: "SF-9 (classified)",
      type: "Military / Defunct",
      ideology: "Mission completion above all. Results over process.",
      leadership: "Disbanded. Former commander: classified.",
      note: "John's former unit. Three members are alive. At least one has been compromised by the Cult.",
      linkedChars: ["c001"]
    }
  ],

  timeline: [
    {
      id: "e001",
      title: "The First Circle Seals the Relic",
      date: "~620 CE",
      era: "Ancient History",
      type: "World Event",
      summary: "The Druid First Circle performs the original Binding ritual, containing the Relic within the Catacombs beneath what will later become the city.",
      publicTruth: "Unknown to public",
      hiddenTruth: "The ritual required a willing death. The First Keeper chose to be sealed inside the chamber.",
      revealStatus: "Not yet revealed",
      whoKnows: ["Order of the Sealed Circle (partial)", "Elder Voss (full)"],
      linkedChars: [],
      linkedLocations: ["l001", "l003"]
    },
    {
      id: "e002",
      title: "The 1687 Collapse",
      date: "1687 CE",
      era: "Historical Background",
      type: "Structural Event",
      summary: "A significant section of the Catacombs collapses. Three cult operatives are killed. Access to the Sealed Chamber is blocked.",
      publicTruth: "Recorded as a natural cave collapse.",
      hiddenTruth: "The collapse was triggered by a failed opening attempt — the Relic resisted.",
      revealStatus: "Partially revealed (Issue 3)",
      linkedChars: [],
      linkedLocations: ["l001"]
    },
    {
      id: "e003",
      title: "Maya's Mentor is Killed",
      date: "3 Years Before Issue 1",
      era: "Recent History",
      type: "Personal Event / Inciting",
      summary: "Professor Arla Hehn, Maya's academic mentor and unknowing guardian, is found dead in her study. Ruled accidental. Maya is not convinced.",
      publicTruth: "Accidental fall — alcohol-related.",
      hiddenTruth: "Executed by Seraph Nox under Voss's order when Hehn began guiding Maya toward the truth too quickly.",
      revealStatus: "Partially revealed (reader suspects)",
      whoKnows: ["Voss", "Nox", "Maya (suspects)"],
      linkedChars: ["c002", "c003", "c004"],
      linkedLocations: []
    },
    {
      id: "e004",
      title: "John Burns the First Evidence",
      date: "3 Years Before Issue 1",
      era: "Hidden History",
      type: "Personal / Secret",
      summary: "John discovers a Druid spiral carved into a bunker wall during a classified mission. He documents it, reports nothing, and burns his notes.",
      publicTruth: "Mission completed with no anomalies.",
      hiddenTruth: "John has been haunted by this moment ever since. He recognized the symbol — it matched a scar on his father's arm.",
      revealStatus: "Not yet revealed to reader",
      whoKnows: ["John only"],
      linkedChars: ["c001"],
      linkedLocations: []
    },
    {
      id: "e005",
      title: "John and Maya First Encounter",
      date: "Issue 1 — Page 4",
      era: "Story Present",
      type: "Story Event",
      summary: "John is hired to find a missing city archivist. The trail leads to Maya, who was the last person to see him. Neither trusts the other immediately.",
      revealStatus: "Established canon",
      linkedChars: ["c001", "c002"],
      linkedLocations: ["l002"]
    },
    {
      id: "e006",
      title: "The Relic Makes First Contact with Maya",
      date: "Issue 3 — Page 12",
      era: "Story Present",
      type: "Key Reveal",
      summary: "While examining a fragment in the Archive basement, Maya touches the stone and hears a voice. She tells no one.",
      publicTruth: "N/A",
      hiddenTruth: "The Relic recognized her bloodline and began the binding process passively.",
      revealStatus: "Known to reader. Unknown to John. Unknown to Cult.",
      linkedChars: ["c002"],
      linkedLocations: ["l002"]
    }
  ],

  wiki: [
    {
      id: "w001",
      title: "The Binding Relic",
      type: "Object",
      status: "Approved",
      summary: "A hand-sized carved stone disk, pre-Roman in origin, covered in spiral script. When touched by one of the First Circle bloodlines, it resonates with a low hum. Current location: the Sealed Chamber.",
      continuityNote: "The Relic cannot be moved by force. It resists. Any character attempting this suffers disorientation or worse.",
      linkedChars: ["c002"],
      linkedLocations: ["l003"],
      linkedFactions: ["f001", "f002"]
    },
    {
      id: "w002",
      title: "The Veil",
      type: "Lore",
      status: "Approved",
      summary: "A dimensional membrane separating the mortal world from the Void — a null-space where incomplete souls, broken rituals, and torn entities exist in stasis. Created or discovered by the First Circle.",
      continuityNote: "The Veil is never visually depicted directly — only its effects. Do not show the Void itself until Volume 3+."
    },
    {
      id: "w003",
      title: "Druid Spiral Script",
      type: "Symbol / Language",
      status: "Approved",
      summary: "A pre-Celtic writing system used by the First Circle. Not fully translatable — parts of it are non-verbal, meant to be felt rather than read. Appears on: the Relic, the Catacomb walls, and Maya's wrist mark.",
      continuityNote: "Consistent visual treatment required. Reference Sheet: Spiral-Script-Canon-v2.jpg"
    },
    {
      id: "w004",
      title: "The Sealed Eye",
      type: "Symbol",
      status: "Approved",
      summary: "The primary iconography of the Cult of the Sealed Eye — an unblinking eye set inside a spiral. Inverted version of the Order of the Sealed Circle's emblem.",
      continuityNote: "Eye always faces right in Cult usage. Always faces left in Order usage. Never mix these orientations."
    },
    {
      id: "w005",
      title: "Elder Voss — Public Identity",
      type: "Character / Public Record",
      status: "Approved",
      summary: "Professor Aldric Voss. Age 67. Director of the City's Historical Archive. Published 14 academic texts on pre-modern urban history. Recipient of the Civic Heritage Award 2019.",
      continuityNote: "His public identity must remain clean until the Issue 6 reveal. No public suspicion before then."
    }
  ],

  issues: [
    {
      id: "i001",
      number: 1,
      title: "What the Maps Don't Show",
      status: "Complete",
      purpose: "Introduce John, Maya, and the world. Plant the first three mystery hooks. Establish visual tone.",
      pageCount: 24,
      sequences: 4,
      keyReveal: "The missing archivist was investigating the Catacombs.",
      cliffhanger: "John finds a Druid symbol carved into the man's desk — identical to the one he burned years ago."
    },
    {
      id: "i002",
      number: 2,
      title: "The Eye Opens",
      status: "Complete",
      purpose: "Introduce the Cult. First Seraph Nox appearance. First look at the Catacombs entrance.",
      pageCount: 26,
      sequences: 5,
      keyReveal: "The archivist wasn't missing — he was recruited. And then silenced.",
      cliffhanger: "Nox lets Maya go. Intentionally."
    },
    {
      id: "i003",
      number: 3,
      title: "The First Circle's Debt",
      status: "Complete",
      purpose: "Deep worldbuilding. Dorin Fell introduced. Maya discovers Relic fragment. Elder Voss's face finally revealed.",
      pageCount: 28,
      sequences: 5,
      keyReveal: "The Catacombs were built to contain something, not store it.",
      cliffhanger: "Voss looks directly at a photo of Maya and says: 'It's time.'"
    },
    {
      id: "i004",
      number: 4,
      title: "Into the Dark",
      status: "Active (Drafting)",
      purpose: "First descent into the Catacombs. Full catacomb atmosphere. Cult pursuit begins. John and Maya relationship deepens under pressure.",
      pageCount: 30,
      sequences: 6,
      keyReveal: "Planned: The Sealed Chamber door is already slightly open.",
      cliffhanger: "Planned: John reads one of the spiral inscriptions — and it says his family name."
    },
    {
      id: "i005",
      number: 5,
      title: "The Blood Key",
      status: "Planned",
      purpose: "The Sealed Chamber is reached. The Relic chooses. Seraph Nox switches sides.",
      pageCount: 32,
      sequences: 7
    }
  ],

  visualRefs: [
    {
      id: "v001",
      label: "Catacomb Passage — Establishing",
      scene: "5a",
      type: "Location Reference",
      notes: "Dark arch framing, torchlight center, two figures mid-ground, carved symbols flanking",
      approved: true
    },
    {
      id: "v002",
      label: "John Walker — Full Costume Ref",
      char: "c001",
      type: "Character Ref",
      notes: "Dark tactical coat, worn leather, no insignia. Torch in right hand from Issue 2+",
      approved: true
    },
    {
      id: "v003",
      label: "Maya Reed — Satchel and Journal",
      char: "c002",
      type: "Prop + Character Ref",
      notes: "Journal always visible. Satchel worn across body left-shoulder. Burgundy coat detail.",
      approved: true
    },
    {
      id: "v004",
      label: "Druid Spiral Script — Canon v2",
      type: "Symbol Reference",
      notes: "16 confirmed glyphs. Spirals always clockwise. Used on: Relic, walls, Maya's wrist.",
      approved: true
    },
    {
      id: "v005",
      label: "Elder Voss — Academic Mode",
      char: "c003",
      type: "Character Ref",
      notes: "Warm brown tweed, round glasses, silver hair swept back. Public persona is deliberately unthreatening.",
      approved: true
    },
    {
      id: "v006",
      label: "The Sealed Eye Symbol",
      faction: "f001",
      type: "Faction Symbol",
      notes: "Eye faces RIGHT. Always within spiral. Never shown in direct light — always partially obscured or in shadow.",
      approved: true
    }
  ],

  agents: [
    {
      id: "a001",
      name: "Story Director",
      role: "Translates creator intent into structured issue, scene, and page goals",
      status: "active",
      currentTask: "Plotting page script for Scene 5a",
      lastOutput: "Scene 5a achieves objective tension. Recommend advancing to page break after Maya's torch reaction. Cliffhanger placement on page 18 confirmed viable.",
      warnings: 0
    },
    {
      id: "a002",
      name: "Canon Keeper",
      role: "Protects canon, world truth, and entity consistency",
      status: "reviewing",
      currentTask: "Cross-checking Catacomb wall symbols against Issue 1 reference",
      lastOutput: "Spiral Script confirmed consistent with Canon v2. Stone texture description in draft matches approved visual reference. No violations flagged.",
      warnings: 2
    },
    {
      id: "a003",
      name: "Scene Writer",
      role: "Drafts scene, page, and panel script language from approved brief",
      status: "drafting",
      currentTask: "Drafting page 15 action lines and panel 3 direction",
      lastOutput: "Maya whisper revised: stronger tension. Panel 3 environmental description expanded for broader staging. Dialogue rhythm tightened across pages 14–16.",
      warnings: 0
    },
    {
      id: "a004",
      name: "Continuity Editor",
      role: "Checks timeline, knowledge state, setup/payoff, and visual consistency",
      status: "needs-input",
      currentTask: "Monitoring active scene for continuity flags",
      lastOutput: "⚠ TORCH CONTINUITY FLAG: John's torch cannot be the same one from Scene 3 (extinguished, page 9). New torch must be sourced narratively. Suggest brief panel acknowledgment.",
      warnings: 1
    }
  ]

};
