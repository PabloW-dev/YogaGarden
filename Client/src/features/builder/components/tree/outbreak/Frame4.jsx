import frame4 from "../../../../../assets/ui/sproutFrame4.png";

export default function Frame4({ visible }) {
  return (
    <img className="frame frame4"
      src={frame4}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
