import frame9 from "../../../../../assets/ui/sproutFrame9.png";

export default function Frame9({ visible}) {
  return (
    <img className="frame frame9"
        src={frame9}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}
