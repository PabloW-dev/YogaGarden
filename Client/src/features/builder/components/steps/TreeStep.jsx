import { useBuilder } from "../../../../contexts/useBuilder"

export default function TreeStep() {
  const { seedData, outbreakData, branchData } = useBuilder();

  const usedTime = outbreakData.sections.reduce(
    (total, section) => total + section.duration,
    0
  );

  const hasInvalidSection =
    outbreakData.sections?.some(section => {

      const usedDuration =
        branchData.sections?.[section.id]?.chain?.reduce(
          (total, item) => total + item.duration,
          0
        ) ?? 0;

      return usedDuration !== section.duration;
    })

  const hasInvalidClassTime = usedTime !== seedData.duration;

  const classIsValid =
    !hasInvalidClassTime &&
    !hasInvalidSection;

  return (
    <div className="tree-step">
      <h2>Class Summary:</h2>
      <div>
        <p>Basic:</p>
        {seedData?.name}
        {seedData?.objective}
        <p>{seedData?.duration} min</p>
        {seedData?.level}
      </div>

      <div>
        <p>Structure:</p>
        {outbreakData.sections?.map(s => {
          const progress = branchData.sections?.[s.id];

          return (
            <div
              key={s.id}
            >
              <p>Section: {s.type} {s.duration} min</p>
            
              <p>Secuence:</p>
              {progress?.chain?.map(c => (
                <div
                  key={c.instanceId}
                >
                  <p>{c.name} {c.duration} min</p>
                </div>
              ))}
            </div>
          );
        }
        )}
      </div>

      {usedTime !== seedData.duration && (
        <p>
          Sections use {usedTime} min but class duration is {seedData.duration} min
        </p>
      )}

      {hasInvalidSection && (
        <p>
          One or more sequences do not match their section duration
        </p>
      )}

      <button
        disabled={!classIsValid}
        //onClick={submitClass}
      >
        Submit Class
      </button>
    </div>
  )
}
