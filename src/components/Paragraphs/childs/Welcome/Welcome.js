import "./welcome.css"
import {TechLogos} from "../../../../data/technologyLogosData";

const Welcome = () => {

    return (

            <div className="slider">
                <div className="slideTrack">
                    {TechLogos.map((TechLogo) => (
                        <div className="slide">
                            {TechLogo}
                        </div>
                    ))}


                </div>
            </div>

    )
}

export default Welcome;