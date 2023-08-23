import {ReactComponent as HomeImg} from "../assets/house-solid.svg";
import {ReactComponent as AboutImg} from "../assets/user-solid.svg";
import {ReactComponent as ProjectImg} from "../assets/diagram-project-solid.svg";
import {ReactComponent as MoreImg} from "../assets/icons-solid.svg";
import {ReactComponent as ContactImg} from "../assets/address-book-solid.svg";
import Home from "../components/Paragraphs/childs/Home/Home.js";
import About from "../components/Paragraphs/childs/About/About";
import Contact from "../components/Paragraphs/childs/Contact/Contact";
import More from "../components/Paragraphs/childs/More/More";
import Projects from "../components/Paragraphs/childs/Projects/Projects";

export const sectionsData = [
    {title: "Home", icon: <HomeImg className = "desktopListImg"/>, content: <Home />},
    {title: "About", icon: <AboutImg className = "desktopListImg"/>, content: <About />},
    {title: "Projects", icon: <ProjectImg className = "desktopListImg"/>, content: <Projects />},
    {title: "More", icon: <MoreImg className = "desktopListImg"/>, content: <More />},
    {title: "Contact", icon: <ContactImg className = "desktopListImg"/>, content: <Contact />},
]
