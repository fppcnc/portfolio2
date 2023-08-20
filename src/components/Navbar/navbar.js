import React from "react";
import './navbar.css';
import {Link} from 'react-scroll';
import { menuItems } from "./data/menuItems";
import { socials } from "./data/socials";
import meImageNoBg from "./assets/me-nobg.png";

const Navbar = () => {

    return (
        <div className="containerNavbar">
            <nav className="navbar">
                <img src={meImageNoBg} alt="logo" className="mypic"/>
                <h1>Filippo Concato</h1>
                <h3>Lorem Ipsum</h3>
                <div className="desktopMenu">
                    {menuItems.map((menuItem, index) =>(
                            <Link key={index} className="desktopMenuListItem bordersRules">
                                <div className="menuLinkWrapper">
                                    <span className="desktopMenuListItemIcon">{menuItem.icon}</span>
                                    <span className="desktopMenuListItemText">{menuItem.text}</span>
                                </div>
                            </Link>
                    ))}
                </div>
                <div className="social_media">
                        {socials.map((social, index) =>(
                            <Link>
                                <div key={index}>
                                    {social.icon}
                                </div>
                    </Link>
                        ))}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;