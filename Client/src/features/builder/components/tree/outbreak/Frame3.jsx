import frame3 from "../../../../../assets/ui/sproutFrame3.png";

export default function Frame3({ visible }) {
  return (
    <img className="frame frame3"
      src={frame3}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
