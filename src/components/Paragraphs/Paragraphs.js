import React, { useRef } from "react";
import './paragraphs.css';

const Paragraphs = (props) => {
    const ref = useRef(null);

    return (
        <div className="containerParagraphs">
            <div className="paragraphs">
                {props.sectionsData.map((sectionData, index) => (
                    <div className={`containerParagraph`} key={sectionData.id}>
                        <section className={`paragraph${sectionData.id === "welcome" ? 'welcome' : (index % 2 === 0 ? ' odd' : ' even')}`}>
                            <h1 ref={ref} id={sectionData.title.toLowerCase()}>{sectionData.title}</h1>
                            {sectionData.content}
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paragraphs;