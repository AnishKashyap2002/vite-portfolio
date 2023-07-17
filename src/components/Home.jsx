import React from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";
import { GitHub } from "@material-ui/icons";

const Home = () => {
    return (
        <div className="home">
            <div className="prompt">
                <h1>Hey, I am Anish Kashyap</h1>
                <p>
                    I am a software developer who want to learn new and cool
                    things :)
                </p>
                <p
                    className="icons"
                    style={{ margin: "15px" }}
                >
                    <LinkedInIcon />
                    <Email />
                    <GitHub />
                </p>
            </div>
            <div className="skills">
                <ol>
                    <h1 className="head">Skills</h1>
                    <li className="item">
                        <h1>Front - end</h1>
                        <span>
                            HTML, Css, Javscript, Rect.js, Vite, Bootstrap,
                            Tailwind{" "}
                        </span>
                    </li>
                    <li className="item">
                        <h1>Back-end</h1>
                        <span>Django, ASP.net, ASP, Mysql</span>
                    </li>
                    <li className="item">
                        <h1>Languages</h1>
                        <span>Python, C++, C, Javascript</span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;
