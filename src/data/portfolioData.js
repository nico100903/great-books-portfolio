/**
 * =========================================================================
 * GREAT BOOKS DIGITAL PORTFOLIO - CENTRALIZED CONTENT DATA
 * =========================================================================
 * 
 * STUDENT INSTRUCTIONS:
 * This file contains all the editable text and data for your portfolio.
 * You can easily update your personal information, insert your literary
 * lens, paste your seven original literary analyses, and customize your
 * favorite masterpiece and reflection responses right here!
 */

export const studentInfo = {
  name: "Nathaniel Jr. S. Alcantara",
  course: "Bachelor of Science in Computer Science (BSCS)",
  courseShort: "BS Computer Science",
  year: "4th Year",
  section: "Great Books-GEC-GB-NRs",
  universityTerm: "Academic Year 2024–2025",
  websiteTitle: "My Literary Journey",
  websiteSubtitle: "Great Books — Digital Website Portfolio",
  heroTagline: "A collection of stories, reflections, interpretations, and discoveries that shaped my understanding of literature and the human experience.",
  
  // Section: Beyond the Pages (Homepage Introduction)
  introTitle: "Beyond the Pages",
  introDescription: "Literature is more than a collection of words. It is a reflection of human experiences, beliefs, struggles, and aspirations. This portfolio documents my journey through the masterpieces explored in Great Books and the lessons I discovered along the way.",

  // Student Profile Content (Exact from prompt)
  aboutMe: "Welcome to my literary journey! I am Nathaniel Jr. S. Alcantara, a fourth-year Bachelor of Science in Computer Science student. As someone pursuing a field centered on technology, logic, and problem-solving, I also recognize the importance of literature in developing creativity, critical thinking, and a deeper understanding of human experiences.\n\nThis digital portfolio represents my journey throughout the Great Books course, showcasing the literary masterpieces I have explored, the analyses I have accomplished, and the valuable lessons I have gained along the way.",
  
  hobbies: "My hobbies include listening to music, playing the guitar, watching TV series, taking care of my plants, playing video games, occasionally playing basketball, and reading books from time to time when I feel like it—especially books focused on personal growth, understanding the world, and self-discovery. I enjoy spending my free time exploring different activities that allow me to relax and express myself.",
  
  readingExperiences: "When it comes to literature, my favorite genres are fiction and drama. My reading experience throughout the Great Books course has been enjoyable because I genuinely appreciate these types of stories. I especially enjoy reading them when I have enough free time to immerse myself in the story without worrying about other things on my mind. These genres allow me to explore different perspectives, emotions, and experiences while keeping me entertained and engaged.\n\nFrom time to time, I also enjoy reading books centered on self-improvement, gaining a deeper understanding of the world, and exploring personal identity. These reads offer practical wisdom and introspective insights that complement the broader humanistic lessons of classical literature.",
  
  expectations: "Through Great Books, I expected to gain a deeper appreciation of literary masterpieces and understand the different perspectives, values, and experiences reflected in them. Throughout the course, I aimed to improve my ability to interpret literary works, apply different literary lenses, think critically, and connect the lessons found in literature to real-life situations.",

  // Profile image: Connected to your real student profile photo
  profilePhoto: "/images/student-profile.jpg",
  avatarFallbackInitials: "NA"
};

/**
 * THE SEVEN REQUIRED LITERARY MASTERPIECES
 * Exactly these 7 works in order.
 */
