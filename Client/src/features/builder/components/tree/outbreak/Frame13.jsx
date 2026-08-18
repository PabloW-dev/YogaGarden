import frame10 from "../../../../../assets/ui/sproutFrame13.png";

export default function Frame13({ visible }) {
  return (
    <img className="frame frame13"
        src={frame10}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}