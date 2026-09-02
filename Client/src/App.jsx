import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import HomePage from "./pages/user/HomePage";
import BuilderPage from "./pages/user/BuilderPage";
import LibraryPage from "./pages/user/LibraryPage";
import CoursesPage from "./pages/user/CoursesPage";
import CoursePage from "./pages/user/CoursePage";
import AddToLibraryPage from "./pages/user/AddToLibraryPage";
import AboutPage from "./pages/user/AboutPage";
import ContactPage from "./pages/user/ContactPage";

import RegisterPage from "./pages/login/RegisterPage";

import TopBar from "./generalComponents/TopBar";
import Footer from "./generalComponents/Footer";

import TermsConditions from "./generalComponents/TermsConditions";
import PrivacyPolicy from "./generalComponents/PrivacyPolicy";

import Modals from "./features/sharing/ui/Modals";
import FAB from "./generalComponents/FAB";

import { useBuilder } from "./contexts/useBuilder";
import NotFound from "./generalComponents/NotFound";


export default function App() {
  const location = useLocation();
  const { resetBuilder } = useBuilder();

  const previousPath = useRef(location.pathname); 
  //useRef mejor que useState para que no haya renders adicionales

  useEffect(() => {
    if (previousPath.current === "/builder" && 
    location.pathname !== "/builder") 
      {
        resetBuilder();
      }

    previousPath.current = location.pathname;
  }, [location.pathname, resetBuilder]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [modal, setModal] = useState({
    open: false,
    type: null,
    payload: null,
    confirm: null
  });

  const isHome = location.pathname === "/";
  const isBuilder = location.pathname === "/builder";

  return (
    <div className="app-layout">

      {!isBuilder && <TopBar isHome={isHome} />}

      <main>
        <Modals modal={modal} setModal={setModal} />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/builder" 
            element={<BuilderPage modal={modal} setModal={setModal} />} />

          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CoursePage />} />

          <Route path="/library" element={<LibraryPage modal={modal} setModal={setModal} />} />
          <Route path="/add-to-library" element={<AddToLibraryPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> 

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer isBuilder={isBuilder} />

      {!isBuilder && <FAB key={location.pathname} />}

    </div>
  );
}
