import { useEffect, useState, useRef } from "react";
import { NavLink} from "react-router-dom";

import logo from "../assets/ui/favicon.png";

export default function TopBar({ isHome }) {

    const [isFixed, setIsFixed] = useState(false);
    const [isHiding, setIsHiding] = useState(false);
    const timeoutRef = useRef(null);
    const firstEntryRef = useRef(true);

    useEffect(() => {
        if (!isHome) return;

        const hero = document.querySelector(".home-page-hero");

        if (!hero) return;

        firstEntryRef.current = true;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (firstEntryRef.current) {
                    firstEntryRef.current = false;
                    return;
                }

                clearTimeout(timeoutRef.current);

                if (!entry.isIntersecting) {
                    setIsHiding(false);
                    setIsFixed(true);
                    return;
                }

                setIsHiding(true);

                timeoutRef.current = setTimeout(() => {
                    setIsFixed(false);
                    setIsHiding(false);
                }, 300);
            },
            {
                threshold: 0
            }
        );

        observer.observe(hero);

        return () => {
            observer.disconnect();
            clearTimeout(timeoutRef.current);
            setIsFixed(false);
            setIsHiding(false);
        }
    }, [isHome]);


    const isTopBarFixed = !isHome || isFixed;

    
  return (
    <header className={`top-bar 
        ${isTopBarFixed ? "top-bar__persistent" : ""}
        ${isFixed ? "top-bar__fixed" : ""}
        ${isHiding ? "top-bar__hidding" : ""}
        `}
        style={{
          background: "rgba(150, 111, 60, 0.8)"
        }}
    >
      
      <NavLink to="/" className={`
          top-bar__logo ${isHome ? "top-bar__logo--home" : ""} 
        `}  aria-label="YogaGarden Home">
        <img className={`
          top-bar__logo--img ${isHome ? "top-bar__logo--wid" : ""} 
        `} src={logo} alt="" role="presentation" />

        <span className={`
          top-bar__logo--text ${isHome ? "top-bar__logo--size" : ""}`}>
          YogaGarden</span>
      </NavLink>

      <nav className="main-navigation" aria-label="Main">
        <ul className="main-navigation__nav-list">
          {/*NavLink ya pone active */}
          <li><NavLink to="/courses" className="main-navigation__nav-link">Courses</NavLink></li>
          <li><NavLink to="/library" className="main-navigation__nav-link">Library</NavLink></li>
          <li><NavLink to="/about" className="main-navigation__nav-link">About</NavLink></li>
          <li><NavLink to="/contact" className="main-navigation__nav-link">Contact</NavLink></li>
        </ul>
      </nav>

      <nav className="top-bar__login" aria-label="Account">
        {/*<NavLink to="/login" className="top-bar__login--link">Login</NavLink> */} 
        <NavLink to="/register" className="top-bar__login--link">Register</NavLink>
      </nav>
    </header>
  )
}
