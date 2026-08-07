

export default function StepIndicator({ 
  currentStep, 
  introFinished,
  transition,
  activeSectionId
}) {

  const steps = [1, 2, 3, 4];

  return (
    <div className="step-indicator"
      style={{
        opacity: introFinished && !transition && activeSectionId === null
          ? "1"
          : "0"
      }}
    >
      {steps.map((step, index) => (
        <span key={step}>
          <span
            className={step === currentStep ? "active" : ""}
          >
            {step}
          </span>

          {index < steps.length - 1 && (
            <span className="points"> ···</span>
          )}
        </span>
      ))}
    </div>
  );
}
