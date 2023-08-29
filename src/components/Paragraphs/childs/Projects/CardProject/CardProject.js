import React,  { useState } from "react";
import "./cardProject.css";
import {ReactComponent as GitHub} from "../../../../../assets/github.svg";
const CardProject = ({ projectData: { link, img, title, technologies, gitHub, description } }) => {

    const [isExpanded, setIsExpanded] = useState(false);  // State to manage card expansion

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);  // Toggle the expansion state
    }

    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-development">{technologies.join(" | ")}</p>

            <button onClick={toggleExpansion} className="expand-button" data-expanded={isExpanded}>
            </button>
            {isExpanded && (
                <>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={img} className="project-img" alt={title} loading="lazy"/>
                    </a>
                    <p className="project-description">{description}</p>
                    <div className="project-buttons">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Preview
                        </a>
                        <a href={gitHub} target="_blank" rel="noopener noreferrer">
                            <GitHub className="socialImg"/> GitHub
                        </a>
                    </div>
                </>
            )}
        </div>
    )
}

export default CardProject;


