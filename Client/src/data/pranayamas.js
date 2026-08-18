export default [
    {
        id: crypto.randomUUID(), name: "Nadi Shodhana", number: 0, duration: 0,

        summary:
            "Alternate nostril breathing practice designed to balance the breath, calm the nervous system and cultivate steady attention.",

        benefits: [
            "Encourages a calm and balanced breathing rhythm.",
            "Supports relaxation and mental focus.",
            "Develops awareness of the breath and present-moment attention."
        ],

        contraindications: [
            "Avoid forcing the breath or holding it if this causes discomfort.",
            "Practice gently if nasal congestion makes alternate nostril breathing difficult."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            3, 4, 5
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Kapalabhati", number: 1, duration: 0,

        summary:
            "Energizing breathing practice using active abdominal exhalations followed by passive inhalations to awaken the body and sharpen attention.",

        benefits: [
            "Creates an energizing breathing rhythm.",
            "Engages the abdominal muscles.",
            "Supports alertness and focused attention."
        ],

        contraindications: [
            "Pregnancy.",
            "Recent abdominal surgery or hernia.",
            "Uncontrolled high blood pressure or cardiovascular conditions."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            2, 0, 3
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Bhastrika", number: 2, duration: 0,

        summary:
            "Powerful rhythmic breathing practice using active inhalations and exhalations to build heat and energize the body.",

        benefits: [
            "Creates warmth and an energizing breathing rhythm.",
            "Engages the respiratory muscles.",
            "Supports alertness and concentration."
        ],

        contraindications: [
            "Pregnancy.",
            "High blood pressure or cardiovascular disease.",
            "Recent abdominal surgery or conditions aggravated by forceful breathing."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            1, 0, 3
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Surya Bhedana", number: 3, duration: 0,

        summary:
            "Right-nostril breathing practice traditionally used to cultivate warmth, vitality and focused attention.",

        benefits: [
            "Creates a warming and energizing breathing rhythm.",
            "Supports concentration and alertness.",
            "Develops awareness of nasal breathing."
        ],

        contraindications: [
            "Avoid practicing forcefully if it causes dizziness or discomfort.",
            "Use a gentle pace if you are sensitive to stimulating breathing practices."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            0, 1, 2
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Shitkari", number: 4, duration: 0,

        summary:
            "Cooling breathing practice performed by inhaling through the teeth before exhaling gently through the nose.",

        benefits: [
            "Encourages a cooling and calming breathing rhythm.",
            "Supports relaxation after more stimulating practices.",
            "Develops awareness of slow, controlled breathing."
        ],

        contraindications: [
            "Cold weather or respiratory irritation.",
            "Avoid if inhaling through the mouth causes discomfort or sensitivity."
        ],

        primaryChakra: "throat",

        transitions: [
            0, 5, 6
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Shitali", number: 5, duration: 0,

        summary:
            "Cooling breathing practice performed by inhaling through a rolled tongue and exhaling gently through the nose.",

        benefits: [
            "Encourages a cooling and calming breathing rhythm.",
            "Supports relaxation during periods of heat or agitation.",
            "Develops awareness of slow and controlled breathing."
        ],

        contraindications: [
            "Cold weather or respiratory sensitivity.",
            "Avoid if inhaling through the mouth causes discomfort."
        ],

        primaryChakra: "throat",

        transitions: [
            4, 8, 9
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Ujjayi", number: 6, duration: 0,

        summary:
            "Controlled breathing practice using a gentle constriction of the throat to create a soft, steady sound throughout the breath.",

        benefits: [
            "Encourages slow and controlled breathing.",
            "Supports concentration and sustained attention.",
            "Creates a steady rhythm useful during meditation and yoga practice."
        ],

        contraindications: [
            "Avoid excessive throat constriction or forcing the breath.",
            "Stop if the technique causes throat irritation or breathing discomfort."
        ],

        primaryChakra: "throat",

        transitions: [
            0, 7, 9, 10
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Bhramari", number: 7, duration: 0,

        summary:
            "Humming breath practice that uses a gentle buzzing sound during exhalation to encourage inward attention and relaxation.",

        benefits: [
            "Encourages relaxation and mental quiet.",
            "Provides a strong auditory focus for meditation.",
            "Supports concentration and inward awareness."
        ],

        contraindications: [
            "Avoid excessive vocal or respiratory effort.",
            "Stop if humming causes discomfort in the ears, throat or head."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            6, 9, 11, 12
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Chandra Bhedana", number: 8, duration: 0,

        summary:
            "Left-nostril breathing practice traditionally used to cultivate cooling, calming and introspective qualities.",

        benefits: [
            "Encourages a calm and cooling breathing rhythm.",
            "Supports relaxation and inward attention.",
            "Provides a gentle counterbalance to stimulating breathing practices."
        ],

        contraindications: [
            "Avoid forcing the breath or practicing excessively if it causes dizziness.",
            "Use a gentle rhythm if you are sensitive to cooling or calming practices."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            5, 0, 7, 9
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Square Breathing", number: 9, duration: 0,

        summary:
            "Structured breathing practice using equal phases of inhalation, retention, exhalation and pause to cultivate rhythmic and attentive breathing.",

        benefits: [
            "Develops awareness and control of the breath.",
            "Encourages calm and steady attention.",
            "Provides a simple structure for breath-focused meditation."
        ],

        contraindications: [
            "Do not force breath retention or practice with uncomfortable breathlessness.",
            "Use shorter or gentler phases when beginning."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            0, 5, 6, 8, 13
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Douti", number: 10, duration: 0,

        summary:
            "Traditional yogic cleansing practice associated with purification of the digestive and respiratory pathways.",

        benefits: [
            "Traditionally used as a cleansing practice.",
            "Encourages awareness of internal purification practices.",
            "Can be incorporated into traditional hatha yoga routines."
        ],

        contraindications: [
            "Should only be practiced with appropriate instruction.",
            "Avoid during illness, digestive disorders or after recent abdominal procedures."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            1, 2, 3
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Anunasika", number: 11, duration: 0,

        summary:
            "Nasal breathing practice emphasizing controlled airflow through the nostrils and awareness of subtle breath movement.",

        benefits: [
            "Develops awareness of nasal breathing.",
            "Encourages controlled and attentive respiration.",
            "Supports concentration during breath-focused practice."
        ],

        contraindications: [
            "Avoid forcing airflow through congested nasal passages.",
            "Practice gently if nasal breathing is uncomfortable."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            0, 6, 8, 9
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Kumbhaka", number: 12, duration: 0,

        summary:
            "Pranayama practice centered on conscious breath retention, traditionally used to develop control, concentration and awareness of the respiratory cycle.",

        benefits: [
            "Develops awareness and control of the breath.",
            "Supports concentration and sustained attention.",
            "Deepens awareness of the pauses within the respiratory cycle."
        ],

        contraindications: [
            "Do not force or prolong breath retention.",
            "Avoid unsupervised practice if breath retention causes dizziness, distress or discomfort."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            6, 9, 11, 13
        ], img: "࿓"
    },
    {
        id: crypto.randomUUID(), name: "Samavritti", number: 13, duration: 0,

        summary:
            "Equal-ratio breathing practice that gives each phase of the respiratory cycle a balanced duration.",

        benefits: [
            "Encourages a steady and balanced breathing rhythm.",
            "Develops breath awareness and control.",
            "Supports concentration and meditative attention."
        ],

        contraindications: [
            "Do not force the breath or retention phases.",
            "Use shorter cycles if equal breathing becomes uncomfortable."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            0, 9, 11, 12
        ], img: "࿓"
    },
];