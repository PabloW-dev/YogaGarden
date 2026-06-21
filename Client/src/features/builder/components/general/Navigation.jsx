import { useBuilder } from "../../../../contexts/useBuilder";

export default function Navigation() {
    const { step, setStep } = useBuilder();
  return (
    <div className="navigation">
      
      <button
        disabled={step === 1}
        onClick={() => setStep(prev => prev - 1)}
      >
        Prev
      </button>

      <button
        disabled={step === 4}
        onClick={() => setStep(prev => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}
