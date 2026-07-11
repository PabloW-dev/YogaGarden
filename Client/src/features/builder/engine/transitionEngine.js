//for B2 type animations
import { createTimeline } from "./timelineEngine";

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
                x: 650
            })

            await timeline.wait(1500);

            break;

        case "prev":
        
            break;
    }   
}


async function playOutbreakTransition(actions, direction) {

    switch(direction) {

        case "next":

            break;

        case "prev":

            actions.updateScene("camera", {
                x: 0
            });

            

            await timeline.wait(1500);

            break;
    }   
}


async function playBranchTransition(actions, direction) {

    switch(direction) {

        case "next":

            break;

        case "prev":

            break;
    }   
}


async function playTreeTransition(actions, direction) {
    
    switch(direction) {

        case "next":

            break;

        case "prev":

            break;
    }   
}