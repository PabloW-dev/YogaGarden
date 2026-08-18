import frame10 from "../../../../../assets/ui/sproutFrame11.png";

export default function Frame11({ visible }) {
  return (
    <img className="frame frame11"
        src={frame10}
        alt=""
        style={{
            opacity: visible ? 1 : 0
        }}
    />
  )
}