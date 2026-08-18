import frame10 from "../../../../../assets/ui/sproutFrame12.png";

export default function Frame12({ visible }) {
  return (
    <img className="frame frame12"
        src={frame10}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}