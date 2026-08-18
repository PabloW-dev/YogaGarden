export default [
    {
        id: crypto.randomUUID(), name: "Sun Salutation", number: 0, duration: 0,

        summary:
            "Dynamic yoga sequence that links breath with flowing movements to warm the body and prepare it for physical practice.",

        benefits: [
            "Raises body temperature and prepares the body for movement.",
            "Mobilizes the major joints and muscle groups.",
            "Coordinates movement with breathing.",
            "Builds strength, mobility and cardiovascular activation."
        ],

        contraindications: [
            "Modify or avoid movements that aggravate existing wrist, shoulder, knee or lower-back problems.",
            "Use a slower variation when beginning or when the body requires gentler preparation."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            1, 4, 5, 6
        ], img: "🔥︎"
    },
    {
        id: crypto.randomUUID(), name: "Yogi Run", number: 1, duration: 0,

        summary:
            "Dynamic running-inspired yoga movement that raises body temperature and activates the legs, hips and cardiovascular system.",

        benefits: [
            "Raises heart rate and body temperature.",
            "Activates the legs, hips and core.",
            "Improves coordination and dynamic movement.",
            "Prepares the body for more vigorous practice."
        ],

        contraindications: [
            "Modify or avoid high-impact movement with recent knee, hip or ankle injuries.",
            "Reduce intensity if cardiovascular exertion becomes uncomfortable."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            0, 2, 4, 5
        ], img: "🔥︎"
    },
    {
        id: crypto.randomUUID(), name: "Moon Salutation", number: 2, duration: 0,

        summary:
            "Flowing yoga sequence traditionally associated with lunar qualities, emphasizing gentle movement, lateral opening and a calmer rhythm.",

        benefits: [
            "Mobilizes the hips, spine and shoulders.",
            "Provides a gentler full-body warm-up.",
            "Coordinates movement with breathing.",
            "Encourages a slower and more mindful movement rhythm."
        ],

        contraindications: [
            "Modify positions that cause discomfort in the knees, hips or lower back.",
            "Avoid forcing deep lateral or hip-opening movements."
        ],

        primaryChakra: "sacral",

        transitions: [
            0, 3, 6, 7
        ], img: "☽"
    },
    {
        id: crypto.randomUUID(), name: "Earth Salutation", number: 3, duration: 0,

        summary:
            "Grounding dynamic yoga sequence designed to warm the body through deliberate movements while emphasizing stability and connection with the ground.",

        benefits: [
            "Warms the major muscle groups.",
            "Develops stability and lower-body mobility.",
            "Coordinates movement with breathing.",
            "Provides a grounded transition into physical practice."
        ],

        contraindications: [
            "Modify movements that aggravate the knees, hips, wrists or lower back.",
            "Use additional support when required for floor-based positions."
        ],

        primaryChakra: "root",

        transitions: [
            0, 2, 5, 7
        ], img: "🔥︎"
    },
    {
        id: crypto.randomUUID(), name: "Sun Salutation A", number: 4, duration: 0,

        summary:
            "Foundational dynamic yoga sequence linking breath with repeated movements between standing, forward folding and plank-based positions.",

        benefits: [
            "Raises body temperature and prepares the whole body.",
            "Strengthens the legs, core, shoulders and arms.",
            "Improves coordination between movement and breath.",
            "Develops mobility through the spine, hips and shoulders."
        ],

        contraindications: [
            "Modify or avoid movements that aggravate the wrists, shoulders, knees or lower back.",
            "Use a gentler variation when physical intensity needs to be reduced."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            0, 1, 2, 5
        ], img: "🔥︎"
    },
    {
        id: crypto.randomUUID(), name: "Sun Salutation B", number: 5, duration: 0,

        summary:
            "Dynamic sun salutation sequence that builds greater heat and strength through repeated flowing movements and standing postures.",

        benefits: [
            "Raises body temperature and cardiovascular activity.",
            "Strengthens the legs, core, shoulders and arms.",
            "Improves coordination between breath and movement.",
            "Prepares the body for more demanding physical practice."
        ],

        contraindications: [
            "Modify or avoid movements that aggravate the wrists, shoulders, knees or lower back.",
            "Reduce repetitions or intensity when fatigue compromises movement quality."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            0, 1, 4, 6
        ], img: "🔥︎"
    },
    {
        id: crypto.randomUUID(), name: "Easy Sun Salutation", number: 6, duration: 0,

        summary:
            "Gentle variation of a sun salutation designed to warm the body through simple flowing movements with reduced physical intensity.",

        benefits: [
            "Gently raises body temperature.",
            "Mobilizes the spine, hips and shoulders.",
            "Coordinates movement with breathing.",
            "Provides an accessible introduction to dynamic yoga practice."
        ],

        contraindications: [
            "Modify movements according to individual mobility and comfort.",
            "Avoid any position that causes pain or excessive strain."
        ],

        primaryChakra: "sacral",

        transitions: [
            0, 2, 3, 5
        ], img: "🔥︎"
    },
    {
        id: crypto.randomUUID(), name: "Connecting Heaven and Earth", number: 7, duration: 0,

        summary:
            "Flowing movement practice that alternates between upward and downward gestures to connect the upper and lower body through coordinated breathing and movement.",

        benefits: [
            "Mobilizes the spine, shoulders and hips.",
            "Coordinates movement with breathing.",
            "Encourages whole-body awareness.",
            "Provides a gentle transition between stillness and active movement."
        ],

        contraindications: [
            "Modify movements that cause discomfort in the shoulders, spine or hips.",
            "Avoid forcing overhead or forward-folding positions."
        ],

        primaryChakra: "root",

        transitions: [
            2, 3, 6
        ], img: "🔥︎"
    },
];