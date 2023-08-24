import {Typewriter} from "react-simple-typewriter";
import "./welcome.css"
import {sectionsData} from "../../../../data/sectionsData";

const Welcome = () => {


    return (

        <div
            className="welcome"
        >
            {" "}
            <Typewriter
                words={[
                    "Welcome on my Web-Page, I'm Filippo \n I'm an enthusiast student and Web content creator \n What you see here has been entirely created by me\nScroll down and have a look at my portfolio"
                ]}
                typeSpeed={60}
                deleteSpeed={50}
                delay={150}
                pauseFor={1500}
                autoStart={true}
                loop={true}
            />
            <ul>
                {sectionsData.map((sectionData) => (
                    <li><Typewriter
                        words={[sectionData.title, sectionData.content]}
                        typeSpeed={60}
                        deleteSpeed={50}
                        delay={150}
                        pauseFor={1500}
                        autoStart={true}
                        loop={true}
                    />
                    </li>
                )
                )};
            </ul>
            <Typewriter
                words={[
                    "Enjoy!"
                ]}
                typeSpeed={60}
                deleteSpeed={50}
                delay={150}
                pauseFor={1500}
                autoStart={true}
                loop={true}
            />
        </div>)
}

export default Welcome;