import React, {useState} from "react";
import {sectionsData} from "../../../data/sectionsData";
import {useEffect} from "react";
const MenuItems = () => {

    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const handleItemClick = (index) => {
        setActiveMenuItem(index);
        scrollToSection(index);
    };

    const scrollToSection = (index) => {
        const sectionId = sectionsData[index].title.toLowerCase();
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("data-index");
                    if (sectionId) {
                        setActiveMenuItem(parseInt(sectionId, 10));
                    }
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" }); // Adjust rootMargin as needed

        const paragraphElements = document.querySelectorAll(".paragraph");
        paragraphElements.forEach((element, index) => {
            element.setAttribute("data-index", index);
            observer.observe(element);
        });

        return () => {
            paragraphElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="desktopMenu" >
            {sectionsData.map((sectionData, index) => (
                <div
                    key={index}
                    className={`desktopMenuListItem bordersRules ${activeMenuItem === index ? 'active' : ''}`}
                    onClick={() => {handleItemClick(index);}}
                >
                    <div className="menuLinkWrapper">
                        <span>{sectionData.icon}</span>
                        <span className="desktopMenuListItemText">{sectionData.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default MenuItems;