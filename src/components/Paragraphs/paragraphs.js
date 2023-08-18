import React, {useState} from "react";
import './paragraphs.css';


const Paragraphs = (props) => {
    const [paragraphs] = useState([
        {title: "About", content: 'About Me'},
        {title: "Projects", content: 'Projects'},
        {title: "More", content: 'More'},
        {title: "Contact", content: 'Contacts'},
    ])


    return (
        <div className="containerParagraphs">
                    <div className="paragraphs">
                        {paragraphs.map((paragraph, index) => (
                            <div key={index} className={`paragraph ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <h2>{paragraph.title}</h2>
                                <p>{paragraph.content}</p>
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default Paragraphs;