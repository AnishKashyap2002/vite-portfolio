import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="icons">
                <InstagramIcon />
                <TwitterIcon />
                <GitHubIcon />
                <FacebookIcon />
            </div>

            <p style={{ margin: "0px" }}> ©2023 anishkashyap.com</p>
        </div>
    );
};

export default Footer;
