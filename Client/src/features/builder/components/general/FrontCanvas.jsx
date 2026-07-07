import FrontTopLeft from "../../../../assets/ui/front_top_left.png";
import FrontTopRight from "../../../../assets/ui/front_top_right.png";

export default function FrontCanvas() {
  return (
    <div className="front-canvas">
      <img className="front-canvas__top-left" src={FrontTopLeft} alt="" />
      <img className="front-canvas__top-right" src={FrontTopRight} alt="" />
    </div>
  )
}
