import {Typewriter} from "react-simple-typewriter";
import GraphemeSplitter from "grapheme-splitter";
import "./welcome.css"
import {sectionsData} from "../../../../data/sectionsData";

const Welcome = () => {
    const stringSplitter = (string) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    }
    return (

        <div
            className="welcome"
        >
            {" "}
            <Typewriter
                words={[
                    "I'm Filippo and welcome on my Web-Page",
                    "I'm an enthusiast student and Web content creator",
                    "What you see here has been entirely created by me",
                    "Scroll down and have a look at my portfolio",

                    "Enjoy!",
                    "You can easily reach me via email or via social networks. You will find everything in the Contact Section"]

                }
                typeSpeed={60}
                deleteSpeed={50}
                delay={150}
                pauseFor={1500}
                autoStart={true}
                loop={true}
                stringSplitter={stringSplitter}

                />
        </div>)
}

export default Welcome;