import ground from "../../../../../assets/ui/ground.png";

export default function Ground(props) {

    const { groundO } = props;

  return (
    <img className="ground" 
      src={ground}
      alt=""
      style={{
        opacity: `${groundO.visible}`
      }}
    />
  );
}
