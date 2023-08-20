import React, {useState} from "react";
import './cards.css';

const Cards = (props) => {
    const [cards] = useState([
        {title: "About", content: 'About Me'},
        {title: "Projects", content: 'Projects'},
        {title: "More", content: 'More'},
        {title: "Contact", content: 'Contacts'},
    ])


    return (
        <div className="containerCards">

                    <div className="cards">
                        {cards.map((card, index) => (
                            <div key={index} className={`card ${index % 2 === 0 ? 'even' : 'odd'}`}>
                                <h2>{card.title}</h2>
                                <p>{card.content}</p>
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default Cards;