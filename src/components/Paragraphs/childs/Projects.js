import React from "react";
import CardProject from "./CardProject";
import {projectsData} from "../../../data/projectsData";
const Projects = () => {
    const [expandedProjectIndex, setExpandedProjectIndex] = React.useState(null);

    const handleToggleExpansion = (index) => {
        setExpandedProjectIndex(
            prevIndex => prevIndex === index ? null : index
        );
    };

    const handleBackdropClick = () => {
        setExpandedProjectIndex(null);
    };

    return (
        <>
            {expandedProjectIndex !== null && <div className="project-backdrop" onClick={handleBackdropClick}></div>}


            <div className="projects" data-page="projects">
                <ul className="project-list">
                    {projectsData.map((projectData, index) => (
                        <li className="project-item" style={{ marker: "none"}} key={index}>
                            <CardProject
                                projectData={projectData}
                                isExpanded={expandedProjectIndex === index}
                                onToggleExpansion={() => handleToggleExpansion(index)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Projects;