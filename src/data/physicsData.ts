import { Chapter, Experiment, StatItem, QuestionSample } from '../types';

export const SITE_CONFIG = {
  name: "Physics Lab 10",
  tagline: "Understand Physics. Visualize Concepts. Master CBSE.",
  badge: "CBSE Class 10 Physics • Interactive Learning",
  heroHeading: "Master Physics by Understanding, Not Memorising.",
  heroSupportingText: "Learn Class 10 CBSE Physics through interactive concepts, virtual experiments, animations, numericals, and AI-powered doubt solving.",
};

export const STATS_DATA: StatItem[] = [
  {
    value: "4",
    label: "Physics Chapters",
    sublabel: "Full CBSE Class 10 Syllabus",
    icon: "BookOpen",
  },
  {
    value: "100+",
    label: "Concepts",
    sublabel: "With Visual Explanations",
    icon: "Sparkles",
  },
  {
    value: "500+",
    label: "Practice Questions",
    sublabel: "CBSE Pattern & PYQs",
    icon: "HelpCircle",
  },
  {
    value: "20+",
    label: "Virtual Experiments",
    sublabel: "Manipulate Real Variables",
    icon: "FlaskConical",
  },
];

export const CHAPTERS_DATA: Chapter[] = [
  {
    id: "light-reflection-refraction",
    number: 9, // NCERT new rationalized syllabus is Chapter 9 (formerly 10)
    title: "Light — Reflection & Refraction",
    subtitle: "Optics & Ray Geometry",
    iconName: "Telescope",
    description: "Reflection, spherical mirrors, mirror formula, refraction through glass slab, lens formula, magnification, and power of a lens.",
    topics: [
      "Spherical Mirrors (Concave & Convex)",
      "Mirror Formula: 1/f = 1/v + 1/u",
      "Refraction & Snell's Law",
      "Convex & Concave Lenses",
      "Power of Lens (P = 1/f in meters)",
    ],
    keyFormulas: [
      "1/f = 1/v + 1/u",
      "m = -v/u = h'/h",
      "n = c/v = sin i / sin r",
      "1/f = 1/v - 1/u",
      "P = 1/f (m) in Dioptres",
    ],
    experimentCount: 6,
    progressPercentage: 85,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "human-eye-colourful-world",
    number: 10,
    title: "The Human Eye & The Colourful World",
    subtitle: "Atmospheric Optics & Dispersion",
    iconName: "Eye",
    description: "Structure of the eye, defects of vision (myopia, hypermetropia), glass prism dispersion, atmospheric refraction, and light scattering.",
    topics: [
      "Anatomy of Human Eye & Accommodation",
      "Defects of Vision & Corrections",
      "Refraction through a Triangular Glass Prism",
      "Dispersion of White Light (VIBGYOR)",
      "Twinkling of Stars & Tyndall Effect",
    ],
    keyFormulas: [
      "Defect Correction: Lens Power P = 1/f",
      "Dispersion Angle: δ = (n - 1)A",
      "Scattering Intensity ∝ 1/λ⁴",
    ],
    experimentCount: 4,
    progressPercentage: 75,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "electricity",
    number: 11,
    title: "Electricity",
    subtitle: "Current, Potential & Circuits",
    iconName: "Zap",
    description: "Electric current, potential difference, Ohm's law, resistance factors, resistors in series and parallel, heating effects, and electric power.",
    topics: [
      "Electric Current (I = Q/t) & Potential Difference",
      "Ohm's Law (V = IR) & V-I Graphs",
      "Factors affecting Resistance (R = ρl/A)",
      "Series & Parallel Resistor Combinations",
      "Joule's Heating Law (H = I²Rt) & Electric Power",
    ],
    keyFormulas: [
      "I = Q/t,  V = W/Q",
      "V = I · R",
      "R = ρ · (l / A)",
      "R_s = R₁ + R₂,  1/R_p = 1/R₁ + 1/R₂",
      "P = V · I = I²R = V²/R",
    ],
    experimentCount: 6,
    progressPercentage: 80,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "magnetic-effects",
    number: 12,
    title: "Magnetic Effects of Electric Current",
    subtitle: "Electromagnetism & Motors",
    iconName: "Magnet",
    description: "Magnetic field patterns, right-hand thumb rule, solenoid, Fleming's left-hand rule, electric motor, electromagnetic induction, and domestic circuits.",
    topics: [
      "Magnetic Field & Field Line Properties",
      "Field due to Straight Conductor & Solenoid",
      "Force on Current Carrying Conductor (F = BIL)",
      "Fleming's Left Hand Rule & Electric Motor Principle",
      "Domestic Electric Circuits, Earthing & Fuse",
    ],
    keyFormulas: [
      "B ∝ I/r (Straight Conductor)",
      "B ∝ n · I (Solenoid)",
      "F = B · I · L · sin(θ)",
    ],
    experimentCount: 5,
    progressPercentage: 70,
    color: "from-emerald-500 to-teal-600",
  },
];

