import { useEffect, useState } from "react";


export default function FABBtT({ triggerRef }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(!entry.isIntersecting);
    });

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [triggerRef]);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <button className={`FAB-BtT ${isVisible ? "is-visible" : ""}`}
        onClick={handleBackToTop}
        aria-label="Back to Top"
      >
        <span>🔝</span>
      </button>
    </div>
  )
}
