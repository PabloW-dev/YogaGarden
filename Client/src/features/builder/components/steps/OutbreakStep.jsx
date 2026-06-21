import { useState } from "react";
import { useBuilder } from "../../../../contexts/useBuilder";
import SectionTypePicker from "./SectionTypePicker";
import SectionCard from "./SectionCard";



export default function OutbreakStep() {
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
    <div className="outbreak-step">
      <div>
        <p>{`Class Duration: ${totalTime}`}</p>
        <p>{`Remaining: ${remainingTime}`}</p>
      </div>

      <button onClick={() => setShowPicker(v => !v)}>
        New Section
      </button>

      {
        showPicker && (<SectionTypePicker closePicker={() => setShowPicker(false)} />
      )}

      <div>
        {outbreakData.sections?.map((section, index) => {

          const used = usedDuration(section.id);
          const limit = section.duration;
          const isOver = used > limit;

          const remainingTime = seedData.duration - usedTime;
          const isUnderAllocated = remainingTime > 0;

          return (
            <div key={section.id}>

              {isOver && (
                <p>
                  Secuence uses {used} min but section duration is only {limit} min
                </p>
              )}

              {isUnderAllocated && (
                <p>
                  There are {remainingTime} min still unallocated
                </p>
              )}

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
            </div>
          );
        })}
      </div>
    </div>
  )
}
