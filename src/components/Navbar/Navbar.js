import React from "react";
import './navbar.css';
import MenuItems from "./childs/MenuItems";
import Socials from "./childs/Socials";
import Me from "./childs/Me";

const Navbar = () => {

    return (
        <div className="containerNavbar">
            <nav className="navbar">
                <Me/>
                <MenuItems/>
                <Socials/>
            </nav>
        </div>
    )
}

export default Navbar;