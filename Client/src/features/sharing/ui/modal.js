import { getSuggestions } from "../../../data/dataManager";

export const modalData = {
    confirmResetSection: (payload) => ({
        title: "Erase Section?",
        text: `The ${payload.type} section will be reset.`,
        buttons: [
            {
                text: "Yes",
                action: "confirm"
            },
            {
                text: "No",
                action: "close"
            }
        ]
    }),

    item: (item) => ({
        title: item.name,
        text: item.summary ?? "",
        benefits: item.benefits ?? [],
        contraindications: item.contraindications ?? [],
        chakra: item.primaryChakra ?? "",
        related: (item.transitions ?? []).map(number => 
            getSuggestions(item.type).find(i => i.number === number)?.name
        )
    })
}

let closeTimeout = null;

export function scheduleCloseModal(setModal,delay = 1000) {
    clearTimeout(closeTimeout);

    closeTimeout = setTimeout(() => {
        closeModal(setModal);
    }, delay);
}

export function cancelCloseModal({ modal, item } = {}) {
    
    //case 1 -> entrando al modal
    if(!item) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
        return;
    }
    
    //case 2 -> hay un modal de otro botton abierto
    if (modal?.open) {

        if (
            modal.type === "item" &&
            modal.payload?.number === item.number
        ) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
        }

        return;
    }

    //case 3 -> no hay modal abierto
    clearTimeout(closeTimeout);
    closeTimeout = null;
}

export function closeModal(setModal) {
    cancelCloseModal();

    setModal({
        open: false,
        type: null,
        payload: null,
        confirm: null
    });
}  


export function openModal(setModal, modal) {

  setModal({
    confirm: null,
    payload: null,
    ...modal
  });
}