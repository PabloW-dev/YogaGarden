import sproutnode from "../../../../assets/ui/sproutNode.png";
import { lerp } from "../../utils/animation";

export default function SproutNode({ 
    visible, 
    rotation, 
    flipX, 
    start,
    end,
    progress
}) {

    const currentX = lerp(start.x, end.x, progress);
    const currentY = lerp(start.y, end.y, progress);
  
    return (
    <img
        className="sprout-node"
        src={sproutnode}
        alt=""
        style={{
            opacity: visible ? 0.9 : 0,
            "--sproutNode-x2": `${currentX}%`,
            "--sproutNode-y2": `${currentY}%`,
            "--sprout-rotation": `${rotation}deg`,
            "--sproutNode-scaleX": flipX ? -1 : 1
        }}
    />
  )
}
