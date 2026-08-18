import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import HomePage from "./pages/user/HomePage";
import BuilderPage from "./pages/user/BuilderPage";
import Modals from "./features/sharing/ui/Modals";
import { useBuilder } from "./contexts/useBuilder";

export default function App() {
  const location = useLocation();
  const { resetBuilder } = useBuilder();

  const previousPath = useRef(location.pathname); //useRef mejor que useState para que no haya renders adicionales

  useEffect(() => {
    if (previousPath.current === "/builder" && location.pathname !== "/builder") {
      resetBuilder();
    }

    previousPath.current = location.pathname;
  }, [location.pathname, resetBuilder]);

  const [modal, setModal] = useState({
    open: false,
    type: null,
    payload: null,
    confirm: null
  });

  return (
    <div className="app-layout">
      <main>
        <Modals modal={modal} setModal={setModal} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<BuilderPage modal={modal} setModal={setModal} />} />
        </Routes>
      </main>
    </div>
  );
}
