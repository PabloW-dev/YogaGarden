import { useState } from "react";
import { useBuilder } from "../../../../contexts/useBuilder";
import SectionTypePicker from "./SectionTypePicker";
import SectionCard from "./SectionCard";



export default function OutbreakStep({ transition }) {
  const [showPicker, setShowPicker] = useState(false);

  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const { seedData, outbreakData, setOutbreakData, branchData } = useBuilder();

  const totalTime = seedData.duration;

  const usedTime = outbreakData.sections.reduce(
      (total, section) => total + section.duration,
      0
  );

  const remainingTime = totalTime - usedTime;

  const usedDuration = (id) =>
    branchData.sections?.[id]?.chain?.reduce(
      (total, item) => total + item.duration,
      0
    ) ?? 0;


  const MAX_SECTIONS = 12;
  const amountSections = outbreakData.sections?.length;



  function moveSection(fromIndex, toIndex) {
    setOutbreakData(prev => {
      const updated = [...prev.sections];

      const [moved] = updated.splice(fromIndex, 1);

      const adjustedIndex = fromIndex < toIndex
        ? toIndex - 1
        : toIndex

      updated.splice(adjustedIndex, 0, moved);

      return {...prev, sections: updated };
    });
  }

  return (
    <div className="outbreak-step"
        style={{
            opacity: !transition
                ? "1"
                : "0"
        }}
    >
      <div className="outbreak-step__left">
        <div>
          <p className="outbreak-step__left--duration">Class Duration: <span>{totalTime}</span></p>
          <p className="outbreak-step__left--remaining">Remaining: <span>{remainingTime}</span></p>
        </div>

        <button className="outbreak-step__left--button"
          disabled={remainingTime < 5 || amountSections >= MAX_SECTIONS}
          onClick={() => setShowPicker(v => !v)}
        >
          <span>+</span> New Section
        </button>

        {
          showPicker && (<SectionTypePicker 
            closePicker={() => 
            setShowPicker(false)} 
          />
        )}
      </div>

      <div className="outbreak-step__center">
        {outbreakData.sections?.map((section, index) => {

          const used = usedDuration(section.id);
          const limit = section.duration;

          const isOver = used > limit;

          return (
            <div key={section.id}>
            
              <SectionCard 
                section={section} 
                index={index} 
                remainingTime={remainingTime} 
                moveSection={moveSection} 
                draggingIndex={draggingIndex}
                setDraggingIndex={setDraggingIndex}
                dragOverIndex={dragOverIndex}
                setDragOverIndex={setDragOverIndex}
              />

              {isOver && (
                <p className="warning">
                  ⚠ Secuence uses <span>{used}</span> min but section duration is only <span>{limit}</span> min
                </p>
              )}
            </div>
          );
        })}

        {remainingTime > 0 && (
          <p className="warning">
            ⚠ There are <span>{remainingTime}</span> min still unallocated
          </p>
        )}
      </div>

      <div className="outbreak-step__right"></div>
    </div>
  )
}