export const literaryWorks = [
  {
    id: "job-38",
    slug: "job-38",
    number: "01",
    title: "Voice Out of the Whirlwind (Job 38)",
    author: "Biblical Literature",
    sourceInfo: "Source: Book of Job, Chapter 38",
    genre: "Ancient Biblical Wisdom Literature & Hebrew Poetry",
    period: "c. 6th–4th Century BCE",
    region: "Ancient Near East / Levant",
    coverImage: "/images/job-38-bg.jpg",
    imageCaption: "Majestic divine manifestation out of the tempestuous whirlwind and cosmic clouds, challenging Job's mortal understanding.",
    epigraph: "“Where were you when I laid the foundations of the earth? Tell me, if you have understanding.” — Job 38:4",
    
    historicalBackground: `The Book of Job is widely recognized as one of the crowning pinnacles of ancient Near Eastern wisdom literature. Composed within the post-exilic or late monarchic Hebrew tradition (roughly between the 6th and 4th centuries BCE), the text radically interrogates the conventional doctrine of retribution—the simplistic belief that righteousness always yields prosperity and wickedness inevitably brings ruin. 

In Chapter 38, after dozens of agonizing chapters where Job debates his pious yet unsympathetic companions (Eliphaz, Bildad, and Zophar) and cries out for a judicial confrontation with God, the divine silence is dramatically broken. The Almighty speaks not from a sanctuary, but directly out of a fierce whirlwind (se'arah), shifting the framework from legalistic dispute to awe-inspiring cosmic contemplation.`,

    storyOverview: `Chapter 38 marks the dramatic climax of the Book of Job. Refusing to offer an academic explanation for why Job lost his wealth, his children, and his physical health, God answers Job's bitter pleas by asking a cascade of unanswerable rhetorical questions about the architecture of the cosmos. 

The divine voice challenges Job to measure the dimensions of the earth, command the dawn, enter the storehouses of the snow, bind the celestial constellations of the Pleiades and Orion, and sustain the wild creatures of the wilderness—from the raven to the mountain goat. Rather than presenting a conventional theological treatise, God expands Job's horizon, demonstrating that the universe is governed by an infinite, intricate, and awe-inspiring design far surpassing human intellectual comprehension. Job's demand for a court verdict is dissolved into profound reverent wonder.`,

    majorThemes: [
      {
        title: "Divine Sovereignty & Transcendent Mystery",
        description: "God's majesty and cosmic authority transcend simplistic human rubrics and conditional formulas."
      },
      {
        title: "The Limits of Human Wisdom",
        description: "Human intellectual faculties and moral expectations cannot fully encompass the intricate mechanics of creation."
      },
      {
        title: "The Problem of Innocent Suffering (Theodicy)",
        description: "Suffering is not merely a mechanical punishment for sin, challenging orthodox retributive dogma."
      },
      {
        title: "Cosmic Order and Wild Majesty",
        description: "Creation contains spaces of chaotic grandeur designed not exclusively for human utility, but for divine delight."
      }
    ],

    keyFigures: [
      {
        name: "Yahweh / The Lord",
        role: "The Creator",
        description: "Answers Job out of the violent whirlwind, employing dazzling poetic irony and cosmological interrogation."
      },
      {
        name: "Job",
        role: "The Righteous Sufferer",
        description: "A prosperous, upright man of Uz who endures catastrophic loss yet refuses to curse God, demanding an honest explanation."
      },
      {
        name: "The Three Friends",
        role: "Dogmatic Theologians",
        description: "Eliphaz, Bildad, and Zophar, who insist Job must be guilty of hidden sin to justify his intense suffering."
      },
      {
        name: "Elihu",
        role: "The Young Intervenor",
        description: "A youth who speaks before God's sudden epiphany, hinting at divine grandeur in atmospheric phenomena."
      }
    ],

    literarySignificance: `Job 38 is heralded worldwide as an unprecedented masterpiece of sublime ancient poetry. Its rhythm, dramatic pacing, and vivid cosmological imagery directly influenced John Milton's *Paradise Lost*, William Blake's illustrations, and modern existentialist thought. It refuses facile moral reductions, providing a timeless meditation on suffering, faith, and cosmic proportion.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",
    
    lensGuidance: "Suggested lens to consider: Theological / Deconstructive / Existentialist / Psychoanalytic Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for Job 38 here."
  },
  {
    id: "panchatantra",
    slug: "panchatantra",
    number: "02",
    title: "The Panchatantra",
    author: "Traditionally attributed to Vishnu Sharma",
    sourceInfo: "Indian Fables and Folklore (Niti-shastra)",
    genre: "Sanskrit Beast Fables, Frame Narrative & Didactic Wisdom",
    period: "c. 3rd Century BCE – 3rd Century CE",
    region: "Ancient India",
    coverImage: "/images/panchatantra-bg.jpg",
    imageCaption: "Classical illustration of sage Vishnu Sharma with the iconic animals of the Panchatantra: Pingalaka the lion, Sanjivaka the bull, the crow, and the monkey.",
    epigraph: "“Whoever learns this work and masters its lore shall never be outwitted, not even by Indra, king of heaven.” — Panchatantra Prologue",

    historicalBackground: `The *Panchatantra* is an ancient Sanskrit collection of interrelated animal fables compiled over centuries and traditionally attributed to the venerable sage Vishnu Sharma. Conceived as a curriculum in *niti* (wise conduct, pragmatic ethics, and statecraft), it was composed at the request of King Amarasakti to educate his three dull-witted sons in diplomacy, governance, human psychology, and survival. 

The work pioneered the sophisticated nested frame-story narrative technique—tales within tales—centuries before *One Thousand and One Nights* and Chaucer's *Canterbury Tales*. Migrating across continents through Pahlavi, Syriac, Arabic (*Kalila wa-Dimna*), and Latin translations, it formed the foundational bedrock of global beast fables.`,

    storyOverview: `The work is organized into five distinct books (*pancha* = five, *tantra* = treatises):
1. **Mitra-bheda (The Loss of Friends)**: Explores how courtly envy and malicious deceit sever the deep camaraderie between a noble lion king (Pingalaka) and a gentle bull (Sanjivaka).
2. **Mitra-laabha (The Winning of Friends)**: Demonstrates how creatures of vastly different natures—a crow, a rat, a turtle, and a deer—achieve impossible safety through mutual loyalty and teamwork.
3. **Sandhi-vigraha (Of Crows and Owls / War and Peace)**: A strategic allegory on espionage, tactical betrayal, and the politics of state conflict.
4. **Labdhapranasam (Loss of What Was Won)**: The story of the monkey and the crocodile, revealing how mental resourcefulness overcomes physical peril.
5. **Apariksitakaraka (Ill-Considered Action)**: The tragic tale of the loyal mongoose killed in haste, warning against rash emotional impulse without rational scrutiny.`,

    majorThemes: [
      {
        title: "Pragmatic Wisdom & Statecraft (Niti)",
        description: "Real-world ethics, diplomacy, and survival depend upon practical intelligence rather than naive idealism."
      },
      {
        title: "The Peril and Power of Friendship",
        description: "True alliances empower the vulnerable, while slander and court intrigue can shatter the strongest bonds."
      },
      {
        title: "Intellect vs. Brute Strength",
        description: "In nature as in human society, mental agility and cunning repeatedly outwit overwhelming physical power."
      },
      {
        title: "The Danger of Hasty Judgment",
        description: "Decisions made on superficial assumptions invariably lead to remorse and irreparable tragedy."
      }
    ],

    keyFigures: [
      {
        name: "Vishnu Sharma",
        role: "The Master Narrator",
        description: "The 80-year-old scholar who undertakes the pedagogical mission to awaken royal princes through storytelling."
      },
      {
        name: "Damanaka & Karataka",
        role: "The Scheming Jackals",
        description: "Two jackal ministers representing Machiavellian political ambition and moral calculation in the lion's court."
      },
      {
        name: "King Pingalaka",
        role: "The Lion King",
        description: "A mighty yet credulous sovereign whose vulnerability to manipulation precipitates tragedy."
      },
      {
        name: "Sanjivaka",
        role: "The Innocent Bull",
        description: "A faithful friend whose gentleness and virtue are weaponized against him by court conspirators."
      }
    ],

    literarySignificance: `The *Panchatantra* is one of the most translated and influential secular literary works in human history. Beyond entertaining moral fables, it represents a profound psychological treatise on human motivation, institutional politics, survival instincts, and the enduring power of narrative pedagogy.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",

    lensGuidance: "Suggested lens to consider: Structuralist / Marxist / Political-Philosophical / Sociological Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for The Panchatantra here."
  },
  {
    id: "mahabharata",
    slug: "mahabharata",
    number: "03",
    title: "The Mahabharata",
    author: "Traditionally attributed to Vyasa",
    sourceInfo: "Indian Epic Literature (Itihasa)",
    genre: "Sanskrit Epic Poetry, Philosophical Dialogue & Cultural Encyclopedia",
    period: "c. 4th Century BCE – 4th Century CE",
    region: "Ancient India (Bharatavarsha)",
    coverImage: "/images/mahabharata-bg.jpg",
    imageCaption: "Sacred Indian epic depiction of the Kurukshetra war chariot of Lord Krishna and Arjuna, surrounded by divine figures and classical traditions.",
    epigraph: "“What is found here may be found elsewhere; what is not found here is nowhere else.” — Mahabharata, Adi Parva",

    historicalBackground: `Spanning over 100,000 verses (*shlokas*)—making it roughly ten times the length of the *Iliad* and *Odyssey* combined—the *Mahabharata* is the grandest epic of world literature. Attributed to Krishna Dvaipayana Vyasa and evolving across centuries in ancient India, it is categorized as *Itihasa* ("thus indeed it was"), blending historical memory, cosmic mythology, genealogical history, and moral philosophy. 

Set at the transitional cusp between the Dvapara Yuga and the dark Kali Yuga, the epic captures an era when ancient moral certainties crack under the weight of human ambition, familial jealousy, and conflicting codes of honor. At its philosophical nucleus lies the *Bhagavad Gita*, an immortal dialogue delivered on the precipice of war.`,

    storyOverview: `The core narrative documents the catastrophic dynastic dispute between two sets of royal cousins: the five righteous Pandavas (Yudhishthira, Bhima, Arjuna, Nakula, and Sahadeva) and the one hundred Kauravas, spearheaded by the covetous Duryodhana. Following a rigged game of dice where the Pandavas lose their kingdom, their freedom, and their shared wife Draupadi is publicly humiliated in the royal assembly, the Pandavas endure twelve years of forest exile plus a year in disguise. 

When Duryodhana adamantly refuses to return even five villages of land, all peaceful diplomacy mediated by Krishna fails. The conflict erupts into the catastrophic 18-day Kurukshetra War, an apocalypse that consumes kings, mentors, brothers, and sons, leaving the victorious Pandavas to rule over a desolate, grief-stricken empire and ponder the heavy paradox of worldly victory.`,

    majorThemes: [
      {
        title: "The Subtle Complexities of Dharma",
        description: "Moral duty is seldom simple; in moments of crisis, righteous action often requires painful ethical trade-offs."
      },
      {
        title: "Karma, Destiny, and Free Will",
        description: "Actions carry inexorable cosmic reactions across generations, yet individuals must exercise moral agency."
      },
      {
        title: "The Devastating Cost of Unchecked Greed",
        description: "Pride, covetousness, and humiliation fester into an all-consuming fire that destroys civilization itself."
      },
      {
        title: "Spiritual Renunciation & The Bhagavad Gita",
        description: "Selfless action without attachment to results (*nishkama karma*) stands as the ultimate spiritual refuge."
      }
    ],

    keyFigures: [
      {
        name: "Arjuna",
        role: "The Peerless Archer",
        description: "The third Pandava brother whose profound crisis of conscience on the battlefield elicits the *Bhagavad Gita*."
      },
      {
        name: "Lord Krishna",
        role: "Divine Charioteer & Avatar",
        description: "The incarnation of Vishnu who guides Arjuna, articulating universal ethics, cosmic truth, and detached duty."
      },
      {
        name: "Yudhishthira",
        role: "Dharmaraja (King of Righteousness)",
        description: "The eldest Pandava, renowned for adherence to truth, yet plagued by a fatal weakness for high-stakes gambling."
      },
      {
        name: "Duryodhana",
        role: "Kaurava Crown Prince",
        description: "The proud, unyielding antagonist driven by envy and refusal to yield even a needle-point of territory."
      },
      {
        name: "Draupadi",
        role: "Queen of the Pandavas",
        description: "The spirited heroine born of sacred sacrificial fire whose righteous indignation drives the momentum of retributive justice."
      }
    ],

    literarySignificance: `The *Mahabharata* is not simply an epic; it is a monumental mirror held up to human consciousness. It rejects easy black-and-white moral judgments, presenting deeply flawed heroes and sympathetic antagonists, probing every facet of governance, devotion, loss, and existential duty.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",

    lensGuidance: "Suggested lens to consider: Post-Colonial / Deconstructive / Moral-Philosophical / Feminist Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for The Mahabharata here."
  },
  {
    id: "the-iliad",
    slug: "the-iliad",
    number: "04",
    title: "The Iliad",
    author: "Homer",
    sourceInfo: "Greek Epic Poetry",
    genre: "Ancient Greek Heroic Epic (Dactylic Hexameter)",
    period: "c. 8th Century BCE",
    region: "Ancient Greece / Aegean World",
    coverImage: "/images/iliad-bg.jpg",
    imageCaption: "Classical painting of heroic Greek warriors clashing with shields and spears before the fortified citadel walls of Troy.",
    epigraph: "“Rage—Goddess, sing the rage of Peleus’ son Achilles, murderous, doomed, that cost the Achaeans countless losses...” — Iliad, Book 1",

    historicalBackground: `Attributed to the shadowy blind bard Homer and crystallized during the 8th century BCE after centuries of oral composition by wandering rhapsodes, the *Iliad* is the foundational masterpiece of Western epic poetry. Rooted in the heroic bronze age legends of the Mycenaean civilization and the legendary siege of Ilium (Troy), the epic was composed in sweeping dactylic hexameter. 

Rather than covering the entire ten-year Trojan War, Homer crafts an intensely focused dramatic portrait spanning a mere fifty-four days during the war's final year. The heroic ethos of archaic Greece—predicated upon *kleos aphthiton* (imperishable glory), *timē* (honor and social standing), and *aristeia* (battlefield excellence)—is scrutinized in all its breathtaking majesty and horrific savagery.`,

    storyOverview: `The epic ignites with the catastrophic quarrel between King Agamemnon, the arrogant commander-in-chief of the Greek army, and Achilles, Greece's supreme warrior. When Agamemnon publicly dishonors Achilles by seizing the captive maiden Briseis, Achilles withdraws from combat in wrathful isolation, praying that the Trojans push the Greeks to the brink of annihilation so his indispensable military value is undeniable. 

Without Achilles, the Achaean front crumbles. Desperate to rally the Greeks, Achilles' beloved companion Patroclus enters the fray clad in Achilles' armor, only to be slain by the noble Trojan champion Hector. Shattered by overwhelming grief and vengeance, Achilles rejoins the slaughter, butchers Hector, and defiles his corpse. The epic reaches its magnificent emotional zenith when Hector's grief-stricken father, King Priam, sneaks into Achilles' tent at night to kiss the hands that murdered his son, leading both men to weep together over the tragic frailty of human life.`,

    majorThemes: [
      {
        title: "The Destructive Rage of Achilles (Mēnis)",
        description: "The catastrophic consequences of uncontrollable anger, wounded pride, and alienating wrath."
      },
      {
        title: "Heroic Honor vs. Mortality (Kleos and Thanatos)",
        description: "Warriors accept imminent death in exchange for eternal renown in the songs of future generations."
      },
      {
        title: "The Horrific Brutality and Pity of War",
        description: "Homer captures combat with unflinching anatomical realism, depicting the sorrow of families torn apart."
      },
      {
        title: "Shared Humanity Across Enemy Lines",
        description: "The climactic meeting between Achilles and Priam reveals transcendent empathy bridging mortal enemies."
      }
    ],

    keyFigures: [
      {
        name: "Achilles",
        role: "The Supreme Greek Hero",
        description: "Semi-divine warrior whose existential wrath, incandescent battlefield dominance, and tragic vulnerability define the epic."
      },
      {
        name: "Hector",
        role: "Trojan Prince and Defender",
        description: "Troy's finest warrior, loving husband to Andromache, and devoted father, fighting not for pride but for his homeland."
      },
      {
        name: "Agamemnon",
        role: "Greek Commander-in-Chief",
        description: "Power-hungry king of Mycenae whose insecure arrogance ignites Achilles' disastrous mutiny."
      },
      {
        name: "Patroclus",
        role: "Beloved Companion",
        description: "Achilles' gentle, fiercely loyal friend whose sacrificial intervention shifts the tide of history."
      },
      {
        name: "Priam",
        role: "King of Troy",
        description: "The aged monarch whose extraordinary courage and fatherly love overcome hatred to ransom his son's body."
      }
    ],

    literarySignificance: `The *Iliad* laid the architectural foundation for European dramatic and poetic structure. From its extended epic similes to its complex exploration of fate, mortality, and compassion, it continues to serve as world literature's most unflinching meditation on human glory and vulnerability.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",

    lensGuidance: "Suggested lens to consider: Archetypal / Psychoanalytic / Historical-Biographical / Humanist Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for The Iliad here."
  },
  {
    id: "the-odyssey",
    slug: "the-odyssey",
    number: "05",
    title: "The Odyssey",
    author: "Homer",
    sourceInfo: "Greek Epic Poetry",
    genre: "Ancient Greek Epic Poetry, Voyage Narrative & Mythological Adventure",
    period: "c. 8th Century BCE",
    region: "Ancient Mediterranean / Greece",
    coverImage: "/images/odyssey-bg.jpg",
    imageCaption: "Classical engraving of King Odysseus armed with sword and shield standing at the prow of his ship upon approaching Ithaca.",
    epigraph: "“Sing to me of the man, Muse, the man of twists and turns driven time and again off course, once he had plundered the hallowed heights of Troy.” — Odyssey, Book 1",

    historicalBackground: `Serving as the counterpart and narrative sequel to the martial tragedy of the *Iliad*, Homer's *Odyssey* shifts the epic lens from the blood-soaked battlefield of Troy to the perilous sea lanes and domestic hearths of the wider Mediterranean world. Composed in dactylic hexameter during the Greek Renaissance of the 8th century BCE, the work reflects the burgeoning maritime voyages, colonial expeditions, and cultural encounters of the era. 

Where the *Iliad* celebrated Achilles' brute strength and battlefield fury (*bie*), the *Odyssey* elevates *metis*—cunning intellect, linguistic adaptability, patience, and disguise. Central to the epic's moral universe is the sacred institution of *xenia* (guest-host hospitality), protected by Zeus Xenios, which serves as the ultimate litmus test for human civilization.`,

    storyOverview: `The narrative tracks the agonizing ten-year voyage of Odysseus, King of Ithaca, as he strives to return home after the fall of Troy. Presumed dead after twenty years of total absence, his palace is infested by over a hundred arrogant suitors who devour his estate and harass his faithful queen, Penelope, while his maturing son Telemachus journeys across Greece seeking news of his father. 

Through nonlinear narrative and captivating first-person flashbacks in the court of the Phaeacians, Odysseus recounts his encounters with legendary monsters and enchantresses: blinding the one-eyed Cyclops Polyphemus, resisting the deadly song of the Sirens, navigating between Scylla and Charybdis, enduring the sorceress Circe, traveling to the underworld (Nekuia) to consult Tiresias, and languishing on the island of Calypso. Arriving disguised as an impoverished beggar in Ithaca, Odysseus tests the loyalty of his household, joins forces with Telemachus and loyal servants, strings his legendary great bow, slaughters the suitors, and joyfully reunites with Penelope.`,

    majorThemes: [
      {
        title: "Nostos (The Longing for Homecoming)",
        description: "The profound emotional, spiritual, and physical yearning to return to one's homeland, roots, and family."
      },
      {
        title: "Metis (Cunning Intellect and Resourcefulness)",
        description: "Survival and victory belong to the strategist who exercises mental agility, patience, and disguise."
      },
      {
        title: "Xenia (Hospitality and Moral Order)",
        description: "The sacred moral duty to welcome strangers and respect domestic bounds defines civilized humanity."
      },
      {
        title: "Identity, Disguise, and Recognition (Anagnorisis)",
        description: "True character is revealed not through outward pomp, but through endurance, loyalty, and discernment."
      }
    ],

    keyFigures: [
      {
        name: "Odysseus",
        role: "King of Ithaca",
        description: "The polytropos ('man of twists and turns'), renowned for cunning intellect, rhetorical mastery, and endurance."
      },
      {
        name: "Penelope",
        role: "Queen of Ithaca",
        description: "Odysseus' brilliant and steadfast wife whose shroud-weaving trick keeps rapacious suitors at bay."
      },
      {
        name: "Telemachus",
        role: "Odysseus' Son",
        description: "A young prince who transitions from passive grief into confident manhood to protect his ancestral home."
      },
      {
        name: "Athena",
        role: "Goddess of Wisdom",
        description: "Odysseus' divine patron who admires his strategic mind and aids in orchestrating his triumphant return."
      },
      {
        name: "Poseidon",
        role: "God of the Sea",
        description: "The divine antagonist whose relentless wrath delays Odysseus after the hero blinds his son, Polyphemus."
      }
    ],

    literarySignificance: `The *Odyssey* is the archetypal wanderer's tale that shaped the hero's journey in world literature. Pioneering nonlinear structure, interior monologues, unreliable narration, and the myth of home, it influenced James Joyce's *Ulysses*, Dante's *Inferno*, and countless cinematic and literary adaptations.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",

    lensGuidance: "Suggested lens to consider: Mythological / Archetypal / Psychological / Reader-Response Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for The Odyssey here."
  },
  {
    id: "the-song-of-roland",
    slug: "the-song-of-roland",
    number: "06",
    title: "The Song of Roland",
    author: "Anonymous",
    sourceInfo: "Medieval Epic Poetry (La Chanson de Roland)",
    genre: "Old French Epic Poetry, Chanson de Geste & Chivalric Romance",
    period: "c. late 11th Century (c. 1098–1100)",
    region: "Medieval France / Western Europe",
    coverImage: "/images/roland-bg.jpg",
    imageCaption: "Medieval artwork and illuminated tapestry depicting Count Roland, Charlemagne, and the chivalric warriors of the Battle of Roncevaux Pass.",
    epigraph: "“Roland is valiant and Oliver is wise, and both are men of amazing prowess.” — The Song of Roland, Verse 87",

    historicalBackground: `Composed anonymously in Old French during the late 11th century (at the dawn of the First Crusade), *The Song of Roland* (*La Chanson de Roland*) is the oldest and greatest surviving masterpiece of the French *chansons de geste* ("songs of heroic deeds"). 

While the poem is loosely based on a historical ambush in 778 CE where Basque mountain warriors attacked the rearguard of King Charlemagne's army in the Pyrenees mountains, the 11th-century epic transforms the event into a momentous religious and national confrontation between Christian crusader chivalry and the Saracen forces of Spain. The poem provides an invaluable window into High Middle Ages feudalism, the sacred bond of vassalage, code of chivalry, and heroic martyrdom.`,

    storyOverview: `After seven years of successful campaigning in Spain, Emperor Charlemagne prepares to return home to Aix, accepting a peace proposal from Marsile, the Muslim king of Saragossa. Roland, Charlemagne's brilliant yet reckless nephew, nominates his resentful stepfather Ganelon to undertake the hazardous embassy to finalize the treaty. Suspecting Roland intended to send him to his death, Ganelon plots treacherous revenge, secretly conspiring with Marsile to ambush the French rearguard under Roland's command in the mountain pass of Roncevaux. 

When the 20,000 rear troops are overwhelmed by an army of hundreds of thousands, Roland's wise companion Oliver urges him to sound his ivory horn (*olifant*) to summon Charlemagne. Bound by proud heroic honor, Roland stubbornly refuses to blow the horn until his entire army lies butchered. Roland finally blows the olifant with such superhuman force that his temples burst. Dying with his face turned toward Spain and holding up his glove to God, angels descend to carry Roland's soul directly to paradise, after which Charlemagne returns to conquer the enemy and execute the traitor Ganelon.`,

    majorThemes: [
      {
        title: "Feudal Loyalty and Chivalric Code",
        description: "The absolute sanctity of the oath binding knight to lord, peer to peer, and soul to God."
      },
      {
        title: "Valor vs. Prudence (Roland vs. Oliver)",
        description: "The eternal tension between audacious battlefield heroism (*prowess*) and prudent restraint (*wisdom*)."
      },
      {
        title: "Treason, Betrayal, and Retribution",
        description: "Ganelon's personal resentment violates sacred feudal law, requiring divine judicial trial by combat."
      },
      {
        title: "Martyrdom and Holy War",
        description: "The high medieval belief that dying for the Christian empire guarantees instantaneous salvation in heaven."
      }
    ],

    keyFigures: [
      {
        name: "Count Roland",
        role: "Charlemagne's Champion",
        description: "Heroic nephew of the emperor, peer of France, fearless warrior whose tragic flaw is excessive chivalric pride."
      },
      {
        name: "Oliver",
        role: "The Wise Peer",
        description: "Roland's closest companion and moral foil, exemplifying temperance, strategic foresight, and noble valor."
      },
      {
        name: "Charlemagne",
        role: "Holy Roman Emperor",
        description: "The majestic, two-hundred-year-old patriarchal ruler whose profound sorrow over his fallen knights reflects royal burden."
      },
      {
        name: "Ganelon",
        role: "The Treasonous Vassal",
        description: "Roland's proud stepfather whose jealous feud drives him to commit the definitive act of feudal betrayal."
      },
      {
        name: "Archbishop Turpin",
        role: "Militant Cleric",
        description: "Warrior-priest who absolves the knights before battle and slays scores of enemies before his own heroic death."
      }
    ],

    literarySignificance: `*The Song of Roland* crystallized the medieval chivalric ideal, defining the French national epic tradition. It stands as a profound study in the tragic price of human hubris, the nature of comradeship, and the cultural worldview of medieval feudal Europe.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",

    lensGuidance: "Suggested lens to consider: Historical / Sociological / Religious-Theological / Cultural Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for The Song of Roland here."
  },
  {
    id: "the-tale-of-genji",
    slug: "the-tale-of-genji",
    number: "07",
    title: "The Tale of Genji",
    author: "Murasaki Shikibu",
    sourceInfo: "Japanese Classical Literature (Genji Monogatari)",
    genre: "Heian Classical Court Novel, Psychological Romance & Monogatari",
    period: "c. early 11th Century (Heian Period)",
    region: "Classical Japan (Heian-kyō / Kyoto)",
    coverImage: "/images/genji-bg.jpg",
    imageCaption: "Classical Japanese Yamato-e gold-leaf painting illustrating Prince Genji, Lady Murasaki, and court maidens in the imperial palace garden.",
    epigraph: "“In the world there are many who are sensitive to the beauty of flowers and the sadness of the moon...” — Murasaki Shikibu",

    historicalBackground: `Written during the golden dawn of the 11th century by Murasaki Shikibu, a noblewoman and lady-in-waiting at the imperial court of Empress Shōshi in Kyoto, *The Tale of Genji* (*Genji Monogatari*) is widely celebrated by literary historians as the world's first psychological novel. 

Composed in the vernacular Japanese script (*kana*) developed primarily by women—who were excluded from official Chinese scholarly study—the novel comprises 54 chapters spanning multiple generations. It reflects the supreme aesthetic refinement of the Heian aristocracy, steeped in Buddhist concepts of impermanence (*anicca* / *mujō*), karmic cause and consequence, and the exquisite bittersweet awareness of the transience of all worldly beauty (*mono no aware*).`,

    storyOverview: `The novel depicts the romantic, social, and political life of Hikaru Genji ("The Shining Prince"), the impossibly handsome and artistically gifted son of Emperor Kiritsubo. Demoted to commoner status for astrological reasons and given the clan name Minamoto, Genji navigates the delicate maze of courtly protocol, aristocratic factionalism, and romantic pursuits. 

Haunted by the memory of his deceased mother, Genji pursues illicit liaisons—most fatefully with his stepmother, Lady Fujitsubo, with whom he fathers a secret child who later ascends the throne. He discovers and raises the young Lady Murasaki, who becomes his lifelong soulmate and emotional anchor. As Genji ages, the fleeting illusions of courtly splendor give way to political exile, profound grief over the death of Murasaki, and spiritual disillusionment. The final third of the novel (the Uji chapters) follows Genji's descendants, exploring an even darker, more melancholic world of unrequited passion and Buddhist renunciation.`,

    majorThemes: [
      {
        title: "Mono no Aware (The Pathos of Transience)",
        description: "A deep, bittersweet aesthetic sensitivity to the fleeting nature of beauty, love, and life itself."
      },
      {
        title: "Karmic Consequence and Retribution",
        description: "Hidden indiscretions and emotional betrayals inevitably manifest across generations through karmic law."
      },
      {
        title: "The Psychological Realism of Women's Lives",
        description: "Unprecedented interior insight into the vulnerability, jealousy, isolation, and intellect of court women."
      },
      {
        title: "Artistic Refinement as Spiritual Language",
        description: "Poetry (waka), calligraphy, scent, and painting serve as the primary currencies of authentic human intimacy."
      }
    ],

    keyFigures: [
      {
        name: "Hikaru Genji",
        role: "The Shining Prince",
        description: "The radiant protagonist celebrated for beauty, musical talent, poetic grace, and restless romantic quests."
      },
      {
        name: "Lady Murasaki",
        role: "Genji's True Soulmate",
        description: "Discovered as a young girl and nurtured by Genji, she represents the pinnacle of feminine grace and endurance."
      },
      {
        name: "Lady Fujitsubo",
        role: "Imperial Consort",
        description: "Genji's father's consort whose forbidden connection with Genji generates lifelong remorse and secret royal lineage."
      },
      {
        name: "Lady Rokujō",
        role: "Aristocratic Lover",
        description: "A refined, proud woman whose repressed agony and jealousy inadvertently manifest as a living spirit (*ikiryō*)."
      },
      {
        name: "Murasaki Shikibu",
        role: "The Author",
        description: "Heian court noblewoman whose keen sociological eye and psychological depth pioneered the art of the modern novel."
      }
    ],

    literarySignificance: `*The Tale of Genji* is universally acclaimed as the supreme masterpiece of Japanese classical literature. Anticipating modern psychological fiction by nearly eight centuries, Murasaki Shikibu created a breathtakingly complex tapestry of human desire, grief, aesthetics, and metaphysical transience.`,

    // Academic Placeholders for Nathaniel's Work
    literaryLensPlaceholder: "[INSERT MY LITERARY LENS]",
    analysisPlaceholder: "[INSERT MY ORIGINAL ANALYSIS]",

    lensGuidance: "Suggested lens to consider: Feminist / Psychological / Aesthetic / Cultural-Historical Lens",
    analysisGuidance: "Paste your full written paper, close reading, thematic synthesis, and textual arguments for The Tale of Genji here."
  }
];

