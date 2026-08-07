import { useEffect, useRef } from "react";
import { modalData, closeModal, scheduleCloseModal, cancelCloseModal } from "./modal";


export default function Modals({
  modal,
  setModal
}) {

  
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modal.open) return;

    function handlePointerDown(e) {
      if (!modalRef.current?.contains(e.target)) {
        closeModal(setModal);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [modal.open, setModal]);

  if (!modal.open) return null;

  let content;
        
  switch (modal.type) {

    case "confirmResetSection": 
      content = modalData.confirmResetSection(modal.payload);
      break;

    case "item":
      content = modalData.item(modal.payload);
      break;

    default:
      return null; 
  }
    
  return (
    <div
      ref={modalRef} 
      className="modal"
      onMouseEnter={cancelCloseModal}
      onMouseLeave={() => scheduleCloseModal(setModal)}
    >

      <h2>{content.title}</h2> 

      <div className="modal__info">
        <p>{content.text}</p>

        {content.benefits?.length > 0 && (
          <> 
            <h3>Benefits</h3>
            {content.benefits.map(b => (
              <p key={b}>{b}</p>
            ))}
          </> 
        )}

        {content.contraindications?.length > 0 &&(
          <>
            <h3>Contraindications</h3>
            {content.contraindications.map(c => (
              <p key={c}>{c}</p>
            ))}
          </>
        )}

        {!!content.chakra &&(
          <>
            <h3>Primary Chakra</h3>
            <p>{content.chakra}</p>
          </>
        )}
      </div>

      <div className="modal__related">
        {content.related?.length > 0 && (
          <h3>Flows Well Into</h3>
        )}
        {content.related?.map(name => (
          <span key={name}>
            {name}
          </span>
        ))}
      </div>

      {content.buttons?.map(button => (
        <button
          key={button.text}
          onClick={() => {

            if (button.action === "close") {
              closeModal(setModal);
              return;
            }

            if (button.action === "confirm") {
              modal.confirm?.();
              closeModal(setModal);
            }
            
          }}
        >
          {button.text}
        </button>
      ))}    
      
    </div>
  );
}


