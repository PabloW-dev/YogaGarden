//TO-DO: aceptar varios nombres en varios idiomas para las posturas y luego adaptarlo según el idioma que esté usando el usuario, los nombres en sánscrito aceptarlos siempre
//TO-DO: cómo renderizar los chakras? nombre + icono? hacer un chakras.js sólo para esto?

export default [
    {
        id: crypto.randomUUID(), name: "Balasana", number: 0, duration: 0, 

        summary:
            "Gentle resting posture that releases the spine and encourages deep relaxation.",

        benefits: [
            "Relieves tension in the back and shoulders.",
            "Gently stretches the hips, thighs and ankles.",
            "Calms the nervous system and reduces stress."
        ],

        contraindications: [
            "Recent knee injury.",
            "Avoid prolonged compression during late pregnancy if uncomfortable."
        ],

        primaryChakra: "root",

        transitions: [
            6, 7, 8, 9, 10], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Tadasana", duration: 0, number: 1,
         
        summary:
            "Foundational standing posture that promotes alignment, stability and mindful awareness of the body.",

        benefits: [
            "Improves posture and body alignment.",
            "Strengthens the legs, ankles and core.",
            "Develops balance, stability and body awareness."
        ],

        contraindications: [
            "Severe dizziness or balance problems.",
            "Avoid prolonged standing if experiencing significant fatigue or pain."
        ],

        primaryChakra: "root",
        
        transitions: [
            11, 12, 13, 14, 4], img: "A"
    },
    {
        id: crypto.randomUUID(), name: "Warrior I", duration: 0, number: 2,
         
        summary:
            "Strong standing posture that builds stability and strength while opening the hips, chest and shoulders.",

        benefits: [
            "Strengthens the legs, glutes and core.",
            "Opens the hips, chest and shoulders.",
            "Improves balance, stability and concentration."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Use caution with high blood pressure or shoulder injuries."
        ],

        primaryChakra: "root",
        
        transitions: [
            3, 15, 16, 120, 18], img: "j"
    },
    {
        id: crypto.randomUUID(), name: "Warrior II", duration: 0, number: 3,
         
        summary:
            "Grounding standing posture that develops strength, endurance and stability while opening the hips and chest.",

        benefits: [
            "Strengthens the legs, glutes and core.",
            "Opens the hips, inner thighs and chest.",
            "Improves stamina, balance and concentration."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Use caution with shoulder injuries or uncontrolled high blood pressure."
        ],

        primaryChakra: "root",
        
        transitions: [
            15, 2, 19, 20, 21], img: "J"
    },
    {
        id: crypto.randomUUID(), name: "Tree Pose", duration: 0, number: 4,
         
        summary:
            "Balancing standing posture that develops stability, concentration and a sense of grounded awareness.",

        benefits: [
            "Improves balance and coordination.",
            "Strengthens the legs, ankles and core.",
            "Enhances concentration and body awareness."
        ],

        contraindications: [
            "Recent ankle, knee or hip injury.",
            "Avoid practicing without support if experiencing significant balance problems."
        ],

        primaryChakra: "root",
        
        transitions: [
            13, 1, 22, 23, 24], img: "d"
    },
    {
        id: crypto.randomUUID(), name: "Downward Dog", duration: 0, number: 5,
         
        summary:
            "Foundational inverted posture that strengthens the body while lengthening the spine, legs and shoulders.",

        benefits: [
            "Strengthens the arms, shoulders, legs and core.",
            "Stretches the hamstrings, calves and shoulders.",
            "Encourages spinal length and improves overall body awareness."
        ],

        contraindications: [
            "Recent wrist, shoulder or upper back injury.",
            "Use caution with uncontrolled high blood pressure or conditions aggravated by inversions."
        ],

        primaryChakra: "root",
        
        transitions: [
            25, 26, 27, 7, 11], img: "v"
    },
    {
        id: crypto.randomUUID(), name: "Camel", duration: 0, number: 6,
         
        summary:
            "Deep kneeling backbend that opens the chest and shoulders while strengthening the back and improving spinal mobility.",

        benefits: [
            "Opens the chest, shoulders and front of the hips.",
            "Strengthens the back and supports spinal mobility.",
            "Encourages deep breathing and an open, energized posture."
        ],

        contraindications: [
            "Recent neck, back or shoulder injury.",
            "Avoid or modify if experiencing significant lower-back pain or discomfort."
        ],

        primaryChakra: "heart",
        
        transitions: [
            128, 8, 12, 69, 7], img: "\\"
    },
    {
        id: crypto.randomUUID(), name: "Box", duration: 0, number: 7,
         
        summary:
            "Neutral hands-and-knees posture that provides a stable foundation for movement, mobility and transitions.",

        benefits: [
            "Builds stability in the shoulders, wrists and core.",
            "Supports spinal mobility and body awareness.",
            "Provides a stable foundation for a variety of yoga movements."
        ],

        contraindications: [
            "Recent wrist, shoulder or knee injury.",
            "Modify or use support if weight-bearing on the hands or knees causes discomfort."
        ],

        primaryChakra: "root",
        
        transitions: [
            8, 114, 119, 123, 26], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Cat", duration: 8, number: 8,
         
        summary:
            "Gentle quadruped posture that rounds the spine and encourages controlled spinal mobility and awareness.",

        benefits: [
            "Improves spinal mobility and flexibility.",
            "Releases tension through the back and neck.",
            "Strengthens awareness of breath and spinal movement."
        ],

        contraindications: [
            "Recent wrist, shoulder or spinal injury.",
            "Avoid excessive spinal flexion if it causes pain or discomfort."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            114, 9, 115, 17, 161], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Dolphin", duration: 0, number: 9,
         
         summary:
            "Forearm-supported inversion preparation that strengthens the upper body while opening the shoulders and lengthening the spine.",

        benefits: [
            "Strengthens the shoulders, arms and core.",
            "Opens the shoulders and stretches the hamstrings.",
            "Builds strength and stability for forearm-based inversions."
        ],

        contraindications: [
            "Recent shoulder, neck or upper-back injury.",
            "Avoid if the posture causes pressure or pain in the shoulders or head."
        ],

        primaryChakra: "crown",
        
        transitions: [
            5, 7, 160, 151, 27], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Rabbit", duration: 0, number: 10,
         
        summary:
            "Kneeling forward-folding posture that gently rounds the spine while stretching the back of the body.",

        benefits: [
            "Stretches the spine, shoulders and upper back.",
            "Releases tension through the neck and back.",
            "Encourages a calm and introspective state."
        ],

        contraindications: [
            "Recent neck, spinal or shoulder injury.",
            "Avoid placing excessive pressure on the head or neck."
        ],

        primaryChakra: "crown",
        
        transitions: [ 
            0, 69, 5, 57, 6], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Big Toe", duration: 0, number: 11,
         
        summary:
            "Standing forward fold that lengthens the back of the body while encouraging flexibility in the hamstrings and spine.",

        benefits: [
            "Stretches the hamstrings, calves and lower back.",
            "Encourages spinal length and flexibility.",
            "Calms the mind and promotes a grounded state."
        ],

        contraindications: [
            "Recent lower-back or hamstring injury.",
            "Avoid forcing the forward fold if it causes pain or excessive strain."
        ],

        primaryChakra: "root",
        
        transitions: [
            34, 1, 166, 5, 63], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Crescent Moon", duration: 0, number: 12,
         
        summary:
            "Standing lateral stretch that lengthens the sides of the body while improving mobility and balance.",

        benefits: [
            "Stretches the sides of the torso and shoulders.",
            "Improves spinal mobility and flexibility.",
            "Encourages balance, posture and mindful breathing."
        ],

        contraindications: [
            "Recent shoulder, spinal or hip injury.",
            "Avoid deep lateral bending if it causes pain or dizziness."
        ],

        primaryChakra: "heart",
        
        transitions: [
            1, 3, 42, 19, 34], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Eagle", duration: 0, number: 13,
         
        summary:
            "Challenging standing balance that develops concentration, stability and coordination while creating a deep stretch through the hips and shoulders.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the legs, ankles and core.",
            "Stretches the hips, shoulders and upper back."
        ],

        contraindications: [
            "Recent knee, ankle or hip injury.",
            "Use caution if experiencing significant balance problems."
        ],

        primaryChakra: "root",
        
        transitions: [
            1, 4, 15, 30, 34], img: "L"
    },
    {
        id: crypto.randomUUID(), name: "Goddess", duration: 0, number: 14,
         
        summary:
            "Wide-legged standing posture that builds strength in the lower body while opening the hips and creating a grounded, expansive stance.",

        benefits: [
            "Strengthens the legs, glutes and core.",
            "Opens the hips, inner thighs and pelvis.",
            "Improves lower-body stability and endurance."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid excessive depth if it causes pressure or pain in the knees."
        ],

        primaryChakra: "root",
        
        transitions: [
            3, 42, 63, 1, 44], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Warrior III", duration: 0, number: 15,
         
       summary:
            "Dynamic standing balance that strengthens the legs and core while challenging stability, focus and body awareness.",

        benefits: [
            "Strengthens the legs, glutes and core.",
            "Improves balance, coordination and concentration.",
            "Stretches the hamstrings while building full-body stability."
        ],

        contraindications: [
            "Recent ankle, knee, hip or lower-back injury.",
            "Use support if experiencing significant balance difficulties."
        ],

        primaryChakra: "root",
        
        transitions: [
            1, 4, 13, 34, 37], img: "k"
    },
    {
        id: crypto.randomUUID(), name: "Pyramid", duration: 0, number: 16,
         
        summary:
            "Asymmetrical standing forward fold that lengthens the hamstrings and spine while developing balance and stability.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Encourages spinal length and flexibility.",
            "Improves balance, stability and body awareness."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Avoid forcing the forward fold if it causes pain or excessive strain."
        ],

        primaryChakra: "root",
        
        transitions: [
            34, 42, 2, 166, 1], img: "K"
    },
    {
        id: crypto.randomUUID(), name: "Lunge", duration: 0, number: 17,
         
        summary:
            "Foundational standing lunge that strengthens the legs while opening the hips and preparing the body for standing sequences.",

        benefits: [
            "Strengthens the legs and glutes.",
            "Stretches the hip flexors and improves hip mobility.",
            "Builds stability and prepares the body for standing transitions."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid allowing the front knee to collapse inward or extending beyond a comfortable range."
        ],

        primaryChakra: "root",
            
        transitions: [
            ], img: "~"
    },
    {
        id: crypto.randomUUID(), name: "Standing Bow", duration: 0, number: 18,
         
        summary:
            "Dynamic standing balance that combines a deep backbend with a strong leg lift, challenging strength, flexibility and concentration.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the standing leg, glutes and core.",
            "Opens the chest, shoulders and hip flexors."
        ],

        contraindications: [
            "Recent ankle, knee, hip or lower-back injury.",
            "Use caution with shoulder injuries or significant balance difficulties."
        ],

        primaryChakra: "heart",
        
        transitions: [
            1, 15, 3, 34, 0], img: "¦"
    },
    {
        id: crypto.randomUUID(), name: "Extended Side Angle", duration: 0, number: 19,
         
         summary:
            "Strong standing posture that opens the hips and side body while building stability and endurance in the legs.",

        benefits: [
            "Strengthens the legs and improves lower-body stability.",
            "Stretches the hips, inner thighs and side body.",
            "Opens the chest and shoulders while encouraging deep breathing."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Use caution with shoulder or neck injuries."
        ],

        primaryChakra: "root",
        
        transitions: [
            42, 37, 168, 3, 43], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Star", duration: 0, number: 20,
         
       summary:
            "Wide-legged standing posture that creates an expansive shape while strengthening the legs and opening the chest and hips.",

        benefits: [
            "Strengthens the legs, glutes and core.",
            "Opens the hips, chest and shoulders.",
            "Improves posture, balance and body awareness."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Avoid excessive leg width if it causes discomfort."
        ],

        primaryChakra: "heart",
        
        transitions: [
            14, 1, 44, 42, 118], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Shiva Squat", duration: 0, number: 21,
         
        summary:
            "Dynamic single-leg squat that challenges balance, mobility and lower-body strength while requiring focused control.",

        benefits: [
            "Strengthens the legs, glutes and core.",
            "Develops balance, coordination and concentration.",
            "Improves hip and ankle mobility through controlled movement."
        ],

        contraindications: [
            "Recent knee, ankle or hip injury.",
            "Use support if balance or single-leg stability is limited."
        ],

        primaryChakra: "root",
        
        transitions: [
            23, 15, 63, 169, 43], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Extended Stanting Hand to Big Toe", duration: 0, number: 22,
         
        summary:
            "Challenging standing balance that combines hamstring flexibility, hip mobility and focused single-leg stability.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the standing leg and core.",
            "Deeply stretches the hamstrings and opens the hips."
        ],

        contraindications: [
            "Recent hamstring, hip, ankle or lower-back injury.",
            "Use a strap or modify the leg height if full extension causes strain."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            23, 15, 37, 18, 39], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Standing Splits", duration: 0, number: 23,
         
        summary:
            "Inverted standing balance that combines a strong grounding leg with a deep hamstring stretch and lifted back leg.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Strengthens the standing leg, core and hips.",
            "Develops balance, concentration and body awareness."
        ],

        contraindications: [
            "Recent hamstring, hip, ankle or lower-back injury.",
            "Avoid forcing the lifted leg higher if it compromises alignment."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            15, 37, 16, 148, 42], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Standing Foot to Head", duration: 0, number: 24,
         
        summary:
            "Advanced standing backbend that combines single-leg balance with deep spinal extension and hip flexor opening.",

        benefits: [
            "Improves balance, flexibility and concentration.",
            "Opens the chest, shoulders and hip flexors.",
            "Strengthens the standing leg and develops full-body control."
        ],

        contraindications: [
            "Recent spinal, hip, knee or shoulder injury.",
            "Avoid deep spinal extension if it causes pain or compression."
        ],

        primaryChakra: "heart",
        
        transitions: [
            18, 13, 120, 37, 38], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Cobra", duration: 0, number: 25,
         
        summary:
            "Prone backbend that strengthens the spine while opening the chest, shoulders and front of the body.",

        benefits: [
            "Strengthens the back and spinal muscles.",
            "Opens the chest, shoulders and abdomen.",
            "Improves spinal extension and posture."
        ],

        contraindications: [
            "Recent abdominal, spinal or wrist injury.",
            "Avoid excessive spinal extension if it causes lower-back discomfort."
        ],

        primaryChakra: "thoat",
        
        transitions: [
            108, 104, 27, 131, 0], img: "B"
    },
    {
        id: crypto.randomUUID(), name: "Puppy", duration: 0, number: 26,
         
        summary:
            "Gentle kneeling heart opener that lengthens the spine while deeply stretching the shoulders and upper back.",

        benefits: [
            "Deeply stretches the shoulders and upper back.",
            "Opens the chest and lengthens the spine.",
            "Improves shoulder mobility and encourages deep breathing."
        ],

        contraindications: [
            "Recent shoulder, neck or upper-back injury.",
            "Avoid forcing the chest toward the floor if it causes discomfort."
        ],

        primaryChakra: "third eye",
        
        transitions: [
            27, 9, 5, 106, 10], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Sphinx", duration: 0, number: 27,
         
         summary:
            "Gentle forearm-supported backbend that strengthens the spine while opening the chest and abdomen.",

        benefits: [
            "Gently strengthens the spine and back.",
            "Opens the chest and front of the body.",
            "Encourages relaxed breathing and gentle spinal mobility."
        ],

        contraindications: [
            "Recent spinal or abdominal injury.",
            "Avoid the posture if it creates compression or pain in the lower back."
        ],

        primaryChakra: "heart",
        
        transitions: [
            25, 104, 108, 0, 112], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Bird of Paradise", duration: 0, number: 28,
         
        summary:
            "Advanced standing balance that combines a bound leg extension with hip opening, hamstring flexibility and focused stability.",

        benefits: [
            "Develops balance, coordination and concentration.",
            "Strengthens the standing leg and core.",
            "Opens the hips and stretches the hamstrings and shoulders."
        ],

        contraindications: [
            "Recent hip, knee, hamstring or shoulder injury.",
            "Avoid forcing the leg extension if the hip or hamstring feels restricted."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            29, 24, 36, 1, 4], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Revolved Bird of Paradise", duration: 0, number: 29,
         
        summary:
            "Advanced standing balance combining a bound leg extension with a deep spinal twist and strong hip opening.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the standing leg and core.",
            "Develops spinal mobility while opening the hips and shoulders."
        ],

        contraindications: [
            "Recent spinal, hip, knee or shoulder injury.",
            "Avoid deep twisting if it causes discomfort in the lower back or neck."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Chair", duration: 0, number: 30,
         
        summary:
            "Strong standing squat that builds lower-body strength while challenging core stability, endurance and focus.",

        benefits: [
            "Strengthens the thighs, glutes and core.",
            "Builds stamina and stability throughout the lower body.",
            "Improves posture, concentration and body awareness."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Avoid excessive knee flexion if it causes pain or pressure."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "D"
    },
    {
        id: crypto.randomUUID(), name: "Firefly II", duration: 0, number: 31,
         
        summary:
            "Advanced arm balance that combines deep hip opening, hamstring flexibility and strong control through the arms and core.",

        benefits: [
            "Strengthens the arms, wrists, shoulders and core.",
            "Develops hip mobility and hamstring flexibility.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, elbow or shoulder injury.",
            "Avoid the posture if deep hip opening or weight-bearing on the hands causes pain."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Firefly III", duration: 0, number: 32,
         
        summary:
            "Advanced arm balance requiring substantial hip mobility, upper-body strength and precise control while extending the legs.",

        benefits: [
            "Strengthens the arms, shoulders and abdominal muscles.",
            "Builds hip and hamstring mobility.",
            "Develops focus, coordination and full-body control."
        ],

        contraindications: [
            "Recent wrist, elbow or shoulder injury.",
            "Avoid if the required hip opening or hamstring extension causes strain."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Richikasana", duration: 0, number: 33,
         
        summary:
            "Advanced standing balance and backbend that combines deep hip opening with spinal extension and strong single-leg stability.",

        benefits: [
            "Develops balance, flexibility and concentration.",
            "Opens the hips, shoulders and front of the body.",
            "Strengthens the standing leg and improves full-body coordination."
        ],

        contraindications: [
            "Recent spinal, hip, knee or shoulder injury.",
            "Avoid deep backbending or leg extension if it causes pain or compression."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Uttanasana", duration: 0, number: 34,
         
        summary:
            "Standing forward fold that lengthens the back of the body while encouraging relaxation and release through the spine.",

        benefits: [
            "Stretches the hamstrings, calves and lower back.",
            "Releases tension through the neck and shoulders.",
            "Encourages relaxation and mindful breathing."
        ],

        contraindications: [
            "Recent lower-back or hamstring injury.",
            "Use a bent-knee variation if full forward folding causes discomfort."
        ],

        primaryChakra: "root",
        
        transitions: [
            ], img: "'"
    },
    {
        id: crypto.randomUUID(), name: "Ardha Baddha Padmottanasana", duration: 0, number: 35,
         
        summary:
            "Challenging one-legged forward fold that combines balance, hip opening and a bound half-lotus position.",

        benefits: [
            "Improves balance and concentration.",
            "Opens the hips and stretches the hamstrings.",
            "Develops stability and body awareness in a single-leg stance."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid forcing the half-lotus position if there is tension or pain in the knee."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Gorilla", duration: 0, number: 36,
         
        summary:
            "Deep standing forward fold with the hands placed beneath the feet, combining hamstring lengthening with a gentle wrist and forearm stretch.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Stretches the wrists and forearms.",
            "Releases tension through the back and encourages relaxation."
        ],

        contraindications: [
            "Recent wrist, hand, hamstring or lower-back injury.",
            "Avoid forcing the legs straight if the hamstrings are tight."
        ],

        primaryChakra: "root",
        
        transitions: [
            ], img: "@"
    },
    {
        id: crypto.randomUUID(), name: "Half Moon", duration: 0, number: 37,
         
        summary:
            "Lateral standing balance that develops stability while opening the hips, chest and hamstrings.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the standing leg, glutes and core.",
            "Opens the hips, chest and hamstrings."
        ],

        contraindications: [
            "Recent ankle, knee, hip or lower-back injury.",
            "Use a block or support if balance or hamstring flexibility is limited."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "G"
    },
    {
        id: crypto.randomUUID(), name: "Revolved Half Moon", duration: 0, number: 38,
         
        summary:
            "Challenging twisting balance that combines a standing leg, extended back leg and deep spinal rotation.",

        benefits: [
            "Develops balance, coordination and concentration.",
            "Strengthens the legs, hips and core.",
            "Improves spinal mobility while stretching the hamstrings."
        ],

        contraindications: [
            "Recent spinal, hip, hamstring or ankle injury.",
            "Avoid deep twisting if it causes pain or strain in the lower back."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Revolved Standing Hand to Big Toe", duration: 0, number: 39,
         
        summary:
            "Advanced standing balance that combines a leg extension, hip opening and deep spinal rotation while demanding precise control.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the standing leg and core.",
            "Develops hamstring and hip flexibility while improving spinal mobility."
        ],

        contraindications: [
            "Recent spinal, hip, hamstring or ankle injury.",
            "Avoid forcing the twist or leg extension if it causes discomfort."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: ";"
    },
    {
        id: crypto.randomUUID(), name: "Standing Hand to Big Toe", duration: 0, number: 40,
         
        summary:
            "Single-leg standing balance that combines leg extension, hip mobility and focused control.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Strengthens the standing leg, hips and core.",
            "Stretches the hamstrings while improving hip mobility."
        ],

        contraindications: [
            "Recent hip, hamstring, knee or ankle injury.",
            "Use a strap or bend the extended knee if necessary."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: ":"
    },
    {
        id: crypto.randomUUID(), name: "Durvasasana", duration: 0, number: 41,
         
        summary:
            "Advanced one-legged balance that combines deep hip opening with controlled leg placement and intense concentration.",

        benefits: [
            "Develops balance, concentration and coordination.",
            "Opens the hips and stretches the inner thighs.",
            "Strengthens the standing leg and core."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid forcing the leg position if it creates pressure in the knee or hip."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Triangle", duration: 0, number: 42,
         
        summary:
            "Wide-legged standing posture that combines lateral extension with hip opening, hamstring lengthening and chest expansion.",

        benefits: [
            "Stretches the hamstrings, hips and inner thighs.",
            "Opens the chest and shoulders.",
            "Improves lower-body stability and spinal mobility."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid forcing the torso downward if it causes strain or discomfort."
        ],

        primaryChakra: "throat",
        
        transitions: [
            ], img: "F"
    },
    {
        id: crypto.randomUUID(), name: "Revolved Triangle", duration: 0, number: 43,
         
        summary:
            "Strong twisting standing posture that combines hamstring lengthening with spinal rotation and focused lower-body stability.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Improves spinal mobility and rotational awareness.",
            "Strengthens the legs while developing balance and concentration."
        ],

        contraindications: [
            "Recent spinal, hamstring or hip injury.",
            "Avoid deep twisting if it causes discomfort in the lower back or neck."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Wide Legged Forward Bend I", duration: 0, number: 44,
         
        summary:
            "Wide-legged forward fold that lengthens the back of the body while creating space through the hips, spine and shoulders.",

        benefits: [
            "Deeply stretches the hamstrings and inner thighs.",
            "Releases tension through the back and neck.",
            "Improves hip mobility and encourages a grounded, relaxed state."
        ],

        contraindications: [
            "Recent lower-back, hamstring or hip injury.",
            "Avoid excessive forward folding if it causes pressure or discomfort."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "l"
    },
    {
        id: crypto.randomUUID(), name: "Wide Legged Forward Bend II", duration: 0, number: 45,
         
        summary:
            "Wide-legged forward fold with a different arm position that intensifies the opening of the shoulders and upper back.",

        benefits: [
            "Stretches the hamstrings, inner thighs and calves.",
            "Opens the shoulders and upper back.",
            "Encourages spinal length and calm, focused breathing."
        ],

        contraindications: [
            "Recent shoulder, wrist, hamstring or lower-back injury.",
            "Avoid forcing the hands or shoulders into position."
        ],

        primaryChakra: "throat",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Wide Legged Forward Bend III", duration: 0, number: 46,
         
        summary:
            "Deep wide-legged forward fold that combines hamstring lengthening with controlled shoulder and upper-back opening.",

        benefits: [
            "Deeply stretches the hamstrings, calves and inner thighs.",
            "Opens the shoulders and upper back.",
            "Encourages spinal length and develops flexibility through the posterior chain."
        ],

        contraindications: [
            "Recent hamstring, shoulder, wrist or lower-back injury.",
            "Avoid forcing the forward fold or shoulder position."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Wide Legged Forward Bend IV", duration: 0, number: 47,
         
        summary:
            "Advanced wide-legged forward fold that combines deep posterior-chain stretching with a demanding arm and shoulder position.",

        benefits: [
            "Deeply stretches the hamstrings and inner thighs.",
            "Improves shoulder and upper-back mobility.",
            "Develops flexibility, control and awareness through the whole body."
        ],

        contraindications: [
            "Recent shoulder, wrist, hamstring or lower-back injury.",
            "Avoid excessive pressure through the shoulders or hands."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Archer", duration: 0, number: 48,
         
        summary:
            "Dynamic standing balance that combines a strong single-leg stance with deep hip opening and an extended leg position.",

        benefits: [
            "Develops balance, concentration and coordination.",
            "Strengthens the standing leg, hips and core.",
            "Improves hip mobility and flexibility in the lifted leg."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Avoid forcing the lifted leg into position if there is discomfort in the hip or knee."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Boat", duration: 0, number: 49,
         
        summary:
            "Seated balancing posture that strengthens the core while challenging stability and control through the legs.",

        benefits: [
            "Strengthens the abdominal muscles and hip flexors.",
            "Improves balance, stability and body awareness.",
            "Builds endurance and control through the core and legs."
        ],

        contraindications: [
            "Recent abdominal, hip or lower-back injury.",
            "Modify by bending the knees if the full position causes strain."
        ],

        primaryChakra: "solarPlexus",

        
        transitions: [
            ], img: "E"
    },
    {
        id: crypto.randomUUID(), name: "Bound Angle", duration: 0, number: 50,
         
        summary:
            "Seated hip-opening posture that brings the soles of the feet together while encouraging relaxation through the hips and inner thighs.",

        benefits: [
            "Opens the hips and stretches the inner thighs.",
            "Encourages mobility through the pelvis.",
            "Promotes relaxation and mindful breathing."
        ],

        contraindications: [
            "Recent hip, knee or groin injury.",
            "Support the knees with blocks or cushions if necessary."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "w"
    },
    {
        id: crypto.randomUUID(), name: "Butterfly", duration: 0, number: 51,
         
        summary:
            "Gentle seated hip opener that releases the inner thighs and encourages relaxed mobility through the pelvis.",

        benefits: [
            "Gently stretches the inner thighs and groin.",
            "Improves hip mobility and flexibility.",
            "Encourages relaxation and calm, steady breathing."
        ],

        contraindications: [
            "Recent knee, hip or groin injury.",
            "Avoid pressing the knees down forcefully."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Caterpillar", duration: 0, number: 52,
         
        summary:
            "Seated forward fold that deeply stretches the posterior chain while encouraging a quiet and introspective state.",

        benefits: [
            "Deeply stretches the hamstrings, calves and lower back.",
            "Encourages spinal relaxation and gentle mobility.",
            "Promotes calm, introspection and steady breathing."
        ],

        contraindications: [
            "Recent lower-back or hamstring injury.",
            "Avoid forcing the spine or legs into a deeper fold."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Cow Face", duration: 0, number: 53,
         
        summary:
            "Seated posture that combines deep hip opening with a shoulder stretch while encouraging an upright, steady position.",

        benefits: [
            "Opens the hips and stretches the outer thighs.",
            "Improves shoulder and upper-back mobility.",
            "Encourages an upright posture and focused breathing."
        ],

        contraindications: [
            "Recent knee, hip or shoulder injury.",
            "Use a strap between the hands if the shoulders are tight."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "Q"
    },
    {
        id: crypto.randomUUID(), name: "Easy", duration: 0, number: 54,
         
        summary:
            "Simple seated posture that provides a stable foundation for meditation, breathwork and gentle mobility.",

        benefits: [
            "Encourages an upright and stable seated posture.",
            "Supports meditation and mindful breathing.",
            "Gently opens the hips and lengthens the spine."
        ],

        contraindications: [
            "Recent hip or knee injury.",
            "Use cushions or other support if maintaining an upright seat is uncomfortable."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "t"
    },
    {
        id: crypto.randomUUID(), name: "Embryo in Womb", duration: 0, number: 55,
         
        summary:
            "Compact seated posture that draws the body inward while deeply flexing the hips, knees and spine.",

        benefits: [
            "Encourages deep hip and knee flexion.",
            "Creates a compact, introspective posture.",
            "Develops mobility and awareness through the hips and spine."
        ],

        contraindications: [
            "Recent knee, hip, ankle or spinal injury.",
            "Avoid the posture if deep knee or hip flexion causes discomfort."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Fire Log", duration: 0, number: 56,
         
        summary:
            "Seated hip-opening posture that stacks the legs while creating a deep stretch through the outer hips and glutes.",

        benefits: [
            "Deeply opens the outer hips and glutes.",
            "Improves mobility in the hip joints.",
            "Prepares the body for deeper seated hip-opening postures."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid forcing the knees toward the floor if the hips are restricted."
        ],

        primaryChakra: "sacral",

        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Seated Forward Bend I", duration: 0, number: 57,
         
        summary:
            "Seated forward fold that lengthens the entire posterior chain while encouraging a calm and inward-focused state.",

        benefits: [
            "Stretches the hamstrings, calves and lower back.",
            "Encourages spinal length and flexibility.",
            "Promotes relaxation and steady, mindful breathing."
        ],

        contraindications: [
            "Recent lower-back or hamstring injury.",
            "Bend the knees if necessary to avoid excessive strain."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "i"
    },
    {
        id: crypto.randomUUID(), name: "Seated Forward Bend II", duration: 0, number: 58,
         
        summary:
            "Deep seated forward fold that lengthens the entire posterior chain while encouraging stillness and inward awareness.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Improves flexibility through the spine and posterior chain.",
            "Encourages relaxation, introspection and steady breathing."
        ],

        contraindications: [
            "Recent lower-back, hamstring or spinal injury.",
            "Avoid forcing the torso toward the legs if it causes discomfort."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "i"
    },
    {
        id: crypto.randomUUID(), name: "Seated Forward Bend III", duration: 0, number: 59,
         
        summary:
            "Advanced seated forward fold that combines deep posterior-chain flexibility with increased spinal and hip mobility.",

        benefits: [
            "Deeply stretches the hamstrings, calves and lower back.",
            "Improves hip and spinal flexibility.",
            "Encourages concentration and a calm, inward-focused state."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Avoid forcing the forward fold beyond comfortable range."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "i"
    },
    {
        id: crypto.randomUUID(), name: "Seated Forward Bend IV", duration: 0, number: 60,
         
        summary:
            "Advanced seated forward fold requiring substantial flexibility through the hamstrings, hips and spine.",

        benefits: [
            "Develops deep flexibility through the posterior chain.",
            "Improves mobility in the hips and spine.",
            "Promotes stillness, concentration and mindful breathing."
        ],

        contraindications: [
            "Recent spinal, hip or hamstring injury.",
            "Avoid aggressive stretching or forcing the spine into flexion."
        ],

        primaryChakra: "crown",

        
        transitions: [
            ], img: "i"
    },
    {
        id: crypto.randomUUID(), name: "Seated Half Bound Lotus Forward Bend", duration: 0, number: 61,
         
        summary:
            "Asymmetrical seated forward fold that combines a half-lotus position with a bound arm position and deep hamstring stretch.",

        benefits: [
            "Stretches the hamstrings and outer hips.",
            "Improves hip mobility and flexibility.",
            "Develops concentration and body awareness through an asymmetrical posture."
        ],

        contraindications: [
            "Recent knee, hip or hamstring injury.",
            "Avoid forcing the half-lotus position if there is pressure or pain in the knee."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Seated Three Limbed Forward Bend", duration: 0, number: 62,
         
        summary:
            "Asymmetrical seated forward fold that combines a bent leg with an extended leg to stretch the hamstrings and open the hips.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Opens the hips and inner thighs.",
            "Improves flexibility while encouraging focused, steady breathing."
        ],

        contraindications: [
            "Recent knee, hip or hamstring injury.",
            "Modify the position if the bent knee or extended leg causes discomfort."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Garland", duration: 0, number: 63,
         
        summary:
            "Deep squatting posture that opens the hips and ankles while strengthening the lower body and encouraging grounded mobility.",

        benefits: [
            "Opens the hips, inner thighs and ankles.",
            "Strengthens the legs and improves lower-body mobility.",
            "Encourages a stable, grounded posture and awareness of the pelvis."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Use support under the heels or hips if the full squat is uncomfortable."
        ],

        primaryChakra: "root",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Seated Gate", duration: 0, number: 64,
         
        summary:
            "Asymmetrical seated posture that combines a lateral stretch with hip opening and lengthening through the side body.",

        benefits: [
            "Stretches the hamstrings, inner thighs and side body.",
            "Improves lateral spinal mobility and hip flexibility.",
            "Encourages deep breathing and awareness of asymmetrical movement."
        ],

        contraindications: [
            "Recent hip, knee or spinal injury.",
            "Avoid collapsing into the side bend if it causes discomfort."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Revolved Sealed Hand to Big Toe", duration: 0, number: 65,
         
        summary:
            "Advanced seated balance that combines a leg extension, hip opening and spinal rotation while demanding precise control.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Develops hip and hamstring flexibility.",
            "Improves spinal mobility and strengthens the core."
        ],

        contraindications: [
            "Recent spinal, hip, hamstring or knee injury.",
            "Avoid forcing the twist or leg extension beyond a comfortable range."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Head to Knee I", duration: 0, number: 66,
         
        summary:
            "Asymmetrical seated forward fold that stretches the extended leg while gently opening the hips and encouraging inward focus.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Opens the hips and inner thighs.",
            "Encourages relaxation, concentration and mindful breathing."
        ],

        contraindications: [
            "Recent hamstring, knee or hip injury.",
            "Avoid rounding deeply through the spine if it causes discomfort."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Head to Knee II", duration: 0, number: 67,
         
        summary:
            "Deeper asymmetrical seated forward fold that lengthens the extended leg while encouraging hip mobility and spinal release.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Improves hip and lower-back flexibility.",
            "Encourages relaxation and inward awareness."
        ],

        contraindications: [
            "Recent hamstring, knee, hip or lower-back injury.",
            "Avoid forcing the torso toward the extended leg."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "u"
    },
    {
        id: crypto.randomUUID(), name: "Head to Knee III", duration: 0, number: 68,
         
        summary:
            "Advanced asymmetrical forward fold that combines deep hamstring lengthening with increased hip and spinal mobility.",

        benefits: [
            "Deeply stretches the hamstrings and inner thighs.",
            "Improves flexibility through the hips and spine.",
            "Promotes concentration, relaxation and mindful breathing."
        ],

        contraindications: [
            "Recent hamstring, hip, knee or spinal injury.",
            "Avoid forcing the forward fold or compressing the extended knee."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "Y"
    },
    {
        id: crypto.randomUUID(), name: "Hero", duration: 0, number: 69,
         
        summary:
            "Kneeling seated posture that creates a stable foundation for meditation while gently stretching the thighs, knees and ankles.",

        benefits: [
            "Stretches the thighs, knees and ankles.",
            "Encourages an upright and stable seated posture.",
            "Supports meditation, breathwork and mindful awareness."
        ],

        contraindications: [
            "Recent knee, ankle or hip injury.",
            "Sit on a block or cushion if the knees or ankles feel strained."
        ],

        primaryChakra: "root",
            
        transitions: [
            ], img: "o"
    },
    {
        id: crypto.randomUUID(), name: "Heron", duration: 0, number: 70,
         
        summary:
            "Seated balancing posture that combines a strong leg extension with deep hamstring and hip stretching.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Improves hip mobility and seated balance.",
            "Strengthens the core while developing concentration and body awareness."
        ],

        contraindications: [
            "Recent knee, hip, hamstring or lower-back injury.",
            "Avoid forcing the extended leg toward the torso."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Lord of the Fishes", duration: 0, number: 71,
         
        summary:
            "Seated spinal twist that combines rotation with hip opening and an upright, stable seated foundation.",

        benefits: [
            "Improves spinal mobility and rotational flexibility.",
            "Opens the hips and stretches the outer thighs.",
            "Encourages upright posture and mindful body awareness."
        ],

        contraindications: [
            "Recent spinal, hip or knee injury.",
            "Avoid deep twisting if it causes pain or discomfort in the spine."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "P"
    },
    {
        id: crypto.randomUUID(), name: "Lotus", duration: 0, number: 72,
         
        summary:
            "Classical seated posture that creates a stable foundation for meditation while requiring significant hip mobility and external rotation.",

        benefits: [
            "Encourages a stable and upright seated posture.",
            "Develops mobility in the hips and ankles.",
            "Supports meditation, concentration and mindful breathing."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Never force the legs into position if there is pressure or pain in the knees."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "r"
    },
    {
        id: crypto.randomUUID(), name: "Noose", duration: 0, number: 73,
         
        summary:
            "Deep twisting squat that combines hip opening, spinal rotation and shoulder mobility in a compact, demanding posture.",

        benefits: [
            "Opens the hips, ankles and shoulders.",
            "Improves spinal mobility and rotational flexibility.",
            "Strengthens the legs while developing balance and body awareness."
        ],

        contraindications: [
            "Recent knee, ankle, hip or spinal injury.",
            "Avoid forcing the bind if the shoulders or hips are restricted."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "One Leg Behind the Head I", duration: 0, number: 74,
         
        summary:
            "Advanced seated hip-opening posture that places one leg behind the head while requiring substantial flexibility and controlled spinal stability.",

        benefits: [
            "Deeply opens the hips and stretches the outer hip.",
            "Develops flexibility through the hips, hamstrings and spine.",
            "Improves concentration, body awareness and seated stability."
        ],

        contraindications: [
            "Recent hip, knee, hamstring or spinal injury.",
            "Never force the leg behind the head or apply pressure to the knee."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "One Leg Behind the Head II", duration: 0, number: 75,
         
        summary:
            "Advanced seated posture that combines extreme hip opening with spinal mobility and controlled positioning of the leg behind the head.",

        benefits: [
            "Develops deep hip and hamstring flexibility.",
            "Improves mobility and awareness through the hips and spine.",
            "Builds concentration and full-body control."
        ],

        contraindications: [
            "Recent hip, knee, hamstring or spinal injury.",
            "Avoid forcing the leg into position or compressing the neck."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Half Pigeon", duration: 0, number: 76,
         
        summary:
            "Deep seated hip opener that stretches the outer hip while lengthening the front and back of the opposite leg.",

        benefits: [
            "Deeply opens the outer hip and glutes.",
            "Stretches the hip flexors and quadriceps of the extended leg.",
            "Improves hip mobility and encourages relaxation."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Use a cushion under the hip if the position creates pressure in the knee."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Rock the baby", duration: 0, number: 77,
         
        summary:
            "Seated hip-opening posture that cradles one leg while gently exploring external rotation and mobility of the hip.",

        benefits: [
            "Opens the hips and stretches the outer thigh.",
            "Improves hip mobility and external rotation.",
            "Develops body awareness and controlled movement."
        ],

        contraindications: [
            "Recent hip or knee injury.",
            "Avoid pulling the leg toward the torso if it causes pressure in the knee."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Bharadvajasana", duration: 0, number: 78,
         
        summary:
            "Seated spinal twist that combines gentle rotation with hip opening and a stable, upright foundation.",

        benefits: [
            "Improves spinal mobility and rotational flexibility.",
            "Gently opens the hips and shoulders.",
            "Encourages upright posture and mindful body awareness."
        ],

        contraindications: [
            "Recent spinal, hip or knee injury.",
            "Avoid deep twisting if it causes pain or discomfort."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "]"
    },
    {
        id: crypto.randomUUID(), name: "Sage Marichi's I", duration: 0, number: 79,
         
        summary:
            "Seated forward fold that combines asymmetrical leg positioning with a gentle hip opening and inward focus.",

        benefits: [
            "Stretches the hamstrings and lower back.",
            "Opens the hips and inner thighs.",
            "Encourages concentration and calm, steady breathing."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Avoid forcing the forward fold if the extended leg or hip feels restricted."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Sage Marichi's II", duration: 0, number: 80,
         
        summary:
            "Seated bound posture that combines a half-lotus leg position with spinal rotation and controlled shoulder binding.",

        benefits: [
            "Opens the hips and stretches the outer thighs.",
            "Improves spinal mobility and rotational flexibility.",
            "Develops shoulder mobility and concentration."
        ],

        contraindications: [
            "Recent knee, hip, shoulder or spinal injury.",
            "Avoid forcing the half-lotus or bind if there is pressure or pain."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Sage Marichi's III", duration: 0, number: 81,
         
        summary:
            "Seated twisting posture that combines a bound arm position with hip opening and controlled spinal rotation.",

        benefits: [
            "Improves spinal mobility and rotational flexibility.",
            "Opens the hips and shoulders.",
            "Develops concentration and awareness of posture and breath."
        ],

        contraindications: [
            "Recent spinal, hip, knee or shoulder injury.",
            "Avoid forcing the bind or deep spinal rotation."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "["
    },
    {
        id: crypto.randomUUID(), name: "Sage Marichi's IV", duration: 0, number: 82,
         
        summary:
            "Advanced seated posture combining a bound half-lotus position with a deep forward fold, hip opening and controlled spinal positioning.",

        benefits: [
            "Deeply stretches the hamstrings and opens the hips.",
            "Improves shoulder and spinal mobility.",
            "Develops concentration, flexibility and body awareness."
        ],

        contraindications: [
            "Recent knee, hip, hamstring, shoulder or spinal injury.",
            "Avoid forcing the half-lotus, bind or forward fold."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "I"
    },
    {
        id: crypto.randomUUID(), name: "Shoelace", duration: 0, number: 83,
         
        summary:
            "Seated hip-opening posture that stacks the legs while creating a deep stretch through the outer hips and glutes.",

        benefits: [
            "Deeply opens the outer hips and glutes.",
            "Improves hip mobility and external rotation.",
            "Encourages greater flexibility through the pelvis and thighs."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid forcing the knees toward the floor if the hips are restricted."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Side Lunge", duration: 0, number: 84,
         
        summary:
            "Dynamic lateral lunge that develops hip mobility while strengthening the legs and exploring asymmetrical lower-body movement.",

        benefits: [
            "Opens the hips, inner thighs and groin.",
            "Strengthens the legs and improves lateral mobility.",
            "Develops balance, coordination and lower-body control."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid collapsing into the bent knee or forcing the range of motion."
        ],

        primaryChakra: "root",

        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Front Splits", duration: 0, number: 85,
         
        summary:
            "Deep unilateral leg stretch that places one leg forward and the other behind while demanding substantial flexibility through the hips and hamstrings.",

        benefits: [
            "Deeply stretches the hamstrings and hip flexors.",
            "Improves flexibility through the hips and legs.",
            "Develops body awareness and controlled range of motion."
        ],

        contraindications: [
            "Recent hamstring, hip, knee or groin injury.",
            "Never force the pelvis toward the floor or push through sharp discomfort."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Wide Splits", duration: 0, number: 86,
         
        summary:
            "Deep seated or supported leg-opening posture that develops flexibility through the inner thighs, hamstrings and hips.",

        benefits: [
            "Deeply stretches the inner thighs and hamstrings.",
            "Improves hip mobility and leg flexibility.",
            "Develops controlled range of motion through the lower body."
        ],

        contraindications: [
            "Recent groin, hamstring, hip or knee injury.",
            "Avoid forcing the legs wider than a comfortable range."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "p"
    },
    {
        id: crypto.randomUUID(), name: "Staff", duration: 0, number: 87,
         
        summary:
            "Foundational seated posture that establishes an upright spine and active legs while preparing the body for deeper seated practices.",

        benefits: [
            "Strengthens postural muscles and encourages spinal alignment.",
            "Activates the legs while stretching the hamstrings.",
            "Provides a stable foundation for seated forward folds and twists."
        ],

        contraindications: [
            "Recent lower-back, hamstring or hip injury.",
            "Sit on a folded blanket or cushion if maintaining an upright spine is uncomfortable."
        ],

        primaryChakra: "root",
        
        transitions: [
            ], img: "q"
    },
    {
        id: crypto.randomUUID(), name: "Thunderbolt", duration: 0, number: 88,
         
        summary:
            "Kneeling seated posture that creates a stable foundation for meditation, breathwork and more demanding kneeling practices.",

        benefits: [
            "Encourages an upright and stable seated posture.",
            "Gently stretches the thighs, knees and ankles.",
            "Supports meditation, breathwork and mindful awareness."
        ],

        contraindications: [
            "Recent knee, ankle or hip injury.",
            "Use a cushion or block beneath the hips if the knees or ankles feel strained."
        ],

        primaryChakra: "root",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Toe Stand", duration: 0, number: 89,
         
        summary:
            "Advanced balancing posture performed on the balls of the feet that develops ankle stability, concentration and lower-body control.",

        benefits: [
            "Improves balance, concentration and coordination.",
            "Strengthens the ankles, calves and legs.",
            "Develops stability and awareness through the lower body."
        ],

        contraindications: [
            "Recent ankle, foot, knee or hip injury.",
            "Avoid the posture if weight-bearing on the toes causes pain."
        ],

        primaryChakra: "root",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Two Legs Behind the Head I", duration: 0, number: 90,
         
        summary:
            "Advanced seated posture that brings both legs behind the head, requiring exceptional hip mobility, spinal control and concentration.",

        benefits: [
            "Develops deep hip and outer-leg flexibility.",
            "Improves mobility through the hips and spine.",
            "Builds concentration, body awareness and controlled flexibility."
        ],

        contraindications: [
            "Recent hip, knee, hamstring or spinal injury.",
            "Never force the legs behind the head or place excessive pressure on the neck."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Banana", duration: 0, number: 91,
         
        summary:
            "Reclined lateral stretch that lengthens the entire side body while gently opening the shoulders, hips and legs.",

        benefits: [
            "Stretches the lateral body, shoulders and hips.",
            "Improves flexibility through the spine and side waist.",
            "Encourages relaxation and awareness of asymmetrical movement."
        ],

        contraindications: [
            "Recent shoulder, hip or spinal injury.",
            "Avoid excessive lateral stretching if it causes discomfort."
        ],

        primaryChakra: "heart",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Bridge", duration: 0, number: 92,
         
        summary:
            "Supine backbend that strengthens the posterior chain while opening the chest, shoulders and front of the hips.",

        benefits: [
            "Strengthens the glutes, hamstrings and back muscles.",
            "Opens the chest, shoulders and hip flexors.",
            "Improves spinal extension and develops full-body stability."
        ],

        contraindications: [
            "Recent neck, shoulder, spinal or wrist injury.",
            "Avoid excessive compression in the lower back or neck."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "¥"
    },
    {
        id: crypto.randomUUID(), name: "Corpse", duration: 0, number: 93,
         
        summary:
            "Resting supine posture that allows the body and mind to release muscular effort and integrate the effects of practice.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Supports calm breathing and mental stillness.",
            "Provides space for recovery and integration after practice."
        ],

        contraindications: [
            "Pregnancy may require side-lying modification for comfort.",
            "Use blankets or other support if lying flat causes discomfort."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "+"
    },
    {
        id: crypto.randomUUID(), name: "Fish", duration: 0, number: 94,
         
        summary:
            "Supine backbend that opens the chest and throat while gently extending the spine and stretching the front of the body.",

        benefits: [
            "Opens the chest, shoulders and upper body.",
            "Improves spinal extension and mobility.",
            "Encourages deep, expansive breathing."
        ],

        contraindications: [
            "Recent neck, spinal or shoulder injury.",
            "Avoid placing excessive pressure on the crown of the head or neck."
        ],

        primaryChakra: "throat",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Supine Foot to Head", duration: 0, number: 95,
         
        summary:
            "Advanced supine backbend that brings the feet toward the head while demanding substantial spinal, hip and leg flexibility.",

        benefits: [
            "Develops spinal and hip flexibility.",
            "Deeply stretches the front of the body.",
            "Improves body awareness, control and concentration."
        ],

        contraindications: [
            "Recent spinal, neck, hip or hamstring injury.",
            "Avoid forcing the feet toward the head or compressing the neck."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Extended Supine Hand to Big Toe", duration: 0, number: 96,
         
        summary:
            "Supine leg extension that combines hamstring flexibility with controlled hip mobility while keeping the body grounded.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Improves hip mobility and leg flexibility.",
            "Develops body awareness and controlled range of motion."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Avoid forcing the extended leg toward the torso."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Supine Hand to Big Toe", duration: 0, number: 97,
         
        summary:
            "Reclined leg stretch that combines hamstring lengthening with controlled hip mobility while keeping the spine supported by the ground.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Improves hip mobility and leg flexibility.",
            "Encourages controlled movement while keeping the spine grounded."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Avoid forcing the extended leg toward the head."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "N"
    },
    {
        id: crypto.randomUUID(), name: "Happy Baby", duration: 0, number: 98,
         
        summary:
            "Gentle reclined hip opener that releases tension through the hips, inner thighs and lower back.",

        benefits: [
            "Opens the hips and inner thighs.",
            "Gently releases tension through the lower back.",
            "Encourages relaxation and calm breathing."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid pulling the feet downward if it creates pressure in the knees or hips."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Sleeping Yogi", duration: 0, number: 99,
         
        summary:
            "Deep reclining posture that combines hip opening with a relaxed, introspective position of the body.",

        benefits: [
            "Encourages deep relaxation and inward awareness.",
            "Gently opens the hips and stretches the lower body.",
            "Supports slow breathing and recovery after more demanding postures."
        ],

        contraindications: [
            "Recent hip, knee, ankle or lower-back injury.",
            "Use supportive props if the position creates discomfort."
        ],

        primaryChakra: "crown",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Supine Spinal Twist", duration: 0, number: 100,
         
        summary:
            "Gentle reclining twist that mobilizes the spine while releasing tension through the back, hips and shoulders.",

        benefits: [
            "Improves gentle spinal rotation and mobility.",
            "Releases tension through the lower back and hips.",
            "Encourages relaxation and calm, steady breathing."
        ],

        contraindications: [
            "Recent spinal, hip or abdominal injury.",
            "Avoid forcing the knees toward the floor or rotating beyond a comfortable range."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "M"
    },
    {
        id: crypto.randomUUID(), name: "Supine Straddle", duration: 0, number: 101,
         
        summary:
            "Reclined wide-legged position that opens the inner thighs and hips while allowing the spine to remain supported by the ground.",

        benefits: [
            "Stretches the inner thighs and hamstrings.",
            "Improves hip mobility and flexibility.",
            "Provides a gentle, supported alternative to seated wide-leg postures."
        ],

        contraindications: [
            "Recent groin, hip or hamstring injury.",
            "Avoid forcing the legs wider than a comfortable range."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Waterfall", duration: 0, number: 102,
         
        summary:
            "Inverted resting posture that elevates the legs while allowing the body to relax and recover with minimal muscular effort.",

        benefits: [
            "Encourages relaxation and recovery.",
            "Provides a gentle inversion with the legs elevated.",
            "Supports calm breathing and a quiet, restorative state."
        ],

        contraindications: [
            "Recent neck, spinal or lower-body injury.",
            "Modify or avoid the posture if inversion or leg elevation causes discomfort."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "m"
    },
    {
        id: crypto.randomUUID(), name: "Wind Removing", duration: 0, number: 103,
         
        summary:
            "Shoulder and chest opening posture that releases tension across the upper body while encouraging greater mobility through the shoulders.",

        benefits: [
            "Opens the shoulders and chest.",
            "Improves mobility through the upper back and shoulder joints.",
            "Releases tension accumulated through the upper body."
        ],

        contraindications: [
            "Recent shoulder, neck or upper-back injury.",
            "Avoid forcing the shoulders into a range that causes pain or numbness."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "¤"
    },
    {
        id: crypto.randomUUID(), name: "Bow", duration: 0, number: 104,
         
        summary:
            "Dynamic prone backbend that combines spinal extension with strong engagement of the legs, glutes and upper back.",

        benefits: [
            "Strengthens the back, glutes and legs.",
            "Opens the chest, shoulders and hip flexors.",
            "Develops spinal extension and full-body coordination."
        ],

        contraindications: [
            "Recent spinal, shoulder, knee or abdominal injury.",
            "Avoid forcing the backbend or pulling aggressively on the ankles."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "c"
    },
    {
        id: crypto.randomUUID(), name: "Half Bow", duration: 0, number: 105,
         
        summary:
            "Asymmetrical prone backbend that opens the front of one side of the body while developing spinal extension and leg control.",

        benefits: [
            "Opens the chest, hip flexor and thigh on one side.",
            "Strengthens the back and posterior chain.",
            "Improves spinal extension and asymmetrical body awareness."
        ],

        contraindications: [
            "Recent spinal, shoulder, knee or hip injury.",
            "Avoid pulling strongly on the ankle if it creates pressure in the knee or lower back."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Reverse Corpse", duration: 0, number: 106,
         
        summary:
            "Resting prone posture that allows the body to release muscular effort while gently opening the front of the body.",

        benefits: [
            "Encourages deep physical relaxation.",
            "Allows the front of the body to rest and release tension.",
            "Supports calm breathing and mindful awareness."
        ],

        contraindications: [
            "Recent abdominal, spinal or hip injury.",
            "Use support under the head or pelvis if lying prone is uncomfortable."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Frog", duration: 0, number: 107,
         
        summary:
            "Deep hip-opening posture that stretches the inner thighs and groin while requiring controlled mobility through the hips and knees.",

        benefits: [
            "Deeply stretches the inner thighs and groin.",
            "Improves hip mobility and flexibility.",
            "Develops awareness and control through the pelvis and lower body."
        ],

        contraindications: [
            "Recent knee, hip, groin or ankle injury.",
            "Avoid forcing the knees wider than a comfortable range."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: ","
    },
    {
        id: crypto.randomUUID(), name: "Locust I", duration: 0, number: 108,
         
        summary:
            "Prone back-strengthening posture that lifts the legs and chest while developing control through the posterior chain.",

        benefits: [
            "Strengthens the back, glutes and hamstrings.",
            "Improves spinal extension and posterior-chain strength.",
            "Develops stability and body awareness through the entire body."
        ],

        contraindications: [
            "Recent spinal, abdominal or shoulder injury.",
            "Avoid excessive lifting if it causes compression in the lower back."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "b"
    },
    {
        id: crypto.randomUUID(), name: "Locust II", duration: 0, number: 109,
         
        summary:
            "Progressive prone backbend that strengthens the entire posterior chain while increasing spinal extension and body control.",

        benefits: [
            "Strengthens the back, glutes and hamstrings.",
            "Improves spinal extension and posterior-chain endurance.",
            "Develops coordination and controlled full-body engagement."
        ],

        contraindications: [
            "Recent spinal, abdominal, hip or shoulder injury.",
            "Avoid excessive spinal extension or lifting if it causes lower-back compression."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Locust III", duration: 0, number: 110,
         
        summary:
            "Advanced prone backbend that combines strong posterior-chain engagement with increased spinal extension and precise body control.",

        benefits: [
            "Strengthens the back, glutes and legs.",
            "Develops spinal extension and full-body strength.",
            "Improves concentration, coordination and postural awareness."
        ],

        contraindications: [
            "Recent spinal, abdominal, hip or shoulder injury.",
            "Avoid forcing the backbend or lifting beyond a controlled range."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "e"
    },
    {
        id: crypto.randomUUID(), name: "Sage Gheranda's", duration: 0, number: 111,
         
        summary:
            "Advanced posture combining a strong seated foundation with deep spinal and hip mobility, requiring flexibility, stability and concentration.",

        benefits: [
            "Develops flexibility through the hips and spine.",
            "Improves balance, coordination and body awareness.",
            "Encourages concentration and controlled breathing."
        ],

        contraindications: [
            "Recent spinal, hip, knee or shoulder injury.",
            "Avoid forcing the posture if the required flexibility is not available."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Snake", duration: 0, number: 112,
         
        summary:
            "Prone backbend that strengthens the posterior chain while opening the chest and creating controlled spinal extension.",

        benefits: [
            "Strengthens the back, shoulders and posterior chain.",
            "Opens the chest and front of the body.",
            "Improves spinal extension and develops postural control."
        ],

        contraindications: [
            "Recent spinal, shoulder, wrist or abdominal injury.",
            "Avoid forcing the backbend or compressing the lower back."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Tortoise", duration: 0, number: 113,
         
        summary:
            "Deep seated forward fold that combines hip opening, hamstring flexibility and internal rotation with a strongly inward-facing shape.",

        benefits: [
            "Deeply stretches the hamstrings, hips and lower back.",
            "Improves hip mobility and flexibility.",
            "Encourages introspection, concentration and calm breathing."
        ],

        contraindications: [
            "Recent hip, hamstring, spinal or shoulder injury.",
            "Avoid forcing the shoulders underneath the legs or rounding deeply through the spine."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "#"
    },
    {
        id: crypto.randomUUID(), name: "Cow", duration: 0, number: 114,
         
        summary:
            "Gentle spinal extension posture that opens the chest and front of the body while mobilizing the spine.",

        benefits: [
            "Improves spinal mobility and extension.",
            "Opens the chest, abdomen and front of the shoulders.",
            "Encourages coordinated movement with the breath."
        ],

        contraindications: [
            "Recent spinal or neck injury.",
            "Avoid excessive extension or collapsing into the lower back."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Eight Point", duration: 0, number: 115,
         
        summary:
            "Grounded prone posture that places eight points of the body on the floor, creating a stable foundation for rest and transition.",

        benefits: [
            "Encourages relaxation through the shoulders and upper body.",
            "Provides a stable resting position between more demanding postures.",
            "Supports mindful breathing and body awareness."
        ],

        contraindications: [
            "Recent shoulder, wrist, chest or spinal injury.",
            "Modify the position if pressure through the shoulders or chest is uncomfortable."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Humble Flamingo", duration: 0, number: 116,
         
        summary:
            "Standing balance that combines a single-leg foundation with a forward fold and hip opening, demanding flexibility and concentration.",

        benefits: [
            "Improves balance, concentration and coordination.",
            "Stretches the standing leg and opens the hips.",
            "Develops strength and stability through the supporting leg."
        ],

        contraindications: [
            "Recent ankle, knee, hip or hamstring injury.",
            "Use a wall or other support if balance is limited."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Gate", duration: 0, number: 117,
         
        summary:
            "Kneeling lateral stretch that opens the inner thigh while lengthening the side body and improving lateral spinal mobility.",

        benefits: [
            "Stretches the inner thigh, hamstrings and side body.",
            "Improves lateral spinal mobility and hip flexibility.",
            "Encourages expansive breathing through the ribs."
        ],

        contraindications: [
            "Recent knee, hip or spinal injury.",
            "Use padding beneath the kneeling knee if needed."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "*"
    },
    {
        id: crypto.randomUUID(), name: "Horse", duration: 0, number: 118,
         
        summary:
            "Strong standing squat that opens the hips and inner thighs while building strength and stability through the lower body.",

        benefits: [
            "Strengthens the thighs, glutes and calves.",
            "Opens the hips and inner thighs.",
            "Develops lower-body stability, endurance and grounding."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid allowing the knees to collapse inward or forcing the depth of the squat."
        ],

        primaryChakra: "root",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Lizard", duration: 0, number: 119,
         
        summary:
            "Deep low lunge that opens the hips and stretches the inner thighs while building mobility through the lower body.",

        benefits: [
            "Deeply opens the hips and groin.",
            "Stretches the hip flexors, hamstrings and inner thighs.",
            "Improves lower-body mobility and prepares the body for deeper hip-opening postures."
        ],

        contraindications: [
            "Recent hip, knee, ankle or groin injury.",
            "Use blocks beneath the hands if reaching the floor creates strain."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Crescent Lunge on the Knee", duration: 0, number: 120,
         
        summary:
            "Kneeling lunge that opens the front of the hip while lengthening the torso and creating a stable foundation for deeper stretches.",

        benefits: [
            "Stretches the hip flexors and quadriceps.",
            "Opens the hips and front of the body.",
            "Improves hip mobility and lower-body flexibility."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Use padding under the knee if there is discomfort or sensitivity."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            17, 167, 0, 76, 5], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Crooked Monkey", duration: 0, number: 121,
         
        summary:
            "Advanced asymmetrical arm balance that combines deep hip opening with upper-body strength and controlled weight distribution.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and external rotation.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the hip into external rotation while bearing weight on the arms."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Pigeon", duration: 0, number: 122,
         
        summary:
            "Deep hip-opening posture that stretches the outer hip and front of the opposite leg while encouraging a stable foundation.",

        benefits: [
            "Opens the outer hips and glutes.",
            "Stretches the hip flexors and quadriceps.",
            "Improves hip mobility and prepares the body for deeper hip-opening postures."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Use support beneath the hip if the position creates pressure in the knee."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Plank", duration: 0, number: 123,
         
        summary:
            "Foundational full-body strength posture that stabilizes the shoulders, core and legs while preparing the body for dynamic transitions.",

        benefits: [
            "Strengthens the core, shoulders and arms.",
            "Builds stability through the entire body.",
            "Prepares the body for dynamic transitions and arm balances."
        ],

        contraindications: [
            "Recent wrist, shoulder or lower-back injury.",
            "Modify by lowering the knees if maintaining the position causes strain."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Upward Plank", duration: 0, number: 124,
         
        summary:
            "Supine weight-bearing posture that strengthens the posterior chain while opening the chest, shoulders and front of the hips.",

        benefits: [
            "Strengthens the arms, shoulders, glutes and legs.",
            "Opens the chest, shoulders and hip flexors.",
            "Develops posterior-chain strength and spinal extension."
        ],

        contraindications: [
            "Recent wrist, shoulder or spinal injury.",
            "Avoid collapsing into the lower back or forcing the shoulders."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Low Push-up", duration: 0, number: 125,
         
        summary:
            "Controlled transitional strength posture that stabilizes the shoulders and core while preparing the body for dynamic yoga sequences.",

        benefits: [
            "Strengthens the arms, shoulders and chest.",
            "Builds core stability and full-body control.",
            "Develops strength required for dynamic transitions and arm balances."
        ],

        contraindications: [
            "Recent wrist, shoulder or elbow injury.",
            "Modify by lowering the knees if maintaining the position causes strain."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Sage Visvamitra's", duration: 0, number: 126,
         
        summary:
            "Advanced standing arm balance that combines deep hip opening, hamstring flexibility, spinal extension and upper-body strength.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Deeply opens the hips and stretches the hamstrings.",
            "Develops balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, hip or hamstring injury.",
            "Avoid forcing the extended leg or placing excessive weight on the wrists."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Side Plank", duration: 0, number: 127,
         
        summary:
            "Lateral arm balance that strengthens the shoulders and core while developing stability and controlled body alignment.",

        benefits: [
            "Strengthens the shoulders, arms and core.",
            "Improves balance and lateral stability.",
            "Develops full-body coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder or elbow injury.",
            "Modify by lowering the bottom knee if full weight-bearing is uncomfortable."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "C"
    },
    {
        id: crypto.randomUUID(), name: "Inverted Staff", duration: 0, number: 128,
         
        summary:
            "Advanced inverted posture that combines strong upper-body engagement with spinal extension and controlled balance.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops balance and upper-body control.",
            "Improves spinal extension and full-body awareness."
        ],

        contraindications: [
            "Recent wrist, shoulder, neck or spinal injury.",
            "Avoid the posture if weight-bearing through the upper body causes pain."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "`"
    },
    {
        id: crypto.randomUUID(), name: "Little Thunderbolt", duration: 0, number: 129,
         
        summary:
            "Advanced kneeling backbend that deeply opens the front of the body while requiring controlled spinal extension and hip mobility.",

        benefits: [
            "Deeply stretches the thighs and hip flexors.",
            "Opens the chest and front of the body.",
            "Develops spinal extension and body awareness."
        ],

        contraindications: [
            "Recent knee, hip, spinal or neck injury.",
            "Avoid forcing the backbend or placing excessive pressure through the neck."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Tiger", duration: 0, number: 130,
         
        summary:
            "Dynamic kneeling backbend that combines balance, spinal extension and hip opening while engaging the posterior chain.",

        benefits: [
            "Strengthens the back, glutes and supporting leg.",
            "Opens the hip flexors, quadriceps and chest.",
            "Improves balance, coordination and spinal mobility."
        ],

        contraindications: [
            "Recent knee, hip, shoulder or spinal injury.",
            "Use support if balancing on one hand or knee is uncomfortable."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Upward-Facing Dog", duration: 0, number: 131,
         
        summary:
            "Active prone backbend that strengthens the upper body while opening the chest and extending the spine.",

        benefits: [
            "Strengthens the arms, shoulders and back.",
            "Opens the chest and front of the hips.",
            "Improves spinal extension and full-body strength."
        ],

        contraindications: [
            "Recent wrist, shoulder or spinal injury.",
            "Avoid forcing spinal extension or compressing the lower back."
        ],

        primaryChakra: "heart",
            
        transitions: [
            ], img: "V"
    },
    {
        id: crypto.randomUUID(), name: "Wheel", duration: 0, number: 132,
         
        summary:
            "Advanced full-body backbend that combines spinal extension with strong engagement of the arms, legs and posterior chain.",

        benefits: [
            "Strengthens the arms, shoulders, legs and back.",
            "Deeply opens the chest, shoulders and hip flexors.",
            "Develops spinal mobility, strength and full-body coordination."
        ],

        contraindications: [
            "Recent wrist, shoulder, spinal or hip injury.",
            "Avoid forcing the backbend or collapsing into the lower back."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "|"
    },
    {
        id: crypto.randomUUID(), name: "Wild Thing", duration: 0, number: 133,
         
        summary:
            "Dynamic side-opening backbend that combines shoulder stability, hip extension and spinal mobility in an expressive full-body shape.",

        benefits: [
            "Opens the chest, shoulders and front of the hips.",
            "Strengthens the supporting arm, shoulders and legs.",
            "Improves spinal mobility, balance and full-body coordination."
        ],

        contraindications: [
            "Recent wrist, shoulder, spinal or hip injury.",
            "Avoid collapsing into the supporting shoulder or forcing spinal extension."
        ],

        primaryChakra: "heart",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Chin Stand", duration: 0, number: 134,
         
        summary:
            "Advanced arm balance and inversion that requires substantial upper-body strength, core control, balance and flexibility.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops balance, coordination and concentration.",
            "Builds controlled upper-body strength and body awareness."
        ],

        contraindications: [
            "Recent wrist, shoulder, neck or spinal injury.",
            "Practice only with adequate preparation and avoid placing excessive pressure on the neck."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Crane", duration: 0, number: 135,
         
        summary:
            "Advanced arm balance that lifts the body onto the hands while requiring strong core engagement, shoulder stability and precise weight distribution.",

        benefits: [
            "Strengthens the arms, wrists, shoulders and core.",
            "Improves balance, coordination and concentration.",
            "Develops upper-body strength and controlled body awareness."
        ],

        contraindications: [
            "Recent wrist, shoulder or elbow injury.",
            "Avoid practicing without adequate preparation if weight-bearing through the wrists is painful."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "X"
    },
    {
        id: crypto.randomUUID(), name: "Kakasana", duration: 0, number: 136,
         
        summary:
            "Advanced arm balance that develops strength and balance while requiring controlled weight distribution through the hands and shoulders.",

        benefits: [
            "Strengthens the wrists, arms, shoulders and core.",
            "Improves balance, coordination and concentration.",
            "Develops confidence and controlled upper-body strength."
        ],

        contraindications: [
            "Recent wrist, shoulder or elbow injury.",
            "Avoid the posture if bearing weight through the hands causes pain."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Karma Pidasana", duration: 0, number: 137,
         
        summary:
            "Advanced inverted posture that combines deep hip and spinal flexibility with a compact, introspective body position.",

        benefits: [
            "Deeply stretches the hips, back and posterior legs.",
            "Develops flexibility and control through the spine.",
            "Encourages concentration and introspective awareness."
        ],

        contraindications: [
            "Recent neck, spinal, hip or knee injury.",
            "Avoid excessive pressure through the neck or forcing the legs into position."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Eight Angle", duration: 0, number: 138,
         
        summary:
            "Advanced asymmetrical arm balance that combines hip opening, core strength and precise weight distribution through the arms.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and coordination.",
            "Improves balance, concentration and body awareness."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the legs into position or placing excessive weight on the wrists."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "("
    },
    {
        id: crypto.randomUUID(), name: "Elbow Balance", duration: 0, number: 139,
         
        summary:
            "Advanced forearm balance that develops upper-body strength, core control and concentration while inverting the body.",

        benefits: [
            "Strengthens the shoulders, arms and core.",
            "Improves balance, coordination and concentration.",
            "Develops stability and confidence in inverted positions."
        ],

        contraindications: [
            "Recent wrist, elbow, shoulder or neck injury.",
            "Practice near a wall or with supervision when learning the balance."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Elefant Trunk", duration: 0, number: 140,
         
        summary:
            "Advanced arm balance that combines deep hip opening with strong engagement of the arms and core.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and flexibility.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the leg into position or placing excessive weight on the wrists."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "z"
    },
    {
        id: crypto.randomUUID(), name: "Embryo", duration: 0, number: 141,
         
        summary:
            "Compact resting posture that draws the body inward, encouraging relaxation, stillness and introspective awareness.",

        benefits: [
            "Encourages physical and mental relaxation.",
            "Promotes inward awareness and calm breathing.",
            "Provides a gentle resting position after demanding practices."
        ],

        contraindications: [
            "Recent knee, hip or spinal injury.",
            "Use support beneath the hips or knees if the compact position is uncomfortable."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Firefly I", duration: 0, number: 142,
         
        summary:
            "Advanced arm balance that combines deep hip opening with strong engagement of the arms and core while extending the legs forward.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip and hamstring flexibility.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the legs into position or placing excessive weight on the wrists."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Floating Stick", duration: 0, number: 143,
         
        summary:
            "Advanced balancing posture that requires strong core engagement, controlled leg extension and precise full-body alignment.",

        benefits: [
            "Strengthens the core, legs and supporting muscles.",
            "Develops balance, coordination and concentration.",
            "Improves controlled body awareness and stability."
        ],

        contraindications: [
            "Recent wrist, shoulder, hip or spinal injury.",
            "Avoid forcing the extended legs or holding the position if balance cannot be maintained safely."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Flying Man", duration: 0, number: 144,
         
        summary:
            "Advanced standing balance that combines a deep hip opening with single-leg stability, requiring strength, flexibility and concentration.",

        benefits: [
            "Improves balance and single-leg stability.",
            "Develops hip mobility and lower-body strength.",
            "Enhances concentration, coordination and body awareness."
        ],

        contraindications: [
            "Recent ankle, knee, hip or hamstring injury.",
            "Use a wall or other support while developing the required balance."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Revolved Flying Man", duration: 0, number: 145,
         
        summary:
            "Advanced standing balance that combines hip opening and spinal rotation with single-leg stability and precise body control.",

        benefits: [
            "Improves balance, coordination and concentration.",
            "Develops hip mobility and controlled spinal rotation.",
            "Strengthens the supporting leg and develops full-body stability."
        ],

        contraindications: [
            "Recent ankle, knee, hip or spinal injury.",
            "Avoid forcing the spinal rotation or attempting the balance without adequate stability."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Forearm Balance", duration: 0, number: 146,
         
        summary:
            "Inverted balance performed on the forearms that develops shoulder strength, core control and concentration.",

        benefits: [
            "Strengthens the shoulders, arms and core.",
            "Improves balance and coordination.",
            "Develops concentration and confidence in inverted postures."
        ],

        contraindications: [
            "Recent wrist, elbow, shoulder or neck injury.",
            "Practice with appropriate preparation and support when learning the inversion."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "5"
    },
    {
        id: crypto.randomUUID(), name: "Grasshoper", duration: 0, number: 147,
         
        summary:
            "Advanced twisting arm balance that combines spinal rotation, hip opening and upper-body strength while balancing the body on the hands.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and spinal rotation.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow, hip or spinal injury.",
            "Avoid forcing the twist or placing excessive weight on the wrists."
        ],

        primaryChakra: "solarPlexus",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Handstand", duration: 0, number: 148,
         
        summary:
            "Advanced inversion that balances the body vertically on the hands, requiring upper-body strength, core control and concentration.",

        benefits: [
            "Strengthens the arms, shoulders, wrists and core.",
            "Improves balance, coordination and body awareness.",
            "Develops concentration and controlled upper-body stability."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or neck injury.",
            "Practice with appropriate preparation and support when learning the inversion."
        ],

        primaryChakra: "crown",
        
        transitions: [
            ], img: "1"
    },
    {
        id: crypto.randomUUID(), name: "Shirshasana", duration: 0, number: 149,
         
        summary:
            "Classical headstand that develops balance, concentration and whole-body control while placing the body in an inverted position.",

        benefits: [
            "Develops balance, concentration and body awareness.",
            "Strengthens the shoulders, core and supporting musculature.",
            "Builds control and confidence in inverted postures."
        ],

        contraindications: [
            "Recent neck, spinal, shoulder or eye injury.",
            "Practice only with adequate preparation and avoid placing excessive load through the neck."
        ],

        primaryChakra: "crown",
            
        transitions: [
            ], img: "7"
    },
    {
        id: crypto.randomUUID(), name: "Tripod Headstand", duration: 0, number: 150,
         
        summary:
            "Inverted balance supported by the crown of the head and hands, combining upper-body strength with precise control and concentration.",

        benefits: [
            "Strengthens the shoulders, arms and core.",
            "Develops balance, coordination and concentration.",
            "Builds control and stability in inverted positions."
        ],

        contraindications: [
            "Recent neck, shoulder, wrist or spinal injury.",
            "Avoid excessive weight through the head and neck and use appropriate support when learning."
        ],

        primaryChakra: "crown",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Himalayan Duck", duration: 0, number: 151,
         
        summary:
            "Advanced balancing posture that combines deep hip opening with controlled weight distribution and lower-body stability.",

        benefits: [
            "Develops balance, coordination and concentration.",
            "Improves hip mobility and lower-body flexibility.",
            "Strengthens the supporting leg and develops body awareness."
        ],

        contraindications: [
            "Recent ankle, knee, hip or hamstring injury.",
            "Use support while developing the required balance and mobility."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Flying Lizard", duration: 0, number: 152,
         
        summary:
            "Advanced arm balance that combines deep hip opening with upper-body strength, balance and controlled leg extension.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and flexibility.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the hips or placing excessive weight through the wrists."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Moon Bird", duration: 0, number: 153,
         
        summary:
            "Advanced standing balance that combines hip opening, spinal rotation and single-leg stability in a controlled asymmetrical shape.",

        benefits: [
            "Improves balance and single-leg stability.",
            "Develops hip mobility and controlled spinal rotation.",
            "Enhances concentration, coordination and body awareness."
        ],

        contraindications: [
            "Recent ankle, knee, hip or spinal injury.",
            "Avoid forcing the rotation or attempting the balance without adequate stability."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Peacock", duration: 0, number: 154,
         
        summary:
            "Advanced arm balance that supports the body on the forearms and hands while extending the legs behind, demanding strength, balance and concentration.",

        benefits: [
            "Strengthens the arms, wrists, shoulders and core.",
            "Develops balance and full-body coordination.",
            "Builds upper-body endurance and concentration."
        ],

        contraindications: [
            "Recent wrist, elbow, shoulder or abdominal injury.",
            "Avoid practicing if weight-bearing through the wrists or abdomen causes pain."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Pendant", duration: 0, number: 155,
         
        summary:
            "Deep forward-folding posture that combines hip opening and hamstring flexibility with a compact, inward-facing shape.",

        benefits: [
            "Stretches the hips, hamstrings and lower back.",
            "Improves hip mobility and posterior-chain flexibility.",
            "Encourages concentration and introspective awareness."
        ],

        contraindications: [
            "Recent hamstring, hip or spinal injury.",
            "Avoid forcing the torso or shoulders into a deeper position."
        ],

        primaryChakra: "sacral",
            
        transitions: [
            ], img: "x"
    },
    {
        id: crypto.randomUUID(), name: "Flying Pigeon", duration: 0, number: 156,
         
        summary:
            "Advanced arm balance that combines deep hip opening with single-leg extension, requiring upper-body strength, flexibility and precise balance.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and external rotation.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow, hip or knee injury.",
            "Avoid forcing the hip or placing excessive weight through the wrists."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Plow", duration: 0, number: 157,
         
        summary:
            "Inverted posture that folds the legs overhead while lengthening the back body and creating a deep, introspective shape.",

        benefits: [
            "Stretches the spine, shoulders and posterior legs.",
            "Develops control and stability in inverted positions.",
            "Encourages calm breathing and introspective awareness."
        ],

        contraindications: [
            "Recent neck, shoulder or spinal injury.",
            "Avoid placing excessive weight through the neck or forcing the legs toward the floor."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "$"
    },
    {
        id: crypto.randomUUID(), name: "Rooster", duration: 0, number: 158,
         
        summary:
            "Advanced seated arm balance that lifts the body from a lotus-based position using strong engagement of the arms and core.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops balance and upper-body control.",
            "Improves concentration and body awareness."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or knee injury.",
            "Avoid placing excessive weight through the wrists or forcing the lotus position."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Scale", duration: 0, number: 159,
         
        summary:
            "Advanced arm balance performed from a seated foundation that lifts the body through arm and core strength while requiring hip flexibility.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip flexibility and controlled lifting strength.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the hip position or placing excessive weight through the wrists."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Scorpion", duration: 0, number: 160,
         
        summary:
            "Advanced forearm balance that combines inversion, deep spinal extension and controlled leg movement.",

        benefits: [
            "Strengthens the shoulders, arms and core.",
            "Develops balance, concentration and body control.",
            "Improves spinal extension and shoulder stability."
        ],

        contraindications: [
            "Recent wrist, shoulder, neck or spinal injury.",
            "Avoid forcing the backbend or attempting the posture without adequate inversion control."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Shoulder Pressing", duration: 0, number: 161,
         
        summary:
            "Advanced arm balance that combines deep hip opening with strong shoulder and core engagement while balancing the body on the hands.",

        benefits: [
            "Strengthens the arms, shoulders and core.",
            "Develops hip mobility and flexibility.",
            "Improves balance, coordination and concentration."
        ],

        contraindications: [
            "Recent wrist, shoulder, elbow or hip injury.",
            "Avoid forcing the hips into position or placing excessive weight through the wrists."
        ],

        primaryChakra: "solarPlexus",
            
        transitions: [
            ], img: "Z"
    },
    {
        id: crypto.randomUUID(), name: "Shoulder stand with Lotus Legs", duration: 0, number: 162,
         
        summary:
            "Advanced inverted posture combining shoulder stand with a lotus leg position, requiring balance, hip flexibility and controlled inversion.",

        benefits: [
            "Develops balance and control in an inverted position.",
            "Improves hip flexibility and lower-body mobility.",
            "Encourages concentration and body awareness."
        ],

        contraindications: [
            "Recent neck, shoulder, spinal, knee or hip injury.",
            "Avoid excessive pressure through the neck and do not force the lotus position."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Supported Shoulder Stand", duration: 0, number: 163,
         
        summary:
            "Supported inversion that elevates the legs above the heart while providing stability through the shoulders and upper back.",

        benefits: [
            "Encourages relaxation and calm breathing.",
            "Develops awareness and control in an inverted position.",
            "Provides a supported alternative to more demanding inversions."
        ],

        contraindications: [
            "Recent neck, shoulder or spinal injury.",
            "Avoid excessive pressure through the neck and adjust support if uncomfortable."
        ],

        primaryChakra: "thirdEye",
            
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Supine Angle", duration: 0, number: 164,
         
        summary:
            "Reclined hip-opening posture that gently stretches the inner thighs while allowing the body to relax toward the floor.",

        benefits: [
            "Opens the hips and inner thighs.",
            "Encourages relaxation through the lower body.",
            "Supports calm breathing and restorative awareness."
        ],

        contraindications: [
            "Recent hip, groin or knee injury.",
            "Use support beneath the knees if the inner thighs feel strained."
        ],

        primaryChakra: "sacral",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "Two Legs Behind the Head II", duration: 0, number: 165,
         
        summary:
            "Advanced seated posture that places both legs behind the head, requiring exceptional hip mobility, spinal control and concentration.",

        benefits: [
            "Develops deep hip mobility and flexibility.",
            "Improves control through the hips, spine and legs.",
            "Cultivates concentration and body awareness."
        ],

        contraindications: [
            "Recent hip, knee, spinal or hamstring injury.",
            "Never force the legs behind the head or attempt the posture without adequate mobility and preparation."
        ],

        primaryChakra: "thirdEye",
        
        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "ardha uttanasana", duration: 0, number: 166,

        summary:
            "Halfway standing forward fold that lengthens the spine while stretching the posterior chain and preparing the body for deeper forward folds.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Lengthens the spine and improves postural awareness.",
            "Prepares the body for deeper forward folds and standing transitions."
        ],

        contraindications: [
            "Recent hamstring, lower-back or spinal injury.",
            "Bend the knees slightly if maintaining a long spine creates strain."
        ],

        primaryChakra: "root",

        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "half split", duration: 0, number: 167,

        summary:
            "Half split that lengthens the hamstrings and calves while maintaining a grounded lower-body position.",

        benefits: [
            "Deeply stretches the hamstrings and calves.",
            "Improves flexibility through the posterior chain.",
            "Prepares the legs for deeper splits and standing balances."
        ],

        contraindications: [
            "Recent hamstring, knee or hip injury.",
            "Avoid forcing the front leg straight or rounding deeply through the lower back."
        ],

        primaryChakra: "sacral",

        transitions: [
            ], img: "ॐ"
    },
    {
        id: crypto.randomUUID(), name: "bound extended side angle", duration: 0, number: 168,

        summary:
            "Advanced standing posture combining lateral spinal extension, hip opening and a bind through the arms.",

        benefits: [
            "Opens the hips, chest and shoulders.",
            "Strengthens the legs and improves lower-body stability.",
            "Develops spinal mobility, concentration and body awareness."
        ],

        contraindications: [
            "Recent shoulder, hip, knee or spinal injury.",
            "Avoid forcing the bind or collapsing through the supporting knee."
        ],

        primaryChakra: "heart",

        transitions: [
            ], img: "H"
    },
    {
        id: crypto.randomUUID(), name: "standing figure four", duration: 0, number: 169,

        summary:
            "Standing balance that combines single-leg stability with deep external hip rotation and controlled lower-body strength.",

        benefits: [
            "Strengthens the supporting leg and improves balance.",
            "Opens the outer hips and glutes.",
            "Develops concentration, coordination and lower-body stability."
        ],

        contraindications: [
            "Recent ankle, knee or hip injury.",
            "Use a wall or other support if balance is limited."
        ],

        primaryChakra: "sacral",

        transitions: [
            ], img: "ॐ"
    },
];