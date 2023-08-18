import React, {useState} from "react";
import './test.css';
import {Link} from 'react-scroll';
import {ReactComponent as AboutImg } from "./assets/user-solid.svg";
import {ReactComponent as ProjectImg } from "./assets/diagram-project-solid.svg";
import {ReactComponent as MoreImg } from "./assets/icons-solid.svg";
import {ReactComponent as ContactImg } from "./assets/address-book-solid.svg";
import meImageNoBg from "./assets/me-nobg.png"
import {ReactComponent as GitHub} from "./assets/github.svg";
import {ReactComponent as Instagram} from "./assets/instagram.svg";
import {ReactComponent as Linkedin} from "./assets/linkedin.svg";


const Navbar = () => {
    const[menuItems] = useState([
        { text: "About", icon: <AboutImg className="desktopListImg" /> },
        { text: "Projects", icon: <ProjectImg className="desktopListImg" /> },
        { text: "More", icon: <MoreImg className="desktopListImg" /> },
        { text: "Contact", icon: <ContactImg className="desktopListImg" /> },
    ]);

    const[socials] = useState([
        {text: "GitHub", icon: <GitHub className="socialImg" /> },
        {text: "Instagram", icon: <Instagram className="socialImg" /> },
        {text: "Linkedin", icon: <Linkedin className="socialImg" /> },
    ])

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
                                    <span className="desktopMenuListItemIcon">{menuItem.icon}</span>
                                    <span className="desktopMenuListItemText">{menuItem.text}</span>
                                </div>
                            </Link>
                        </div>

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