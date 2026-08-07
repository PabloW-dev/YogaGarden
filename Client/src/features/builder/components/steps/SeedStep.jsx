//TO-DO: añadir fecha -> frontCanvas cambia según la estación
//TO-DO: ajustar el array de técnicas disponibles según el nivel

import { useBuilder } from "../../../../contexts/useBuilder";

export default function SeedStep({ introFinished, transition }) {
    const { seedData, setSeedData, outbreakData } = useBuilder();

    const usedTime = outbreakData.sections.reduce(
        (total, section) => total + section.duration,
        0
    );

  return (
    <div className="seed-step"
        style={{
            opacity: introFinished && !transition
                ? "1"
                : "0"
        }}
    >
        <div className="seed-step__name">
            <label>
                Class Name:
            </label>

            <input 
                type="text"
                placeholder="Class Name"
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                defaultValue={seedData.name}
                onBlur={(e) =>
                    setSeedData(prev => ({
                        ...prev,
                        name: e.target.value
                    }))
                }
            />
        </div>

        <div className="seed-step__objective">
            <label>
                Class Objetive:
            </label>

            <input 
                type="text"
                placeholder="Class Objective"
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                defaultValue={seedData.objective}
                onBlur={(e) =>
                    setSeedData(prev => ({
                        ...prev,
                        objective: e.target.value
                    }))
                }
            />
        </div>

        <div className="seed-step__duration">
            <label>
                Class Duration: {seedData.duration} min
                

                {usedTime > seedData.duration && (
                    <p className="warning">
                        ⚠ Sections use <span>{usedTime}</span> min but class duration is only <span>{seedData.duration}</span> min.
                    </p>
                )}
            </label>

            <div className="seed-step__duration--wrapper">
                <input
                    className="seed-step__duration--input"
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

                <svg
                    className="seed-step__duration--svg"
                    viewBox="0 0 300 40"
                >
                    <line
                        x1="10"
                        y1="10"
                        x2="290"
                        y2="10"
                        className="track"
                    />

                    <circle
                        className="thumb"
                        cx={10 + ((seedData.duration - 15) / (120 - 15)) * 280}
                        cy="39"
                        r="6"
                    />
                </svg>
            </div>
        </div>

        <div className="seed-step__level">
            <span>
                Class Level:
            </span>
            
            <label className="seed-step__radio">
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

                <svg viewBox="0 0 24 24">
                    <circle className="outer" cx="12" cy="12" r="8"/>
                    <circle className="inner" cx="12" cy="12" r="8"/>
                </svg>
                Beginner
            </label>

            <label className="seed-step__radio">
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

                <svg viewBox="0 0 24 24">
                    <circle className="outer" cx="12" cy="12" r="8"/>
                    <circle className="inner" cx="12" cy="12" r="8"/>
                </svg>
                Intermediate
            </label>

            <label className="seed-step__radio">
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

                <svg viewBox="0 0 24 24">
                    <circle className="outer" cx="12" cy="12" r="8"/>
                    <circle className="inner" cx="12" cy="12" r="8"/>
                </svg>
                Advanced
            </label>
        </div>
    </div>
  );
}
