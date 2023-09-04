import React, {useCallback, useEffect, useRef} from "react";
import {languagesProficiency} from "../../../../data/languagesProficiency";

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
            <p>In the evolving landscape of the <strong>digital age</strong>, creating a meaningful and impactful <strong>online presence</strong> is paramount. I am a seasoned <strong>web developer</strong> and <strong>designer</strong> dedicated to turning your ideas into reality. With extensive experience in leveraging cutting-edge technologies, I specialize in <strong>creating websites</strong> that aren't just functional but are also visually stunning.

                Whether you're a <strong>startup</strong> looking to make a mark in the online world, an <strong>established business</strong> aiming to revamp your online presence, or an entrepreneur venturing into <strong>e-commerce</strong>, I have the expertise to guide you through every step of the journey.

                My proficiency spans across various technologies, ensuring that your website is not only responsive and <strong>user-friendly</strong> but also optimized for <strong>performance</strong>. Every project I undertake is backed by a deep understanding of modern design principles, ensuring that your brand stands out in the crowded digital space.

                If you're searching for a dedicated partner to bring your web visions to life, look no further. Let's collaborate and craft digital experiences that resonate with your audience and drive results.</p>
            <h3 style={{padding: "20px"}}>Language Skills Proficiency</h3>
            <div className="gridHome">
                {Object.keys(groupedByCategory).map(category => (
                    <div key={category} className="categorySection">
                        <h4 className="categoryTitle">{category}</h4>
                        {groupedByCategory[category].map((language, index) => (
                            <div key={index} className="progressContainer">
                                <div className="spanWrapper">
                                    <span>{language.lang}</span> <span ref={el => percentageLabelsRef.current[globalIndex] = el}>0%</span>
                                </div>
                                <div className="myProgress">
                                    <div className="myBar" ref={el => barsRef.current[globalIndex++] = el}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div></>
    );
}

export default About;

