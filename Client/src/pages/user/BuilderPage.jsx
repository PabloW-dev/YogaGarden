//import useEffect para las animaciones + camara + SVG
import { useCallback, useState } from "react";

import TreeCanvas from "../../features/builder/components/tree/TreeCanvas";
import ChakraGlow from "../../features/builder/components/general/ChakraGlow";
import StepIndicator from "../../features/builder/components/steps/StepIndicator";
import Navigation from "../../features/builder/components/general/Navigation";
import FrontCanvas from "../../features/builder/components/general/FrontCanvas";

import Camera from "../../features/builder/components/tree/Camera";

import SeedStep from "../../features/builder/components/steps/SeedStep";
import OutbreakStep from "../../features/builder/components/steps/OutbreakStep";
import BranchStep from "../../features/builder/components/steps/BranchStep";
import TreeStep from "../../features/builder/components/steps/TreeStep";

import { useBuilder } from "../../contexts/useBuilder";
import BranchStepBackground from "../../features/builder/components/steps/BranchStepBackground";



export default function BuilderPage({ setModal }) {
  const [introFinished, setIntroFinished] = useState(false);
  const [transition, setTransition] = useState(false);
  const [sproutNodesVisible, setSproutNodesVisible] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);

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

    sprout: {
      frame1: {
        visible: 0
      },
      frame2: {
        visible: 0
      },
      frame3: {
        visible: 0
      },
      frame4: {
        visible: 0
      },
      frame5: {
        visible: 0
      },
      frame6: {
        visible: 0
      },
      frame7: {
        visible: 0
      },
      frame8: {
        visible: 0
      },
      frame9: {
        visible: 0
      },
      frame10: {
        visible: 0
      },
      progress: 0
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
      zoom: 1,
      duration: "1.5s"
    },

    background: {
      visible: 0
    },

    branch: {
      connections: [],
      growRequests: null
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

      <BranchStepBackground background={scene.background} />

      <Camera camera={scene.camera}>
        <TreeCanvas 
          scene={scene} 
          sproutNodesVisible={sproutNodesVisible}
          updateScene={updateScene} 
          onIntroFinished={onIntroFinished} 
          transition={transition}
        />
      </Camera>

      <StepIndicator 
        currentStep={step} 
        introFinished={introFinished} 
        transition={transition}
        activeSectionId={activeSectionId}  
      />

      {step === 1 && <SeedStep 
        introFinished={introFinished} 
        transition={transition} 
      />}

      {step === 2 && <OutbreakStep 
        transition={transition}  
      />}

      {step === 3 && <BranchStep 
          activeSectionId={activeSectionId}
          setActiveSectionId={setActiveSectionId}
          transition={transition} 
          updateScene={updateScene}
          onTransition={onTransition} 
          setTransition={setTransition} 
          setModal={setModal}
          scene={scene}
        />}

      {step === 4 && <TreeStep
        transition={transition} 
      />}
      
      <Navigation
        setSproutNodesVisible={setSproutNodesVisible}
        updateScene={updateScene} 
        introFinished={introFinished} 
        onTransition={onTransition} 
        transition={transition}
        setTransition={setTransition} 
        activeSectionId={activeSectionId}
      />
      
      <FrontCanvas />
    </div>
  );
}
