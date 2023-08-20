import React from "react";
import { Link } from "react-scroll";
import { socialsData } from "./socialsData";

const Socials = () => {
    return (
        <div className="social_media">
            {socialsData.map((social, index) => (
                <Link>
                    <div key={index}>
                        {social.icon}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Socials