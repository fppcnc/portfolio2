import "./welcome.css"
import {TechLogos} from "../../../../data/technologyLogosData";

const Welcome = () => {

    return (
        <>
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            <div className="slider">
                <div className="slideTrack">
                    {TechLogos.map((TechLogo, index) => (
                        <div className="slide" key={index}>
                            {TechLogo}

                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default Welcome;