import React from "react";
import meImageNoBg from "../assets/me-nobg.png";

const Me = () => {
    return (
<>
        <img src={meImageNoBg} alt="logo" className="mypic"/>
    <h1>Filippo Concato</h1>
    <h3>Web Developer</h3>
</>
)
}

export default Me;