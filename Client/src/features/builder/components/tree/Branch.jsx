//to-DO: ajustar un poquito más las líneas

import { useEffect } from 'react';
import { useBuilder } from '../../../../contexts/useBuilder';
import { buttonPositions } from '../../engine/layoutEngine';
import { getConnections, playBranchGrow } from '../../engine/treeEngine';

export default function Branch({
    scene,
    transition,
    updateScene,
    sproutNodes
}) {
    const { branchData, outbreakData } = useBuilder();

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
        <svg className="branch__lines">
          {scene.branch.connections.map(connection => (

            <line key={connection.id}
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="#7a5a2a"
              strokeWidth="1"
            />

          ))}
        </svg>
  
        {outbreakData.sections.map((s, index) => {
  
          const progress = branchData.sections?.[s.id];
          return (
            <div className="branch__family" key={s.id}>
  
              <button className="branch__family--father"
                disabled
                style={{
                  "--button-x2": `${buttonPositions[index].x}%`,
                  "--button-y2": `${buttonPositions[index].y}%`
                }}
              >
                {s.icon}
              </button>
  
              {progress?.chain.map((item) => {
                return (
                  <div className="branch__familiy--childs" 
                    key={item.instanceId}>
                    <button 
                      className="branch__family--childs-b"
                      disabled
                      style={{
                        "--child-x": `${item.x}px`,
                        "--child-y": `${item.y}px`
                      }}>
                      {item.img ? (
                        <img src={item.img} alt="PH" />
                      ) : (
                        <div className="placeholder">⬛</div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
}
