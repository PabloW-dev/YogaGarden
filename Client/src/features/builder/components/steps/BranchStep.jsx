import { useBuilder } from "../../../../contexts/useBuilder";
import { getSuggestions } from "../../../../data/dataManager";

export default function BranchStep() {
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
            initial: getRandom(all, 5)
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

  function addToChain(id, item) {
    
    const section = branchData.sections[id];
    const all = getSuggestions(section.type);

    const realItem = all.find(a => a.number === item.number);
      
    const baseTransitions = realItem?.transitions ?? [];

    const currentChain = section.chain;
    const isFirst = currentChain === 0;

    const nextPool = isFirst
        ? all
        : all.filter(a => baseTransitions.includes(a.number));
      
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,
          chain: [...section.chain, {...item, duration: 0, instanceId: crypto.randomUUID()}],
          currentDuration: section.currentDuration + item.duration,

          ui: {
            step: "transition",
            sourceNumber: item.number
          },

          suggestions: {
            ...section.suggestions,
            next: getRandom(nextPool, 3)
          }
        }
      }
    }));
    

    clearSectionSearch(id);
  }

  function returnStep(id) {
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
              initial: getRandom(all, 5)
            }
          }
        }
      }));

      return;
    }

    const lastItem = newChain[newChain.length - 1];

    const realItem = all.find(a => a.numer === lastItem.number);

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
            next: getRandom(nextPool, 3)
          }
        }
      }
    }));
  }

  function handleSectionClick(id, section) {
    const progress = branchData.sections?.[id];

    if (!progress) {
      startSection(section);
      return;
    }

    //cambiar esto por que aparezca un modal de "sure you want to erase?"
    resetSection(id);
    
  }

  function searchItem(all, query) {
    if (!query) return [];

    return all.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
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

    if (usedDuration === outbreakSection.duration) return;
      
    chain[lastIndex] = {
      ...chain[lastIndex],
      duration: chain[lastIndex].duration + 1
    };
  
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,
          chain
        }
      }
    }));
  }

  function decreaseDuration(id) {
    const section = branchData.sections[id];

    const chain = [...section.chain];

    const lastIndex = chain.length - 1;

    if (chain[lastIndex].duration <= 0) return;

    chain[lastIndex] = {
      ...chain[lastIndex],
      duration: chain[lastIndex].duration - 1
    };

    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...section,
          chain
        }
      }
    }));
  }

  function confirmSection(id) {
    setBranchData(prev => ({
      sections: {
        ...prev.sections,
        [id]: {
          ...prev.sections[id],
          isCompleted: true
        }
      }
    }));
  }

  return (
    <div className="branch-step">
      {isUnderAllocated && (
        <p>
          There are {remainingTime} min still unallocated
        </p>
      )}

      {outbreakData.sections.map(s => {

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

        return (
          <div key={s.id}>

            <button onClick={() => handleSectionClick(s.id, s)}>
              {s.type}
            </button>

            {progress && (
              <div>
                <p>{progress.chain.length} items</p>
              </div>
            )}

            {progress?.chain.map((item, index) => {
              const isLast = index === progress.chain.length - 1;

              return (
                <div key={item.instanceId}>
                  <button disabled>
                    {item.name}
                  </button>

                  {item.duration} min

                  {isLast && !isLocked && (
                    <>
                      <button
                        onClick={() => decreaseDuration(s.id)}
                      >
                        -
                      </button>

                      <button
                        onClick={() => increaseDuration(s.id)}
                      >
                        +
                      </button>

                      <button
                        onClick={() => returnStep(s.id)}
                      >
                        Return
                      </button>
                    </>
                  )}
                </div>
              );
            })}

            {progress?.chain.length === 0 && (
              <div>
                {initialSuggestions.map(item => (
                  <button
                    key={item.id}
                    onClick={() => addToChain(s.id, item)}
                  >
                    {item.name}
                  </button>
                ))}

                {!isFull && !isLocked && (
                  <input
                    type="text" 
                    placeholder="another..."
                    value={searchValue}
                    onChange={(e) => setSectionSearch(s.id, e.target.value)}
                  />
                )}

                {isSearching && searchResults.map(item => (
                  <button
                    key={item.id}
                    onClick={() => addToChain(s.id, item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}

            {progress?.chain.length > 0 && canContinue && (
              <div>
                {!isFull && !isLocked && nextSuggestions.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => addToChain(s.id, item)}
                  >
                      {item.name}
                  </button>
                ))}

                
                {!isFull && !isLocked && (
                  <input
                    type="text" 
                    placeholder="another..."
                    value={searchValue}
                    onChange={(e) => setSectionSearch(s.id, e.target.value)}
                  />
                )}

                {isSearching && searchResults.map(item => (
                  <button
                    key={item.id}
                    onClick={() => addToChain(s.id, item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}

            {isFull && !isLocked && progress?.chain && (
              <button
                onClick={() => confirmSection(s.id)}
              >
                Confirmed
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}