export const EXPERIMENTS_LIST: Experiment[] = [
  {
    id: "mirror-ray-sim",
    name: "Mirror Ray Simulation",
    chapter: "Light",
    icon: "Telescope",
    tag: "Optics Lab",
    description: "Move the object between Infinity, 2F, F, and Pole to watch real-time reflected rays converge into real/virtual images.",
    interactiveType: "ray-mirror",
    keyVariables: ["Object Distance (u)", "Focal Length (f)", "Mirror Type (Concave/Convex)"],
  },
  {
    id: "lens-experiment",
    name: "Lens Experiment",
    chapter: "Light",
    icon: "Microscope",
    tag: "Optics Lab",
    description: "Adjust object height and focal position on convex/concave lens bench to examine real, inverted, magnified image formation.",
    interactiveType: "lens",
    keyVariables: ["Object Height (h)", "Object Distance (u)", "Lens Power (D)"],
  },
  {
    id: "ohms-law",
    name: "Ohm's Law Bench",
    chapter: "Electricity",
    icon: "Zap",
    tag: "Circuit Lab",
    description: "Vary voltage from 1V to 12V across nichrome wire resistors; observe ammeter, voltmeter readings, and straight V-I slope.",
    interactiveType: "ohms-law",
    keyVariables: ["Voltage (V)", "Resistance (R)", "Temperature (T)"],
  },
  {
    id: "electric-circuits",
    name: "Electric Circuits Builder",
    chapter: "Electricity",
    icon: "BatteryCharging",
    tag: "Circuit Lab",
    description: "Toggle series vs parallel resistor combinations. Watch how bulb brightness and equivalent resistance change.",
    interactiveType: "circuit",
    keyVariables: ["R₁ and R₂ Ohms", "Circuit Config (Series/Parallel)", "Switch State"],
  },
  {
    id: "magnetic-field",
    name: "Magnetic Field Lines",
    chapter: "Magnetism",
    icon: "Compass",
    tag: "Electromagnetism",
    description: "Sprinkle virtual iron filings around a bar magnet and solenoid. Use magnetic needle to trace field line directions from N to S.",
    interactiveType: "magnetic-field",
    keyVariables: ["Magnet Strength", "Solenoid Current", "Compass Position"],
  },
  {
    id: "electric-motor",
    name: "Electric Motor 3D",
    chapter: "Magnetism",
    icon: "Cog",
    tag: "Electromagnetism",
    description: "Witness torque on a rectangular coil in a magnetic field with split-ring commutator reversing current every half turn.",
    interactiveType: "motor",
    keyVariables: ["Current Direction", "Magnetic Field B", "Split-Ring State"],
  },
  {
    id: "prism-dispersion",
    name: "Prism & Dispersion",
    chapter: "Human Eye",
    icon: "Sun",
    tag: "Wave Optics",
    description: "Shine a beam of white light through a triangular glass prism. Observe angle of deviation and separation into rainbow spectrum.",
    interactiveType: "prism",
    keyVariables: ["Angle of Incidence (i)", "Prism Angle (A)", "Refractive Index (n)"],
  },
];

export const QUESTION_CATEGORIES = [
  "MCQs",
  "Assertion & Reason",
  "Numericals",
  "Case-Based",
  "Competency-Based",
  "Short Answer",
  "Long Answer",
];

