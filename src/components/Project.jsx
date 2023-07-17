import React from "react";
import { Link } from "react-router-dom";

const Project = ({ id, project }) => {
    console.log(id);
    return (
        <>
            <Link to={`/project/${id}`}>
                <div className="project">
                    <img
                        src={project.image}
                        alt="project.name"
                        width={200}
                        height={200}
                    />
                    <p>{project.name}</p>
                </div>
            </Link>
        </>
    );
};

export default Project;
