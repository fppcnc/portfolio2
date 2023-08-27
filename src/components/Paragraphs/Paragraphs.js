import React, {useRef} from "react";
import './paragraphs.css';
import Welcome from "./childs/Welcome/Welcome";


const Paragraphs = (props) => {

    const ref = useRef(null);

    return (
        <div className="containerParagraphs">
            <div className="paragraphs">
                <div className="containerParagraph" key="welcome">
                <Welcome />
            </div>
                {props.sectionsData.map((sectionData, index) => (
                    <div className="containerParagraph" key={sectionData.id}>
                        <div className={`paragraph ${index % 2 === 0 ? 'even' : 'odd'}`}>
                            <h1 ref={ref} id={sectionData.title.toLowerCase()}>{sectionData.title} </h1>
                            {sectionData.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Paragraphs;