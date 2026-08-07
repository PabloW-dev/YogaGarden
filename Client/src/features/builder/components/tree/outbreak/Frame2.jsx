import frame2 from "../../../../../assets/ui/sproutFrame2.png";

export default function Frame2({ visible }) {
  return (
    <img className="frame frame2"
      src={frame2}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
