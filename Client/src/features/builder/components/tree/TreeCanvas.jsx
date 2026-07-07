import { useEffect, useState } from "react";
import Ground from "./intro/Ground";
import HandPlant from "./intro/HandPlant";
import Seed from "./Seed";
import { playIntro } from "../../engine/introEngine";
import HandCover from "./intro/HandCover";
import Soil from "./intro/Soil";
import Camera from "./Camera";


export default function TreeCanvas({ onIntroFinished }) {


  const [scene, setScene] = useState({

    handPlanty: {
      visible: 1,
      offsetY: 0
    },

    handCoverx: {
      visible: 0,
      offsetX: 0,
    },

    seed: {
      visible: 1,
      offsetY: 0
    },

    groundO: {
      visible: 1,
    },

    soil: {
      offsetX: 0
    },

    camera: {
      x: 0,
      y: 0,
      zoom: 1
    }

  });


  function updateScene(key, data) {

    setScene(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        ...data
      }
    }));
  }


  useEffect(() => {

    playIntro({
      updateScene,
      onIntroFinished

    });
  }, [onIntroFinished]);

  return (
    <div className="tree-canvas">

      <Camera camera={scene.camera}>
      
        <Ground groundO={scene.groundO} />

        <Seed seed={scene.seed} />

        <HandPlant handPlanty={scene.handPlanty} />

        <HandCover handCoverx={scene.handCoverx} />

        <Soil soil={scene.soil} />

      </Camera>

    </div>
  );
}
