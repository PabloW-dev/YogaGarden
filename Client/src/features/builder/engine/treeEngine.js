//for B1 type animations
import { createTimeline } from "./timelineEngine";

export async function playOutbreak(actions, direction) {
    const timeline = createTimeline();

    switch(direction) {

        case "next":

            actions.updateScene("sprout", {
                frame1: { visible: 1 }
            })

            actions.updateScene("seed", {
                visible: 0
            })

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame1: { visible: 0 },
                frame2: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame2: { visible: 0 },
                frame3: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame3: { visible: 0 },
                frame4: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame4: { visible: 0 },
                frame5: { visible: 1 }
            });

            break;

        case "prev":

            actions.updateScene("sprout", {
                frame5: { visible: 0 },
                frame4: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame4: { visible: 0 },
                frame3: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame3: { visible: 0 },
                frame2: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame2: { visible: 0 },
                frame1: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame1: { visible: 0 }
            })

            actions.updateScene("seed", {
                visible: 1
            })

            break;
    }
}

export async function playBranch(actions, direction) {
    const timeline = createTimeline();

    switch(direction) {

        case "next":

            actions.updateScene("sprout", {
                frame5: { visible: 0 },
                frame6: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame6: { visible: 0 },
                frame7: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame7: { visible: 0 },
                frame8: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame8: { visible: 0 },
                frame9: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame9: { visible: 0 },
                frame10: { visible: 1 },
                progress: 1
            });

            break;
        
        case "prev":

            actions.updateScene("sprout", {
                frame10: { visible: 0},
                frame9: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame9: { visible: 0},
                frame8: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame8: { visible: 0},
                frame7: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame7: { visible: 0},
                frame6: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame6: { visible: 0},
                frame5: { visible: 1 },
                progress: 0
            });

            break;
    }
}

export async function playBranchGrow({
    id,
    scene,
    connections,
    updateScene
}) {

    const timeline = createTimeline();

    const visibleConnections = scene.branch.connections.filter(
        c => c.sectionId !== id
    );

    updateScene("branch", {
        connections: scene.branch.connections.filter(
            c => c.sectionId !== id
        )
    });

    for (const connection of connections) {

        visibleConnections.push(connection);

        updateScene("branch", {
            connections: [...visibleConnections]
        });

        await timeline.wait(180);
    }
}

export async function playBranchShrink({
    id,
    scene,
    updateScene
}) {

    const timeline = createTimeline();

    const connections = scene.branch.connections;

    const keep = connections.filter(
        c => c.sectionId !== id
    );

    updateScene("branch", {
        connections: keep,
    });

    await timeline.wait(180);
    
}

export function getConnections(sectionId, chain, father, sprout) {

    const connections = [];

    if (chain.length === 0) return null;

    connections.push({
        id: crypto.randomUUID(),
        sectionId,
        from: sprout,
        to: father
    });

    connections.push({
        id: crypto.randomUUID(),
        sectionId,
        from: father,
        to: chain[0]
    });

    for (let i = 1; i < chain.length; i++) {

        connections.push({
            id: crypto.randomUUID(),
            sectionId,
            from: chain[i - 1],
            to: chain[i]
        });
    }

    return connections;
}

export async function playTree(actions, direction) {
    const timeline = createTimeline();

    switch(direction) {

        case "next":

            actions.updateScene("sprout", {
                frame10: { visible: 0 },
                frame11: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame11: { visible: 0 },
                frame12: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame12: { visible: 0 },
                frame13: { visible: 1 }
            });

            actions.updateScene("roots", {
                visible: 1
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame13: { visible: 0 },
                frame14: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame14: { visible: 0 },
                frame15: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("branch", {
                progress: 1
            });

            break;

        case "prev":

            actions.updateScene("branch", {
                progress: 0
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame15: { visible: 0},
                frame14: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame14: { visible: 0},
                frame13: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame13: { visible: 0},
                frame12: { visible: 1 }
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame12: { visible: 0},
                frame11: { visible: 1 }
            });

            actions.updateScene("roots", {
                visible: 0
            });

            await timeline.wait(500);

            actions.updateScene("sprout", {
                frame11: { visible: 0},
                frame10: { visible: 1 }
            });

            break;
    }
}