/**
 * FAVORITE LITERARY MASTERPIECE DATA
 * Fully written and completed academic presentation for Homer's The Odyssey.
 */
export const favoriteMasterpieceData = {
  pageTitle: "My Favorite Literary Masterpiece",
  subtitle: "Personal Selection, Critical Resonance, and Enduring Meaning",
  
  // Selected Masterpiece Credentials
  title: "The Odyssey",
  author: "Homer",
  category: "Ancient Greek Epic Poetry",
  period: "c. 8th Century BCE",
  region: "Ancient Mediterranean / Greece",
  coverImage: "/images/odyssey-bg.jpg",
  imageCaption: "Classical engraving of King Odysseus armed with sword and shield standing at the prow of his ship upon approaching Ithaca.",
  epigraph: "“Sing to me of the man, Muse, the man of twists and turns driven time and again off course, once he had plundered the hallowed heights of Troy.” — Homer, The Odyssey (Book 1)",

  introductoryLead: "Throughout our exploration of the Great Books curriculum, each masterpiece offered profound glimpses into different cultures, philosophical dilemmas, and artistic traditions. Yet, among all the texts we studied, Homer's The Odyssey resonated with me on the deepest level. It is an extraordinary epic that balances sweeping mythological adventure with intimate, timeless reflections on human vulnerability, perseverance, intellect, and the enduring meaning of home.",

  // Section A: Story Overview and Narrative Significance
  storyOverview: `Homer’s The Odyssey chronicles the epic ten-year journey of Odysseus, King of Ithaca, as he strives to return to his homeland following the fall of Troy in the Trojan War. While the Iliad captured the claustrophobic brutality of battlefield combat outside the walls of Ilium, The Odyssey opens up the vast and unpredictable expanse of the Mediterranean Sea, transforming narrative poetry into a dynamic world of maritime exploration, mythical encounters, and domestic crisis.

Presumed dead by virtually everyone in Ithaca after twenty years of total absence, Odysseus leaves behind a palace besieged by over a hundred arrogant suitors who are relentlessly consuming his estate and pressuring his steadfast wife, Penelope, into marriage, while his maturing son, Telemachus, struggles to protect their household. Across his perilous voyage, Odysseus confronts formidable mythical obstacles: outwitting the monstrous one-eyed Cyclops Polyphemus, resisting the deadly enchantment of the Sirens, escaping the sorceress Circe, navigating the treacherous straits between Scylla and the whirlpool Charybdis, traveling to the Underworld to consult Tiresias, and enduring seven agonizing years of captivity on the isolated island of Ogygia under the nymph Calypso.

The true significance of Odysseus’s journey, however, extends far beyond physical geography and nautical travel. It is a profound psychological and moral pilgrimage. Stripped of his royal soldiers, his ships, and his wealth, Odysseus must confront his own pride, learn emotional restraint, and choose the mortal vulnerabilities of family and duty over immortal ease. His ultimate return to Ithaca—disguised as an impoverished beggar—demands patience, humility, and moral discernment. The story proves that returning home is not simply a matter of arriving at a physical shore, but of rediscovering who you truly are and defending the bonds that define your humanity.`,

  // Section B: Reasons for Choosing This Masterpiece
  reasonsForChoosing: `As someone who naturally enjoys fiction and drama, The Odyssey immediately captured my attention. From the very first book, the story creates a world that is imaginative, immersive, and paced with suspense. Unlike conventional action narratives where heroes overpower every obstacle through sheer physical strength, Odysseus is compelling precisely because his greatest weapon is his mind. He survives because he observes, plans, adapts, and uses logic in moments of extreme crisis.

What makes The Odyssey my favorite masterpiece is how believable and human the characters feel despite the mythological setting. Odysseus is not a flawless, distant archetype; he makes real mistakes. His prideful decision to taunt Polyphemus after escaping nearly costs him his life and causes years of agonizing delays. Watching a legendary hero stumble, suffer the consequences of his actions, and gradually mature into a patient and thoughtful leader makes the epic deeply relatable. Furthermore, the narrative does not focus solely on Odysseus; it gives equal emotional weight to Penelope’s clever resistance and Telemachus’s coming-of-age journey. The story speaks directly to universal truths: that life rarely goes according to plan, that perseverance matters more than speed, and that the people we love are worth fighting for through every storm.`,

  // Section C: Significant Themes and Motifs
  themes: [
    {
      title: "Perseverance and Resilience",
      description: "Throughout twenty years of war and wandering, Odysseus faces repeated shipwrecks, the tragic loss of his comrades, and prolonged isolation. His defining quality is not immunity to grief, but the resilience to keep moving forward despite overwhelming despair. In The Odyssey, endurance is not passive waiting; it is an active, stubborn commitment to never give up on one's destination."
    },
    {
      title: "Loyalty and Family",
      description: "The emotional core of the epic rests upon mutual fidelity. Penelope’s unwavering loyalty to Odysseus—matched by Telemachus's defense of his father's honor and the loyalty of the swineherd Eumaeus—demonstrates that true loyalty requires immense courage and patience in the face of societal pressure."
    },
    {
      title: "Identity and Self-Discovery",
      description: "Odysseus’s identity is continually dismantled and reconstructed. When outsmarting the Cyclops, he declares his name is 'Nobody' (Outis), learning that survival sometimes requires casting aside pride. Upon returning to Ithaca disguised as a beggar, he must endure insults and observe his household, proving that true nobility lies in character rather than appearance."
    },
    {
      title: "Temptation and Self-Control",
      description: "From the addictive forgetfulness of the Lotus-Eaters and the hypnotic call of the Sirens to the intoxicating comforts of Calypso and Circe, the epic tests human restraint. Odysseus discovers that the greatest threats to reaching one's goals are often not violent monsters, but seductive distractions that tempt us to abandon our purpose."
    },
    {
      title: "Intelligence and Wisdom (Metis)",
      description: "In the Homeric worldview, metis—cunning intellect, tactical foresight, and resourcefulness—consistently triumphs over brute force (bie). Whether designing the Trojan Horse, escaping a locked cave, or timing his palace rebellion, Odysseus exemplifies the power of strategic thought over raw power."
    },
    {
      title: "Homecoming and Belonging (Nostos)",
      description: "The Greek concept of nostos transcends mere geographic return. It signifies the spiritual, emotional, and social reclamation of one's place in the world. Ithaca represents roots, community, shared memory, and moral responsibility—reminding us that external accomplishments mean little without a home to anchor them."
    }
  ],

  // Section D: Important Characters and Dramatic Agents
  characters: [
    {
      name: "Odysseus",
      role: "King of Ithaca & Protagonist",
      description: "The polytropos ('man of twists and turns'). Renowned for his sharp intellect, tactical mind, and rhetorical mastery, his character arc moves from reckless heroic pride to mature self-discipline, patience, and devotion to his family."
    },
    {
      name: "Penelope",
      role: "Queen of Ithaca",
      description: "Odysseus’s equal in intelligence, emotional fortitude, and strategic cunning. By promising to remarry only after weaving a burial shroud for Lord Laertes—which she secretly unravels each night—she outmaneuvers over a hundred suitors for years."
    },
    {
      name: "Telemachus",
      role: "Prince of Ithaca",
      description: "Odysseus’s son who begins as an anxious young man burdened by the suitors' tyranny. Mentored by Athena, he undertakes his own voyage to Pylos and Sparta, transforming into a courageous and capable warrior who fights side-by-side with his father."
    },
    {
      name: "Athena",
      role: "Goddess of Wisdom & Divine Patron",
      description: "The daughter of Zeus who champions Odysseus because she respects his intelligence and perseverance. Rather than solving his challenges for him, Athena acts as an empowering mentor, offering guidance, divine timing, and encouragement."
    },
    {
      name: "Poseidon",
      role: "God of the Sea & Antagonist",
      description: "Fierce and unforgiving, Poseidon relentlessly pursues vengeance against Odysseus for blinding his son, Polyphemus. He embodies the unpredictable, violent forces of nature and destiny that test the boundaries of human endurance."
    },
    {
      name: "Circe",
      role: "Sorceress of Aeaea",
      description: "A formidable goddess who initially turns Odysseus's crew into animals. Once confronted and won over by Odysseus, she becomes a hospitable ally and essential guide, offering invaluable advice about the Underworld and upcoming perils."
    },
    {
      name: "Calypso",
      role: "Sea Nymph of Ogygia",
      description: "Keeps Odysseus on her paradise island for seven years, offering him eternal youth and godhood if he stays. Her character represents the ultimate test of values: Odysseus willingly rejects immortality in favor of returning to his mortal life and family."
    }
  ],

  // Section E: Lessons Learned and Moral Insights
  lessons: [
    {
      title: "Never Giving Up Despite Difficulties",
      detail: "No matter how many times Odysseus is shipwrecked or pushed off course, he refuses to surrender hope. Adversity is an inevitable part of living, but determination is what carries us forward."
    },
    {
      title: "The Vital Importance of Patience",
      detail: "Rash emotional impulses almost always lead to disaster, whereas patient observation and calculated timing allow one to overcome seemingly insurmountable odds."
    },
    {
      title: "Remaining Loyal to the People Who Matter",
      detail: "Loyalty to family, principles, and trustworthy companions provides the moral compass that keeps us anchored through life’s storms."
    },
    {
      title: "Using Intelligence Rather Than Relying Only on Strength",
      detail: "Physical power can only accomplish so much; genuine leadership, problem-solving, and survival depend upon intellect, adaptability, and strategic clarity."
    },
    {
      title: "The Humility to Learn from Mistakes",
      detail: "Odysseus’s early arrogance taught him costly lessons. True wisdom is not about being infallible, but having the humility to learn from errors and change your behavior."
    },
    {
      title: "Understanding That Personal Growth Comes Through Challenges",
      detail: "Comfortable ease on Calypso’s island could never fulfill Odysseus. Our character, capabilities, and self-worth are forged through the trials we face and overcome."
    }
  ],

  // Section F: Personal Connections and Realizations
  personalConnections: `As a fourth-year Bachelor of Science in Computer Science student, reading The Odyssey felt surprisingly close to my own academic experience. When you begin a computer science degree, you set out with high enthusiasm, much like a sailor embarking on a journey. Over the years, however, you inevitably run into difficult programming languages, dense algorithmic logic, demanding semester projects, and long nights of debugging code that refuses to compile. There were times when a project felt like sailing into a storm, where progress seemed slow and setbacks were frustrating. In those moments, The Odyssey served as a vivid reminder that feeling lost or tested is not a sign of failure—it is simply part of the voyage.

Outside the classroom, my personal hobbies provide balance and reflect similar lessons. When I practice the guitar, I am constantly reminded that playing a song smoothly requires repeating difficult chords and building muscle memory patiently over time; there is no shortcut to mastery. Taking care of my plants has taught me a similar lesson in patience—you cannot rush nature, and growth happens through consistent, daily care. Even when relaxing with video games, watching TV series, occasionally playing basketball, or listening to music, I appreciate narratives and activities that require tactical problem-solving, teamwork, and persistence.

Reading books that focus on improving myself, understanding the world, and exploring human nature has always drawn me toward stories that emphasize personal growth. The Odyssey connects all these threads for me. Odysseus’s journey is a powerful metaphor for pursuing a long-term goal. Reaching graduation as a senior is my own milestone, representing four years of overcoming academic hurdles, learning from mistakes, and staying dedicated to the craft of technology. The epic proved to me that intellect without perseverance is incomplete; to reach any worthwhile destination, you must pair your technical mind with resilience and patience.`,

  // Section G: Overall Appreciation
  overallAppreciation: `Homer’s The Odyssey remains deeply meaningful to me because its wisdom has stood the test of nearly three thousand years. It is more than an ancient fable of monsters and gods; it is a masterclass in human resilience, strategic thinking, and emotional depth. As I prepare to graduate and step into the technology industry, the lessons of The Odyssey will continue to influence how I approach complex software engineering challenges, how I handle career setbacks, and how I maintain loyal relationships with family, friends, and colleagues. It has shown me that technical problem-solving and humanistic wisdom are not opposites, but natural partners that together create a purposeful life.`,

  // Section H: Closing Statement
  closingStatement: "Every journey in life brings unexpected storms, unforeseen setbacks, and difficult trials; but it is through perseverance, wisdom, and steadfast determination that we navigate the roughest seas and finally reach our destination."
};


