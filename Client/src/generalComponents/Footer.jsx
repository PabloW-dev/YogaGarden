import { NavLink } from "react-router-dom";
import { useBuilder } from "../contexts/useBuilder";

import logo from "../assets/ui/favicon.png";


export default function Footer({ isBuilder }) {
  const { step } = useBuilder();

  return (
    <footer className={`
        footer 
        ${isBuilder ? "footer__builder" : ""}
      `}
    >
      <div className="footer-container">
        <div className="footer-container__logo">
          <NavLink to="/" className="footer-container__logo--link" aria-label="YogaGarden Home">
            <img src={logo} alt="" role="presentation"
              style={{
                filter: step !== 3 
                  ? "brightness(0) saturate(100%)" + 
                    "invert(91%) sepia(12%)" + 
                    "saturate(300%) hue-rotate(350deg)" +
                    "brightness(96%) contrast(90%)"
                  : ""
              }}
            />
            <span
              style={{
                color: step === 3 
                  ? "#332D26"
                  : ""
              }}
            >YogaGarden</span>
          </NavLink>

          <p
            style={{
              color: step === 3 
                ? "#332D26"
                : ""
            }}
          >Create · Practice · Grow</p>
        </div>

        <div className="footer-container__navigation">
          <nav className="footer-container__navigation--explore" aria-label="Explore">

            <p
              style={{
                color: step === 3 
                  ? "#332D26"
                  : ""
              }}
            >EXPLORE:</p>

            <ul className="footer-container__navigation--explore-UL">
              <li><NavLink 
                to="/courses" 
                className="footer-container__navigation--explore-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}  
              >Courses</NavLink></li>
              <li><NavLink 
                to="/library" 
                className="footer-container__navigation--explore-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}  
              >Library</NavLink></li>
            </ul>
          </nav>

          <nav className="footer-container__navigation--account" aria-label="Account">

            <p
              style={{
                color: step === 3 
                  ? "#332D26"
                  : ""
              }}
            >ACCOUNT:</p>
            
            <ul className="footer-container__navigation--account-UL">
              {/*<NavLink to="/login" className="">Login</NavLink> */} 
              <NavLink 
                to="/register" 
                className="footer-container__navigation--account-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}
              >Register</NavLink>
            </ul>
          </nav>

          <nav className="footer-container__navigation--information" aria-label="Information">

            <p
              style={{
                color: step === 3 
                  ? "#332D26"
                  : ""
              }}
            >INFORMATION:</p>
            
            <ul className="footer-container__navigation--information-UL">
              <li><NavLink 
                to="/about" 
                className="footer-container__navigation--information-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}  
              >About</NavLink></li>
              <li><NavLink 
                to="/terms-conditions" 
                className="footer-container__navigation--information-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}  
              >Terms & Conditions</NavLink></li>
              <li><NavLink 
                to="/contact" 
                className="footer-container__navigation--information-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}
              >Contact</NavLink></li>
              <li><NavLink 
                to="/privacy-policy" 
                className="footer-container__navigation--information-LI"
                style={{
                  color: step === 3 
                    ? "#332D26"
                    : ""
                }}  
              >Privacy Policy</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-copy">
        <p
          style={{
            color: step === 3 
              ? "#332D26"
              : ""
          }}
        >© 2026 YogaGarden</p>
      </div>
      
    </footer>
  )
}
