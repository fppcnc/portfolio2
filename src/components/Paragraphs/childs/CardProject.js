import React from "react";
import {ReactComponent as GitHub} from "../../../assets/github.svg";
const CardProject = ({ projectData: { link, img, title, description, tags, technologies, gitHub }, isExpanded, onToggleExpansion }) => {
    const [isImageLoaded, setImageLoaded] = React.useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {isExpanded ? (
                <div className="project-modal">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-development">{technologies.join(" | ")}</p>
                    <div className="project-content">
                        <div className="project-img-wrapper">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-img-container">
                            {!isImageLoaded && <span>Loading...</span>}
                            <img
                                src={img}
                                className="project-img-expanded"
                                alt={title}
                                loading="lazy"
                                onLoad={handleImageLoad}
                                style={{ opacity: isImageLoaded ? 1 : 0 }}
                            />
                        </a>
                        <div className="project-buttons">
                            {link && (
                                <a href={link} target="_blank" rel="noopener noreferrer">Preview Project</a>
                            )}
                            <a href={gitHub} target="_blank" rel="noopener noreferrer">
                                <GitHub className="socialImg"/> GitHub
                            </a>
                        </div>
                    </div>
                        <p className="project-description">{description}</p>
                        <div className="project-tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <button onClick={onToggleExpansion} className="expand-button"></button>
                </div>
            ) : (
                <div className="project-card">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-development">{technologies.join(" | ")}</p>
                    <img
                        src={img}
                        className="project-img"
                        style={{cursor:"pointer"}}
                        alt={title}
                        loading="lazy"
                        onClick={onToggleExpansion}
                    />

                    <div className="project-buttons">

                        <a href={gitHub} target="_blank" rel="noopener noreferrer">
                            <GitHub className="socialImg"/> GitHub
                        </a>
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer">Preview Project</a>
                        )}
                    </div>
                    <button onClick={onToggleExpansion} className="expand-button"></button>
                </div>
            )}
        </>
    );
};

export default CardProject;


