export default [
    {
        id: crypto.randomUUID(), name: "Through Clouds", number: 0, duration: 0,

        summary:
            "Guided visualization meditation that uses the imagery of moving through clouds to encourage spaciousness, calm and mental perspective. It helps to see the difference between reality and thought.",

        benefits: [
            "Encourages relaxation and mental spaciousness.",
            "Supports visualization and imaginative awareness.",
            "Provides an accessible focal point for meditation."
        ],

        contraindications: [
            "Some practitioners may find visualization difficult or distracting."
        ],

        primaryChakra: "crown",

        transitions: [
            3, 2, 4, 5
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Tatraka", number: 1, duration: 0,

        summary:
            "Concentration meditation involving sustained visual attention on a fixed point or flame to develop steadiness and focused awareness.",

        benefits: [
            "Develops sustained concentration.",
            "Encourages visual awareness and mental steadiness.",
            "Provides a simple external anchor for meditation."
        ],

        contraindications: [
            "Avoid prolonged staring if it causes eye strain or discomfort.",
            "People sensitive to bright or flickering light should use an appropriate alternative focal point."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            2, 3, 6, 7
        ], img: "☯"
    },

    {
        id: crypto.randomUUID(), name: "Ripe Fruit", number: 2, duration: 0,

        summary:
            "Guided imagery meditation using the sensory qualities and symbolism of ripe fruit to cultivate present-moment awareness and appreciation.",

        benefits: [
            "Encourages sensory awareness and visualization.",
            "Supports present-moment attention.",
            "Provides an accessible object for contemplative practice."
        ],

        contraindications: [
            "Some practitioners may find imagery-based meditation distracting."
        ],

        primaryChakra: "sacral",

        transitions: [
            0, 3, 5, 8
        ], img: "☯"
    },

    {
        id: crypto.randomUUID(), name: "Mandala", number: 3, duration: 0,

        summary:
            "Meditation using a mandala as a visual focal point to cultivate concentration, contemplation and a sense of inner coherence.",

        benefits: [
            "Develops sustained visual concentration.",
            "Encourages contemplative awareness.",
            "Provides a structured visual object for meditation."
        ],

        contraindications: [
            "Avoid prolonged visual fixation if it causes eye strain or discomfort."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            0, 1, 2, 9
        ], img: "☯"
    },

    {
        id: crypto.randomUUID(), name: "Squeeze and Release at Savasana", number: 4, duration: 0,

        summary:
            "Progressive relaxation practice performed in Savasana by gently contracting and releasing different muscle groups to cultivate physical relaxation and body awareness.",

        benefits: [
            "Encourages progressive physical relaxation.",
            "Develops awareness of muscular tension and release.",
            "Helps transition the body into a deeply relaxed state."
        ],

        contraindications: [
            "Avoid contracting muscles affected by recent injury or pain.",
            "Use gentle contractions rather than maximal effort."
        ],

        primaryChakra: "root",

        transitions: [
            0, 5, 10, 11
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Dance", number: 5, duration: 0,

        summary:
            "Free-form movement meditation using spontaneous dance to cultivate embodied awareness, presence and expressive freedom.",

        benefits: [
            "Encourages embodied awareness and presence.",
            "Promotes freedom of movement and self-expression.",
            "Helps release physical tension through spontaneous movement.",
            "Develops awareness of rhythm, sensation and breath."
        ],

        contraindications: [
            "Modify movements according to individual mobility and physical limitations.",
            "Avoid movements that cause pain or excessive strain."
        ],

        primaryChakra: "sacral",

        transitions: [
            2, 4, 6, 8
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Alabations", number: 6, duration: 0,

        summary:
            "Contemplative devotional practice centered on expressions of reverence, gratitude or offering.",

        benefits: [
            "Encourages gratitude and contemplative awareness.",
            "Supports devotional and reflective practice.",
            "Provides an intentional transition from activity toward stillness."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            3, 5, 7, 10
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Lam)", number: 7, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of the bija mantra Lam, traditionally associated with the root chakra.",

        benefits: [
            "Provides a repetitive auditory focus for meditation.",
            "Encourages concentration and inward attention.",
            "Supports grounding and awareness of the body."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization uncomfortable or distracting."
        ],

        primaryChakra: "root",

        transitions: [
            5, 6, 8, 9
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Vam)", number: 8, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of the bija mantra Vam, traditionally associated with the sacral chakra.",

        benefits: [
            "Provides a repetitive auditory focus for meditation.",
            "Encourages concentration and inward awareness.",
            "Supports connection with bodily and emotional experience."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization uncomfortable or distracting."
        ],

        primaryChakra: "sacral",

        transitions: [
            5, 7, 9, 11
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Ram)", number: 9, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of the bija mantra Ram, traditionally associated with the solar plexus chakra.",

        benefits: [
            "Provides a repetitive auditory focus for meditation.",
            "Encourages concentration and sustained attention.",
            "Supports an energizing and purposeful contemplative practice."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization uncomfortable or distracting."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            7, 8, 10, 12
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Yam)", number: 10, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of the bija mantra Yam, traditionally associated with the heart chakra.",

        benefits: [
            "Provides a repetitive auditory focus for meditation.",
            "Encourages concentration and inward awareness.",
            "Supports a contemplative practice centered on the heart."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization uncomfortable or distracting."
        ],

        primaryChakra: "heart",

        transitions: [
            6, 9, 11, 14
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Ham)", number: 11, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of the bija mantra Ham, traditionally associated with the throat chakra.",

        benefits: [
            "Provides a repetitive auditory focus for meditation.",
            "Encourages concentration and inward attention.",
            "Develops awareness of sound and vibration."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization uncomfortable or distracting."
        ],

        primaryChakra: "throat",

        transitions: [
            7, 10, 12, 14
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Om)", number: 12, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Om as a sustained contemplative sound and focal point.",

        benefits: [
            "Provides a sustained auditory focus.",
            "Encourages concentration and contemplative awareness.",
            "Supports inward attention through sound and vibration."
        ],

        contraindications: [
            "Some practitioners may find vocalization uncomfortable or distracting."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            9, 11, 13, 14
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Bija Mantra (Ohm)", number: 13, duration: 0,

        summary:
            "Mantra meditation using an extended Ohm sound as a sustained auditory focus for concentration and inward awareness.",

        benefits: [
            "Provides a sustained sound-based focal point.",
            "Encourages concentration and mental stillness.",
            "Supports contemplative awareness through sound and vibration."
        ],

        contraindications: [
            "Some practitioners may find prolonged vocalization uncomfortable or distracting."
        ],

        primaryChakra: "crown",

        transitions: [
            11, 12, 14
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Antar Naad Mudra", number: 14, duration: 0,

        summary:
            "Meditative mudra practice traditionally associated with inner sound, subtle awareness and turning attention inward.",

        benefits: [
            "Encourages inward attention and contemplation.",
            "Supports concentration and subtle sensory awareness.",
            "Provides a transition from externally produced sound toward inner listening."
        ],

        contraindications: [
            "The practice may feel unfamiliar or difficult to engage with for beginners."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            10, 11, 12, 13
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Kirtan Kriya", number: 15, duration: 0,

        summary:
            "Meditative practice combining mantra repetition, finger movements and vocalization to cultivate concentration and awareness.",

        benefits: [
            "Develops concentration through coordinated mantra and movement.",
            "Encourages mindful awareness and repetition.",
            "Combines vocal, tactile and mental focal points."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization or hand movements uncomfortable."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            12, 14, 16, 17
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Sat Nam", number: 16, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Sat Nam as a focal phrase for contemplation and awareness of one's identity.",

        benefits: [
            "Provides a simple repetitive focus for meditation.",
            "Encourages concentration and inward awareness.",
            "Supports contemplative reflection on identity and presence."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization distracting or uncomfortable."
        ],

        primaryChakra: "throat",

        transitions: [
            11, 15, 17, 18
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Sat Kartaar", number: 17, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Sat Kartaar as a contemplative focus.",

        benefits: [
            "Provides a repetitive auditory focus.",
            "Encourages concentration and contemplative awareness.",
            "Supports devotional and reflective practice."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization distracting or uncomfortable."
        ],

        primaryChakra: "heart",

        transitions: [
            15, 16, 18, 19
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Aad Guray Nameh", number: 18, duration: 0,

        summary:
            "Devotional mantra meditation using the repetition of Aad Guray Nameh as a contemplative focus.",

        benefits: [
            "Encourages concentration through mantra repetition.",
            "Supports devotional and contemplative practice.",
            "Provides a structured auditory focus for meditation."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            6, 15, 17, 19
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "I Am I Am", number: 19, duration: 0,

        summary:
            "Contemplative mantra meditation using the repetition of I Am I Am as a focal point for self-awareness and present-moment attention. Calms the anxiety of the ego",

        benefits: [
            "Encourages self-awareness and introspection.",
            "Provides a simple verbal anchor for meditation.",
            "Supports present-moment attention and contemplative reflection."
        ],

        contraindications: [
            "Some practitioners may find repetitive verbal phrases distracting or uncomfortable."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            14, 16, 17, 20
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Osho Kundalini", number: 20, duration: 0,

        summary:
            "Dynamic meditation practice traditionally structured around shaking, dancing, stillness and celebration to release accumulated tension and cultivate awareness.",

        benefits: [
            "Encourages embodied awareness through movement and stillness.",
            "Provides a structured way to release physical tension.",
            "Develops awareness of bodily sensations and spontaneous movement.",
            "Creates a transition from dynamic activity toward meditation."
        ],

        contraindications: [
            "Modify or avoid vigorous shaking and dancing with recent musculoskeletal injuries.",
            "Reduce intensity if movement causes pain, dizziness or discomfort."
        ],

        primaryChakra: "sacral",

        transitions: [
            5, 19, 21, 22
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Osho Heart", number: 21, duration: 0,

        summary:
            "Heart-centered meditation practice using awareness, movement and emotional expression to cultivate connection with the heart.",

        benefits: [
            "Encourages awareness of emotional experience.",
            "Supports introspection and heart-centered attention.",
            "Provides an embodied approach to contemplative practice."
        ],

        contraindications: [
            "The emotionally expressive nature of the practice may feel uncomfortable for some practitioners."
        ],

        primaryChakra: "heart",

        transitions: [
            6, 20, 22, 23
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Long Deep Breathing Meditation", number: 22, duration: 0,

        summary:
            "Meditation centered on slow, deep and conscious breathing to cultivate relaxation, sustained attention and awareness of the breath.",

        benefits: [
            "Encourages slow and steady breathing.",
            "Supports relaxation and mental calm.",
            "Develops sustained attention to the breath.",
            "Provides an accessible foundation for meditation."
        ],

        contraindications: [
            "Avoid forcing deep breaths or breathing beyond a comfortable range.",
            "Return to natural breathing if dizziness or discomfort occurs."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            0, 20, 23, 24
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for a Calm Heart", number: 23, duration: 0,

        summary:
            "Gentle heart-centered meditation designed to cultivate calm, emotional balance and a sense of inner ease.",

        benefits: [
            "Encourages emotional calm and self-awareness.",
            "Supports compassionate and heart-centered attention.",
            "Provides a gentle contemplative practice for settling the mind."
        ],

        contraindications: [
            "Emotionally focused meditation may feel uncomfortable for some practitioners."
        ],

        primaryChakra: "heart",

        transitions: [
            17, 21, 22, 24
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Inner Stillness", number: 24, duration: 0,

        summary:
            "Quiet meditation practice focused on reducing mental activity and cultivating sustained awareness of inner stillness.",

        benefits: [
            "Encourages mental quiet and sustained attention.",
            "Supports relaxation and introspection.",
            "Develops awareness of thoughts and sensations without actively engaging with them."
        ],

        contraindications: [
            "Extended periods of stillness may feel uncomfortable for some practitioners.",
            "Modify the posture or duration if physical discomfort develops."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            19, 22, 23, 25
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Mental Clarity", number: 25, duration: 0,

        summary:
            "Meditation practice focused on settling mental distractions and cultivating clear, steady and attentive awareness.",

        benefits: [
            "Supports focused attention and mental clarity.",
            "Helps reduce distracting thoughts.",
            "Encourages present-moment awareness.",
            "Develops sustained concentration."
        ],

        contraindications: [
            "Some practitioners may initially find attempts to quiet mental activity frustrating."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            9, 19, 24, 26, 29
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Relaxation", number: 26, duration: 0,

        summary:
            "Gentle meditation practice designed to calm the mind, release tension and encourage a state of physical and mental relaxation.",

        benefits: [
            "Encourages physical and mental relaxation.",
            "Supports a calmer state of mind.",
            "Helps cultivate awareness of bodily sensations.",
            "Provides a gentle transition into rest."
        ],

        contraindications: [
            "Some practitioners may become drowsy during extended relaxation practices."
        ],

        primaryChakra: "root",

        transitions: [
            4, 22, 23, 27, 31
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Stress Relief", number: 27, duration: 0,

        summary:
            "Calming meditation practice designed to reduce mental and physical tension and cultivate a more settled state of awareness.",

        benefits: [
            "Encourages relaxation during periods of stress.",
            "Supports awareness of physical and mental tension.",
            "Promotes calm and present-moment attention."
        ],

        contraindications: [
            "Meditation may temporarily increase awareness of uncomfortable thoughts or sensations for some practitioners."
        ],

        primaryChakra: "heart",

        transitions: [
            21, 23, 26, 28
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Emotional Balance", number: 28, duration: 0,

        summary:
            "Contemplative meditation focused on observing emotions with steadiness and cultivating a balanced response to changing internal experiences.",

        benefits: [
            "Encourages awareness of emotional states.",
            "Supports a more balanced relationship with emotions.",
            "Develops non-reactive observation and present-moment awareness."
        ],

        contraindications: [
            "Emotion-focused meditation may bring uncomfortable feelings into awareness for some practitioners."
        ],

        primaryChakra: "heart",

        transitions: [
            17, 21, 23, 29
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Self-Awareness", number: 29, duration: 0,

        summary:
            "Introspective meditation practice that cultivates awareness of thoughts, emotions, bodily sensations and patterns of experience.",

        benefits: [
            "Encourages introspection and self-awareness.",
            "Develops observation of thoughts, emotions and sensations.",
            "Supports present-moment awareness.",
            "Encourages a more reflective relationship with one's experience."
        ],

        contraindications: [
            "Introspective practices may feel emotionally uncomfortable for some practitioners."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            19, 24, 25, 28, 30
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Meditation for Inner Peace", number: 30, duration: 0,

        summary:
            "Calming meditation practice focused on cultivating inner peace, quiet attention and a stable sense of presence.",

        benefits: [
            "Encourages mental and emotional calm.",
            "Supports relaxation and inward attention.",
            "Cultivates present-moment awareness.",
            "Provides a gentle foundation for contemplative practice."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness uncomfortable."
        ],

        primaryChakra: "heart",

        transitions: [
            24, 26, 29, 31, 34
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Sa Ta Na Ma", number: 31, duration: 0,

        summary:
            "Mantra meditation centered on the rhythmic repetition of Sa Ta Na Ma to cultivate concentration, awareness and contemplative focus.",

        benefits: [
            "Provides a structured repetitive focus for meditation.",
            "Encourages concentration and mental steadiness.",
            "Supports mindful awareness through sound and repetition."
        ],

        contraindications: [
            "Some practitioners may find repetitive vocalization or hand movements distracting or uncomfortable."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            15, 16, 30, 32, 33
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Wahe Guru", number: 32, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Wahe Guru as a contemplative and devotional focal point.",

        benefits: [
            "Provides a repetitive auditory focus.",
            "Encourages concentration and contemplative awareness.",
            "Supports devotional and reflective practice."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            17, 18, 30, 31, 33
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Ra Ma Da Sa", number: 33, duration: 0,

        summary:
            "Mantra meditation using the repeated sequence Ra Ma Da Sa Sa Say So Hung as a contemplative focus traditionally associated with healing and compassion.",

        benefits: [
            "Provides a structured auditory focus for meditation.",
            "Encourages concentration and contemplative awareness.",
            "Supports compassionate and heart-centered practice."
        ],

        contraindications: [
            "The devotional or healing-oriented framing may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            21, 23, 30, 32, 34
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Ong Namo", number: 34, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Ong Namo as an invocation traditionally used to establish a focused and receptive state of awareness.",

        benefits: [
            "Provides a clear beginning point for contemplative practice.",
            "Encourages concentration and inward attention.",
            "Supports a receptive and intentional meditative state."
        ],

        contraindications: [
            "The devotional character of the mantra may not resonate with every practitioner."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            15, 30, 31, 32, 33
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Guru Ram", number: 35, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Guru Ram as a contemplative focal point for devotion and inner awareness.",

        benefits: [
            "Provides a repetitive auditory focus for meditation.",
            "Encourages concentration and contemplative awareness.",
            "Supports devotional and reflective practice."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            30, 32, 34, 36
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Har Har Gobinday", number: 36, duration: 0,

        summary:
            "Devotional mantra meditation centered on the repetition of Har Har Gobinday as a rhythmic and contemplative focal point.",

        benefits: [
            "Provides a structured auditory focus.",
            "Encourages concentration through rhythmic repetition.",
            "Supports devotional and contemplative practice."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            32, 33, 35, 37
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Ek Ong Kar", number: 37, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Ek Ong Kar as a contemplative practice focused on sound, awareness and unity.",

        benefits: [
            "Provides a sustained auditory focus.",
            "Encourages concentration and contemplative awareness.",
            "Supports a sense of unity and inward reflection."
        ],

        contraindications: [
            "The devotional or spiritual framing may not resonate with every practitioner."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            31, 34, 36, 38
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Sat Narayan", number: 38, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Sat Narayan as a contemplative and devotional focal point.",

        benefits: [
            "Provides a repetitive auditory focus.",
            "Encourages concentration and contemplative awareness.",
            "Supports devotional and reflective practice."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            30, 32, 35, 39
        ], img: "☯"
    },
    {
        id: crypto.randomUUID(), name: "Gobinde Mukande", number: 39, duration: 0,

        summary:
            "Mantra meditation centered on the repetition of Gobinde Mukande as a devotional and contemplative practice.",

        benefits: [
            "Provides a structured auditory focus for meditation.",
            "Encourages concentration and contemplative awareness.",
            "Supports devotional and reflective practice."
        ],

        contraindications: [
            "The devotional character of the practice may not resonate with every practitioner."
        ],

        primaryChakra: "heart",

        transitions: [
            33, 35, 36, 38
        ], img: "☯"
    },
];