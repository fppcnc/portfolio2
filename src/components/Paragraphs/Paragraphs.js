import React, {useRef} from "react";
import './paragraphs.css';
import {sectionsData} from "../../data/sectionsData";


const Paragraphs = () => {

    const ref = useRef(null);

    return (
        <div className="containerParagraphs">
            <div className="paragraphs" ref={ref}>
                {sectionsData.map((sectionData, index) => (
                    <div className="containerParagraph">
                    <div
                        key={index}
                        id={'pa' + index}
                        className={`paragraph ${index % 2 === 0 ? 'even' : 'odd'}`}
                    >
                        <h2>{sectionData.title}</h2>
                        <div>{sectionData.content}</div>
                    </div>
        </div>
                ))}
            </div>
        </div>
    )
}

export default Paragraphs;