import React from "react";
import MenuItems from "./childs/MenuItems";
import Socials from "./childs/Socials";
import Me from "./childs/Me";

const Navbar = (props) => {

    return (
        <div className="containerNavbar">
            <nav className="navbar">
                <Me/>
                <MenuItems sectionsData={props.sectionsData} singleComponent={{ title: "Welcome", icon: " " }} />
                <Socials />
            </nav>
        </div>
    )
}

export default Navbar;