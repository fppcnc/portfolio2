import React, {useState} from "react";
import './test.css';
import {Link} from 'react-scroll';
import {ReactComponent as AboutImg } from "./assets/user-solid.svg";
import {ReactComponent as ProjectImg } from "./assets/diagram-project-solid.svg";
import {ReactComponent as MoreImg } from "./assets/icons-solid.svg";
import {ReactComponent as ContactImg } from "./assets/address-book-solid.svg";
import meImageNoBg from "./assets/me-nobg.png"



const Navbar = () => {
    const[menuItems] = useState([
        { text: "About", icon: <AboutImg className="desktopListImg" /> },
        { text: "Projects", icon: <ProjectImg className="desktopListImg" /> },
        { text: "More", icon: <MoreImg className="desktopListImg" /> },
        { text: "Contact", icon: <ContactImg className="desktopListImg" /> },
    ]);

    return (
        <div className="containerNavbar">
            <nav className="navbar">
                <img src={meImageNoBg} alt="logo" className="mypic"/>
                <h1>Filippo Concato</h1>
                <h3>Lorem Ipsum</h3>
                <div className="desktopMenu">
                    {menuItems.map((menuItem, index) =>(
                        <div key={index} className="desktopMenuListItem bordersRules">
                            <Link>
                                <div className="menuLinkWrapper">
                                    <span className="desktopMenuenuListItemIcon">{menuItem.icon}</span>
                                    <span className="desktopMenuenuListItemText">{menuItem.text}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;