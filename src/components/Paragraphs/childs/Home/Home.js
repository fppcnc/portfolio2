import React, { useEffect, useRef } from "react";
import './home.css';
import { languagesProficiency} from "../../../../data/languagesProficiency";

const Home = () => {

    const barsRef = useRef([]);
    const labelsRef = useRef([]);

    const proficiencyToString = (percentage) => {
        if (percentage >= 0 && percentage <= 25) {
            return "Sufficient";
        } else if (percentage > 25 && percentage <= 50) {
            return "Satisfactory";
        } else if (percentage > 50 && percentage <= 75) {
            return "Good";
        } else if (percentage > 75 && percentage <= 100) {
            return "Very Good";
        }
    };

    const move = (elem, labelElem, proficiency) => {
        let i = 0;
        if (i === 0) {
            i = 1;
            let width = 10;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= proficiency) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    labelElem.innerHTML = proficiencyToString(width);
                }
            }
        }
    };

    useEffect(() => {
        barsRef.current.forEach((bar, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        move(bar, labelsRef.current[index], Object[index].proficiency);
                    }
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.1,
                }
            );

            observer.observe(bar);

            // Cleanup
            return () => {
                observer.unobserve(bar);
            };
        });
    }, []);

    const groupedByCategory = languagesProficiency.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <>
            {Object.keys(groupedByCategory).map(category => (
                <div key={category} className="categorySection">
                    <h3 className="categoryTitle">{category}</h3>
                    {groupedByCategory[category].map((language, index) => (
                        <div key={index} className="progressContainer">
                            <span>{language.lang}</span>
                            <div className="myProgress">
                                <div className="myBar" ref={el => barsRef.current[index] = el}></div>
                            </div>
                            <span className="proficiencyLabel" ref={el => labelsRef.current[index] = el}>Sufficient</span>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Home;