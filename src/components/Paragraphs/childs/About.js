import React, {useCallback, useEffect, useRef} from "react";
import {languagesProficiency} from "../../../data/languagesProficiency";

const About = () => {

    const barsRef = useRef([]);
    const percentageLabelsRef = useRef([]);
    let globalIndex = 0;
    const animatedBars = useRef(new Set());


    const move = useCallback((elem, labelElem, proficiency) => {
        let i = 0;
        if (i === 0) {
            i = 1;
            let width = 0;
            let id = setInterval(frame, 10);

            function frame() {
                if (width >= proficiency) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    labelElem.innerText = width + "%";
                }
            }
        }
    }, []);

    useEffect(() => {
        barsRef.current.forEach((bar, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && !animatedBars.current.has(bar)) {
                        move(bar, percentageLabelsRef.current[index], languagesProficiency[index].proficiency);
                        animatedBars.current.add(bar);
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
    }, [move]);

    const groupedByCategory = languagesProficiency.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <>
            <p>As a seasoned <strong>web developer</strong> in the digital age, I prioritize creating impactful <strong>online
                presences</strong>. My expertise ranges from crafting visually stunning <strong>websites</strong> for <strong>startups</strong> to assisting <strong>established businesses</strong> in the digital realm. With a focus on <strong>responsiveness</strong>, <strong>user experience</strong> and <strong>performance</strong>, I ensure your brand shines online. Let's collaborate
                and create memorable <strong>digital experiences</strong>.</p>
            <h3 style={{padding: "20px"}}>Language Skills Proficiency</h3>
            <div className="gridAbout">
                {Object.keys(groupedByCategory).map(category => (
                    <div key={category} className="categorySection">
                        <h4 className="categoryTitle">{category}</h4>
                        {groupedByCategory[category].map((language, index) => (
                            <div key={index} className="progressContainer">
                                <div className="spanWrapper">
                                    <span>{language.lang}</span> <span
                                    ref={el => percentageLabelsRef.current[globalIndex] = el}>0%</span>
                                </div>
                                <div className="myProgress">
                                    <div className="myBar" ref={el => barsRef.current[globalIndex++] = el}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default About;

