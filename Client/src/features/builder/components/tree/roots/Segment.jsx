

export default function Segment({ d, visible}) {
  return (
    <path
        d={d}
        className={`root-segment ${visible ? "visible" : ""}`}
    />
  )
}
