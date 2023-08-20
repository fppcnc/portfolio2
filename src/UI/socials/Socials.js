import React from "react";
import {ExternalLink} from "react-external-link";
import { socialsData } from "./socialsData";

const Socials = () => {
    return (
        <div className="social_media">
            {socialsData.map((social, index) => (

                    <div key={index}>
                        {social.icon}
                    </div>

            ))}
        </div>
    )
}

export default Socials