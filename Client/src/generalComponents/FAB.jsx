import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import icon from "../assets/ui/FAB.png";
import iconHover from "../assets/ui/FABhover.png";

export default function FAB() {
    const [isOpen, setIsOpen] = useState(false);
    const ctaRef = useRef(null);

    const [isClosing, setIsClosing] = useState(false);
    const timeoutRef = useRef(null);

    const fabRef = useRef(null);

    
    useEffect(() => {
        if (isOpen) {
            ctaRef.current?.focus();
        }

        if (!isOpen) return;
    
        function handlePointerDown(e) {
            if (!fabRef.current?.contains(e.target)) {
                setIsOpen(false);
                setIsClosing(true);
            }
        }
    
        document.addEventListener("pointerdown", handlePointerDown);
    
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [isOpen]);

    

    function toggleFAB() {
        clearTimeout(timeoutRef.current);

        if (!isOpen) {
            setIsOpen(true);
            setIsClosing(false);
            return;
        }

        setIsClosing(true);

        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 500);
    }

  return (
    <div ref={fabRef}>
      <button className={`FAB ${isOpen ? "is-open" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="builder-cta"
        aria-label="Open/Close builder-CTA"
        onClick={toggleFAB}
      >
        <img className="FAB__close" src={icon} alt="" />
        <img className="FAB__open" src={iconHover} alt="" />
      </button>

      {(isOpen || isClosing) && 
        <NavLink
            ref={ctaRef}
            id="builder-cta"
            to="/builder"
            className={`FAB__Nav ${isClosing ? "is-closing" : "is-opening"}`} 
        >
            Create your class
        </NavLink>}
    </div>
  )
}
