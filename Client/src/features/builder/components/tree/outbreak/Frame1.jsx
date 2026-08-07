import frame1 from "../../../../../assets/ui/sproutFrame1.png";

export default function Frame1({ visible }) {
  return (
    <img className="frame frame1"
      src={frame1}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
