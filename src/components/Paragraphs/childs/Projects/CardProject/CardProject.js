import React,  { useState } from "react";
import "./cardProject.css";
import {ReactComponent as GitHub} from "../../../../../assets/github.svg";
const CardProject = ({ projectData: { link, img, title, technologies, gitHub, description, tags } }) => {

    const [isExpanded, setIsExpanded] = useState(false);  // State to manage card expansion

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);  // Toggle the expansion state
    }

    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <p className="project-development">{technologies.join(" | ")}</p>

            <button onClick={toggleExpansion} className="expand-button" data-expanded={isExpanded}>
                { /* Arrow direction is handled via CSS using the data-expanded attribute */ }
            </button>

            {isExpanded && (
                <div className="project-content">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-img-container">
                        <img src={img} className="project-img" alt={title} loading="lazy"/>
                    </a>
                    <div className="project-buttons">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            Preview Project
                        </a>
                        <a href={gitHub} target="_blank" rel="noopener noreferrer">
                            <GitHub className="socialImg"/> GitHub
                        </a>
                    </div>
                    <p className="project-description">{description}</p>
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardProject;


