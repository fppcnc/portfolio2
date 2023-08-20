import React from "react";
import './navbar.css';
import MenuItems from "../../UI/menuItems/MenuItems";
import Socials from "../../UI/socials/Socials";
import Me from "../../UI/me/Me";

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