/**
 * SUMMARY OF LEARNING DATA
 * "What Literature Has Taught Me"
 */
export const summaryOfLearningData = {
  pageTitle: "What Literature Has Taught Me",
  subtitle: "Intellectual Discoveries, Hermeneutic Tools, and Humanistic Insights",
  
  generalIntroduction: `The Great Books course stands as a transformative cornerstone in my undergraduate education. In an academic discipline like Computer Science—grounded primarily in mathematical formulas, binary architecture, software patterns, and computational optimization—the study of literature opened a vital complementary portal to human complexity. 

Through classical epics, ancient wisdom dialogues, didactic animal fables, and psychological court narratives, I learned that while technology provides the tools to solve specific problems, literature interrogates why we solve them and what kind of world we are building in the process. This synthesis summarizes the foundational competencies, hermeneutic approaches, and humanistic discoveries cultivated across our academic semester.`,

  subsections: [
    {
      id: "understanding-masterpieces",
      number: "01",
      title: "Understanding Literary Masterpieces",
      academicOverview: "Engaging with classical texts requires moving past passive reading toward active, disciplined textual interrogation. A literary masterpiece endures across centuries not because it offers simplistic moral answers, but because it articulates fundamental human conflicts with extraordinary nuance, linguistic brilliance, and structural depth. From the cosmic interrogations of Job to the psychological subtleties of Genji, understanding a masterpiece involves decoding cultural contexts, genre conventions, rhetorical tropes, and intertextual echoes.",
      reflectionLabel: "My Classroom Experience & Examples",
      studentReflection: `Throughout my Great Books course, I explored literary masterpieces from different historical periods and cultures. These works helped me understand that literature is more than storytelling because it reflects people's beliefs, traditions, values, and experiences.

Each masterpiece taught me something different. Voice Out of the Whirlwind (Job 38) reminded me of human limitations and divine wisdom. The Panchatantra taught me the importance of wisdom and good decision-making, while The Mahabharata explored family relationships, responsibilities, and moral choices. The Iliad showed how pride and anger can lead to conflict, whereas The Odyssey highlighted perseverance and determination. The Song of Roland emphasized loyalty and courage, while The Tale of Genji explored human emotions and relationships.

Some of the classical works were challenging to understand because of their unfamiliar settings and cultural backgrounds. However, learning about their context helped me appreciate their meanings and lessons. Overall, Great Books made my reading experience more enjoyable and helped me become more open to different cultures and perspectives.`
    },
    {
      id: "literary-lenses",
      number: "02",
      title: "Application of Literary Lenses",
      academicOverview: "One of the most powerful analytical methodologies acquired in the course is the rigorous application of literary lenses (critical theories). Critical lenses—including Formalist, Historical-Biographical, Moral-Philosophical, Psychological (Freudian/Jungian), Marxist, Feminist, and Deconstructive approaches—function like multifaceted optical prisms. Each lens illuminates hidden textual layers: power dynamics, repressed anxieties, patriarchal conventions, class struggles, or formal structural balance. Learning to shift between these critical paradigms develops the intellectual flexibility necessary to examine complex systems from multiple perspectives.",
      reflectionLabel: "My Application of Critical Theories",
      studentReflection: `One important thing I learned in Great Books is that literary works can be interpreted in different ways depending on the perspective used. Before taking this course, I usually focused on the storyline and characters. However, learning about literary lenses helped me discover deeper meanings behind the stories.

I became familiar with different approaches, including Formalist, Historical-Biographical, Moral-Philosophical, Psychological, Marxist, Feminist, and Deconstructive criticism. For example, a Moral-Philosophical approach can examine the difficult decisions in The Mahabharata, while a Psychological approach can explore the motivations of characters in The Iliad and The Odyssey. A Feminist approach can also examine women's roles and social expectations in The Tale of Genji.

Through these approaches, I realized that a single literary work can have different interpretations. This taught me to look beyond the surface of a story, consider different perspectives, and develop a deeper understanding of literature.`
    },
    {
      id: "reflection-of-humanity",
      number: "03",
      title: "Literature as a Reflection of Humanity",
      academicOverview: "Despite centuries of technological evolution and societal change, the core emotional architecture of humanity remains remarkably constant. Across disparate geographies and eras—from archaic Greece to feudal France and classical Japan—the Great Books chronicle our universal search for meaning, our dread of mortality, our capacity for catastrophic pride, and our yearning for fellowship, justice, and love. Literature serves as a living mirror of human vulnerability, demonstrating that our modern dilemmas are deeply woven into the historic human condition.",
      reflectionLabel: "My Reflections on Human Nature & Society",
      studentReflection: `One of my biggest realizations from Great Books is that literature reflects human emotions, relationships, beliefs, and struggles. Although the masterpieces we studied came from different cultures and historical periods, many of their lessons remain relevant today.

For example, Job 38 reminds us of our limitations, while The Panchatantra teaches wisdom and practical decision-making. The Mahabharata explores family responsibilities and difficult choices, while The Iliad shows how pride and anger can lead to conflict. The Odyssey highlights perseverance and loyalty, The Song of Roland emphasizes courage and honor, and The Tale of Genji explores emotions and relationships.

These stories helped me realize that despite differences in culture and time, people experience many similar challenges in life. As a student, I learned to become more understanding of others and appreciate different perspectives. Literature reminds me that understanding people requires patience, empathy, and an open mind.`
    },
    {
      id: "critical-thinking",
      number: "04",
      title: "Development of Critical Thinking",
      academicOverview: "Reading demanding classical literature fosters rigorous critical thinking: the capacity to suspend premature judgment, dissect nuanced subtexts, detect logical fallacies, and synthesize ambiguous moral dilemmas. Unlike straightforward algorithmic problems with single deterministic solutions, literature confronts the mind with productive contradictions. This analytical discipline directly enriches scientific inquiry and software development, instilling an appreciation for holistic reasoning, ethical responsibility, and nuanced problem formulation.",
      reflectionLabel: "My Growth in Critical Thinking & Problem Solving",
      studentReflection: `Throughout Great Books, I realized that reading and analyzing literary works helped improve my critical-thinking skills. I learned to look beyond the storyline, examine characters' motivations, understand themes, and consider different interpretations before forming conclusions.

As a BSCS student, I also noticed similarities between literary analysis and programming. In Computer Science, we break complicated problems into smaller parts to understand and solve them. Similarly, analyzing literature requires examining its characters, themes, conflicts, and context. Considering different literary lenses is also similar to exploring different approaches to solving a programming problem.

Another important lesson I gained is the value of supporting conclusions with evidence rather than simply making assumptions. This is useful both in literary analysis and in technical problem-solving.

Overall, Great Books taught me to become more patient, open-minded, and thoughtful when approaching challenges. I believe these skills will help me in my academic journey and future career in Computer Science, where understanding problems and considering different solutions are essential.`
    }
  ],

  keyTakeaways: [
    {
      icon: "Brain",
      title: "Cognitive Empathy",
      description: "Stepping into the psychological interior of diverse characters expands moral imagination and emotional intelligence."
    },
    {
      icon: "Eye",
      title: "Multidimensional Perspective",
      description: "Literary lenses prove that no single viewpoint monopolizes truth; complex phenomena demand multiple analytical angles."
    },
    {
      icon: "ShieldAlert",
      title: "Ethical Awareness",
      description: "Technological systems operate in human societies; literature clarifies the moral consequences of human creation."
    },
    {
      icon: "Feather",
      title: "Eloquence & Precision",
      description: "Mastery of close textual analysis directly sharpens oral expression, technical documentation, and persuasive rhetoric."
    }
  ]
};

