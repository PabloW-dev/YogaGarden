

export default function StepIndicator({ currentStep }) {
  const steps = [1, 2, 3, 4];

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <span key={step}>
          <span
            className={step === currentStep ? "active" : ""}
          >
            {step}
          </span>

          {index < steps.length - 1 && (
            <span>---</span>
          )}
        </span>
      ))}
    </div>
  );
}
