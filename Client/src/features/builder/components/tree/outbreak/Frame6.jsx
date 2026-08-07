import frame6 from "../../../../../assets/ui/sproutFrame6.png";

export default function Frame6({ visible }) {
  return (
    <img className="frame frame6"
      src={frame6}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
