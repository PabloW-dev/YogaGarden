import { useBuilder } from "../../../../contexts/useBuilder";

export default function Navigation({ introFinished }) {
    const { step, setStep } = useBuilder();
  return (
    <div className="navigation"
      style={{
        opacity: introFinished
          ? "1"
          : "0"
      }}
    >
      
      <button
        disabled={step === 1}
        onClick={() => setStep(prev => prev - 1)}
      >
        ‹
      </button>

      <button
        disabled={step === 4}
        onClick={() => setStep(prev => prev + 1)}
      >
        ›
      </button>
    </div>
  );
}
