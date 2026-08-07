import { useBuilder } from "../../../../contexts/useBuilder";
import TrashIcon from "../../../../assets/ui/trash.png";

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

    const { setOutbreakData } = useBuilder();

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
            className="section-card"
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
                className="section-card__span"
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

            <div className="section-card__content">
                <div className="section-card__content--text">
                    <p>{section.icon} {section.type}</p>
                    <p>Duration: <span>{section.duration}</span> min</p>
                </div>

                <div className="section-card__content--interaction">
                    <div className="section-card__content--slider">
                        <input 
                            className="section-card__content--input"
                            type="range"
                            placeholder="duration"
                            min={5}
                            max={20}
                            value={section.duration}
                            step={5}
                            onChange={handleDurationChange}
                        />

                        <svg
                            className="section-card__content--svg"
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
                                cx={10 + ((section.duration - 5) / (20 - 5)) * 280}
                                cy="39"
                                r="6"
                            />
                        </svg>
                    </div>

                    <button 
                        className="section-card__content--button" 
                        onClick={deleteSection}
                    >
                        <img className="section-card__content--img" 
                            src={TrashIcon} alt="Delete Section" 
                        />
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}
