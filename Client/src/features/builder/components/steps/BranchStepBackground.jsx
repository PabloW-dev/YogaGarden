import { useBuilder } from "../../../../contexts/useBuilder";

export default function BranchStepBackground({ background }) {
    const { step } = useBuilder();

    const visible = background.visible;

  return (
    <div className="background-helper">
      <div />
      <div className="background-helper__section"
        style={{
        backgroundColor: step === 3
          ? "white"
          : "white",
        zIndex: step === 3
          ? "20"
          : "0",
        opacity: visible
          ? "0.85"
          : "0"
      }}
      />
    </div>
  )
}
