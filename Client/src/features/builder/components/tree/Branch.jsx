//to-DO: ajustar un poquito más las líneas
//TO-DO: hacer que borre las lines inmediatemente al darle a yes en el modal, tener que esperar ahí empeora mucho el UX

import { useEffect } from 'react';
import { useBuilder } from '../../../../contexts/useBuilder';
import { buttonPositions } from '../../engine/layoutEngine';
import { getConnections, playBranchGrow } from '../../engine/treeEngine';

import segmentAsanas from "../../../../assets/ui/segments/segmentAsanas.png";

import leafAsanas from "../../../../assets/ui/leafs/leafAsanas.png";
import leafFocusing from "../../../../assets/ui/leafs/leafFocusing.png";
import leafPranayama from "../../../../assets/ui/leafs/leafPranayama.png";
import leafStretching from "../../../../assets/ui/leafs/leafStretching.png";
import leafHeating from "../../../../assets/ui/leafs/leafHeating.png";
import leafMeditation from "../../../../assets/ui/leafs/leafMeditation.png";
import leafRelaxation from "../../../../assets/ui/leafs/leafRelaxation.png";

export default function Branch({
    scene,
    transition,
    updateScene,
    sproutNodes
}) {
  const { branchData, outbreakData, step } = useBuilder();

  const isGrown = scene.branch.progress === 1;

  const finalSproutPositions = [
    { x: 935, y: -550 }, { x: 795, y: -1015 }, { x: 940, y: -1050 }, 
    { x: 1250, y: -1115 }, { x: 1025, y: -575 }, { x: 835, y: -1440 }, 
    { x: 835, y: -150 }, { x: 900, y: -1300 }, { x: 1185, y: -1030 }, 
    { x: 800, y: -50 }, { x: 550, y: -1175 }, { x: 1075, y: 25 },
  ];

  const finalButtonPositions = [
    { x: 35, y: -65, group: "A", curveX: 0, curveY: -5 },
    { x: 25, y: -107, group: "B", curveX: 0, curveY: -10 },
    { x: 56.5, y: -130, group: "C", curveX: -4, curveY: -8 },
    { x: 75, y: -150, group: "D", curveX: 0, curveY: -10 },
    { x: 70, y: -60, group: "E", curveX: 0.5, curveY: -1 },
    { x: 32, y: -165, group: "F", curveX: 0, curveY: -5 },
    { x: 33, y: -25, group: "G", curveX: 0, curveY: -10 },
    { x: 57, y: -165, group: "H", curveX: -10, curveY: -10 },
    { x: 75, y: -105, group: "I", curveX: -10, curveY: -30 },
    { x: 25, y: -5, group: "J", curveX: 0, curveY: -5 },
    { x: 25, y: -145, group: "K", curveX: -5, curveY: -10 },
    { x: 75, y: -10, group: "L", curveX: 0.5, curveY: -1 }, 
  ];

  const finalChildsOffset = {
    A: [ 
        { x: -380, y: -780, variantX: 1.5, variantY: 0.1 }, 
        { x: -390, y: -720, variantX: 2, variantY: 0.1 } ],
    B: [ 
        { x: -550, y: -1100, variantX: 2, variantY: 0.8 }, 
        { x: -550, y: -1100, variantX: 2, variantY: 0.5 } ],
    C: [ 
        { x: 200, y: -1500, variantX: 1.2, variantY: 1.2 }, 
        { x: 100, y: -1400, variantX: 0.8, variantY: 2.5 } ],
    D: [ 
        { x: 600, y: -1450, variantX: 1.5, variantY: 0.1 }, 
        { x: 1000, y: -1500, variantX: 2, variantY: 0.01 } ],
    E: [ 
        { x: 450, y: -875, variantX: 1, variantY: 8.5 }, 
        { x: 400, y: -850, variantX: 1, variantY: 1.5 } ],
    F: [ 
        { x: -675, y: -1700, variantX: -1, variantY: 1.8 }, 
        { x: -475, y: -1525, variantX: -1.2, variantY: 2 } ],
    G: [ 
        { x: -380, y: -500, variantX: 1.3, variantY: 5 }, 
        { x:-380, y: -400, variantX: 1.6, variantY: 0.8 } ],
    H: [ 
        { x: 50, y: -1650, variantX: -0.3, variantY: 1 }, 
        { x: 100, y: -1600, variantX: 0.1, variantY: 1 } ],
    I: [ 
        { x: 400, y: -1100, variantX: 1.3, variantY: 0.2 }, 
        { x: 380, y: -1100, variantX: 3, variantY: 1 } ],
    J: [ 
        { x: -500, y: -325, variantX: 1.3, variantY: 0.1 }, 
        { x: -500, y: -225, variantX: 1.6, variantY: -0.1 } ],
    K: [ 
        { x: -500, y: -1500, variantX: 1, variantY: 1 }, 
        { x: -550, y: -1425, variantX: 3, variantY: 0.5 } ],
    L: [ 
        { x: 350, y: -400, variantX: 1.5, variantY: 1.5 }, 
        { x: 450, y: -300, variantX: 1.2, variantY: 0.05 } ]
  };

  const segmentFlips = [
    false, true, false, true,
    true, false, true, false,
    false, true, true, false,
    true, false, false, true
  ];

  const currentButtonPositions = isGrown
      ? finalButtonPositions
      : buttonPositions;


  function getFinalChildPosition(item, index, chain) {
    const final = finalChildsOffset[item.group][item.suggestionIndex];

    const baseX = item.x + final.x;
    const baseY = item.y + final.y;

    if (index === 0 || final.variant === 0) {
        return {
            x: baseX,
            y: baseY
        };
    }

    const previous = chain[index - 1];

    const dx = item.x - previous.x;
    const dy = item.y - previous.y;

    const length = Math.sqrt(dx * dx + dy * dy);

    const directionX = dx / length;
    const directionY = dy / length;
    
    const separation = 200 * index;

    return {
      x: baseX + directionX * (separation * final.variantX),
      y: baseY + directionY * (separation * final.variantY)
    };
  }

  function getFinalConnections(index, chain) {
  
      const rect = document
          .querySelector(".chakra-glow")
          .getBoundingClientRect();
  
      const finalFather = {
          x: rect.width * finalButtonPositions[index].x / 100,
          y: rect.height * finalButtonPositions[index].y / 100
      };
  
      const points = [
        finalSproutPositions[index],
        finalFather,
        ...chain.map((item, childIndex) => 
          getFinalChildPosition(item, childIndex, chain)
        )
      ];
  
      return points.slice(0, -1).map((from, i) => ({
        from,
        to: points[i + 1],
        isSproutConnection: i === 0
      }));
    }
  
    function getFinalSegmentPosition(connection) {
      const { from, to } = connection;
  
      const dx = to.x - from.x;
      const dy = to.y - from.y;
  
      const length = Math.sqrt(dx * dx + dy * dy); //sacamos las distancias de x e y, por lo tanto obtenemos 2 lados de un hipotécico cuadrado y luego obtenemos la diagonal mediante pitágoras
  
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  
      const height = 80;
  
      return {
        position: "absolute",
        left: `${from.x}px`,
        top: `${from.y - height / 2}px`,
        width: `${length}px`,
        height: `${height}px`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 50%"
      };
    }
  
    function getSegmentSrc(type) {
      switch(type) {
        case "asanas":
          return segmentAsanas;
        default:
          return null;
      }
    }

  function getLeafSrc(type) {
    switch(type) {
      case "asanas":
        return leafAsanas;
      case "focusing":
        return leafFocusing;
      case "pranayama":
        return leafPranayama;
      case "stretching":
        return leafStretching;
      case "heating":
        return leafHeating;
      case "meditation":
        return leafMeditation;
      case "relaxation":
        return leafRelaxation;
      default:
        return null;
    }
  }

  function getRandomLeaf(connection, type, index) {
    if (connection.isSproutConnection) return [];

    const { from, to } = connection;

    const dx = to.x - from.x;
    const dy = to.y - from.y;

    const angle = Math.atan2(dy, dx) * 180 / Math.PI;

    const leafAngles = [
      75, -75, 45, -45,
      -75, 45, -45, 75,
      45, 75, -75, -45,
      -45, -75, 45, 75,
      -45, -45, 75, -75,
      75, 45, -75, -75,
      45, -45, 45, -75,
      -75, -45, -75, 75
    ];

    const leafCounts = [
      1, 1, 2, 2,
      2, 1, 2, 1,
      2, 1, 2, 1,
      1, 2, 1, 2,
      2, 1, 2, 1,
      1, 2, 1, 2,
      2, 1, 2, 1,
      1, 2, 1, 2
    ];

    const leafCount = leafCounts[index % leafCounts.length];

    const leafType = getLeafSrc(type);

    return Array.from({ length: leafCount }, (_, leafIndex) => {

      const position = 0.5;

      const leafPositionX =
        from.x + dx * position;

      const leafPositionY =
        from.y + dy * position - 50;

      const leafAngleOffset =
        leafAngles[(index + leafIndex) % leafAngles.length];

      const leafAngle = angle + leafAngleOffset;

      const flip = leafAngleOffset < 0;

      return {
        src: leafType,
        style: {
          position: "absolute",
          left: `${leafPositionX}px`,
          top: `${leafPositionY}px`,
          width: "150px",
          height: "auto",
          transform: `
            rotate(${leafAngle}deg)
            scaleY(${flip ? -1 : 1})
          `,
          transformOrigin: "0 50%"
        }
      };
    });
  }

  useEffect(() => {
      const request = scene.branch.growRequest;

      if (!request) return;

      const progress = branchData.sections[request.sectionId];

      const rect = document
        .querySelector(".chakra-glow")
        .getBoundingClientRect();

      const father = {
        x: rect.width * (0.6 + buttonPositions[request.index].x) / 100,
        y: rect.height * (2 + buttonPositions[request.index].y) / 100
      };

      const sprout = {
        x: rect.width * (50.2 + sproutNodes[request.index].end.x) / 100,
        y: rect.height * (67 + sproutNodes[request.index].end.y) / 100
      };

      const chain = progress.chain;

      const connections = getConnections(
        request.sectionId,
        chain,
        father,
        sprout
      );

      playBranchGrow({
        id: request.sectionId,
        scene,
        connections,
        updateScene
      });

      updateScene("branch", {
        growRequest: null
      });

  }, [scene.branch.growRequest, outbreakData, branchData, sproutNodes, updateScene]);


  return (
      <div className="branch"
          style={{
            opacity: !transition
              ? "1"
              : "0"
          }}
      >
        <svg className="branch__lines"
          style={{
            opacity: step === 3
              ? 1
              : 0
          }}
        >
          {scene.branch.connections.map(connection => (

            <line key={connection.id}
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="#000000"
              strokeWidth="1"
            />
          ))}
        </svg>
  
        {outbreakData.sections.map((s, index) => {
  
          const progress = branchData.sections?.[s.id];

          const finalConnections = isGrown && progress?.chain?.length
            ? getFinalConnections(index, progress.chain)
            : [];

          return (
            <div className="branch__family" key={s.id}>
  
              <button className="branch__family--father"
                disabled
                style={{
                  "--button-x2": `${currentButtonPositions[index].x}%`,
                  "--button-y2": `${currentButtonPositions[index].y}%`,
                  "--button-scale": step === 4
                                      ? 6
                                      : 1
                }}
              >
                {s.icon}
              </button>
  
              {progress?.chain.map((item, index) => {
                const childPosition = isGrown
                  ? getFinalChildPosition(item, index, progress?.chain)
                  : item;
                
                return (
                  <div className="branch__familiy--childs" 
                    key={item.instanceId}>
                    <button 
                      className="branch__family--childs-b"
                      disabled
                      style={{
                        "--child-x": `${childPosition.x}px`,
                        "--child-y": `${childPosition.y}px`,
                        "--child-scale": step === 4 && !transition
                                           ? 4
                                           : 1
                      }}>
                      {item.img ? (
                        <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                      ) : (
                        <span className="placeholder">⬛</span>
                      )}
                    </button>
                  </div>
                );
              })}

              <div
                style={{
                  opacity: step === 4
                    ? 1
                    : 0
                }}
              >
                {isGrown && finalConnections.map((connection, i) => {
                  const segment = getFinalSegmentPosition(connection);
                  const flip = segmentFlips[i % segmentFlips.length];

                  return (
                    <img 
                      className="branch__family--segments"
                      key={i}
                      src={getSegmentSrc("asanas")}
                      alt=""
                      style={{
                        ...segment,
                        transform: `${segment.transform} scaleY(${flip ? -1 : 1})`
                      }}
                    />
                  );
                })}

                {isGrown && finalConnections.map((connection, i) => {
                  const leaves = getRandomLeaf(connection, s.type, i);

                  return leaves.map((leaf, leafIndex) => (
                    <img
                      className="branch__family--leafs"
                      key={`${i}-${leafIndex}`}
                      src={leaf.src}
                      alt=""
                      style={leaf.style}
                    />
                  ));
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
}