/**
 * PERSONAL REFLECTION DATA
 * "Looking Back, Moving Forward"
 */
export const personalReflectionData = {
  pageTitle: "Looking Back, Moving Forward",
  subtitle: "Personal Insights, Intellectual Milestones, and Future Horizons",
  editorialIntroduction: "The completion of the Great Books journey offers an essential opportunity for deep, introspective synthesis. Here, I reflect candidly upon the intellectual transformations, reading challenges, methodological breakthroughs, and life realizations sparked by our semester's literary explorations.",

  questions: [
    {
      id: "q1",
      number: "01",
      question: "How has your understanding and appreciation of literature changed throughout the course?",
      contextGuide: "Reflect on how your perspective shifted from viewing literature as mere required reading or entertainment to recognizing it as an analytical art form and profound philosophical dialogue.",
      responseLabel: "My Response to Question 1",
      studentResponse: "Before taking Great Books, I mostly viewed literature as something we needed to read for academic requirements or entertainment. However, throughout the course, I realized that literary works offer more than just interesting stories. They contain meaningful lessons about life, culture, human emotions, and society. Reading masterpieces from different periods helped me understand different perspectives and appreciate the deeper meanings behind their stories. Now, I see literature as a way of understanding people and the world around me, not just something to read for school."
    },
    {
      id: "q2",
      number: "02",
      question: "What challenges did you encounter when reading and analyzing literary masterpieces, and how did you overcome them?",
      contextGuide: "Consider archaic language, cultural distances, philosophical density, time management alongside computer science coursework, and the strategies you adopted to master difficult texts.",
      responseLabel: "My Response to Question 2",
      studentResponse: "One challenge I encountered was understanding some literary works because of their unfamiliar language, historical backgrounds, and cultural references. Some stories also contained complicated characters and situations that required more time to understand. I overcame these challenges by reading carefully, reviewing important parts of the stories, and focusing on their main themes and messages. As a BSCS student, managing my academic responsibilities also required time management. Through patience and consistent effort, I was able to understand the works better and appreciate their lessons."
    },
    {
      id: "q3",
      number: "03",
      question: "Which literary lens or approach influenced your interpretation of literature the most? Why?",
      contextGuide: "Identify the critical lens (e.g., Moral-Philosophical, Psychological, Structuralist, Historical, Marxist, Feminist, etc.) that resonated most with your analytical mindset and explain its impact on your interpretations.",
      responseLabel: "My Response to Question 3",
      studentResponse: "The Moral-Philosophical approach influenced my interpretation of literature the most because it focuses on the values, decisions, and lessons presented in a story. I find it interesting to understand why characters make certain decisions and how their actions affect themselves and others. Through this approach, I learned to look beyond what happens in a story and reflect on its meaning in real life. It also helped me understand that literary works can teach valuable lessons about responsibility, morality, and human behavior."
    },
    {
      id: "q4",
      number: "04",
      question: "What important realizations about life, society, culture, or human nature have you gained?",
      contextGuide: "Synthesize the overarching truths you recognized across the seven masterpieces regarding justice, pride, mortality, power, loyalty, and human resilience.",
      responseLabel: "My Response to Question 4",
      studentResponse: "One important realization I gained is that people may come from different cultures and historical periods, but many of their struggles and emotions are similar. Through the masterpieces we studied, I learned about the importance of loyalty, perseverance, humility, wisdom, and understanding others. I also realized that pride, anger, and poor decisions can lead to serious consequences. These stories reminded me that life is not always easy, and that understanding different perspectives can help us become more patient, respectful, and open-minded."
    },
    {
      id: "q5",
      number: "05",
      question: "How can you apply the lessons and values learned from Great Books in your personal, academic, or future professional life?",
      contextGuide: "Bridge the humanistic lessons of literature with your future career as a computer scientist, software engineer, or technology leader—focusing on empathy, ethics, teamwork, and critical problem solving.",
      responseLabel: "My Response to Question 5",
      studentResponse: "I can apply the lessons from Great Books by becoming more patient, responsible, and understanding in my everyday life. As a BSCS student, I believe that critical thinking, problem-solving, and considering different perspectives are important not only in academics but also in my future career. The lessons about loyalty, perseverance, and responsibility can also guide me when working with other people and facing challenges. As I prepare for my future profession, I want to remember that being successful in technology is not only about having technical skills but also about having good values, empathy, and respect for others."
    }
  ]
};

