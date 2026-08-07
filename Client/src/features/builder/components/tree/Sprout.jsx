import Frame1 from "./outbreak/Frame1";
import Frame10 from "./outbreak/Frame10";
import Frame2 from "./outbreak/Frame2";
import Frame3 from "./outbreak/Frame3";
import Frame4 from "./outbreak/Frame4";
import Frame5 from "./outbreak/Frame5";
import Frame6 from "./outbreak/Frame6";
import Frame7 from "./outbreak/Frame7";
import Frame8 from "./outbreak/Frame8";
import Frame9 from "./outbreak/Frame9";


export default function Sprout({ scene }) {
    
    const sprout = scene.sprout;

  return (
    <div className="sprout">
      <Frame1 visible={sprout.frame1.visible} />
      <Frame2 visible={sprout.frame2.visible} />
      <Frame3 visible={sprout.frame3.visible} />
      <Frame4 visible={sprout.frame4.visible} />
      <Frame5 visible={sprout.frame5.visible} />
      <Frame6 visible={sprout.frame6.visible} />
      <Frame7 visible={sprout.frame7.visible} />
      <Frame8 visible={sprout.frame8.visible} />
      <Frame9 visible={sprout.frame9.visible} />
      <Frame10 visible={sprout.frame10.visible} />
    </div>
  )
}
