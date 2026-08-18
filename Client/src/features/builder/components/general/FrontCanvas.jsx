import FrontTopLeft from "../../../../assets/ui/front_top_left.png";
import FrontTopRight from "../../../../assets/ui/front_top_right.png";

import FrontSummer from "../../../../assets/ui/seasons/FrontSummer.png";
import FrontAutumn from "../../../../assets/ui/seasons/FrontAutumn.png";
import FrontWinter from "../../../../assets/ui/seasons/FrontWinter.png";

import { useBuilder } from "../../../../contexts/useBuilder";

export default function FrontCanvas({ transition }) {
  const { seedData } = useBuilder();

  const season = getSeason(seedData.date);

  function getSeason(date) {
    if (!date) return "spring";

    const month = Number(date.slice(5, 7));

    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";

    return "winter";
  }

  return (
    <div className="front-canvas"
      style={{
        opacity: !transition
          ? 1
          : 0
      }}
    >
      {season === "spring" && 
        <div>
          <img className="front-canvas__top-left" src={FrontTopLeft} alt="" />
          <img className="front-canvas__top-right" src={FrontTopRight} alt="" />
        </div>}
      {season === "summer" && <img className="front-canvas__summer" src={FrontSummer} alt="" />}
      {season === "autumn" && 
        <div>
          <img className="front-canvas__autumn-left" src={FrontAutumn} alt="" />
          <img className="front-canvas__autumn-right" src={FrontAutumn} alt="" />
        </div>}
      {season === "winter" && <img className="front-canvas__winter" src={FrontWinter} alt="" />}
    </div>
  )
}
