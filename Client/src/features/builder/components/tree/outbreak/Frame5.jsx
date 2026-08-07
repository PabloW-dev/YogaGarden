import frame5 from "../../../../../assets/ui/sproutFrame5.png";

export default function Frame5({ visible }) {
  return (
    <img className="frame frame5"
      src={frame5}
      alt=""
      style={{
        opacity: visible ? 1 : 0
      }}
    />
  )
}
