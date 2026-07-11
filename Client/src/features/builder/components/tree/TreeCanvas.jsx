import { useEffect } from "react";
import Ground from "./intro/Ground";
import HandPlant from "./intro/HandPlant";
import Seed from "./Seed";
import { playIntro } from "../../engine/introEngine";
import HandCover from "./intro/HandCover";
import Soil from "./intro/Soil";
import Camera from "./Camera";
import Root from "./roots/Root";


export default function TreeCanvas({ scene, updateScene, onIntroFinished }) {


  useEffect(() => {

    playIntro({
      updateScene,
      onIntroFinished

    });
  }, [updateScene, onIntroFinished]);

  return (
    <div className="tree-canvas">

      <Camera camera={scene.camera}>
      
        <Ground groundO={scene.groundO} />

        <Seed seed={scene.seed} />

        <HandPlant handPlanty={scene.handPlanty} />

        <HandCover handCoverx={scene.handCoverx} />

        <Soil soil={scene.soil} />

        <Root />

      </Camera>

    </div>
  );
}
