export default [
    {
        id: crypto.randomUUID(), name: "Lam", number: 0, duration: 0,

        summary:
            "Savasana-based relaxation practice accompanied by the sound of Lam, traditionally associated with the root chakra.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Supports grounding and a sense of stability.",
            "Provides a simple focal point for meditation during rest."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness uncomfortable."
        ],

        primaryChakra: "root",

        transitions: [
            1, 2, 3
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Vam", number: 1, duration: 0,

        summary:
            "Savasana-based relaxation practice accompanied by the sound of Vam, traditionally associated with the sacral chakra.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides a gentle auditory focus during rest.",
            "Encourages awareness of the body and emotional experience."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness uncomfortable."
        ],

        primaryChakra: "sacral",

        transitions: [
            0, 2, 4
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Ram", number: 2, duration: 0,

        summary:
            "Savasana-based relaxation practice accompanied by the sound of Ram, traditionally associated with the solar plexus chakra.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides an auditory focal point during rest.",
            "Supports mindful awareness of the body and breath."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness uncomfortable."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            1, 3, 5
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Yam", number: 3, duration: 0,

        summary:
            "Savasana-based relaxation practice accompanied by the sound of Yam, traditionally associated with the heart chakra.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides a gentle auditory focus during rest.",
            "Encourages calm and inward awareness."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness uncomfortable."
        ],

        primaryChakra: "heart",

        transitions: [
            2, 4, 6
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Ham", number: 4, duration: 0,

        summary:
            "Savasana-based relaxation practice accompanied by the sound of Ham, traditionally associated with the throat chakra.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides an auditory focal point during rest.",
            "Supports mindful attention to sound and breath."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness uncomfortable."
        ],

        primaryChakra: "throat",

        transitions: [
            3, 5, 7
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Om", number: 5, duration: 0,

        summary:
            "Savasana-based relaxation practice accompanied by the sound of Om, traditionally used as a contemplative and meditative sound.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides a sustained auditory focus during rest.",
            "Supports meditation and inward attention."
        ],

        contraindications: [
            "Some practitioners may find vocal or auditory practices uncomfortable."
        ],

        primaryChakra: "thirdEye",

        transitions: [
            4, 6, 7
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Ohm", number: 6, duration: 0,

        summary:
            "Savasana-based relaxation practice using an extended Ohm sound as an auditory focal point during rest.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides a sustained sound-based focus.",
            "Supports meditation and present-moment awareness."
        ],

        contraindications: [
            "Some practitioners may find vocal or auditory practices uncomfortable."
        ],

        primaryChakra: "crown",

        transitions: [
            5, 7
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Savasana In Silence", number: 7, duration: 0,

        summary:
            "Silent Savasana practice focused on complete physical stillness, natural breathing and inward awareness.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Provides space for quiet reflection and awareness.",
            "Allows the practitioner to rest without an external auditory focus."
        ],

        contraindications: [
            "Some practitioners may find prolonged stillness or silence uncomfortable."
        ],

        primaryChakra: "crown",

        transitions: [
            0, 3, 6
        ], img: "◌"
    },
    {
        id: crypto.randomUUID(), name: "Tale", number: 8, duration: 0,

        summary: 
            "Guided relaxation that uses an imaginative story to gently direct the mind inward, encouraging a calm and receptive state of awareness.", 
        
        benefits: [ 
            "Encourages deep mental relaxation and inward awareness.",
            "Uses imagination to quiet repetitive thoughts and mental activity.", 
            "Supports concentration, introspection and a sense of inner calm." 
        ], 
        
        contraindications: [ 
            "May be uncomfortable for practitioners who find guided imagery distracting or emotionally unsettling." 
        ],

        primaryChakra: "thrid eye",

        transitions: [
            6, 7, 5
        ], img: "◌"
    },
];