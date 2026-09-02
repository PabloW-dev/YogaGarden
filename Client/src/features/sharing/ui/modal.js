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

export function closeModal(setModal, modal = null) {
    modal?.payload?.onClose?.();

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