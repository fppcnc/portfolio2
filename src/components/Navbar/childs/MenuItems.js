import React from "react";
import { Link } from "react-scroll";
import {sectionsData} from "../../../data/sectionsData";

const MenuItems = () => {
    return (
        <div className="desktopMenu">
            {sectionsData.map((sectionData, index) => (
                <Link key={index} to={sectionData.title.toLowerCase()} className="desktopMenuListItem bordersRules">
                    <div className="menuLinkWrapper">
                        <span className="desktopListImg">{sectionData.icon}</span>
                        <span className="desktopMenuListItemText">{sectionData.title}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuItems;