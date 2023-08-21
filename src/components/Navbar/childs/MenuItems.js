import React, {useState} from "react";
import { Link } from "react-scroll";
import {sectionsData} from "../../../data/sectionsData";

const MenuItems = () => {

    const [activeMenuItem, setActiveMenuItem] = useState(0);
    const handleItemClick = (index) => {
        setActiveMenuItem(index);
    };
    return (
        <div className="desktopMenu">
            {sectionsData.map((sectionData, index) => (
                <Link
                    key={index}
                    to={sectionData.title.toLowerCase()}
                    className={`desktopMenuListItem bordersRules ${activeMenuItem === index ? 'active' : ''}`}
                    onClick={() => handleItemClick(index)}
                >
                    <div className="menuLinkWrapper">
                        <span>{sectionData.icon}</span>
                        <span className="desktopMenuListItemText">{sectionData.title}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuItems;