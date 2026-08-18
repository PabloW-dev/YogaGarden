//for B2 type animations
import { createTimeline } from "./timelineEngine";
import { playOutbreak, playBranch, playTree } from "./treeEngine";

const timeline = createTimeline();



export async function playStepTransition(actions, step, direction) {

    actions.onTransition();

    switch(step) {

        case 1:

            await playSeedTransition(actions, direction);
            break;
        
        case 2:
            await playOutbreakTransition(actions, direction);
            break;

        case 3:
            await playBranchTransition(actions, direction);
            break;

        case 4:
            await playTreeTransition(actions, direction);
            break;
    }
}

async function playSeedTransition(actions, direction) {

    switch(direction) {

        case "next":

            actions.updateScene("camera", {
                x: 600,
                duration: "2s"
            })

            await timeline.wait(2000);

            playOutbreak(actions, "next");

            await timeline.wait(2500);

            actions.setSproutNodesVisible(true);

            break;

        case "prev":
        
            break;
    }   
}


async function playOutbreakTransition(actions, direction) {

    switch(direction) {

        case "next":

            actions.setSproutNodesVisible(false);

            await timeline.wait(500);

            actions.updateScene("camera", {
                x: 0,
                y: 300,
                zoom: 0.5,
                duration: "2s"
            })

            await timeline.wait(2000);

            playBranch(actions, "next");

            await timeline.wait(2500);

            actions.setSproutNodesVisible(true);

            actions.updateScene("camera", {
                zoom: 1.4,
                y: 420,
                x: -575,
                duration: "2s"
            });

            actions.updateScene("background", {
                visible: 1
            });

            break;

        case "prev":

            actions.setSproutNodesVisible(false);

            await timeline.wait(500);

            playOutbreak(actions, "prev");

            await timeline.wait(2500);

            actions.updateScene("camera", {
                x: 0,
                duration: "2s"
            });

            await timeline.wait(2000);

            break;
    }   
}


async function playBranchTransition(actions, direction) {

    switch(direction) {

        case "next":

            actions.updateScene("camera", {
                zoom: 0.5,
                y: 700,
                x: 0,
                duration: "2s"
            });

            actions.updateScene("background", {
                visible: 0
            });

            await timeline.wait(1800);

            actions.setSproutNodesVisible(false);

            await timeline.wait(500);

            playTree(actions, "next");

            actions.updateScene("camera", {
                zoom: 0.2,
                y: 1100,
                x: 0,
                duration: "5s"
            });

            await timeline.wait(5000);

            break;

        case "prev":

            actions.updateScene("camera", {
                zoom: 0.5,
                y: 300,
                x: 0,
                duration: "2s"
            });

            actions.updateScene("background", {
                visible: 0
            });

            await timeline.wait(2000);

            actions.setSproutNodesVisible(false);

            await timeline.wait(500);

            playBranch(actions, "prev");

            await timeline.wait(2500);

            actions.updateScene("camera", {
                x: 600,
                y: -100,
                zoom: 1.3,
                duration: "2s"
            })

            await timeline.wait(2000);

            actions.setSproutNodesVisible(true);

            break;
    }   
}


async function playTreeTransition(actions, direction) {
    
    switch(direction) {

        case "next":

            break;

        case "prev":

            playTree(actions, "prev");

            actions.updateScene("camera", {
                zoom: 0.5,
                y: 700,
                x: 0,
                duration: "5s"
            });

            await timeline.wait(2500);

            actions.updateScene("camera", {
                zoom: 1.4,
                y: 420,
                x: -575,
                duration: "2s"
            });

            await timeline.wait(1800);

            actions.setSproutNodesVisible(true);

            actions.updateScene("background", {
                visible: 1
            });

            break;
    }   
}