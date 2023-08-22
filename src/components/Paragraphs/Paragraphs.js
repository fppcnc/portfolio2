import React, {useRef} from "react";
import './paragraphs.css';
import {sectionsData} from "../../data/sectionsData";


const Paragraphs = () => {

    const ref = useRef(null);

    return (
        <div className="containerParagraphs">
            <div className="paragraphs" ref={ref}>
                {sectionsData.map((sectionData, index) => (
                    <div
                        key={index}
                        id={sectionData.title.toLowerCase()}
                        className={`paragraph ${index % 2 === 0 ? 'even' : 'odd'}`}
                    >
                        <h2>{sectionData.title}</h2>
                        <p>{sectionData.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Paragraphs;