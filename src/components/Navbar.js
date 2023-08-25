import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const { i18n, t } = useTranslation();

  //  Checking for language as soon as the component loads
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        
          <Link to="/WebPortfolio"> {t("navbar.home")} </Link>
          <Link to="/projects"> {t("navbar.projects")} </Link>
          <Link to="/Experience"> {t("navbar.experience")} </Link>
        
        <div className="dropdownContainer">
              <select
                className="dropdown"
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="no">Norsk</option>
                <option value="es">Español</option>
              </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;