import frame10 from "../../../../../assets/ui/sproutFrame14.png";

export default function Frame14({ visible }) {
  return (
    <img className="frame frame14"
        src={frame10}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}