import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Home } from "@material-ui/icons";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setToggle(false);
    }, [location]);
    return (
        <div
            className="outside"
            style={{ position: "relative" }}
        >
            <div className="navbar">
                <Link to="/">
                    <h3 className="logo">My Portfolio</h3>
                </Link>

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects"> Projects</Link>
                    <Link to="/experience"> Experience</Link>
                </div>

                <button
                    className="toggleButton"
                    onClick={() => {
                        setToggle(!toggle);
                    }}
                >
                    <Home />
                </button>
            </div>
            <div className={toggle ? "show-menu" : "hide-menu"}>
                <div className="showLinks">
                    <Link
                        to="/"
                        className="nav-item"
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        className="nav-item"
                    >
                        {" "}
                        Projects
                    </Link>
                    <Link
                        to="/experience"
                        className="nav-item"
                    >
                        {" "}
                        Experience
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
