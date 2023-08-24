import React, {useRef} from "react";
import './paragraphs.css';
import {sectionsData} from "../../data/sectionsData";


const Paragraphs = () => {

    const ref = useRef(null);

    return (
        <div className="containerParagraphs">
            <div className="paragraphs" >
                {sectionsData.map((sectionData, index) => (
                    <div
                        key={index}
                        className={`paragraph ${index % 2 === 0 ? 'even' : 'odd'}`}
                    >
                        <h1 ref={ref} id={sectionData.title.toLowerCase()}>{sectionData.title} </h1>
                        {sectionData.content}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Paragraphs;