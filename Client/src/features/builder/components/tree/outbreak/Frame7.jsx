import frame7 from "../../../../../assets/ui/sproutFrame7.png";

export default function Frame7({ visible }) {
  return (
    <img className="frame frame7"
      src={frame7}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
