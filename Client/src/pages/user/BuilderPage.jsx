//import useEffect para las animaciones + camara + SVG
import { useCallback, useState } from "react";

import TreeCanvas from "../../features/builder/components/tree/TreeCanvas";
import ChakraGlow from "../../features/builder/components/general/ChakraGlow";
import StepIndicator from "../../features/builder/components/steps/StepIndicator";
import Navigation from "../../features/builder/components/general/Navigation";
import FrontCanvas from "../../features/builder/components/general/FrontCanvas";

import SeedStep from "../../features/builder/components/steps/SeedStep";
import OutbreakStep from "../../features/builder/components/steps/OutbreakStep";
import BranchStep from "../../features/builder/components/steps/BranchStep";
import TreeStep from "../../features/builder/components/steps/TreeStep";

import { useBuilder } from "../../contexts/useBuilder";


export default function BuilderPage() {
  const [introFinished, setIntroFinished] = useState(false);
  const [transition, setTransition] = useState(false);

  const { step } = useBuilder();

  const [scene, setScene] = useState({

    handPlanty: {
      visible: 1,
      offsetY: 0
    },

    handCoverx: {
      visible: 0,
      offsetX: 0,
    },

    seed: {
      visible: 1,
      offsetY: 0,
      offsetX: 0
    },

    groundO: {
      visible: 1,
    },

    soil: {
      offsetX: 0
    },

    camera: {
      x: 0,
      y: 0,
      zoom: 1
    }

  });


  const updateScene = useCallback((key, data) => {

    setScene(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...data
      }
    }));
  }, []);

  const onIntroFinished = useCallback(() => {
    setIntroFinished(true);
  }, []);

  const onTransition = useCallback(() => {
    setTransition(true);
  }, []);

  return (
    <div className="builder-page">
      <ChakraGlow introFinished={introFinished} />

      <TreeCanvas 
        scene={scene} 
        updateScene={updateScene} 
        onIntroFinished={onIntroFinished} 
      />

      <StepIndicator 
        currentStep={step} 
        introFinished={introFinished} 
        transition={transition}   
      />

      {step === 1 && <SeedStep 
        introFinished={introFinished} 
        transition={transition} 
      />}

      {step === 2 && <OutbreakStep 
        transition={transition}  
      />}

      {step === 3 && <BranchStep 
        transition={transition}  
      />}
      {step === 4 && <TreeStep
        transition={transition} 
      />}
      
      <Navigation 
        updateScene={updateScene} 
        introFinished={introFinished} 
        onTransition={onTransition} 
        transition={transition}
        setTransition={setTransition} 
      />
      
      <FrontCanvas />
    </div>
  );
}
