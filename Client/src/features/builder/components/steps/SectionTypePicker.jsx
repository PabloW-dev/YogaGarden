import { useBuilder } from "../../../../contexts/useBuilder";



export default function SectionTypePicker(props) {
      const { closePicker } = props;

      const { setOutbreakData } = useBuilder();

      function addSection(type) {
        setOutbreakData(prev => ({
            ...prev,
            sections: [
                ...prev.sections,
                {
                    id: crypto.randomUUID(),
                    type,
                    duration: 0
                }
            ]
        }));

        closePicker();
      }

  return (
    <div>
      <button
        onClick={() => addSection("focusing")}
      >
        Focusing
      </button>

      <button
        onClick={() => addSection("pranayama")}
      >
        Pranayama
      </button>

      <button
        onClick={() => addSection("stretching")}
      >
        Stretching
      </button>

      <button
        onClick={() => addSection("heating")}
      >
        Heating
      </button>

      <button
        onClick={() => addSection("asanas")}
      >
        Asanas Secuence
      </button>

      <button
        onClick={() => addSection("meditation")}
      >
        Meditation
      </button>

      <button
        onClick={() => addSection("relaxation")}
      >
        Relaxation
      </button>
    </div>
  )
}
