import { useState, useRef } from "react";
import { NavLink } from "react-router-dom"
import ToolBar from "../../generalComponents/ToolBar"
import { getSuggestions } from "../../data/dataManager";
import { openModal } from "../../features/sharing/ui/modal";
import FABBtT from "../../generalComponents/FABBtT";


export default function LibraryPage({ modal, setModal }) {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  const isDefault = 
    selectedTypes.length === 0 && 
    searchResults === null;

  const hasSearchResults =
  searchResults &&
  (
    selectedTypes.length === 0
      ? Object.values(searchResults).some(matches => matches.length > 0)
      : selectedTypes.some(type => searchResults[type]?.length > 0)
  );

  const topRef = useRef(null);

  return (
    <div className="library">
      <div ref={topRef}></div>
      <header className="library__header">
        <h2>Library</h2>

        <NavLink 
          to="/add-to-library" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="library__header--link">
          Add to Library
        </NavLink>
      </header>

      <ToolBar 
        component={"library"} 


        onSearch={setSearchResults} 


        selectedTypes={selectedTypes} 
        onSelectedTypes={setSelectedTypes}
      />

      <div className="library__container">

        {searchResults && !hasSearchResults && (
          <div className="library__no-results">
            <span>🍃 No matches were found.</span>
          </div>
        )}






        {isDefault &&
          <div className="library__container--section">
            <h3>Focusings:</h3>
            
            <div>
              {getSuggestions("focusing").map(item => (
                
                <button  key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }

        {(selectedTypes.includes("focusing")) && (searchResults === null || 
          searchResults.focusing.length > 0) && (
            <div className="library__container--section">
              <h3>Focusings:</h3>
              <div>
                {(searchResults === null 
                  ? getSuggestions("focusing")
                  : searchResults.focusing
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
              
            </div>
        )}











        {isDefault &&
          <div className="library__container--section">
            <h3>Pranayamas:</h3>
            <div>
              {getSuggestions("pranayama").map(item => (
                <button key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }

        {(selectedTypes.includes("pranayama")) && (searchResults === null || 
          searchResults.pranayama.length > 0) && (
            <div className="library__container--section">
              <h3>Pranayamas:</h3>
              <div>
                {(searchResults === null 
                  ? getSuggestions("pranayama")
                  : searchResults.pranayama
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
        )}










        {isDefault &&
          <div className="library__container--section">
            <h3>Stretchings:</h3>
            <div>
              {getSuggestions("stretching").map(item => (
                <button key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }


        {(selectedTypes.includes("stretching")) && (searchResults === null || 
          searchResults.stretching.length > 0) && (
            <div className="library__container--section">
              <h3>Stretchings:</h3>
              <div>
                {(searchResults === null 
                  ? getSuggestions("stretching")
                  : searchResults.stretching
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
        )}









        {isDefault &&
          <div className="library__container--section">
            <h3>Heatings:</h3>
            <div>
              {getSuggestions("heating").map(item => (    
                <button key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }

        {(selectedTypes.includes("heating")) && (searchResults === null || 
          searchResults.heating.length > 0) && (
            <div className="library__container--section">
              <h3>Heatings:</h3>
              
              <div>
                {(searchResults === null 
                  ? getSuggestions("heating")
                  : searchResults.heating
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
        )}











        {isDefault &&
          <div className="library__container--section">
            <h3>Asanas:</h3>
            
            <div>
              {getSuggestions("asanas").map(item => (
                <button key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }

        {(selectedTypes.includes("asanas")) && (searchResults === null || 
          searchResults.asanas.length > 0) && (
            <div className="library__container--section">
              <h3>Asanas:</h3>
              
              <div>
                {(searchResults === null 
                  ? getSuggestions("asanas")
                  : searchResults.asanas
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
        )}










        {isDefault &&
          <div className="library__container--section">
            <h3>Meditations:</h3>
            
            <div>
              {getSuggestions("meditation").map(item => (
                <button key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }

        {(selectedTypes.includes("meditation")) && (searchResults === null || 
          searchResults.meditation.length > 0) && (
            <div className="library__container--section">
              <h3>Meditations:</h3>
              
              <div>
                {(searchResults === null 
                  ? getSuggestions("meditation")
                  : searchResults.meditation
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
        )}










        {isDefault &&
          <div className="library__container--section">
            <h3>Relaxations:</h3>
            
            <div>
              {getSuggestions("relaxation").map(item => (
                <button key={item.id} 
                  className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => {
                    openModal(setModal, {
                      open: true,
                      type: "item",
                      payload: item
                    });
                  }}
                >
                  <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        }

        {(selectedTypes.includes("relaxation")) && (searchResults === null || 
          searchResults.relaxation.length > 0) && (
            <div className="library__container--section">
              <h3>Relaxations:</h3>
              
              <div>
                {(searchResults === null 
                  ? getSuggestions("relaxation")
                  : searchResults.relaxation
                ).map(item => (
                  <button key={item.id} 
                    className={
                    modal?.open &&
                    modal.type === "item" &&
                    modal.payload?.id === item.id
                      ? "is-selected"
                      : ""
                  }
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={() => {
                      openModal(setModal, {
                        open: true,
                        type: "item",
                        payload: item
                      });
                    }}
                  >
                    <span className={`technique-icon ${item.img === "ॐ" ? "unicode-icon" : ""}`}>{item.img}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
        )}
      </div>
      
      <FABBtT triggerRef={topRef} />
      
      <div className="library__end"></div>
    </div>
  )
}
