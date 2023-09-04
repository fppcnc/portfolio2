import React from "react";
import CardProject from "./CardProject/CardProject";
import {projectsData} from "../../../../data/projectsData";
const Projects = () => {
    return (
        <>
            <div className="projects" data-page="projects">
                <ul className="project-list">
                {projectsData.map((projectData, index) => (
                    <li className="project-item" style={{ marker: "none"}} key={index}>
                        <CardProject projectData={projectData}/>
                    </li>
                ))}

                </ul>
            </div>
        </>
    )
}

export default Projects;