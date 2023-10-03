import React, {useContext} from "react";
import {ThemeContext} from "../App";

function Footer() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`foot ${theme}`}>
            <p>Filippo Concato&copy; {new Date().getFullYear()}</p>
            <p>Developed using React & PhpStorm</p>
            <p>Hand-coded with love ❤️</p>
        </div>
    );

}

export default Footer;