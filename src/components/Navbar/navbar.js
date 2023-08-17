import React from "react";
import './navbar.css';
import {Link} from 'react-scroll';
import {ReactComponent as AboutImg } from "./assets/user-regular.svg";
import {ReactComponent as ProjectImg } from "./assets/diagram-project-solid.svg";
import {ReactComponent as MoreImg } from "./assets/icons-solid.svg";
import {ReactComponent as ContactImg } from "./assets/address-book-regular.svg";
import meImageNoBg from "./assets/me-nobg.png"

let menuItems = [
    { text: "About", icon: <AboutImg className="desktopListImg" /> },
    { text: "Projects", icon: <ProjectImg className="desktopListImg" /> },
    { text: "More", icon: <MoreImg className="desktopListImg" /> },
    { text: "Contact", icon: <ContactImg className="desktopListImg" /> },
];

const Navbar = () => {
    return (
        <div className="wrapper">
            <nav className="navbar">
                <img src={meImageNoBg} alt="logo" className="mypic"/>
                <ul className="desktopMenu">
                    {menuItems.map((menuItem, index) =>(
                        <li key={index} className="desktopMenuListItem">
                            <Link>
                                <div className="menuLinkWrapper">
                                    {menuItem.icon}
                                    <span>{menuItem.text}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="social_media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;