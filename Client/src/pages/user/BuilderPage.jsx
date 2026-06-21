//import useEffect para las animaciones + camara + SVG

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
  const { step } = useBuilder();

  return (
    <div className="builder-page">
      <ChakraGlow />
      <TreeCanvas />

      <StepIndicator currentStep={step} />

      {step === 1 && <SeedStep />}
      {step === 2 && <OutbreakStep />}
      {step === 3 && <BranchStep />}
      {step === 4 && <TreeStep />}
      
      <Navigation />
      
      <FrontCanvas />
    </div>
  );
}
