import { useBuilder } from "../../../../contexts/useBuilder";

export default function SectionCard(props) {
    const { 
        section, 
        remainingTime, 
        index, 
        moveSection,
        draggingIndex,
        setDraggingIndex,
        dragOverIndex,
        setDragOverIndex 
    } = props;

    const { setOutbreakData, seedData } = useBuilder();

    function handleDurationChange(e) {
        const allowedMax = section.duration + remainingTime;

        const newDuration = Math.min(
            Number(e.target.value),
            allowedMax
        );

        setOutbreakData(prev => ({
            ...prev,
            sections: prev.sections.map(s =>
                s.id === section.id
                    ? {
                        ...s,
                        duration: newDuration
                    }
                    : s
            )
        }));
    }

    function deleteSection() {
        setOutbreakData(prev => ({
            ...prev,
            sections: prev.sections.filter(
                s => s.id !== section.id
            )
        }));
    }

    function handleDragStart() {
        setDraggingIndex(index);
    }

    function handleDragEnter() {
        setDragOverIndex(index);
    }

    function handleDragEnd() {
        setDraggingIndex(null);
        setDragOverIndex(null);
    }

    function handleDrop() {
        moveSection(draggingIndex, index);
        setDraggingIndex(null);
        setDragOverIndex(null);
    }

    const isDragging = draggingIndex === index;
    const isPlaceholder = dragOverIndex === index;

  return (
    <>
        {isPlaceholder && !isDragging && (
            <div 
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                style={{
                    height: "60px",
                    border: "2px dashed #aaa",
                    margin: "5px 0"
            }} />
        )}

        <div
            onDragEnter={handleDragEnter}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity: isDragging ? 0.4 : 1,
                transform: isDragging ? "scale(1.02)" : "scale(1)",
                transition: "all 0.15s ease"
            }}
        >
            <span
                draggable
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    cursor: "grab",
                    userSelect: "none",
                    fontSize: "20px"
                }}
            >
                ☰
            </span>

            <div>
                <p>{section.type}</p>

                <p>Duration: {section.duration} min</p>

                <input 
                    type="range"
                    placeholder="duration"
                    min={0}
                    max={seedData.duration}
                    value={section.duration}
                    step={5}
                    onChange={handleDurationChange}
                />

                <button onClick={deleteSection}>
                    Delete Section
                </button>
            </div>
        </div>
    </>
  );
}
