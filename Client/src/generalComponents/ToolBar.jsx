import { useRef, useState, useEffect } from "react";

import { getSuggestions } from "../data/dataManager";


let previousIsOpen = false; 
//esto sólo funciona porque sólo hay una instancia a la vez de este módulo, 
// si no habría que solucionarlo de otra manera

const defaultSearchResults = {
    type: "no-type",
    message:
      "Please select a type before searching"
  }




export default function ToolBar({ 
  component = "", 
  type = null, 
  ignoreOutsideId = null ,



  onSearch,


  onSelectedTypes,
  selectedTypes
}) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(
      type
        ? null
        : defaultSearchResults
  );

  const [isOpen, setIsOpen] = useState(
    previousIsOpen);
  const ctaRef = useRef(null);

  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef(null);

  const toolbarRef = useRef(null);

  const [filterIsOpen, setFilterIsOpen] = useState(false);
  

  useEffect(() => {
    if (isOpen) {
      ctaRef.current?.focus();
    }

    if (!isOpen) return;
    
    function handlePointerDown(e) {
      const ignoredElement = ignoreOutsideId
        ? document.getElementById(ignoreOutsideId)
        : null;

      if (!toolbarRef.current?.contains(e.target) &&
          !ignoredElement?.contains(e.target)) {
        setIsOpen(false);
        previousIsOpen = false;
        setIsClosing(true);
        setSearch("");
        setSearchResults(type ? null : defaultSearchResults);
      }
    }
    
    document.addEventListener("pointerdown", handlePointerDown);
    
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, type, ignoreOutsideId]);

 
  function toggleAside() {
    clearTimeout(timeoutRef.current);

    if (!isOpen) {
        setIsOpen(true);
        previousIsOpen = true;
        setIsClosing(false);
        return;
    }

    setSearch("");
    setSearchResults(type ? null : defaultSearchResults);
    setIsClosing(true);

    timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        previousIsOpen = false;
        setIsClosing(false);
        setSearch("");
        setSearchResults(type ? null : defaultSearchResults);
    }, 500);
  }

  














  const all = getSuggestions(type);

  

  function searchItems(items, query) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedQuery)
    );
  }

  const matches = searchItems(all, search);

  function handleSearch(e) {
    if (e.key !== "Enter") return;

    if (!type) {
      setSearchResults(defaultSearchResults);
    } else if (matches.length === 0) {
      setSearchResults({
        type: "empty",
        message:
          "No matches were found." + 
            "Please ensure you are searching" + 
            "in the correct section. If so," + 
            "submit your request and we will" + 
            "review it for inclusion in the library."
      });
    } else if (matches.length > 10) {
      setSearchResults({
        type: "too-many",
        message: "Your search returns too many results." + 
            "Please make your search more specific."
      });
    } else {
      setSearchResults({
        type: "matches",
        matches
      })
    }

    setSearch("");
  }

  


  function handleLibrarySearch(e, value) {
    if (e.key !== "Enter") return;

    const types = [
      "focusing",
      "pranayama",
      "stretching",
      "heating",
      "asanas",
      "meditation",
      "relaxation"
    ];

    const superAll = types.flatMap(type => getSuggestions(type));

    const matches = searchItems(superAll, value);

    const matchesByType = {
      focusing: [],
      pranayama: [],
      stretching: [],
      heating: [],
      asanas: [],
      meditation: [],
      relaxation: []
    };

    matches.forEach(item => {
      matchesByType[item.type].push(item);
    });

    onSearch(matchesByType);
  }







  function handleTypeFilter(type) {
    onSelectedTypes(prev =>
      prev.includes(type)
        ? prev.filter(item => item !== type)
        : [...prev, type]
    );
  }















  return (
    <div className="tool-bar" ref={toolbarRef}>
      <button 
        className={`tool-bar__button 
          ${isClosing || !isOpen ? "is-close" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="searcher-cta"
        aria-label="Open/Close searcher-CTA"
        onClick={toggleAside}
      >
           
      </button>

      {(isOpen || isClosing) && 
        <aside
          className={`tool-bar__aside ${isClosing ? "is-closing" : "is-opening"}`} 
          ref={ctaRef}
          id="searcher-cta"
        >
          {component === "add-to-library" && ( 
            <div className="tool-bar__aside--isATL">
              {searchResults?.type === "no-type" &&
                <div role="status" className="tool-bar__advice">
                  <span>{searchResults.message}</span>
                </div>
              }

              <input 
                type="text" 
                placeholder="⌕ Search and press Enter"
                aria-label="Search the technique to be verified. Press Enter to search."
                value={search}
                onChange={(e) => {
                  setSearchResults(null);
                  setSearch(e.target.value);
                }} 
                onKeyDown={handleSearch}
              />

              {searchResults?.type === "empty" &&
                <div role="status" className="tool-bar__not-found">
                  <span>{searchResults.message}</span>
                </div>
              }

              {searchResults?.type === "too-many" &&
                <div role="status" className="tool-bar__too-many">
                  <span>{searchResults.message}</span>
                </div>
              }

              {searchResults?.type === "matches" &&
                <>
                  <span className="tool-bar__found-message">
                    Matching techniques <br /> found:
                  </span>

                  <ul aria-live="polite">
                    {searchResults.matches.map((match) => (
                      <li className="tool-bar__found" key={match.id}>
                        <span>{match.name}</span>
                      </li>
                    ))}
                  </ul>
                </>
                  
                  
              }
            </div>  
          )}

          {component === "library" && (
            <div className="tool-bar__aside--isL">
              <input
                type="text" 
                placeholder="⌕ Search and press Enter"
                value={search}
                onChange={(e) => {
                  const value = e.target.value;

                  setSearch(value);

                  if (value === "") {
                    onSearch(null);
                  }
                }} 
                onKeyDown={(e) => handleLibrarySearch(e, search)}
              />

              <button onClick={() => {
                setSearch(""); 
                onSearch(null);
                }}
              >
                CleanSearch
              </button>

              <div className="tool-bar__aside--isL-FIL">
                <div className="tool-bar__aside--isL-BTTN">
                  <h4>Filters:</h4>
                  <button
                    onClick={() => setFilterIsOpen(prev => !prev)}
                  >
                    {filterIsOpen ? (
                      <span>▴</span>
                    ) : (
                      <span>▾</span>
                    )}
                  </button>
                </div>
                
                {filterIsOpen && (
                  <div className="tool-bar__aside--isL-CNT">
                    <div className="tool-bar__aside--isL-TYPE">
                      <h4>Library Section:</h4>

                      <button
                        onClick={() => handleTypeFilter("focusing")}
                      >
                        {selectedTypes.includes("focusing") ? (
                          <span>🗹 Focusings</span>
                        ) : (
                          <span>□ Focusings</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleTypeFilter("pranayama")}
                      >
                        {selectedTypes.includes("pranayama") ? (
                          <span>🗹 Pranayamas</span>
                        ) : (
                          <span>□ Pranayamas</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleTypeFilter("stretching")}
                      >
                        {selectedTypes.includes("stretching") ? (
                          <span>🗹 Stretchings</span>
                        ) : (
                          <span>□ Stretchings</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleTypeFilter("heating")}
                      >
                        {selectedTypes.includes("heating") ? (
                          <span>🗹 Heatings</span>
                        ) : (
                          <span>□ Heatings</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleTypeFilter("asanas")}
                      >
                        {selectedTypes.includes("asanas") ? (
                          <span>🗹 Asanas</span>
                        ) : (
                          <span>□ Asanas</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleTypeFilter("meditation")}
                      >
                        {selectedTypes.includes("meditation") ? (
                          <span>🗹 Meditations</span>
                        ) : (
                          <span>□ Meditations</span>
                        )}
                      </button>

                      <button
                        onClick={() => handleTypeFilter("relaxation")}
                      >
                        {selectedTypes.includes("relaxation") ? (
                          <span>🗹 Relaxations</span>
                        ) : (
                          <span>□ Relaxations</span>
                        )}
                      </button>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
          )}
        </aside>}
    </div>
  )
}
