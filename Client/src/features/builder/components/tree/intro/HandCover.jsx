import handCover from "../../../../../assets/ui/mano_cover.png";

export default function HandCover(props) {
    const { handCoverx } = props;

  return (
    <img className="hand-cover"
        src={handCover}  
        alt=""
        style={{
          "--hand-offsetX": `${handCoverx.offsetX}%`,
          opacity: handCoverx.visible
        }}
    />
  );
}
