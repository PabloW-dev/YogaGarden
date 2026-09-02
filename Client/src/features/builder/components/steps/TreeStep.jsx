import { useBuilder } from "../../../../contexts/useBuilder"

export default function TreeStep({ transition }) {
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

  const getBackgroundColor = (type) => {
    switch (type) {
      case "heating":
        return "#F3E5D0";

      case "asana":
        return "#E5EEDB";

      case "pranayama":
        return "#DCEBE8";

      case "meditation":
        return "#E7E0EF";

      case "relaxation":
        return "#F0E1E1";

      case "focusing":
        return "#E8E5D5";

      case "stretching":
        return "#DDE4F0"

      default:
        return "white";
    }
  };

  return (
    <div className="tree-step"
      style={{
          opacity: !transition
            ? "1"
            : "0"
        }}
    >
      <h1>Class Summary:</h1>

      <div className="tree-step__summary">
        <div className="tree-step__basic--background"
          style={{
            zIndex: "21",
            opacity: "1"
          }}
        >
          <div className="tree-step__basic">
            <h2>Basics:</h2>
            <div className="tree-step__basic--content">
              <p>Class Name: <span>{seedData?.name}</span></p>
              <p>Practice Date: <span>{seedData?.date} </span> </p>
              <p>Objective: <span>{seedData?.objective}</span></p>
              <p>Level: <span>{seedData?.level}</span></p>
              <p>Duration: <span>{seedData?.duration} min</span></p>
            </div>
          </div>
        </div>

        <div className="tree-step__structure">
          <h2>Structure:</h2>
          {outbreakData.sections?.map((s, index) => {
            const progress = branchData.sections?.[s.id];

            return (
              <div className="tree-step__structure--section"
                key={s.id}
                style={{
                  "--section-color": getBackgroundColor(s.type),
                  zIndex: "21",
                  opacity: "1"
                }}
              >
                <div className="tree-step__structure--section-I">
                  <p>Section {index + 1}: <span>{s.type}</span></p>
                  <p>time: <span>{s.duration}</span> min</p>
                </div>

                <div className="tree-step__structure--section-container">
                {progress?.chain?.map(c => (
                  <div className="tree-step__structure--section-element"
                    key={c.instanceId}
                  >
                    <span>{c.img}</span>
                    <span>{c.name}</span>
                    <span>{c.duration} min</span>
                  </div>
                ))}
                </div>
              </div>
            );
          }
          )}
          <div className="tree-step__structure--end"></div>
        </div>
      </div>

      <div className="tree-step__warning">
        {usedTime !== seedData.duration && (
          <p className="warning">
            ⚠ <span>Sections use {usedTime} min but class duration is {seedData.duration} min</span>
          </p>
        )}

        {hasInvalidSection && (
          <p className="warning">
            ⚠ <span>One or more sequences do not match their section duration</span>
          </p>
        )}
      </div>

      <div className="tree-step__submit">
        <button
          disabled={!classIsValid}
          //onClick={submitClass}
        >
          Submit Class
        </button>
        
        <div></div>
      </div>

      <div className="tree-step__speech">
        <h2>Class Speech:</h2>
      </div>

      <div className="tree-step__area"
        style={{
          backgroundColor: "white",
            zIndex: "21",
            opacity: "0.8",
            height: "30rem" //esto luego habrá que poner una variable
        }}
      >
        <textarea placeholder=" Write the Speech for your Class..." 
          onInput={(e) => {
            const textarea = e.currentTarget;
            const baseHeight = 16; // 1rem

            textarea.style.height = `${baseHeight}px`;

            if (textarea.value.trim() === "") {
              textarea.style.height = `${baseHeight}px`;
              return;
            }

            textarea.style.height =
              `${Math.min(textarea.scrollHeight, 480)}px`;
          }}
          style={{
            height: "1rem"
          }}
        />
      </div>
    </div>
  )
}
