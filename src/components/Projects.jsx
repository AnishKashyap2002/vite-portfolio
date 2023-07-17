import React from "react";
import Project from "./Project";
import stydySite from "../assets/Project images/bcastudysite.png";
import socialMedia from "../assets/Project images/socialmediaapp.jpg";
import statistics from "../assets/Project images/Statistics.jpeg";
import ticTacToe from "../assets/Project images/tic tac toe.jpg";
import toDoList from "../assets/Project images/to do list.png";
import weather from "../assets/Project images/weather.png";
import "./Projects.css";

const projectList = [
    { name: "Social Media Site", image: socialMedia },
    { name: "Bca Study Site", image: stydySite },
    { name: "Tic Tac Toe game", image: ticTacToe },
    { name: "Statistics app", image: statistics },
    { name: "Weather app", image: weather },
    { name: "To do list", image: toDoList },
];

const Projects = () => {
    return (
        <div className="projects">
            <div className="heading">
                <h1>My Projects</h1>
                <hr />
            </div>
            <div className="container">
                {projectList.map((project, i) => {
                    return (
                        <Project
                            key={i}
                            id={i}
                            project={project}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
export { projectList };
