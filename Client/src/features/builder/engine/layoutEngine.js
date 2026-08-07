//TO-DO: ajustar todo esto para que quede mejor

import { createTimeline } from "./timelineEngine";

export const buttonPositions = [
    { x: 49, y: 16, group: "A", curveX: 0, curveY: -5 },
    { x: 48, y: 10, group: "B", curveX: 0, curveY: -10 },
    { x: 54, y: 11, group: "C", curveX: -4, curveY: -8 },
    { x: 52.5, y: -7, group: "D", curveX: 0, curveY: -10 },
    { x: 54.5, y: 27, group: "E", curveX: 0.5, curveY: -1 },
    { x: 59.5, y: 7, group: "F", curveX: 0, curveY: -5 },
    { x: 49, y: 24, group: "G", curveX: 0, curveY: -10 },
    { x: 54.5, y: -0.5, group: "H", curveX: -10, curveY: -10 },
    { x: 57, y: 16, group: "I", curveX: -10, curveY: -30 },
    { x: 48, y: 30.5, group: "J", curveX: 0, curveY: -5 },
    { x: 49, y: 2, group: "K", curveX: -5, curveY: -10 },
    { x: 55.5, y: 30.5, group: "L", curveX: 0.5, curveY: -1 }, 
];

export const layouts = {
    A: [
        { x: 65, y: 65, variant: 1 },
        { x: 60, y: 80, variant: 6 }
    ],
    B: [
        { x: 85, y: 65, variant: 1 },
        { x: 70, y: 80, variant: 3 }
    ],
    C: [
        { x: 120, y: 56, variant: 1 },
        { x: 135, y: 60, variant: 2 }
    ],
    D: [
        { x: 85, y: 70, variant: 4 },
        { x: 90, y: 56, variant: 1 }
    ],
    E: [
        { x: 140, y: 70, variant: 1 },
        { x: 150, y: 85, variant: 16 }
    ],
    F: [
        { x: 135, y: 56, variant: 1 },
        { x: 150, y: 68, variant: 8 }
    ],
    G: [
        { x: 65, y: 75, variant: 1 },
        { x: 60, y: 90, variant: 2 }
    ],
    H: [
        { x: 130, y: 56, variant: 1 },
        { x: 150, y: 65, variant: 3 }
    ],
    I: [
        { x: 160, y: 85, variant: 0.5 },
        { x: 155, y: 100, variant: 2 }
    ],
    J: [
        { x: 65, y: 75, variant: 1 },
        { x: 60, y: 90, variant: 2 }
    ],
    K: [
        { x: 95, y: 56, variant: 0.5 },
        { x: 110, y: 56, variant: 5 }
    ],
    L: [
        { x: 140, y: 70, variant: 1 },
        { x: 150, y: 85, variant: 16 }
    ]
};

export function layoutToVector(group, index, growFactor = 1) {
    const p = layouts[group][index];

    return {
        x: (p.x - 100) * growFactor,
        y: (p.y - 73) * growFactor
    };
}

function getCameraPosition(buttonIndex) {
    const world = document.querySelector(".chakra-glow");
    const rect = world.getBoundingClientRect();

    const viewportCompensationX = 17;

    const { x, y } = buttonPositions[buttonIndex];

    const buttonX = rect.width * x / 100;
    const buttonY = rect.height * y / 100;

    return {
        x: window.innerWidth / 2 - buttonX - viewportCompensationX,
        y: window.innerHeight / 2 - buttonY
    };
}

function getChildCameraPosition(x, y) {
    const viewportCompensationX = 17;

    return {
        x: window.innerWidth / 2 - x - viewportCompensationX,
        y: window.innerHeight / 2 - y
    };
}

export function getChildPosition(data) {

    const world = document.querySelector(".chakra-glow");
    const rect = world.getBoundingClientRect();

    //posición del primer padre, pasada a píxeles si hace falta
    let parentX;
    let parentY; 

    if (data.sectionChain.length === 0) {

        const parent = buttonPositions[data.buttonIndex];

        parentX = rect.width * parent.x / 100;
        parentY = rect.height * parent.y / 100;

    } else {

        const parent = data.sectionChain.at(-1);

        parentX = parent.x;
        parentY = parent.y;
    }

    //posición de los hijos, le pasamos el grupo y cuál de los 3 dentro de ese
    const offset = layoutToVector(
        data.group,
        data.suggestionIndex
    );

    const depth = data.sectionChain.length ?? 0;

    const p = layouts[data.group][data.suggestionIndex];

    const depthFactor = depth / 4 * (p.variant ?? 1);

    const { curveX, curveY } = buttonPositions[data.buttonIndex];

    //obtenemos el x e y del hijo relativos al padre
    return {
        x: parentX + offset.x + curveX * depthFactor,
        y: parentY + offset.y + curveY * depthFactor,
        group: data.group,
        suggestionIndex: data.suggestionIndex,
        buttonIndex: data.buttonIndex,
        depth: depth,
        variant: p.variant ?? 1
    };
}

export async function playBranchCamera(actions, direction) {
    const timeline = createTimeline();

    const camera = getCameraPosition(actions.index);

    switch(direction) {

        case "go":

            actions.updateScene("camera", {
                duration: "2s",
                zoom: 6,
                x: camera.x -100,
                y: camera.y -10 
            });

            await timeline.wait(2000);

            break;

        case "return":

            actions.updateScene("camera", {
                duration: "2s",
                zoom: 1.4,
                x: -575,
                y: 420
            });

            await timeline.wait(2000);

            break;
    }
}

export async function playChildCamera(actions, direction) {
    const timeline = createTimeline();

    switch(direction) {

        case "go": {

            const camera = getChildCameraPosition(
                actions.ChildPosition.x,
                actions.ChildPosition.y
            );

            actions.updateScene("camera", {
                duration: "1.5s",
                zoom: 6,
                x: camera.x -100,
                y: camera.y -10
            });

            await timeline.wait(1500);

            break;
        }

        case "return": {

            if (actions.chain.length <= 1) {

                const parent = getCameraPosition(actions.buttonIndex);
                
                actions.updateScene("camera", {
                    duration: "1.5s",
                    zoom: 6,
                    x: parent.x -100,
                    y: parent.y -10
                });

            } else {
                // volver al hijo anterior
                const previous = actions.chain[actions.chain.length - 2];

                const previousCamera = getChildCameraPosition(
                    previous.x,
                    previous.y
                );

                actions.updateScene("camera", {
                    duration: "1.5s",
                    zoom: 6,
                    x: previousCamera.x -100,
                    y: previousCamera.y -10
                });
            }

            await timeline.wait(1500);

            break;
        }
    }
}

export async function playPlusCamera(actions) {
    const timeline = createTimeline();

    const camera = getChildCameraPosition(
        actions.ChildPosition.x,
        actions.ChildPosition.y
    );

    actions.updateScene("camera", {
        duration: "1s",
        zoom: 6,
        x: camera.x -100,
        y: camera.y -10
    });

    await timeline.wait(1000);
}