

export default function Soil(props) {
  const { soil } = props;
  return (
    <svg
      className="soil" viewBox="0 0 120 60"
      style={{
        "--soil-offsetX": `${soil.offsetX}%`
      }}
    >
      <path 
        d="
          M0 50
          Q10 35 25 42
          Q40 28 55 40
          Q70 20 90 35
          Q105 30 120 45
          L120 60
          L0 60
          Z
        "
        fill="#3A0603"
      />
    </svg>
  );
}