export const SAMPLE_QUESTIONS: QuestionSample[] = [
  {
    id: "q-1",
    category: "Numericals",
    marks: 3,
    difficulty: "Medium",
    chapter: "Electricity",
    question: "A piece of wire having resistance R is cut into 5 equal parts. These parts are then connected in parallel. If the equivalent resistance of this combination is R', calculate the ratio R / R'.",
    options: [
      "1 / 25",
      "1 / 5",
      "5",
      "25"
    ],
    correctOptionIndex: 3,
    explanation: "Each of the 5 equal parts has resistance R₁ = R/5. When connected in parallel: 1/R' = 5 × (1 / (R/5)) = 5 × (5/R) = 25/R. Therefore, R' = R/25, which gives the ratio R / R' = 25.",
    markingBreakdown: [
      "1 Mark: Stating resistance of each part as R/5",
      "1 Mark: Correct formula for 5 parallel resistors 1/R' = 5/(R/5)",
      "1 Mark: Final calculated ratio R / R' = 25",
    ],
  },
  {
    id: "q-2",
    category: "Assertion & Reason",
    marks: 1,
    difficulty: "Medium",
    chapter: "Light — Reflection & Refraction",
    question: "Assertion (A): A convex mirror is used as a driver's rearview mirror in vehicles.\nReason (R): Convex mirrors always produce an erect, diminished virtual image and have a wider field of view.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "(A) is false but (R) is true"
    ],
    correctOptionIndex: 0,
    explanation: "Convex mirrors always form virtual, erect, and diminished images of objects behind the vehicle, enabling drivers to view a much wider traffic area than a plane mirror.",
    markingBreakdown: [
      "1 Mark: Identifying both statements as true and (R) as correct causal justification",
    ],
  },
  {
    id: "q-3",
    category: "MCQs",
    marks: 1,
    difficulty: "Easy",
    chapter: "Magnetic Effects of Electric Current",
    question: "The direction of the magnetic field produced by a current-carrying straight conductor can be determined using:",
    options: [
      "Fleming's Left Hand Rule",
      "Right-Hand Thumb Rule",
      "Fleming's Right Hand Rule",
      "Faraday's Law"
    ],
    correctOptionIndex: 1,
    explanation: "Maxwell's Right-Hand Thumb rule: If you hold the current conductor in your right hand with the thumb pointing in current direction, your curled fingers give the magnetic field lines direction.",
    markingBreakdown: [
      "1 Mark: Correct identification of Right-Hand Thumb Rule",
    ],
  },
  {
    id: "q-4",
    category: "Case-Based",
    marks: 4,
    difficulty: "Hard",
    chapter: "The Human Eye & Colourful World",
    question: "Read the passage: 'When sunlight enters Earth's atmosphere, fine particles scatter blue light more strongly than red light. During sunrise and sunset, light travels a longer atmospheric path.' Why does the sun appear reddish at sunrise?",
    options: [
      "Atmospheric dust absorbs red light completely",
      "Blue and shorter wavelengths are scattered away, leaving mostly red light to reach our eyes",
      "The sun's temperature decreases at sunrise",
      "Total internal reflection takes place in clouds"
    ],
    correctOptionIndex: 1,
    explanation: "According to Rayleigh Scattering (Intensity ∝ 1/λ⁴), shorter wavelengths (blue/violet) scatter away over the long atmospheric path. The less-scattered longer wavelengths (red/orange) reach the observer.",
    markingBreakdown: [
      "1 Mark: Mention of Rayleigh Scattering rule (1/λ⁴)",
      "1 Mark: Atmospheric path length comparison at horizon vs overhead",
      "2 Marks: Explanation of blue scattering vs red transmission to eye",
    ],
  },
];

export const BOARD_PREP_CARDS = [
  {
    id: "quick-revision",
    title: "Quick Revision",
    icon: "BookOpenCheck",
    badge: "High Yield",
    desc: "Compact summary sheets, ray diagram cheat-sheets, and 15-minute chapter recap notes tailored for CBSE Class 10.",
    link: "/board-prep#revision",
  },
  {
    id: "formula-hub",
    title: "Formula Hub",
    icon: "Sigma",
    badge: "All Formulas",
    desc: "Every Class 10 formula with SI units, sign conventions (Cartesian rule), and solved numerical patterns.",
    link: "/board-prep#formulas",
  },
  {
    id: "important-questions",
    title: "Important Questions",
    icon: "CheckCircle2",
    badge: "10-Year PYQs",
    desc: "Curated list of frequently repeated CBSE board questions with official step-wise marking scheme solutions.",
    link: "/board-prep#pyqs",
  },
  {
    id: "practice-tests",
    title: "Practice Tests",
    icon: "FileSpreadsheet",
    badge: "Timed Mocks",
    desc: "Simulated 80-mark Class 10 Physics mock papers with real timer, question analysis, and difficulty weighting.",
    link: "/board-prep#tests",
  },
];

export const LEARNING_FLOW_STEPS = [
  {
    step: "01",
    title: "Learn",
    tagline: "Understand the concept.",
    desc: "Deconstruct complex NCERT concepts into clear mental models with intuitive real-life analogies.",
    icon: "BookOpen",
  },
  {
    step: "02",
    title: "Visualize",
    tagline: "See how Physics works.",
    desc: "Dynamic ray diagrams, current flow vectors, and magnetic field line 3D maps make invisible forces visible.",
    icon: "Eye",
  },
  {
    step: "03",
    title: "Experiment",
    tagline: "Perform the virtual experiment.",
    desc: "Slide voltages, bend lenses, and swap circuit components to prove laws with empirical data.",
    icon: "FlaskConical",
  },
  {
    step: "04",
    title: "Practice",
    tagline: "Solve questions and numericals.",
    desc: "Tackle Assertion-Reason, competency-based cases, and multi-step numericals with step-wise grading.",
    icon: "PenTool",
  },
  {
    step: "05",
    title: "Master",
    tagline: "Track your progress and prepare for boards.",
    desc: "Identify weak topics, practice previous 10-year papers, and enter the CBSE examination with confidence.",
    icon: "Award",
  },
];
