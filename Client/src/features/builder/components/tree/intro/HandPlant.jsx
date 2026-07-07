import handPlant from "../../../../../assets/ui/mano_holding.png";

export default function HandPlant(props) {
  const { handPlanty } = props;

  return (
    <img className="hand-plant"
        src={handPlant}
        alt=""
        style={{
          "--hand-offsetY": `${handPlanty.offsetY}%`,
          opacity: handPlanty.visible
        }}
    />
  );
}
