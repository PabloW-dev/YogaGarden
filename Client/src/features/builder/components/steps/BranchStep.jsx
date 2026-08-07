//TO-DO: arreglar el modal para que si hay un modal abierto no abra otro hasta que se cierre

import { useBuilder } from "../../../../contexts/useBuilder";
import { getSuggestions } from "../../../../data/dataManager";
import { buttonPositions, getChildPosition, layoutToVector, playPlusCamera, playBranchCamera, playChildCamera } from "../../engine/layoutEngine";
import { createTimeline } from "../../engine/timelineEngine";
import { openModal, closeModal, scheduleCloseModal, cancelCloseModal } from "../../../sharing/ui/modal";
import { playBranchShrink } from "../../engine/treeEngine";


export default function BranchStep({
  activeSectionId,
  setActiveSectionId,
  transition, 
  updateScene,
  onTransition,
  setTransition,
  setModal,
  scene
 }) {
  
  
  const { outbreakData, branchData, setBranchData, seedData } = useBuilder();

  const usedTime = outbreakData.sections.reduce(
    (total, section) => total + section.duration,
    0
  );

  const remainingTime = seedData.duration - usedTime;
  const isUnderAllocated = remainingTime > 0;

  function getRandom(array, amount) {
    return [...array]
      .sort(() => Math.random() - 0.5)
      .slice(0, amount);
  }

  function startSection(s) {
    const all = getSuggestions(s.type);

    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [s.id]: {
          type: s.type,
          duration: s.duration,
          currentDuration: 0,
          chain: [],
          isCompleted: false,
          ui: {
            step: "initial",
            sourceNumber: null
          },
          search: "",
          suggestions: {
            initial: getRandom(all, 2)
          }
        }
      }
    }));
  }

  function resetSection(id) {
    setBranchData(prev => {
      const copy = { ...prev.sections };
      delete copy[id];
      return { sections: copy };
    });
  }

  function clearSectionSearch(id) {
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...prev.sections[id],
          search: ""
        }
      }
    }));
  }

  function addToChain(data) {
    const id = data.sectionId;
    const item = data.item;
    
    const section = branchData.sections[id];
    const all = getSuggestions(section.type);

    const realItem = all.find(a => a.number === item.number);
      
    const baseTransitions = realItem?.transitions ?? [];

    const currentChain = section.chain;
    const isFirst = currentChain.length === 0;

    const nextPool = isFirst
        ? all
        : all.filter(a => baseTransitions.includes(a.number));

    const ChildPosition = getChildPosition(data);

    playChildCamera({
      buttonIndex: data.buttonIndex,
      ChildPosition,
      updateScene
    }, "go");
      
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,
          chain: [
            ...section.chain, 
            {
              ...item,
              duration: 0, 
              instanceId: crypto.randomUUID(),
              ...ChildPosition
            }],  
          currentDuration: section.currentDuration + item.duration,

          ui: {
            step: "transition",
            sourceNumber: item.number
          },

          suggestions: {
            ...section.suggestions,
            next: getRandom(nextPool, 2)
          }
        }
      }
    }));

    clearSectionSearch(id);
  }

  function returnStep(id, buttonIndex) {
    const section = branchData.sections[id];
    const all = getSuggestions(section.type);

    const newChain = section.chain.slice(0, -1);

    if (newChain.length === 0) {
      setBranchData(prev => ({
        sections: {
          ...prev.sections,
          [id]: {
            ...section,
            chain: [],
            currentDuration: 0,

            ui: {
              step: "initial",
              sourceNumber: null
            },

            suggestions: {
              initial: getRandom(all, 2)
            }
          }
        }
      }));

      playChildCamera({
        updateScene,
        chain: section.chain,
        buttonIndex
      }, "return");

      return;
    }

    const lastItem = newChain[newChain.length - 1];

    const realItem = all.find(a => a.number === lastItem.number);

    const baseTransitions = realItem?.transitions ?? [];

    const nextPool = all.filter(a => baseTransitions.includes(a.number));

    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,

          chain: newChain,

          currentDuration: section.currentDuration - (section.chain[section.chain.length - 1].duration),

          ui: {
            step: "transition",
            sourceNumber: lastItem.number
          },

          suggestions: {
            ...section.suggestions,
            next: getRandom(nextPool, 2)
          }
        }
      }
    }));

    playChildCamera({
      updateScene,
      chain: section.chain,
      buttonIndex
    }, "return");
  }

  async function handleSectionClick(index, id, section) {
    const progress = branchData.sections?.[id];
    const timeline = createTimeline();

    if (!progress) {

      await playBranchCamera({
        index,
        updateScene,
        onTransition
      }, "go");

      setActiveSectionId(id);

      startSection(section);

      await timeline.wait(20);

      return;

    } 
    
    if (progress?.isCompleted) {

      setModal({
        open: true,
        type: "confirmResetSection",
        payload: {
          type: section.type
        },
        confirm: async () => {
          await playBranchShrink({
            id,
            scene,
            updateScene
          });
          resetSection(id);
          setActiveSectionId(null);
        } 
      });

      return;

    }

    await playBranchCamera({
      index,
      updateScene,
      onTransition
    }, "return");

    resetSection(id);
    
    await timeline.wait(20);
    
    setActiveSectionId(null);

  }

  function searchItem(all, query) {
    if (!query) return [];

    return all.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 2);
  }

  function setSectionSearch(id, value) {
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...prev.sections[id],
          search: value
        }
      }
    }));
  }

  function increaseDuration(id) {
    const section = branchData.sections[id];

    const chain = [...section.chain];

    const lastIndex = chain.length - 1;

    const usedDuration = chain.reduce(
      (total, item) => total + item.duration,
      0
    );

    const outbreakSection = outbreakData.sections.find(
      s => s.id === id
    );

    const lastItem = chain[lastIndex];

    const parent =
      chain.length === 1
        ? (() => {
            const world = document.querySelector(".chakra-glow");
            const rect = world.getBoundingClientRect();
            const button = buttonPositions.find(b => b.group === lastItem.group);

            return {
              x: rect.width * button.x / 100,
              y: rect.height * button.y / 100
            };
          })()
        : chain[lastIndex - 1];

    const growFactor = 0.7 + Math.max(lastItem.duration + 1, 0) * 0.35;

    const offset = layoutToVector(
      lastItem.group,
      lastItem.suggestionIndex,
      growFactor
    );

    const { curveX, curveY } = buttonPositions[lastItem.buttonIndex];

    const depthFactor = lastItem.depth / 4 * lastItem.variant;

    const curveFactor = depthFactor * growFactor;

    if (usedDuration === outbreakSection.duration) return;
      
    chain[lastIndex] = {
      ...chain[lastIndex],
      duration: chain[lastIndex].duration + 1,
      x: parent.x + offset.x + curveX * curveFactor,
      y: parent.y + offset.y + curveY * curveFactor
    };
  
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,
          chain,
          ui: {
            ...section.ui
          }
        }
      }
    }));

    
    playPlusCamera({
      updateScene,
      ChildPosition: chain[lastIndex]
    });
    
  }

  function decreaseDuration(id) {
    const section = branchData.sections[id];

    const chain = [...section.chain];

    const lastIndex = chain.length - 1;

    const lastItem = chain[lastIndex];

    const parent =
      chain.length === 1
        ? (() => {
            const world = document.querySelector(".chakra-glow");
            const rect = world.getBoundingClientRect();
            const button = buttonPositions.find(b => b.group === lastItem.group);

            return {
              x: rect.width * button.x / 100,
              y: rect.height * button.y / 100
            };
          })()
        : chain[lastIndex - 1];

    const growFactor = 0.7 + Math.max(lastItem.duration - 1, 0) * 0.35;

    const offset = layoutToVector(
      lastItem.group,
      lastItem.suggestionIndex,
      growFactor
    );

    const { curveX, curveY } = buttonPositions[lastItem.buttonIndex];

    const depthFactor = lastItem.depth / 4 * lastItem.variant;

    const curveFactor = depthFactor * growFactor;

    if (chain[lastIndex].duration <= 0) return;

    chain[lastIndex] = {
      ...chain[lastIndex],
      duration: chain[lastIndex].duration - 1,
      x: parent.x + offset.x + curveX * curveFactor,
      y: parent.y + offset.y + curveY * curveFactor
    };

    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,
          chain,
          ui: {
            ...section.ui
          }
        }
      }
    }));
    
    playPlusCamera({
      updateScene,
      ChildPosition: chain[lastIndex]
    });
    
  }

  async function confirmSection(index, id) {
    const timeline = createTimeline();

    updateScene("branch", {
      growRequest: {
        sectionId: id,
        index
      }
    });

    await playBranchCamera({
      index,
      updateScene,
      onTransition
    }, "return");

    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...prev.sections[id],
          isCompleted: true
        }
      }
    }));

    await timeline.wait(20);

    setActiveSectionId(null);
    setTransition(false);
  }

  return (
    <div className="branch-step"
        style={{
          opacity: !transition
            ? "1"
            : "0"
        }}
    >

      <div className="branch-step__container">
        {isUnderAllocated && (
        <p className="warning branch-step__warning">
          ⚠ There are <span>{remainingTime}</span> min still unallocated
        </p>
      )}
      
      {outbreakData.sections.map((s, index) => {

        const progress = branchData.sections?.[s.id];
        const initialSuggestions = progress?.suggestions?.initial ?? [];
        const nextSuggestions = progress?.suggestions?.next ?? [];

        const all = getSuggestions(s.type);
        const searchValue = progress?.search ?? "";
        const isSearching = searchValue.trim().length > 0;
        const searchResults = isSearching
          ? searchItem(all, searchValue)
          : [];

        const lastItem = progress?.chain?.[progress.chain.length - 1];
        const canContinue = lastItem?.duration > 0;

        const usedDuration = progress?.chain?.reduce(
          (total, item) => total + item.duration,
          0
        ) ?? 0;

        const isFull = usedDuration === s.duration;
        const isLocked = progress?.isCompleted;

        const isActive = activeSectionId === s.id;
        const isDisabled = activeSectionId !== null && !isActive;
        const isEditingChain =
          isActive && progress?.chain?.length > 0;

        const hideButton =
          isDisabled || isEditingChain;

        const group = buttonPositions[index].group;

        return (
          <div className="branch-step__section"
          key={s.id}
          >
            
            <button className={
                `branch-step__section--button
                branch-step__section--button-${index}
                ${hideButton ? "disabled" : ""}`}
              onClick={() => handleSectionClick(index, s.id, s)}
              disabled={hideButton}
              style={{
                fontSize: isActive
                  ? "1.4rem"
                  : "1.1rem"
              }}
            >
              {progress?.isCompleted || isActive ? "↺" : s.icon}
              <span>{s.type}</span>
            </button>

            <div className="branch-step__section--chain">
              {progress?.chain.map((item) => (
                <div
                  key={item.instanceId}
                  onMouseEnter={() => {
                    cancelCloseModal()

                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    })
                  }}
                  onMouseLeave={() => 
                    scheduleCloseModal(setModal)
                  }
                >
                  
                  <button
                    disabled
                  >
                    {item.img ? (
                      <img src={item.img} alt="PH" />
                    ) : (
                      <div className="placeholder">⬛</div>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {isActive && (
              <div className="branch-step__section--editor">
                <div className="branch-step__section--current">
                  {isActive && (
                    <span>Current Technique:</span>
                  )}

                  {progress?.chain.map((item, progressIndex) => {
                    const isLast = progressIndex === progress.chain.length - 1;

                    if (!isLast || isLocked ) return null;

                    return (
                      <div
                        key={item.instanceId}>

                        {isLast && !isLocked && (
                          <div>
                            <button 
                              className="branch-step__section--current-RT"
                              onClick={() => returnStep(s.id, index)}
                            >
                              ↺
                            </button>

                            <div>
                              <button 
                                className="branch-step__section--current-LS"
                                onClick={() => decreaseDuration(s.id)}
                              >
                                -
                              </button>

                              <span
                                className="branch-step__section--current-SP"
                              >{item.duration} min</span>

                              <button
                                className="branch-step__section--current-PL"
                                onClick={() => increaseDuration(s.id)}
                              >
                                +
                              </button>
                            </div>

                            {isFull && !isLocked && progress?.chain && (
                              <div 
                                className="branch-step__section--current-CFM"
                              >
                                <p>
                                  {progress.chain.length} items
                                </p>

                                <button
                                  onClick={() => confirmSection(index, s.id)}
                                >
                                  ✔
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="branch-step__section--next">
                  {isActive && (
                    <span>Next Technique:</span>
                  )}

                  {progress?.chain.length === 0 && (
                    <div className="branch-step__section--is">
                      {initialSuggestions.map((item, suggestionIndex) => {
                          
                        return (
                          <button
                            key={item.id}
                            onMouseEnter={() => {
                              cancelCloseModal()

                              openModal(setModal, {
                                open: true,
                                type: "item",
                                payload: item
                              })
                            }}
                            onMouseLeave={() => 
                              scheduleCloseModal(setModal)
                            }
                            onClick={() => { 
                              closeModal(setModal);
                              addToChain({ 
                                sectionId: s.id, 
                                item,
                                suggestionIndex,
                                group,
                                sectionChain: progress?.chain ?? [],
                                buttonIndex: index 
                              });
                            }}
                          >
                            {item.img ? (
                              <img src={item.img} alt="PH" />
                            ) : (
                              <span className="placeholder">⬛</span>
                            )}
                          </button>
                        );
                      })}

                      <div>
                        {!isFull && !isLocked && (
                          <input
                            type="text" 
                            placeholder="⌕"
                            value={searchValue}
                            onChange={(e) => setSectionSearch(s.id, e.target.value)}
                          />
                        )}

                        {!isFull && !isLocked && (
                          <svg viewBox="0 0 300 8" preserveAspectRatio="none">
                            <line
                                x1="0"
                                y1="4"
                                x2="300"
                                y2="4"
                                className="track"
                            />
                          </svg>
                        )}

                        {isSearching && searchResults.map((item, suggestionIndex) => (
                          <button
                            key={item.id}
                            onMouseEnter={() => {
                              cancelCloseModal()

                              openModal(setModal, {
                                open: true,
                                type: "item",
                                payload: item
                              })
                            }}
                            onMouseLeave={() => 
                              scheduleCloseModal(setModal)
                            }
                            onClick={() => { 
                              closeModal(setModal);
                              addToChain({ 
                                sectionId: s.id, 
                                item,
                                suggestionIndex,
                                group,
                                sectionChain: progress?.chain ?? [],
                                buttonIndex: index 
                              });
                            }}
                          >
                            {item.img ? (
                              <img src={item.img} alt="PH" />
                            ) : (
                              <span className="placeholder">⬛ </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {progress?.chain.length > 0 && canContinue && (
                    <div className="branch-step__section--is">
                      {!isFull && !isLocked && nextSuggestions.map((item, suggestionIndex) => (
                        <button
                          key={item.id}
                          onMouseEnter={() => {
                            cancelCloseModal()

                            openModal(setModal, {
                              open: true,
                              type: "item",
                              payload: item
                            })
                          }}
                          onMouseLeave={() => 
                            scheduleCloseModal(setModal)
                          }
                          onClick={() => { 
                            closeModal(setModal);
                            addToChain({ 
                              sectionId: s.id, 
                              item,
                              suggestionIndex,
                              group,
                              sectionChain: progress?.chain ?? [],
                              buttonIndex: index
                            });
                          }}
                          >
                            {item.img ? (
                              <img src={item.img} alt="PH" />
                            ) : (
                              <span className="placeholder">⬛</span>
                            )}
                          </button>
                        ))}

                      <div>
                        {!isFull && !isLocked && (
                          <input
                            type="text" 
                            placeholder="⌕"
                            value={searchValue}
                            onChange={(e) => setSectionSearch(s.id, e.target.value)}
                          />
                        )}

                        {!isFull && !isLocked && (
                          <svg viewBox="0 0 300 8" preserveAspectRatio="none">
                            <line
                              x1="0"
                              y1="4"
                              x2="300"
                              y2="4"
                              className="track"
                            />
                          </svg>
                        )}

                        {isSearching && !isFull && searchResults.map((item, suggestionIndex) => (
                          <button
                            key={item.id}
                            onMouseEnter={() => {
                              cancelCloseModal()

                              openModal(setModal, {
                                open: true,
                                type: "item",
                                payload: item
                              })
                            }}
                            onMouseLeave={() => 
                              scheduleCloseModal(setModal)
                            }
                            onClick={() => { 
                              closeModal(setModal);
                              addToChain({ 
                                sectionId: s.id, 
                                item,
                                suggestionIndex,
                                group,
                                sectionChain: progress?.chain ?? [],
                                buttonIndex: index
                              });
                            }}
                          >
                            {item.img ? (
                              <img src={item.img} alt="PH" />
                              ) : (
                              <span className="placeholder">⬛ </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
}