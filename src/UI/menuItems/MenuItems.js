import React from "react";
import { Link } from "react-scroll";
import { menuItemsData } from "./menuItemsData";

const MenuItems = () => {
    return (
        <div className="desktopMenu">
            {menuItemsData.map((menuItem, index) => (
                <Link key={index} className="desktopMenuListItem bordersRules">
                    <div className="menuLinkWrapper">
                        <span className="desktopMenuListItemIcon">{menuItem.icon}</span>
                        <span className="desktopMenuListItemText">{menuItem.text}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuItems;