import { useEffect } from "react";
import { useBuilder } from "../../../../contexts/useBuilder";
import Ground from "./intro/Ground";
import HandPlant from "./intro/HandPlant";
import Seed from "./Seed";
import { playIntro } from "../../engine/introEngine";
import HandCover from "./intro/HandCover";
import Soil from "./intro/Soil";
import Root from "./roots/Root";
import Sprout from "./Sprout";
import SproutNode from "./SproutNode";
import Branch from "./Branch";


export default function TreeCanvas({ 
  scene, 
  sproutNodesVisible,
  updateScene, 
  onIntroFinished,
  transition
}) {
  const { outbreakData } = useBuilder();

  const sproutNodes = [
    {
      id: "A1",
      start: {
        x: 0.25,
        y: 2.4,
      },
      end: {
        x: 1.35,
        y: -49,
      },
      rotation: -5,
      flipX: true
    },
    {
      id: "A2",
      start: {
        x: 0.2,
        y: 3.1,
      },
      end: {
        x: 0.95,
        y: -53.1,
      },
      rotation: 20,
      flipX: true
    },
    {
      id: "B1",
      start: {
        x: 0.2,
        y: -5.7,
      },
      end: {
        x: 2.65,
        y: -52.5,
      },
      rotation: -15,
      flipX: false
    },
    {
      id: "B2",
      start: {
        x: 0,
        y: -6.4,
      },
      end: {
        x: 3.65,
        y: -69.5,
      },
      rotation: -70,
      flipX: false
    },
    {
      id: "C1",
      start: {
        x: 1,
        y: 1,
      },
      end: {
        x: 2.9,
        y: -38,
      },
      rotation: -15,
      flipX: false
    },
    {
      id: "C2",
      start: {
        x: 0.9,
        y: 0.7,
      },
      end: {
        x: 9,
        y: -55.6,
      },
      rotation: -35,
      flipX: false
    },
    {
      id: "A3",
      start: {
        x: 0.15,
        y: 2.5,
      },
      end: {
        x: 1.45,
        y: -41.1,
      },
      rotation: -5,
      flipX: true
    },
    {
      id: "B3",
      start: {
        x: 0.25,
        y: -6.1,
      },
      end: {
        x: 3.4,
        y: -63.4,
      },
      rotation: -15,
      flipX: false
    },
    {
      id: "C3",
      start: {
        x: 0.9,
        y: 1.4,
      },
      end: {
        x: 6,
        y: -50.8,
      },
      rotation: 35,
      flipX: false
    },
    {
      id: "A4",
      start: {
        x: 0.1,
        y: 2.9,
      },
      end: {
        x: 1.40,
        y: -34.8,
      },
      rotation: -5,
      flipX: true
    },
    {
      id: "B4",
      start: {
        x: 0.2,
        y: -6.5,
      },
      end: {
        x: -0.6,
        y: -60.3,
      },
      rotation: -70,
      flipX: false
    },
    {
      id: "C4",
      start: {
        x: 1,
        y: 0.7,
      },
      end: {
        x: 2.9,
        y: -33.1,
      },
      rotation: -15,
      flipX: false
    }
  ];

  useEffect(() => {

    playIntro({
      updateScene,
      onIntroFinished

    });
  }, [updateScene, onIntroFinished]);

  return (
    <div className="tree-canvas">
      
        <Ground groundO={scene.groundO} />

        <Seed seed={scene.seed} />

        <Sprout scene={scene} />

        <Branch scene={scene} transition={transition} updateScene={updateScene} sproutNodes={sproutNodes} />

        <div className="sprout-nodes">
          {sproutNodes.map((node, index) => (
            <SproutNode 
              key={node.id}
              rotation={node.rotation}
              flipX={node.flipX}
              start={node.start}
              end={node.end}
              progress={scene.sprout.progress}
              visible={
                sproutNodesVisible && 
                index < outbreakData.sections.length
              }
            />
          ))}
        </div>

        <HandPlant handPlanty={scene.handPlanty} />

        <HandCover handCoverx={scene.handCoverx} />

        <Soil soil={scene.soil} />

          
        <Root />

    </div>
  );
}
