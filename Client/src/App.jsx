import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/user/HomePage";
import BuilderPage from "./pages/user/BuilderPage";
import Modals from "./features/sharing/ui/Modals";

export default function App() {
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
          <Route path="/builder" element={<BuilderPage setModal={setModal} />} />
        </Routes>
      </main>
    </div>
  );
}
