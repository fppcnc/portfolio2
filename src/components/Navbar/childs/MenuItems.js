import React, {useState} from "react";
import {sectionsData} from "../../../data/sectionsData";

const MenuItems = () => {

    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const handleItemClick = (index) => {
        setActiveMenuItem(index);
        scrollToSection(index);
    };

    const scrollToSection = (index) => {
        const sectionElement = document.getElementById(
            sectionsData[index].title.toLowerCase()
        );
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="desktopMenu">
            {sectionsData.map((sectionData, index) => (
                <div
                    key={index}
                    className={`desktopMenuListItem bordersRules ${activeMenuItem === index ? 'active' : ''}`}
                    onClick={() => handleItemClick(index)}
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