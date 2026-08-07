import frame10 from "../../../../../assets/ui/sproutFrame10.png";

export default function Frame10({ visible }) {
  return (
    <img className="frame frame10"
        src={frame10}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}
