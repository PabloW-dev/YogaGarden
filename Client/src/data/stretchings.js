export default [
    {
        id: crypto.randomUUID(), name: "Neck Stretch", number: 0, duration: 0,

        summary:
            "Gentle neck stretch that releases tension through the cervical     region and improves comfortable neck mobility.",

        benefits: [
            "Relieves general tension in the neck.",
            "Improves gentle cervical mobility.",
            "Encourages relaxation through the upper body."
        ],

        contraindications: [
            "Recent neck injury or cervical instability.",
            "Avoid forcing the range of motion or making sudden movements."
        ],

        primaryChakra: "throat",

        transitions: [
            1, 2, 3, 4
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Side Neck Stretch", number: 1, duration: 0,

        summary:
            "Gentle lateral neck stretch that lengthens the muscles along the side of the neck and improves comfortable cervical mobility.",

        benefits: [
            "Releases tension along the sides of the neck.",
            "Improves gentle lateral neck mobility.",
            "Can reduce stiffness caused by prolonged static posture."
        ],

        contraindications: [
            "Recent neck injury or cervical instability.",
            "Avoid pulling forcefully on the head or collapsing the shoulder."
        ],

        primaryChakra: "throat",

        transitions: [
            0, 3, 4, 5, 6
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Forward Neck Stretch", number: 2, duration: 0,

        summary:
            "Gentle cervical flexion stretch that lengthens the posterior neck and encourages release of tension around the base of the skull.",

        benefits: [
            "Releases tension through the back of the neck.",
            "Gently stretches the cervical extensor muscles.",
            "Encourages relaxation around the shoulders and upper back."
        ],

        contraindications: [
            "Recent neck injury or cervical disc problems.",
            "Avoid forcing the chin toward the chest or creating compression in the neck."
        ],

        primaryChakra: "throat",

        transitions: [
            0, 1, 4, 7, 8
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Upper Trapezius Stretch", number: 3, duration: 0,

        summary:
            "Lateral neck stretch targeting the upper trapezius while gently lengthening the side of the neck and upper shoulder.",

        benefits: [
            "Releases tension in the upper trapezius.",
            "Reduces stiffness around the neck and shoulders.",
            "Improves comfortable lateral neck mobility."
        ],

        contraindications: [
            "Recent neck or shoulder injury.",
            "Avoid pulling strongly on the head or elevating the opposite shoulder."
        ],

        primaryChakra: "throat",

        transitions: [
            1, 4, 9, 10, 11
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Levator Scapulae Stretch", number: 4, duration: 0,

        summary:
            "Neck and shoulder stretch targeting the levator scapulae,  particularly useful for releasing tension around the upper back and  shoulder blade.",

        benefits: [
            "Releases tension around the neck and upper shoulder.",
            "Stretches the levator scapulae and surrounding muscles.",
            "May improve comfortable neck and shoulder mobility."
        ],

        contraindications: [
            "Recent neck or shoulder injury.",
            "Avoid forcing cervical rotation or flexion."
        ],

        primaryChakra: "throat",

        transitions: [
            3, 1, 12, 13, 14
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Neck Rotation Stretch", number: 5, duration: 0,

        summary:
            "Gentle cervical rotation stretch that improves comfortable rotational mobility while releasing tension around the neck.",

        benefits: [
            "Improves gentle cervical rotation.",
            "Releases tension around the neck and upper shoulders.",
            "Develops awareness of cervical alignment and movement."
        ],

        contraindications: [
            "Recent neck injury or cervical instability.",
            "Avoid forcing the rotation or moving into pain or dizziness."
        ],

        primaryChakra: "throat",

        transitions: [
            0, 1, 3, 4, 6
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Chin Tuck Stretch", number: 6, duration: 0,

        summary:
            "Gentle cervical alignment exercise that draws the chin inward to lengthen the back of the neck and improve postural awareness.",

        benefits: [
            "Encourages neutral cervical alignment.",
            "Activates and lengthens muscles supporting the neck.",
            "Helps counter forward-head posture."
        ],

        contraindications: [
            "Recent neck injury or cervical instability.",
            "Avoid forcing the chin downward or creating excessive tension."
        ],

        primaryChakra: "throat",

        transitions: [
            2, 5, 7, 8, 10
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Cross-Body Shoulder Stretch", number: 7, duration: 0,

        summary:
            "Shoulder stretch that draws one arm across the chest to lengthen the posterior shoulder and upper back.",

        benefits: [
            "Stretches the posterior shoulder.",
            "Releases tension through the upper back and shoulders.",
            "Improves comfortable shoulder mobility."
        ],

        contraindications: [
            "Recent shoulder or upper-arm injury.",
            "Avoid pulling the arm aggressively across the chest."
        ],

        primaryChakra: "heart",

        transitions: [
            3, 4, 8, 9, 10
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Overhead Triceps Stretch", number: 8, duration: 0,

        summary:
            "Overhead arm stretch that lengthens the triceps and improves mobility through the shoulders and upper arms.",

        benefits: [
            "Stretches the triceps and upper arm.",
            "Encourages shoulder flexion and mobility.",
            "Releases tension through the arms and shoulders."
        ],

        contraindications: [
            "Recent shoulder, elbow or upper-arm injury.",
            "Avoid forcing the elbow into a painful range."
        ],

        primaryChakra: "heart",

        transitions: [
            7, 9, 11, 12, 13
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Shoulder Extension Stretch", number: 9, duration: 0,

        summary:
            "Shoulder stretch that moves the arms behind the body to lengthen the front of the shoulders and chest.",

        benefits: [
            "Opens the front of the shoulders and chest.",
            "Improves comfortable shoulder extension.",
            "Helps counter rounded-shoulder posture."
        ],

        contraindications: [
            "Recent shoulder, chest or upper-arm injury.",
            "Avoid forcing the arms backward or compressing the shoulder joints."
        ],

        primaryChakra: "heart",

        transitions: [
            8, 10, 11, 14, 15
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Posterior Shoulder Stretch", number: 10, duration: 0,

        summary:
            "Shoulder stretch that lengthens the muscles across the back of the shoulder and upper arm while improving comfortable shoulder mobility.",

        benefits: [
            "Stretches the posterior shoulder.",
            "Releases tension across the upper back and shoulder blade.",
            "Improves comfortable shoulder mobility."
        ],

        contraindications: [
            "Recent shoulder or upper-arm injury.",
            "Avoid forcing the arm across the body or into internal rotation."
        ],

        primaryChakra: "heart",

        transitions: [
            7, 9, 11, 12, 15
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Anterior Shoulder Stretch", number: 11, duration: 0,

        summary:
            "Shoulder-opening stretch that lengthens the muscles across the front of the shoulder and upper arm.",

        benefits: [
            "Stretches the anterior shoulder.",
            "Improves comfortable shoulder extension.",
            "Helps release tension associated with rounded shoulders."
        ],

        contraindications: [
            "Recent shoulder, chest or upper-arm injury.",
            "Avoid forcing the shoulder into excessive extension."
        ],

        primaryChakra: "heart",

        transitions: [
            8, 9, 13, 14, 16
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Doorway Chest Stretch", number: 12, duration: 0,

        summary:
            "Chest-opening stretch using a doorway to gently lengthen the pectoral muscles and front of the shoulders.",

        benefits: [
            "Stretches the chest and anterior shoulders.",
            "Improves comfortable shoulder mobility.",
            "Helps counter prolonged forward-rounded posture."
        ],

        contraindications: [
            "Recent shoulder, chest or pectoral injury.",
            "Avoid forcing the arms into a wide or extended position."
        ],

        primaryChakra: "heart",

        transitions: [
            9, 11, 13, 14, 17
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Corner Chest Stretch", number: 13, duration: 0,

        summary:
            "Chest-opening stretch performed against a corner to lengthen the pectoral muscles and open the front of the shoulders.",

        benefits: [
            "Stretches the pectoral muscles.",
            "Opens the front of the shoulders and chest.",
            "Improves comfortable upper-body posture and mobility."
        ],

        contraindications: [
            "Recent shoulder, chest or pectoral injury.",
            "Avoid excessive pressure through the hands or forcing the shoulders backward."
        ],

        primaryChakra: "heart",

        transitions: [
            11, 12, 14, 18, 19
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing Chest Opener", number: 14, duration: 0,

        summary:
            "Standing chest-opening stretch that gently extends the shoulders and upper spine while expanding the front of the torso.",

        benefits: [
            "Opens the chest and front of the shoulders.",
            "Encourages thoracic extension and upright posture.",
            "Releases tension across the upper body."
        ],

        contraindications: [
            "Recent shoulder, chest or spinal injury.",
            "Avoid excessive spinal extension or forcing the shoulders backward."
        ],

        primaryChakra: "heart",

        transitions: [
            11, 12, 13, 20, 21
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Pec Stretch", number: 15, duration: 0,

        summary:
            "Chest-opening stretch that lengthens the pectoral muscles and anterior shoulder while improving upper-body mobility.",

        benefits: [
            "Stretches the pectoral muscles.",
            "Opens the front of the shoulders and chest.",
            "Helps counter rounded-shoulder posture."
        ],

        contraindications: [
            "Recent shoulder, chest or pectoral injury.",
            "Avoid forcing the shoulders into excessive extension."
        ],

        primaryChakra: "heart",

        transitions: [
            10, 11, 12, 14, 16
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Wall Chest Stretch", number: 16, duration: 0,

        summary:
            "Chest-opening stretch using a wall for support to lengthen the pectorals and front of the shoulders.",

        benefits: [
            "Stretches the chest and anterior shoulders.",
            "Improves comfortable shoulder mobility.",
            "Helps release tension caused by prolonged forward posture."
        ],

        contraindications: [
            "Recent shoulder, chest or pectoral injury.",
            "Avoid pressing aggressively into the wall or forcing the shoulder."
        ],

        primaryChakra: "heart",

        transitions: [
            11, 15, 17, 18, 20
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Seated Upper Back Stretch", number: 17, duration: 0,

        summary:
            "Seated stretch that gently rounds the upper back to lengthen the muscles around the shoulder blades and thoracic spine.",

        benefits: [
            "Releases tension through the upper back.",
            "Stretches the muscles surrounding the shoulder blades.",
            "Encourages awareness of thoracic spinal movement."
        ],

        contraindications: [
            "Recent spinal or shoulder injury.",
            "Avoid forcing the spine into excessive flexion."
        ],

        primaryChakra: "heart",

        transitions: [
            7, 10, 18, 19, 21
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Thoracic Extension Stretch", number: 18, duration: 0,

        summary:
            "Upper-back mobility stretch that encourages controlled thoracic extension while opening the chest and shoulders.",

        benefits: [
            "Improves thoracic extension and upper-back mobility.",
            "Opens the chest and front of the shoulders.",
            "Helps counter prolonged flexed posture."
        ],

        contraindications: [
            "Recent spinal, rib or shoulder injury.",
            "Avoid forcing the extension or creating excessive movement through the lower back."
        ],

        primaryChakra: "heart",

        transitions: [
            14, 15, 17, 19, 22
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Bear Hug Stretch", number: 19, duration: 0,

        summary:
            "Upper-body stretch that wraps the arms around the torso to lengthen the muscles across the upper back and shoulders.",

        benefits: [
            "Stretches the upper back and posterior shoulders.",
            "Releases tension around the shoulder blades.",
            "Improves comfortable shoulder movement and thoracic awareness."
        ],

        contraindications: [
            "Recent shoulder, upper-back or rib injury.",
            "Avoid pulling aggressively on the arms or forcing the shoulders forward."
        ],

        primaryChakra: "heart",

        transitions: [
            10, 17, 18, 20, 23
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Knee-to-Chest Stretch", number: 20, duration: 0,

        summary:
            "Gentle supine stretch that draws one knee toward the chest to mobilize the lower back and gently stretch the hip.",

        benefits: [
            "Gently mobilizes the lower back.",
            "Stretches the glutes and hip muscles.",
            "Encourages relaxation through the lumbar region."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid forcing the knee toward the chest or flattening the spine aggressively."
        ],

        primaryChakra: "sacral",

        transitions: [
            21, 22, 23, 24, 25
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Double Knee-to-Chest Stretch", number: 21, duration: 0,

        summary:
            "Supine stretch that draws both knees toward the chest to gently mobilize the lumbar spine and release tension through the lower back.",

        benefits: [
            "Gently mobilizes the lower back.",
            "Stretches the glutes and lower back region.",
            "Encourages relaxation through the hips and lumbar spine."
        ],

        contraindications: [
            "Recent lower-back, hip or knee injury.",
            "Avoid forcing the knees toward the chest or creating discomfort in the abdomen."
        ],

        primaryChakra: "sacral",

        transitions: [
            20, 22, 23, 26, 27
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Supine Twist", number: 22, duration: 0,

        summary:
            "Reclined spinal rotation that gently mobilizes the spine while opening the hips and releasing tension through the lower back.",

        benefits: [
            "Improves comfortable spinal rotation.",
            "Releases tension through the lower back and hips.",
            "Gently stretches the glutes and outer hip."
        ],

        contraindications: [
            "Recent spinal, hip or abdominal injury.",
            "Avoid forcing the knees toward the floor or rotating beyond a comfortable range."
        ],

        primaryChakra: "sacral",

        transitions: [
            20, 21, 23, 24, 28
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Lumbar Rotation Stretch", number: 23, duration: 0,

        summary:
            "Gentle rotational stretch focused on the lower back and pelvis to improve comfortable lumbar and hip mobility.",

        benefits: [
            "Improves gentle rotational mobility through the lower back.",
            "Releases tension around the lumbar region and hips.",
            "Encourages awareness of spinal and pelvic movement."
        ],

        contraindications: [
            "Recent spinal, hip or abdominal injury.",
            "Avoid forcing the rotation or creating sharp or radiating pain."
        ],

        primaryChakra: "sacral",

        transitions: [
            20, 22, 24, 29, 30
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Side Bend Stretch", number: 24, duration: 0,

        summary:
            "Lateral stretch that lengthens the muscles along one side of the torso while improving comfortable spinal mobility.",

        benefits: [
            "Stretches the lateral torso and intercostal muscles.",
            "Improves comfortable lateral spinal mobility.",
            "Encourages expansive breathing through the ribs."
        ],

        contraindications: [
            "Recent spinal, rib or abdominal injury.",
            "Avoid collapsing into the lower back or forcing the side bend."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            18, 22, 23, 25, 31
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing Side Stretch", number: 25, duration: 0,

        summary:
            "Standing lateral stretch that lengthens one side of the torso while improving mobility through the ribs, shoulders and spine.",

        benefits: [
            "Stretches the lateral torso and intercostal muscles.",
            "Improves comfortable lateral spinal mobility.",
            "Encourages expansive breathing through the rib cage."
        ],

        contraindications: [
            "Recent spinal, rib or shoulder injury.",
            "Avoid collapsing into the lower back or forcing the side bend."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            24, 26, 27, 28, 30
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Hip Flexor Stretch", number: 26, duration: 0,

        summary:
            "Hip-opening stretch that lengthens the muscles at the front of the hip while improving extension and mobility through the pelvis.",

        benefits: [
            "Stretches the hip flexors and front of the thigh.",
            "Improves hip extension and pelvic mobility.",
            "Helps release tension associated with prolonged sitting."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid excessive arching of the lower back or forcing the hip forward."
        ],

        primaryChakra: "sacral",

        transitions: [
            27, 28, 29, 31, 32
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Kneeling Hip Flexor Stretch", number: 27, duration: 0,

        summary:
            "Kneeling stretch targeting the hip flexors and front of the thigh while encouraging controlled hip extension.",

        benefits: [
            "Deeply stretches the hip flexors.",
            "Improves hip extension and lower-body mobility.",
            "Helps counter stiffness from prolonged sitting."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Use padding beneath the knee and avoid excessive lumbar extension."
        ],

        primaryChakra: "sacral",

        transitions: [
            26, 28, 29, 33, 34
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Runner's Lunge", number: 28, duration: 0,

        summary:
            "Dynamic lunge-based stretch that lengthens the hip flexors of the rear leg while preparing the front leg for deeper mobility work.",

        benefits: [
            "Stretches the hip flexors and front of the rear leg.",
            "Improves hip mobility and lower-body flexibility.",
            "Prepares the body for lunges, splits and standing movements."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid allowing the front knee to collapse inward or forcing the hips toward the floor."
        ],

        primaryChakra: "sacral",

        transitions: [
            27, 29, 35, 36, 37
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Half-Kneeling Hip Stretch", number: 29, duration: 0,

        summary:
            "Half-kneeling hip stretch that combines hip flexor lengthening with controlled pelvic positioning and lower-body mobility.",

        benefits: [
            "Stretches the hip flexors and front of the thigh.",
            "Improves hip extension and pelvic control.",
            "Develops mobility useful for lunges and standing postures."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Use support beneath the knee and avoid forcing the pelvis forward."
        ],

        primaryChakra: "sacral",

        transitions: [
            26, 28, 31, 38, 39
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Couch Stretch", number: 30, duration: 0,

        summary:
            "Deep front-body stretch that targets the quadriceps and hip flexors while encouraging hip extension.",

        benefits: [
            "Stretches the quadriceps and hip flexors.",
            "Improves hip extension and front-of-leg mobility.",
            "Helps release stiffness associated with prolonged sitting."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Use padding beneath the knee and avoid forcing the heel toward the body."
        ],

        primaryChakra: "sacral",

        transitions: [
            26, 27, 29, 31, 35
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Figure Four Stretch", number: 31, duration: 0,

        summary:
            "Hip-opening stretch that places one ankle across the opposite thigh to lengthen the glutes and external rotators.",

        benefits: [
            "Stretches the glutes and outer hip.",
            "Improves external hip mobility.",
            "Helps release tension around the hips and buttocks."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Avoid pressing aggressively on the bent knee or forcing the hip into rotation."
        ],

        primaryChakra: "sacral",

        transitions: [
            29, 32, 33, 34, 40
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Reclined Figure Four Stretch", number: 32, duration: 0,

        summary:
            "Reclined hip-opening stretch that targets the glutes and external rotators while allowing the spine to remain supported.",

        benefits: [
            "Stretches the glutes and outer hip.",
            "Improves comfortable external hip rotation.",
            "Provides a supported alternative to standing or seated hip stretches."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Avoid pulling the legs toward the torso beyond a comfortable range."
        ],

        primaryChakra: "sacral",

        transitions: [
            20, 31, 33, 34, 41
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Seated Glute Stretch", number: 33, duration: 0,

        summary:
            "Seated hip-opening stretch that lengthens the glutes and external rotators while encouraging controlled hip mobility.",

        benefits: [
            "Stretches the glutes and outer hips.",
            "Improves external hip rotation.",
            "Releases tension through the hips and buttocks."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid forcing the knee toward the floor or collapsing through the lower back."
        ],

        primaryChakra: "sacral",

        transitions: [
            31, 32, 34, 42, 43
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Piriformis Stretch", number: 34, duration: 0,

        summary:
            "Hip-opening stretch focused on the piriformis and surrounding external rotators of the hip.",

        benefits: [
            "Stretches the piriformis and deep external rotators.",
            "Improves hip mobility and comfortable external rotation.",
            "Helps release tension around the glutes and outer hip."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid aggressive stretching if it produces sharp, radiating or nerve-like sensations."
        ],

        primaryChakra: "sacral",

        transitions: [
            31, 32, 33, 44, 45
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Supine Piriformis Stretch", number: 35, duration: 0,

        summary:
            "Reclined hip-opening stretch that targets the piriformis and deep external rotators while keeping the spine supported.",

        benefits: [
            "Stretches the piriformis and deep hip rotators.",
            "Improves comfortable external hip rotation.",
            "Allows the hips to relax while the spine remains supported."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid forcing the bent leg toward the opposite shoulder."
        ],

        primaryChakra: "sacral",

        transitions: [
            31, 34, 36, 38, 40
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing Hamstring Stretch", number: 36, duration: 0,

        summary:
            "Standing stretch that lengthens the hamstrings and calves while developing posterior-chain flexibility.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Improves posterior-chain flexibility.",
            "Develops awareness of hip hinging and spinal alignment."
        ],

        contraindications: [
            "Recent hamstring, lower-back or knee injury.",
            "Avoid rounding the lower back excessively or forcing the knee straight."
        ],

        primaryChakra: "root",

        transitions: [
            28, 37, 38, 39, 46
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Seated Hamstring Stretch", number: 37, duration: 0,

        summary:
            "Seated forward stretch that lengthens the hamstrings and posterior legs while encouraging controlled hip flexion.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Improves posterior-chain flexibility.",
            "Encourages controlled hip flexion and body awareness."
        ],

        contraindications: [
            "Recent hamstring, lower-back or spinal injury.",
            "Bend the knees if necessary and avoid forcing the torso toward the legs."
        ],

        primaryChakra: "root",

        transitions: [
            36, 38, 39, 47, 48
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Single-Leg Hamstring Stretch", number: 38, duration: 0,

        summary:
            "Unilateral hamstring stretch that isolates one leg while allowing the opposite leg to remain relaxed and supported.",

        benefits: [
            "Targets the hamstrings of one leg at a time.",
            "Improves flexibility through the posterior leg.",
            "Allows differences in flexibility between the legs to be addressed."
        ],

        contraindications: [
            "Recent hamstring, knee or lower-back injury.",
            "Avoid forcing the extended knee or rounding deeply through the lower back."
        ],

        primaryChakra: "root",

        transitions: [
            35, 36, 37, 39, 49
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Hurdler Stretch", number: 39, duration: 0,

        summary:
            "Seated asymmetric leg stretch that combines hamstring lengthening with gentle hip opening and rotation.",

        benefits: [
            "Stretches the hamstrings and inner thigh.",
            "Improves hip mobility and lower-body flexibility.",
            "Develops flexibility asymmetrically between the two legs."
        ],

        contraindications: [
            "Recent knee, hip or hamstring injury.",
            "Avoid forcing the bent knee or collapsing aggressively toward the extended leg."
        ],

        primaryChakra: "sacral",

        transitions: [
            33, 37, 38, 50, 51
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Toe Touch Stretch", number: 40, duration: 0,

        summary:
            "Forward-folding stretch that lengthens the hamstrings and calves while encouraging posterior-chain mobility.",

        benefits: [
            "Stretches the hamstrings and calves.",
            "Improves posterior-chain flexibility.",
            "Encourages hip mobility and awareness of spinal alignment."
        ],

        contraindications: [
            "Recent hamstring, lower-back or spinal injury.",
            "Avoid forcing the hands toward the floor or rounding the spine excessively."
        ],

        primaryChakra: "root",

        transitions: [
            36, 37, 38, 41, 42
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Half Split Stretch", number: 41, duration: 0,

        summary:
            "Half-split variation that deeply lengthens the hamstring of the extended leg while preparing the body for deeper split positions.",

        benefits: [
            "Deeply stretches the hamstrings.",
            "Improves flexibility through the posterior leg.",
            "Prepares the body for front splits and advanced hip mobility."
        ],

        contraindications: [
            "Recent hamstring, knee or hip injury.",
            "Avoid forcing the front leg straight or pushing into pain."
        ],

        primaryChakra: "root",

        transitions: [
            28, 38, 39, 40, 42
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing Single-Leg Hamstring Stretch", number: 42, duration: 0,

        summary:
            "Standing unilateral hamstring stretch that combines posterior-leg flexibility with balance and controlled hip hinging.",

        benefits: [
            "Stretches one hamstring at a time.",
            "Improves posterior-chain flexibility.",
            "Develops balance and control during a single-leg hinge."
        ],

        contraindications: [
            "Recent hamstring, knee, ankle or lower-back injury.",
            "Use support if balance is limited and avoid forcing the extended knee."
        ],

        primaryChakra: "root",

        transitions: [
            36, 38, 40, 41, 43
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing Quad Stretch", number: 43, duration: 0,

        summary:
            "Standing stretch that bends one knee behind the body to lengthen the quadriceps and front of the hip.",

        benefits: [
            "Stretches the quadriceps and front of the thigh.",
            "Improves knee flexion and hip mobility.",
            "Develops balance while stretching the standing leg."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid pulling the foot aggressively toward the body or arching the lower back."
        ],

        primaryChakra: "sacral",

        transitions: [
            26, 30, 44, 45, 52
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Side-Lying Quad Stretch", number: 44, duration: 0,

        summary:
            "Side-lying quadriceps stretch that lengthens the front of the thigh while providing a stable, supported position.",

        benefits: [
            "Stretches the quadriceps and front of the hip.",
            "Provides a supported alternative to standing quad stretches.",
            "Improves comfortable knee flexion and hip extension."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Avoid forcing the heel toward the buttocks or rotating the hip."
        ],

        primaryChakra: "sacral",

        transitions: [
            30, 43, 45, 53, 54
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Prone Quad Stretch", number: 45, duration: 0,

        summary:
            "Prone quadriceps stretch that lengthens the front of the thigh while allowing the pelvis and torso to remain supported.",

        benefits: [
            "Stretches the quadriceps and front of the thigh.",
            "Improves comfortable knee flexion.",
            "Provides a stable position for gradually increasing quadriceps flexibility."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Avoid forcing the heel toward the buttocks or lifting the pelvis excessively."
        ],

        primaryChakra: "sacral",

        transitions: [
            43, 44, 46, 47, 50
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Kneeling Quad Stretch", number: 46, duration: 0,

        summary:
            "Kneeling stretch that lengthens the quadriceps and hip flexors while combining knee flexion with controlled hip extension.",

        benefits: [
            "Stretches the quadriceps and hip flexors.",
            "Improves knee flexion and hip extension.",
            "Develops mobility through the front of the leg."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Use padding beneath the knees and avoid excessive lumbar extension."
        ],

        primaryChakra: "sacral",

        transitions: [
            27, 30, 45, 47, 51
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Couch Stretch", number: 47, duration: 0,

        summary:
            "Deep quadriceps and hip flexor stretch that combines knee flexion with hip extension in a supported position.",

        benefits: [
            "Deeply stretches the quadriceps and hip flexors.",
            "Improves hip extension and front-of-leg mobility.",
            "Helps address stiffness from prolonged sitting."
        ],

        contraindications: [
            "Recent knee, hip or lower-back injury.",
            "Use appropriate support and avoid forcing the heel toward the body."
        ],

        primaryChakra: "sacral",

        transitions: [
            26, 30, 45, 46, 48
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Butterfly Stretch", number: 48, duration: 0,

        summary:
            "Seated hip-opening stretch that brings the soles of the feet together to lengthen the inner thighs and adductors.",

        benefits: [
            "Stretches the inner thighs and groin.",
            "Improves hip external rotation and mobility.",
            "Encourages relaxation through the lower body."
        ],

        contraindications: [
            "Recent hip, knee or groin injury.",
            "Avoid pressing the knees down forcefully or rounding deeply through the lower back."
        ],

        primaryChakra: "sacral",

        transitions: [
            31, 33, 49, 55, 56
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Groin Stretch", number: 49, duration: 0,

        summary:
            "Hip-opening stretch focused on the inner thighs and groin to improve comfortable adductor flexibility.",

        benefits: [
            "Stretches the adductors and inner thighs.",
            "Improves hip mobility and flexibility.",
            "Prepares the body for wider-leg positions and lateral movements."
        ],

        contraindications: [
            "Recent groin, hip or knee injury.",
            "Avoid forcing the legs apart or bouncing into the stretch."
        ],

        primaryChakra: "sacral",

        transitions: [
            39, 48, 50, 57, 58
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Wide-Leg Stretch", number: 50, duration: 0,

        summary:
            "Wide-legged stretch that lengthens the inner thighs, hamstrings and hips while developing comfortable lateral flexibility.",

        benefits: [
            "Stretches the adductors and inner thighs.",
            "Improves hip abduction and lower-body flexibility.",
            "Prepares the body for wide-legged and lateral movements."
        ],

        contraindications: [
            "Recent groin, hip, knee or hamstring injury.",
            "Avoid forcing the legs into a wider position than comfortable."
        ],

        primaryChakra: "sacral",

        transitions: [
            49, 51, 53, 54, 59
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Cossack Stretch", number: 51, duration: 0,

        summary:
            "Lateral squat-based stretch that combines deep hip mobility with adductor, hamstring and ankle flexibility.",

        benefits: [
            "Stretches the adductors and hamstrings.",
            "Improves lateral hip mobility and ankle flexibility.",
            "Develops strength and mobility through the legs in a lateral position."
        ],

        contraindications: [
            "Recent knee, hip, ankle or groin injury.",
            "Avoid collapsing the bent knee inward or forcing the heel off the floor."
        ],

        primaryChakra: "sacral",

        transitions: [
            49, 50, 52, 53, 60
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Side Lunge Stretch", number: 52, duration: 0,

        summary:
            "Lateral lunge stretch that opens the inner thigh and hip while combining adductor lengthening with controlled leg movement.",

        benefits: [
            "Stretches the adductors and inner thighs.",
            "Improves lateral hip mobility.",
            "Develops mobility through the hips, knees and ankles."
        ],

        contraindications: [
            "Recent knee, hip, ankle or groin injury.",
            "Avoid forcing the bent knee or shifting beyond a comfortable range."
        ],

        primaryChakra: "sacral",

        transitions: [
            50, 51, 53, 61, 62
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Straddle Stretch", number: 53, duration: 0,

        summary:
            "Wide-legged seated stretch that deeply lengthens the inner thighs and hamstrings while improving hip mobility.",

        benefits: [
            "Deeply stretches the adductors and hamstrings.",
            "Improves hip abduction and flexibility.",
            "Prepares the body for advanced wide-legged positions and splits."
        ],

        contraindications: [
            "Recent groin, hip, knee or hamstring injury.",
            "Avoid forcing the legs wider or collapsing aggressively into the forward fold."
        ],

        primaryChakra: "sacral",

        transitions: [
            48, 50, 51, 54, 63
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "IT Band Stretch", number: 54, duration: 0,

        summary:
            "Lateral leg stretch that targets the tissues around the outer hip and thigh while improving comfortable hip mobility.",

        benefits: [
            "Stretches the outer hip and lateral thigh.",
            "Improves comfortable hip mobility.",
            "Provides a lateral complement to inner-thigh and hamstring stretches."
        ],

        contraindications: [
            "Recent hip, knee or outer-thigh injury.",
            "Avoid forcing the leg across the body or creating pain around the knee."
        ],

        primaryChakra: "root",

        transitions: [
            50, 52, 55, 64, 65
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing IT Band Stretch", number: 55, duration: 0,

        summary:
            "Standing lateral-leg stretch that lengthens the outer hip and thigh while improving comfortable lateral mobility.",

        benefits: [
            "Stretches the outer hip and lateral thigh.",
            "Improves comfortable hip mobility.",
            "Develops awareness of lateral alignment through the leg."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Avoid forcing the pelvis sideways or collapsing through the standing leg."
        ],

        primaryChakra: "root",

        transitions: [
            54, 56, 57, 58, 60
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Cross-Leg Stretch", number: 56, duration: 0,

        summary:
            "Cross-legged stretch that lengthens the outer hip and lateral leg while gently challenging hip mobility.",

        benefits: [
            "Stretches the outer hip and lateral thigh.",
            "Improves hip mobility and flexibility.",
            "Provides a gentle complement to inner-thigh stretching."
        ],

        contraindications: [
            "Recent hip, knee or ankle injury.",
            "Avoid forcing the crossed legs into a deeper position."
        ],

        primaryChakra: "sacral",

        transitions: [
            50, 54, 55, 57, 61
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Outer Hip Stretch", number: 57, duration: 0,

        summary:
            "Hip-opening stretch focused on the outer hip and gluteal region to improve comfortable external rotation and lateral mobility.",

        benefits: [
            "Stretches the outer hip and glutes.",
            "Improves hip mobility.",
            "Releases tension around the lateral hip."
        ],

        contraindications: [
            "Recent hip, knee or lower-back injury.",
            "Avoid forcing the hip into external rotation."
        ],

        primaryChakra: "sacral",

        transitions: [
            31, 34, 54, 56, 58
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Standing Calf Stretch", number: 58, duration: 0,

        summary:
            "Standing stretch that lengthens the calf muscles while improving ankle dorsiflexion and lower-leg mobility.",

        benefits: [
            "Stretches the gastrocnemius and calf muscles.",
            "Improves ankle dorsiflexion.",
            "Supports mobility useful for squats, lunges and standing postures."
        ],

        contraindications: [
            "Recent calf, Achilles tendon or ankle injury.",
            "Avoid bouncing or forcing the heel downward."
        ],

        primaryChakra: "root",

        transitions: [
            51, 52, 59, 60, 62
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Wall Calf Stretch", number: 59, duration: 0,

        summary:
            "Supported calf stretch using a wall to lengthen the lower leg while gradually improving ankle mobility.",

        benefits: [
            "Stretches the calf muscles.",
            "Improves ankle mobility and dorsiflexion.",
            "Provides a stable setup for gradually increasing calf flexibility."
        ],

        contraindications: [
            "Recent calf, Achilles tendon or ankle injury.",
            "Avoid forcing the heel downward or bouncing into the stretch."
        ],

        primaryChakra: "root",

        transitions: [
            58, 60, 63, 64, 66
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Gastrocnemius Stretch", number: 60, duration: 0,

        summary:
            "Calf stretch performed with the knee extended to specifically lengthen the gastrocnemius and improve ankle mobility.",

        benefits: [
            "Stretches the gastrocnemius muscle.",
            "Improves ankle dorsiflexion.",
            "Supports mobility for walking, lunges and standing postures."
        ],

        contraindications: [
            "Recent calf, Achilles tendon or ankle injury.",
            "Avoid bouncing or forcing the heel downward."
        ],

        primaryChakra: "root",

        transitions: [
            58, 59, 61, 62, 63
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Soleus Stretch", number: 61, duration: 0,

        summary:
            "Calf stretch performed with the knee bent to target the soleus while improving ankle dorsiflexion.",

        benefits: [
            "Stretches the soleus and deeper calf muscles.",
            "Improves ankle dorsiflexion.",
            "Supports mobility needed for squatting and lower-body movement."
        ],

        contraindications: [
            "Recent calf, Achilles tendon, knee or ankle injury.",
            "Avoid forcing the knee or heel into an uncomfortable position."
        ],

        primaryChakra: "root",

        transitions: [
            51, 58, 60, 62, 64
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Runner's Calf Stretch", number: 62, duration: 0,

        summary:
            "Standing calf stretch commonly used by runners to lengthen the gastrocnemius and improve ankle mobility.",

        benefits: [
            "Stretches the calf muscles.",
            "Improves ankle dorsiflexion.",
            "Supports lower-leg mobility for running, walking and lunges."
        ],

        contraindications: [
            "Recent calf, Achilles tendon or ankle injury.",
            "Avoid bouncing or forcing the rear heel toward the floor."
        ],

        primaryChakra: "root",

        transitions: [
            52, 58, 60, 61, 63
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Heel Drop Stretch", number: 63, duration: 0,

        summary:
            "Supported calf and Achilles stretch that uses a lowered heel to increase ankle dorsiflexion and lengthen the lower leg.",

        benefits: [
            "Stretches the calf and Achilles region.",
            "Improves ankle dorsiflexion.",
            "Develops lower-leg mobility useful for squatting and standing positions."
        ],

        contraindications: [
            "Recent Achilles tendon, calf or ankle injury.",
            "Avoid dropping the heel abruptly or using excessive range."
        ],

        primaryChakra: "root",

        transitions: [
            59, 60, 61, 62, 64
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Ankle Stretch", number: 64, duration: 0,

        summary:
            "Gentle ankle mobility stretch that moves the foot through a controlled range to improve flexibility and joint movement.",

        benefits: [
            "Improves comfortable ankle mobility.",
            "Supports dorsiflexion and overall foot movement.",
            "Prepares the ankles for squats, lunges and balance work."
        ],

        contraindications: [
            "Recent ankle injury or instability.",
            "Avoid forcing the joint into painful ranges."
        ],

        primaryChakra: "root",

        transitions: [
            51, 61, 63, 65, 66
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Ankle Circles", number: 65, duration: 0,

        summary:
            "Gentle circular ankle mobility exercise that moves the foot through multiple directions in a controlled range.",

        benefits: [
            "Improves comfortable ankle mobility.",
            "Encourages controlled movement through the ankle joint.",
            "Prepares the feet and ankles for weight-bearing activity."
        ],

        contraindications: [
            "Recent ankle injury or significant instability.",
            "Avoid large or forceful circles if they cause pain."
        ],

        primaryChakra: "root",

        transitions: [
            58, 61, 64, 66, 67
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Toe Flexor Stretch", number: 66, duration: 0,

        summary:
            "Foot stretch that lengthens the muscles and tissues involved in toe flexion while improving mobility through the toes and forefoot.",

        benefits: [
            "Stretches the toe flexors and underside of the foot.",
            "Improves toe and forefoot mobility.",
            "Helps release tension accumulated through the feet."
        ],

        contraindications: [
            "Recent toe, foot or forefoot injury.",
            "Avoid forcing the toes into excessive extension."
        ],

        primaryChakra: "root",

        transitions: [
            64, 65, 67, 68, 69
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Toe Extensor Stretch", number: 67, duration: 0,

        summary:
            "Foot stretch that lengthens the muscles along the top of the foot and toes while improving toe extension mobility.",

        benefits: [
            "Stretches the toe extensors and top of the foot.",
            "Improves toe extension and forefoot mobility.",
            "Encourages awareness and mobility through the feet."
        ],

        contraindications: [
            "Recent toe, foot or ankle injury.",
            "Avoid forcing the toes or creating excessive pressure across the top of the foot."
        ],

        primaryChakra: "root",

        transitions: [
            65, 66, 68, 69, 70
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Plantar Fascia Stretch", number: 68, duration: 0,

        summary:
            "Gentle foot stretch focused on the plantar fascia and tissues along the underside of the foot.",

        benefits: [
            "Gently stretches the plantar fascia and underside of the foot.",
            "Improves mobility through the foot and toes.",
            "Helps release tension accumulated in the soles."
        ],

        contraindications: [
            "Recent plantar fascia, heel or foot injury.",
            "Avoid aggressive pressure if the sole or heel is painful."
        ],

        primaryChakra: "root",

        transitions: [
            66, 67, 69, 71, 72
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Foot Arch Stretch", number: 69, duration: 0,

        summary:
            "Foot mobility stretch focused on the arch and supporting tissues of the sole to improve comfortable foot flexibility.",

        benefits: [
            "Stretches the arch and sole of the foot.",
            "Improves foot mobility and awareness.",
            "Helps release tension through the plantar tissues."
        ],

        contraindications: [
            "Recent foot, arch or heel injury.",
            "Avoid applying excessive pressure to the arch."
        ],

        primaryChakra: "root",

        transitions: [
            64, 66, 68, 70, 73
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Toe Spread Stretch", number: 70, duration: 0,

        summary:
            "Gentle foot stretch that separates and mobilizes the toes to improve flexibility and awareness throughout the forefoot.",

        benefits: [
            "Improves toe mobility and flexibility.",
            "Encourages awareness and control of the forefoot.",
            "Helps release tension through the toes and feet."
        ],

        contraindications: [
            "Recent toe, foot or forefoot injury.",
            "Avoid forcing the toes apart or creating discomfort in the joints."
        ],

        primaryChakra: "root",

        transitions: [
            66, 67, 68, 69, 71
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Wrist Flexor Stretch", number: 71, duration: 0,

        summary:
            "Arm stretch that lengthens the muscles along the inner forearm and improves comfortable wrist extension.",

        benefits: [
            "Stretches the wrist flexors and inner forearm.",
            "Improves comfortable wrist extension.",
            "Releases tension accumulated through repetitive hand use."
        ],

        contraindications: [
            "Recent wrist, elbow or forearm injury.",
            "Avoid forcing the wrist into extension or applying excessive pressure through the hand."
        ],

        primaryChakra: "heart",

        transitions: [
            72, 73, 74, 75, 76
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Wrist Extensor Stretch", number: 72, duration: 0,

        summary:
            "Forearm stretch that lengthens the muscles along the outer and upper forearm while improving comfortable wrist flexion.",

        benefits: [
            "Stretches the wrist extensors and outer forearm.",
            "Improves comfortable wrist flexion.",
            "Helps release tension associated with repetitive hand and wrist use."
        ],

        contraindications: [
            "Recent wrist, elbow or forearm injury.",
            "Avoid forcing the wrist into flexion or applying excessive pressure through the hand."
        ],

        primaryChakra: "heart",

        transitions: [
            71, 73, 74, 77, 78
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Forearm Stretch", number: 73, duration: 0,

        summary:
            "General forearm stretch that targets the muscles surrounding the wrist and forearm while improving comfortable hand and wrist mobility.",

        benefits: [
            "Releases tension through the forearms.",
            "Improves comfortable wrist and hand mobility.",
            "Provides a general complement to flexor and extensor stretches."
        ],

        contraindications: [
            "Recent wrist, elbow or forearm injury.",
            "Avoid aggressive stretching or sustained pressure if discomfort occurs."
        ],

        primaryChakra: "heart",

        transitions: [
            71, 72, 74, 79, 80
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Finger Extension Stretch", number: 74, duration: 0,

        summary:
            "Hand stretch that gently extends the fingers to improve mobility through the fingers, palm and hand.",

        benefits: [
            "Improves finger extension and hand mobility.",
            "Gently stretches the muscles and tissues of the hand.",
            "Helps release tension from repetitive gripping and typing."
        ],

        contraindications: [
            "Recent finger, hand or wrist injury.",
            "Avoid forcing individual fingers beyond a comfortable range."
        ],

        primaryChakra: "heart",

        transitions: [
            71, 72, 73, 75, 81
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Leg Swings", number: 75, duration: 0,

        summary:
            "Dynamic leg mobility exercise that moves the leg through a controlled range to prepare the hips and lower body for movement.",

        benefits: [
            "Improves dynamic hip mobility.",
            "Warms up the muscles of the legs and hips.",
            "Prepares the lower body for lunges, kicks and standing movements."
        ],

        contraindications: [
            "Recent hip, knee or hamstring injury.",
            "Keep the movement controlled and avoid swinging into a painful range."
        ],

        primaryChakra: "sacral",

        transitions: [
            28, 52, 76, 77, 78
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Arm Circles", number: 76, duration: 0,

        summary:
            "Dynamic shoulder mobility exercise that moves the arms through controlled circular patterns to prepare the upper body for movement.",

        benefits: [
            "Improves dynamic shoulder mobility.",
            "Warms the shoulders and upper body.",
            "Prepares the arms for weight-bearing and overhead movements."
        ],

        contraindications: [
            "Recent shoulder or upper-arm injury.",
            "Use controlled circles and avoid forcing the shoulders into painful ranges."
        ],

        primaryChakra: "heart",

        transitions: [
            71, 72, 73, 77, 79
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Walking Lunges", number: 77, duration: 0,

        summary:
            "Dynamic lunge sequence that combines hip mobility, leg strength and balance while progressively warming the lower body.",

        benefits: [
            "Warms the hips, thighs and glutes.",
            "Improves dynamic hip and ankle mobility.",
            "Develops balance and coordination through movement."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Avoid allowing the front knee to collapse inward or taking excessively long steps."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            28, 52, 75, 78, 82
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Walking Squat Stretch", number: 78, duration: 0,

        summary:
            "Dynamic lower-body mobility exercise combining a deep squat with controlled movement to warm the hips, ankles and legs.",

        benefits: [
            "Improves dynamic hip and ankle mobility.",
            "Warms the thighs, glutes and lower legs.",
            "Prepares the body for squatting and lower-body movement."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Reduce the squat depth if mobility or balance is limited."
        ],

        primaryChakra: "root",

        transitions: [
            51, 58, 75, 77, 79
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "High Knees", number: 79, duration: 0,

        summary:
            "Dynamic movement that alternates lifting the knees toward the torso to increase lower-body temperature and prepare the body for active movement.",

        benefits: [
            "Raises body temperature and heart rate.",
            "Warms the hips, thighs and core.",
            "Improves coordination and dynamic lower-body mobility."
        ],

        contraindications: [
            "Recent knee, hip, ankle or lower-back injury.",
            "Reduce the intensity or use a slower pace if impact is uncomfortable."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            75, 77, 78, 80, 83
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Butt Kicks", number: 80, duration: 0,

        summary:
            "Dynamic movement that alternates bringing the heels toward the glutes to warm the legs and increase lower-body mobility.",

        benefits: [
            "Raises body temperature and heart rate.",
            "Warms the hamstrings and quadriceps.",
            "Prepares the legs for running, jumping and dynamic movement."
        ],

        contraindications: [
            "Recent knee, hip or ankle injury.",
            "Reduce speed or impact if the movement causes discomfort."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            75, 77, 79, 81, 83
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Toy Soldier Stretch", number: 81, duration: 0,

        summary:
            "Dynamic standing stretch that alternates straight-leg kicks toward the hands to mobilize the hamstrings and posterior chain.",

        benefits: [
            "Dynamically stretches the hamstrings.",
            "Improves hip mobility and coordination.",
            "Prepares the posterior chain for active movement."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Keep the kicking range controlled and avoid forcing the leg upward."
        ],

        primaryChakra: "root",

        transitions: [
            36, 40, 42, 80, 82
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Hip Circles", number: 82, duration: 0,

        summary:
            "Dynamic hip mobility exercise that moves the hips through controlled circular patterns to prepare the pelvis and lower body for movement.",

        benefits: [
            "Improves dynamic hip mobility.",
            "Warms the muscles around the hips and pelvis.",
            "Prepares the lower body for lunges, squats and standing movements."
        ],

        contraindications: [
            "Recent hip, lower-back or pelvic injury.",
            "Keep the circles controlled and avoid forcing the hips into painful ranges."
        ],

        primaryChakra: "sacral",

        transitions: [
            75, 77, 78, 81, 84
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Inchworm Walk", number: 83, duration: 0,

        summary:
            "Dynamic full-body mobility exercise that walks the hands forward into a plank-like position before returning to standing.",

        benefits: [
            "Mobilizes the shoulders, spine, hips and hamstrings.",
            "Activates the core and upper body.",
            "Prepares the body for plank-based and weight-bearing movements."
        ],

        contraindications: [
            "Recent wrist, shoulder, hamstring or lower-back injury.",
            "Modify the range or bend the knees if necessary."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            76, 81, 84, 85, 86
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Walking Hamstring Stretch", number: 84, duration: 0,

        summary:
            "Dynamic walking stretch that alternates controlled straight-leg movements to lengthen the hamstrings while keeping the body active.",

        benefits: [
            "Dynamically stretches the hamstrings.",
            "Improves hip mobility and coordination.",
            "Prepares the posterior chain for active movement."
        ],

        contraindications: [
            "Recent hamstring, hip or lower-back injury.",
            "Avoid forcing the leg into a high range or rounding the spine excessively."
        ],

        primaryChakra: "root",

        transitions: [
            40, 41, 81, 83, 85
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Lateral Lunges", number: 85, duration: 0,

        summary:
            "Dynamic side-to-side movement that mobilizes the hips, adductors and ankles while progressively warming the lower body.",

        benefits: [
            "Improves lateral hip and adductor mobility.",
            "Warms the legs and glutes.",
            "Prepares the body for lateral movement and wide-legged positions."
        ],

        contraindications: [
            "Recent knee, hip, ankle or groin injury.",
            "Avoid collapsing the bent knee inward or forcing the depth."
        ],

        primaryChakra: "sacral",

        transitions: [
            51, 52, 78, 82, 86
        ], img: "☼"
    },
    {
        id: crypto.randomUUID(), name: "Torso Rotation", number: 86, duration: 0,

        summary:
            "Dynamic rotational movement that mobilizes the thoracic spine and torso while preparing the body for twisting movements.",

        benefits: [
            "Improves comfortable thoracic rotation.",
            "Mobilizes the shoulders, ribs and upper spine.",
            "Prepares the torso for twisting and rotational movements."
        ],

        contraindications: [
            "Recent spinal, rib or abdominal injury.",
            "Keep the rotation controlled and avoid forcing the range."
        ],

        primaryChakra: "solarPlexus",

        transitions: [
            76, 79, 83, 85, 87
        ], img: "☼"
    }
]