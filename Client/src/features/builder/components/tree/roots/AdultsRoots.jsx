import root01 from "../../../../../assets/ui/roots/roots01.png";
import root02 from "../../../../../assets/ui/roots/roots02.png";
import root03 from "../../../../../assets/ui/roots/roots03.png";
import root04 from "../../../../../assets/ui/roots/roots04.png";
import root05 from "../../../../../assets/ui/roots/roots05.png";
import root06 from "../../../../../assets/ui/roots/roots06.png";
import root07 from "../../../../../assets/ui/roots/roots07.png";
import root08 from "../../../../../assets/ui/roots/roots08.png";
import root09 from "../../../../../assets/ui/roots/roots09.png";
import root10 from "../../../../../assets/ui/roots/roots10.png";
import root11 from "../../../../../assets/ui/roots/roots11.png";
import root12 from "../../../../../assets/ui/roots/roots12.png";
import root13 from "../../../../../assets/ui/roots/roots13.png";
import root14 from "../../../../../assets/ui/roots/roots14.png";
import root15 from "../../../../../assets/ui/roots/roots15.png";
import root16 from "../../../../../assets/ui/roots/roots16.png";
import root17 from "../../../../../assets/ui/roots/roots17.png";
import root18 from "../../../../../assets/ui/roots/roots18.png";
import root19 from "../../../../../assets/ui/roots/roots19.png";
import root20 from "../../../../../assets/ui/roots/roots20.png";
import root21 from "../../../../../assets/ui/roots/roots21.png";

import { useBuilder } from "../../../../../contexts/useBuilder";

export default function AdultsRoots({ visible }) {
    const { seedData } = useBuilder();

    const adultRoots = [
        root01, root02, root03, root04, root05, root06, root07,
        root08, root09, root10, root11, root12, root13, root14,
        root15, root16, root17, root18, root19, root20, root21
    ];

    const visibleCount = {
        beginner: 7,
        intermediate: 14,
        advanced: 21
    }[seedData.level];

    const stageCount = seedData.duration / 15;

  return (
    <div className="adult-roots"
        style={{
            opacity: visible ? 1 : 0
        }}
    >
      {adultRoots.map((src, index) => {
        const rootIndex = index % 7;

        return (
            <img 
                className="adult-roots__img"
                key={index}
                src={src}
                style={{
                    opacity: 
                        index < visibleCount &&
                        rootIndex < stageCount - 1
                            ? 1
                            : 0  
                }}
            />
        );
      })}
    </div>
  );
}
