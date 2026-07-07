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
  const { step } = useBuilder();

  const onIntroFinished = useCallback(() => {
    setIntroFinished(true);
  }, []);

  return (
    <div className="builder-page">
      <ChakraGlow introFinished={introFinished} />
      <TreeCanvas onIntroFinished={onIntroFinished} />

      <StepIndicator currentStep={step} introFinished={introFinished} />

      {step === 1 && <SeedStep introFinished={introFinished} />}
      {step === 2 && <OutbreakStep />}
      {step === 3 && <BranchStep />}
      {step === 4 && <TreeStep />}
      
      <Navigation introFinished={introFinished} />
      
      <FrontCanvas />
    </div>
  );
}
