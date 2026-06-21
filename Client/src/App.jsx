import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/user/HomePage";
import BuilderPage from "./pages/user/BuilderPage";

export default function App() {
  return (
    <div className="app-layout">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder" element={<BuilderPage />} />
        </Routes>
      </main>
    </div>
  );
}
