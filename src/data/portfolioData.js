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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Theological Lens",
    appliedLensDescription: "The Theological Lens examines how a literary work explores God, faith, divine wisdom, human limitations, and the relationship between humanity and the divine. This lens is appropriate for Job 38 because God speaks to Job through the whirlwind, challenging his understanding of creation and reminding him that human knowledge is limited compared to divine wisdom.",
    
    fullAnalysis: `The passage from Job 38 presents an important moment in the Book of Job, where God finally responds to Job out of a whirlwind. Throughout the earlier chapters, Job experiences tremendous suffering and questions why such hardships have happened to him despite his faithfulness. He struggles to understand the reason behind his suffering and seeks answers about God's justice. However, instead of directly explaining why these events happened, God responds by questioning Job about the creation and order of the universe.

Using the Theological Lens, Job 38 emphasizes the difference between divine wisdom and human understanding. God asks Job where he was when the foundations of the earth were established and whether he understands how the natural world operates. These questions demonstrate that human beings have limited knowledge of the universe and cannot fully comprehend everything that happens in life. The passage reminds readers that God's understanding extends far beyond human reasoning.

Another important theme in this chapter is humility. Job's suffering leads him to question the fairness of his situation, which is understandable considering the pain he has experienced. However, God's response encourages him to recognize that there are aspects of existence beyond his understanding. This does not necessarily mean that questioning or seeking answers is wrong. Rather, the passage highlights the importance of recognizing the limits of human knowledge when facing complicated situations.

Job 38 also presents creation as evidence of divine power and wisdom. Through descriptions of the earth, sea, light, darkness, weather, and other natural elements, God demonstrates the complexity and order of creation. These descriptions emphasize that the universe operates through a wisdom that humans cannot completely control or understand.

From a personal perspective, this chapter reminds me that not everything in life will have an immediate explanation. As a student, there are times when I encounter difficult situations or problems that I cannot easily understand. This passage encourages me to remain humble, patient, and open-minded rather than assuming that I already know everything. It also reminds me that having questions is part of learning, but accepting that some things are beyond my understanding is equally important.

As a whole, Job 38 teaches that human knowledge has limitations, while divine wisdom is greater than what people can comprehend. Through the Theological Lens, the passage encourages faith, humility, and respect for the complexity of creation. Its message remains meaningful because it reminds readers that understanding life requires not only knowledge but also patience and humility.`,

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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Moral-Philosophical Lens",
    appliedLensDescription: "The Moral-Philosophical Lens examines the values, ethical principles, and life lessons presented in a literary work. This approach is suitable for The Panchatantra because its stories teach readers about wisdom, honesty, friendship, trust, intelligence, and the importance of making responsible decisions.",

    fullAnalysis: `The Panchatantra is a collection of ancient Indian fables traditionally attributed to Vishnu Sharma. It uses stories, often featuring talking animals, to communicate practical wisdom and moral lessons. Through entertaining narratives and relatable situations, the work teaches readers about human behavior, relationships, leadership, and decision-making.

Using the Moral-Philosophical Lens, The Panchatantra demonstrates how wisdom and good judgment are important in everyday life. Many of its stories show characters facing difficult situations where their decisions determine what happens next. Some characters succeed because they use intelligence and carefully consider their actions, while others experience problems because of dishonesty, greed, pride, or poor judgment.

One important lesson from the collection is that intelligence is not always measured by physical strength or authority. A character who thinks carefully and understands a situation may overcome someone who appears more powerful. This teaches readers that knowledge, patience, and practical thinking are valuable qualities when dealing with challenges.

Another important theme is friendship and trust. The stories demonstrate that relationships require honesty, loyalty, and careful judgment. Trusting the wrong person or acting without considering the consequences can lead to misunderstandings and conflict. This reminds readers to be mindful of the people they trust and the decisions they make.

The collection also explores the consequences of human behavior. Greed, deception, arrogance, and selfishness often create problems for the characters. On the other hand, wisdom, cooperation, and honesty can lead to better outcomes. Through these examples, the stories encourage readers to reflect on their own actions and understand how their decisions can affect others.

From my perspective, I appreciate The Panchatantra because its lessons are simple to understand but meaningful in real life. Even though many of its stories involve animals, their behavior represents situations that people experience in everyday society. As a student, I can relate its lessons to making responsible decisions, thinking carefully before acting, and learning from mistakes.

As a whole, The Panchatantra teaches that wisdom is not simply about knowing many things but also about knowing how to apply that knowledge in different situations. Through the Moral-Philosophical Lens, the collection reminds readers that good judgment, honesty, and responsible behavior are important in building relationships and facing life's challenges.`,

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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Moral-Philosophical Lens",
    appliedLensDescription: "The Moral-Philosophical Lens examines the ethical values, beliefs, responsibilities, and moral conflicts presented in a literary work. This approach is appropriate for The Mahabharata because it explores the struggle between right and wrong, the importance of fulfilling one's duties, and the challenges of making decisions when personal interests conflict with moral responsibilities.",

    fullAnalysis: `The Mahabharata is one of the greatest ancient Indian epics, traditionally attributed to the sage Vyasa. It tells the story of the conflict between two groups of cousins, the Pandavas and the Kauravas, whose rivalry eventually leads to the great Kurukshetra War. Beyond its epic battles and heroic characters, the story explores important questions about morality, family, justice, loyalty, and human responsibility.

Using the Moral-Philosophical Lens, The Mahabharata demonstrates that making the right decision is not always easy. Throughout the story, characters face situations where their personal feelings, family relationships, and responsibilities conflict with what they believe is morally correct. These struggles show that human decisions often involve difficult consequences.

One important example is Arjuna's hesitation before the Kurukshetra War. He struggles with the idea of fighting against his own relatives, teachers, and loved ones. His situation raises an important question: should a person follow their duty even when doing so causes emotional suffering? Through Krishna's guidance in the Bhagavad Gita, the epic explores the importance of duty, righteous action, and fulfilling responsibilities without being controlled by personal attachment to the results.

Another important theme is justice and the consequences of greed and ambition. The rivalry between the Pandavas and Kauravas demonstrates how jealousy, selfishness, and the desire for power can destroy relationships and create suffering. Their conflict reminds readers that personal ambition without moral responsibility can lead to serious consequences.

The epic also explores the complexity of human nature. Its characters are not always completely good or completely evil. They experience doubts, make mistakes, and face difficult choices. This makes the story meaningful because it reflects the reality that people are sometimes caught between competing values and responsibilities.

Personally, I find the lessons of The Mahabharata meaningful because they remind me that decisions should not be based only on personal interests or emotions. As a student, I believe responsibility, honesty, and fairness are important in dealing with academic challenges and relationships with others. The story also reminds me that doing what is right can sometimes require courage, even when the decision is difficult.

Overall, The Mahabharata teaches that morality is not always simple and that every decision carries consequences. Through the Moral-Philosophical Lens, the epic encourages readers to reflect on their responsibilities, understand the importance of justice, and consider the effects of their actions on others.`,

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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Humanist Lens",
    appliedLensDescription: "The Humanist Lens focuses on human experiences, emotions, values, relationships, and personal struggles. It examines how characters represent different aspects of humanity, including their strengths, weaknesses, decisions, and moral responsibilities. This lens is appropriate for The Iliad because the epic portrays how pride, anger, love, honor, and grief influence human behavior, especially during times of conflict.",

    fullAnalysis: `The Iliad is an ancient Greek epic poem traditionally attributed to Homer. It focuses on the Trojan War, particularly the anger of Achilles and its consequences for the Greek warriors and the people of Troy. The story explores themes of honor, pride, revenge, friendship, courage, and the suffering caused by war.

Using the Humanist Lens, The Iliad reveals the complexity of human nature through the actions and emotions of its characters. Although the characters are known for their strength and bravery, they also experience anger, jealousy, grief, and personal struggles. This shows that even powerful heroes are not free from human weaknesses.

One important example is Achilles, whose anger becomes a major force throughout the epic. His conflict with Agamemnon causes him to withdraw from battle, placing the Greek army in a difficult position. His actions demonstrate how excessive pride and anger can affect not only an individual but also the people around them. Through Achilles, readers can understand the importance of controlling emotions and considering the consequences of personal decisions.

Another significant character is Hector, the Trojan prince who fights to defend his family and homeland. Unlike Achilles, whose actions are strongly influenced by personal honor and anger, Hector is also motivated by responsibility and love for his family. His character represents courage, loyalty, and the willingness to sacrifice for others. His farewell to his wife, Andromache, reveals the personal suffering that exists behind the glory of war.

The epic also demonstrates that war is not simply about victory and heroism. It involves loss, fear, suffering, and the destruction of human relationships. The encounter between Achilles and King Priam is especially meaningful because it shows how grief can create understanding even between enemies. When Priam asks for the body of his son Hector, Achilles recognizes their shared experience of losing someone they love. This moment highlights compassion and the humanity that can exist even during conflict.

From my perspective, The Iliad teaches me that emotions and personal decisions can have significant consequences. It reminds me that pride should not be more important than understanding others and that strength is not only measured by physical power but also by compassion and self-control.

Overall, The Iliad presents a powerful picture of human nature through its characters, conflicts, and emotional struggles. Through the Humanist Lens, the epic reminds readers that despite differences in status, power, and background, people share common experiences of love, anger, suffering, and loss. Its lessons remain relevant because these emotions and struggles are still part of human life today.`,

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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Archetypal Lens",
    appliedLensDescription: "The Archetypal Lens examines recurring symbols, characters, and patterns found in literature across different cultures and generations. It is appropriate for The Odyssey because Odysseus represents the archetypal hero who faces numerous trials, overcomes obstacles, and experiences personal growth throughout his journey. His adventure reflects universal human experiences such as perseverance, self-discovery, sacrifice, and the desire to find one's way home.",

    fullAnalysis: `The Odyssey is an ancient Greek epic poem traditionally attributed to Homer. It tells the story of Odysseus, a Greek hero who struggles to return to his homeland of Ithaca after the Trojan War. His journey takes many years and exposes him to dangerous creatures, powerful gods, unexpected temptations, and difficult challenges. Meanwhile, his wife, Penelope, and son, Telemachus, wait for his return.

Using the Archetypal Lens, The Odyssey represents the traditional hero's journey. Odysseus begins as a warrior returning from war, but his journey becomes a test of his intelligence, courage, patience, and determination. His experiences show that becoming a hero involves more than physical strength; it also requires wisdom and the ability to overcome personal weaknesses.

One important example is Odysseus's encounter with the Cyclops Polyphemus. Instead of relying entirely on physical strength, he uses intelligence and careful planning to escape. This demonstrates that wisdom and strategic thinking can be more effective than force when facing difficult situations.

Another important part of the epic is the temptation Odysseus encounters during his journey. His experiences with Circe and Calypso demonstrate how desires and distractions can prevent someone from reaching their goals. Despite these obstacles, his desire to return to Ithaca and reunite with his family remains strong.

The idea of homecoming is also central to the story. Ithaca represents more than a physical destination; it symbolizes belonging, family, identity, and the completion of a long personal journey. Odysseus's return reminds readers that reaching an important goal often requires patience, sacrifice, and perseverance.

From my perspective, The Odyssey is meaningful because I can relate Odysseus's journey to the challenges people experience in pursuing their goals. As a fourth-year Computer Science student, I understand that reaching an important destination requires continuous effort, learning, and determination. There are challenges along the way, but giving up should not be the first response whenever difficulties arise.

Overall, The Odyssey teaches that every journey involves obstacles and opportunities for growth. Through the Archetypal Lens, Odysseus represents the human desire to overcome challenges, discover oneself, and return to what truly matters. Its message reminds readers that success is not only about reaching a destination but also about the lessons learned throughout the journey.`,

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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Historical-Cultural Lens",
    appliedLensDescription: "The Historical-Cultural Lens examines how a literary work reflects the historical events, beliefs, traditions, and social values of the period in which it was written. This approach is appropriate for The Song of Roland because the epic reflects the ideals of medieval European society, particularly the importance of loyalty to one's king, religious devotion, bravery, and honor.",

    fullAnalysis: `The Song of Roland is an anonymous medieval French epic poem that tells the story of Roland, a brave knight serving Charlemagne, the King of the Franks. The narrative focuses on the Battle of Roncevaux Pass, where Roland and his fellow soldiers face an ambush by enemy forces while protecting the rear of Charlemagne's army. Despite being greatly outnumbered, Roland refuses to surrender and continues fighting with courage and determination.

Using the Historical-Cultural Lens, the epic reflects the values and beliefs of medieval European society. During this period, loyalty to one's ruler, religious faith, military service, and personal honor were considered important qualities. These values are clearly demonstrated through Roland's dedication to Charlemagne and his willingness to sacrifice his life for his king and fellow soldiers.

One important theme in the story is loyalty. Roland remains committed to his responsibilities as a knight even when facing overwhelming danger. His actions demonstrate the importance of serving one's leader and fulfilling one's obligations. However, his refusal to blow his horn, the oliphant, to request assistance also shows how excessive pride can influence decision-making. This suggests that courage must be balanced with wisdom.

Another significant theme is religious faith. The epic presents Christianity as an important part of the characters' identity and worldview. Their understanding of their responsibilities is strongly connected to their religious beliefs. This reflects the influence of Christianity on medieval European culture and literature.

The story also emphasizes honor and sacrifice. Roland and his companions demonstrate bravery by continuing to defend their position despite knowing that they may not survive. Their actions represent the medieval ideal of a noble warrior who places duty and loyalty above personal safety.

From my perspective, The Song of Roland reminds me that loyalty, courage, and responsibility are important values in life. However, I also realized that making wise decisions is just as important as being brave. As a student, I can apply these lessons by remaining committed to my responsibilities while also considering the consequences of my actions.`,

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

    // Academic Submissions for Nathaniel's Work
    appliedLensTitle: "Psychological Lens",
    appliedLensDescription: "The Psychological Lens examines the emotions, thoughts, motivations, desires, and internal conflicts of literary characters. This approach is appropriate for The Tale of Genji because the story provides a deep exploration of human relationships and the emotional struggles experienced by individuals. It allows readers to understand how personal desires, jealousy, love, and social expectations influence the characters' decisions and behavior.",

    fullAnalysis: `The Tale of Genji is a classical Japanese literary work written by Murasaki Shikibu during the Heian period. It follows the life and romantic experiences of Hikaru Genji, the son of an emperor. Throughout the narrative, Genji experiences different relationships, personal struggles, and changes in social circumstances. The story provides a detailed portrayal of court life, romantic relationships, and the emotional complexities of people living in aristocratic Japanese society.

Using the Psychological Lens, The Tale of Genji reveals how human emotions and personal desires influence people's actions. Genji's relationships demonstrate how love, attraction, jealousy, and emotional attachment can affect individuals and the people around them. Although he is admired for his appearance and social position, his personal relationships are often complicated by his desires and decisions.

One important aspect of the novel is its exploration of love and emotional attachment. Genji develops relationships with different women, but these relationships do not always lead to happiness. Some characters experience loneliness, jealousy, and emotional suffering because of complicated romantic situations. This demonstrates that love can bring happiness but can also create pain when expectations and desires are not fulfilled.

Another important theme is the influence of society on personal relationships. During the Heian period, social status, family background, and cultural expectations played important roles in people's lives. The characters' decisions are often influenced not only by their emotions but also by the restrictions and expectations of their society. This shows how external circumstances can affect personal freedom and relationships.

The novel also explores the impermanence of life and human experiences. Relationships change, beauty fades, and people experience loss as time passes. These ideas encourage readers to recognize that happiness and personal circumstances are not permanent.

From my perspective, The Tale of Genji helped me understand that human relationships are complicated and that people have different emotions, desires, and struggles. It reminds me that understanding others requires empathy and consideration of their feelings. I also learned that personal decisions can affect not only ourselves but also the people around us.`,

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
