import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  //  Defining translation variables
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
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
        <div className="navPadding">
          <Link to="/WebPortfolio"> Home </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/Experience"> Experience </Link>
        </div>
        <div className="language">
          <ul>
            <li>
              <button onClick={() => changeLanguage("en")}>
                {t("navbar.english")}
              </button>
            </li>
            <li>
              <button onClick={() => changeLanguage("no")}>
                {t("navbar.norwegian")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
