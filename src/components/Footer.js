import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FaStrava } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link to="https://www.facebook.com/klubelu/?locale=nb_NO" target="_blank">
                    <FacebookIcon />
                </Link>
                <Link to="https://www.instagram.com/nicolai.gangdal/" target="_blank">
                    <InstagramIcon />
                </Link>
                <Link to="https://www.strava.com/athletes/67436206" target="_blank">
                    <FaStrava />
                </Link>
                <Link to="https://twitter.com/nicolaijgangdal" target="_blank">
                    <TwitterIcon />
                </Link>
                <Link to="https://www.linkedin.com/in/nicolai-jensen-gangdal-223651219/?originalSubdomain=no" target="_blank">
                    <LinkedInIcon />
                </Link>
            </div>
            <p> &copy; 2024 Nicolai Jensen Gangdal, Inc.</p>
        </div>
    );
}

export default Footer;