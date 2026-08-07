

export default function Seed(props) {
  const { seed } = props;

  return (
    <svg 
      className="seed"
      viewBox="0 0 70 70"
      style={{
        "--seed-offsetY": `${seed.offsetY}%`,
        "--seed-offsetX": `${seed.offsetX}%`,
        opacity: seed.visible ? 1 : 0
      }}
    >
        <ellipse 
            cx="50"
            cy="50"
            rx="15"
            ry="25"
            fill="#000000"
        />
    </svg>
  );
}
