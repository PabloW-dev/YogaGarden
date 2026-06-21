import { useBuilder } from "../../../../contexts/useBuilder";

export default function SeedStep() {
    const { seedData, setSeedData, outbreakData } = useBuilder();

    const usedTime = outbreakData.sections.reduce(
        (total, section) => total + section.duration,
        0
    );

  return (
    <div className="seed-step">
      <input 
        type="text"
        placeholder="Class Name"
        defaultValue={seedData.name}
        onBlur={(e) =>
            setSeedData(prev => ({
                ...prev,
                name: e.target.value
            }))
        }
      />

      <input 
        type="text"
        placeholder="Class Objective"
        defaultValue={seedData.objective}
        onBlur={(e) =>
            setSeedData(prev => ({
                ...prev,
                objective: e.target.value
            }))
        }
      />
      <label>
        Class Duration
        <input 
            type="range"
            placeholder="Duration"
            min={15}
            max={120}
            value={seedData.duration}
            step={15}
            onChange={(e) =>
                setSeedData(prev => ({
                    ...prev,
                    duration: Number(e.target.value)
                }))
            }
        />

        {usedTime > seedData.duration && (
            <p>
                Sections use {usedTime} min but class duration is only {seedData.duration} min.
            </p>
        )}
      </label>

      <label>
        <input 
            type="radio"
            name="level"
            value="beginner"
            checked={seedData.level === "beginner"}
            onChange={(e) =>
                setSeedData(prev => ({
                    ...prev,
                    level: e.target.value
                }))
            }
        />
        Beginner
      </label>

      <label>
        <input 
            type="radio"
            name="level"
            value="intermediate"
            checked={seedData.level === "intermediate"}
            onChange={(e) =>
                setSeedData(prev => ({
                    ...prev,
                    level: e.target.value
                }))
            }
        />
        Intermediate
      </label>

      <label>
        <input 
            type="radio"
            name="level"
            value="advanced"
            checked={seedData.level === "advanced"}
            onChange={(e) =>
                setSeedData(prev => ({
                    ...prev,
                    level: e.target.value
                }))
            }
        />
        Advanced
      </label>
    </div>
  );
}
