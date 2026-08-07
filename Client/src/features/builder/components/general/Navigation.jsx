import { useState } from "react";
import { useBuilder } from "../../../../contexts/useBuilder";
import { playStepTransition } from "../../engine/transitionEngine";
import { createTimeline } from "../../engine/timelineEngine";


export default function Navigation({ 
  setSproutNodesVisible,
  updateScene, 
  introFinished,
  onTransition,
  transition,
  setTransition,
  activeSectionId
}) {
    const { step, setStep } = useBuilder();

    const timeline = createTimeline();

    const [isTransitioning, setIsTransitioning] = useState(false);

    const disabled = transition || activeSectionId !== null;

    async function nextStep() {
      if (isTransitioning) return;

      setIsTransitioning(true);

      await playStepTransition({ 
        setSproutNodesVisible,
        updateScene,
        onTransition
      }, step, "next");

      setStep(prev => prev + 1);

      await timeline.wait(20);

      setTransition(false);

      setIsTransitioning(false);
    }


    async function prevStep() {
      if (isTransitioning) return;

      setIsTransitioning(true);

      await playStepTransition({ 
        setSproutNodesVisible,
        updateScene,
        onTransition
      }, step, "prev");

      setStep(prev => prev - 1);

      await timeline.wait(20);

      setTransition(false);

      setIsTransitioning(false);
    }



  return (
    <div className="navigation"
      style={{
        opacity: introFinished && !transition && activeSectionId === null
          ? "1"
          : "0",
        pointerEvents: introFinished && !transition && activeSectionId === null
          ? "auto"
          : "none"
      }}
    >
      
      <button
        disabled={disabled || step === 1}
        onClick={() => prevStep()}
      >
        ‹
      </button>

      <button
        disabled={disabled || step === 4}
        onClick={() => nextStep()}
      >
        ›
      </button>
    </div>
  );
}
