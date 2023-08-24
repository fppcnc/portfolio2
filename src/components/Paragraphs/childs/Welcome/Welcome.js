import {Typewriter} from "react-simple-typewriter";
import GraphemeSplitter from "grapheme-splitter";
import "./welcome.css"

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
                    "What you see here has been created by me",
                    "Scroll down and have a look at my portfolio",
                    "Enjoy!"]
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