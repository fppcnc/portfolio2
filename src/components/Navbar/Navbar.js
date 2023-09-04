import React, { useState } from "react";
import MenuItems from "./childs/MenuItems";
import Socials from "./childs/Socials";
import Me from "./childs/Me";

const Navbar = (props) => {
    const [isNavbarVisible, setNavbarVisibility] = useState(true);

    const toggleNavbar = () => {
        setNavbarVisibility(!isNavbarVisible);
    };

    return (
        <div>
            <button className="navbar-toggle-button" onClick={toggleNavbar}>
                ☰
            </button>
            <div className={`containerNavbar ${!isNavbarVisible ? 'hidden' : ''}`}>
                <nav className="navbar">
                    <Me />
                    <MenuItems sectionsData={props.sectionsData} singleComponent={{ title: "Welcome", icon: " " }} />
                    <Socials />
                </nav>
            </div>
        </div>
    );
}

export default Navbar;