import frame8 from "../../../../../assets/ui/sproutFrame8.png";

export default function Frame8({ visible }) {
  return (
    <img className="frame frame8"
        src={frame8}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}
