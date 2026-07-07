

export default function Seed(props) {
  const { seed } = props;

  return (
    <svg 
      className="seed"
      viewBox="0 0 70 70"
      style={{
        "--seed-offsetY": `${seed.offsetY}%`
      }}
    >
        <ellipse 
            cx="50"
            cy="50"
            rx="15"
            ry="25"
            fill="#1A120F"
        />
    </svg>
  );
}
