import { createTimeline } from "./timelineEngine";

export async function playIntro(actions) {

    const timeline = createTimeline();

    actions.updateScene("handPlanty", {
        offsetY: 25
    });

    actions.updateScene("seed", {
        offsetY: 25
    });

    await timeline.wait(1500);

    actions.updateScene("handPlanty", {
        offsetY: 0,
        visible: 0
    });

    actions.updateScene("handCoverx", {
        visible: 1
    });

    await timeline.wait(1500);

    actions.updateScene("handCoverx", {
        offsetX: -11
    });

    actions.updateScene("soil", {
        offsetX: -10
    })

    await timeline.wait(1500);

    actions.onIntroFinished();

    actions.updateScene("camera", {
        y: -100,
        zoom: 1.3
    })

    actions.updateScene("handCoverx", {
        visible: 0,
        offsetX: 0
    })

}