/**
 * QUICK NAVIGATION SECTIONS (Used for Preview Cards on Homepage)
 */
export const portfolioSections = [
  {
    id: "profile",
    title: "Student Profile",
    subtitle: "About Nathaniel Jr. S. Alcantara",
    description: "Personal background, academic credentials in BS Computer Science, interests, reading experiences, and expectations.",
    link: "/profile",
    badge: "Personal Identity",
    icon: "User",
    accent: "sage"
  },
  {
    id: "analyses",
    title: "Literary Analyses",
    subtitle: "The Seven Masterpieces",
    description: "Comprehensive historical contexts, story overviews, themes, characters, and academic analysis placeholders for the 7 works.",
    link: "/analyses",
    badge: "Core Collection (7 Works)",
    icon: "BookOpen",
    accent: "gold"
  },
  {
    id: "favorite",
    title: "Favorite Masterpiece",
    subtitle: "Personal Literary Choice",
    description: "An editorial showcase dedicated to my selected crowning masterpiece, personal reasons, themes, and life realizations.",
    link: "/favorite",
    badge: "Featured Work",
    icon: "Sparkles",
    accent: "forest"
  },
  {
    id: "summary",
    title: "Summary of Learning",
    subtitle: "What Literature Has Taught Me",
    description: "Four academic pillars: understanding masterpieces, critical lenses, reflection of humanity, and development of critical thinking.",
    link: "/summary",
    badge: "Academic Synthesis",
    icon: "GraduationCap",
    accent: "sage"
  },
  {
    id: "reflection",
    title: "Personal Reflection",
    subtitle: "Looking Back, Moving Forward",
    description: "Honest retrospective addressing five deep questions on growth, challenges, critical lenses, and future applications in CS.",
    link: "/reflection",
    badge: "Retrospective",
    icon: "Compass",
    accent: "forest"
  }
];
