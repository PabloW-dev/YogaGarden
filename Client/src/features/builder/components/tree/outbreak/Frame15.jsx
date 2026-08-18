import frame10 from "../../../../../assets/ui/sproutFrame15.png";

export default function Frame15({ visible }) {
  return (
    <img className="frame frame15"
        src={frame10}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}