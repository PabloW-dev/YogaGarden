import { useState } from "react";
import { useBuilder } from "../../../../contexts/useBuilder";
import { playStepTransition } from "../../engine/transitionEngine";
import { createTimeline } from "../../engine/timelineEngine";


export default function Navigation({ 
  updateScene, 
  introFinished,
  onTransition,
  transition,
  setTransition 
}) {
    const { step, setStep } = useBuilder();

    const timeline = createTimeline();

    const [isTransitioning, setIsTransitioning] = useState(false);


    async function nextStep() {
      if (isTransitioning) return;

      setIsTransitioning(true);

      await playStepTransition({ 
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
        opacity: introFinished && !transition
          ? "1"
          : "0"
      }}
    >
      
      <button
        disabled={step === 1}
        onClick={() => prevStep()}
      >
        ‹
      </button>

      <button
        disabled={step === 4}
        onClick={() => nextStep()}
      >
        ›
      </button>
    </div>
  );
}
