import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./Projects";
import { GitHub } from "@material-ui/icons";
import "./ShowProject.css";

const ShowProject = () => {
    const { id } = useParams();
    return (
        <div className="details">
            <img
                src={projectList[id].image}
                alt={projectList[id].name}
            />
            <h3>{projectList[id].name}</h3>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                accusantium adipisci assumenda obcaecati, tempore facilis
                asperiores eligendi? Deserunt asperiores, ad soluta accusamus
                quidem nisi enim nesciunt, corrupti, repudiandae impedit magnam!
            </p>
            <GitHub />
        </div>
    );
};

export default ShowProject;
