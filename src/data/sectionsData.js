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
    {id: "home",title: "Home", description: "describes a little bit of me", icon: <HomeImg className = "desktopListImg"/>, content: <Home />},
    {id: "about",title: "About", description: "serves to display which skill I have developed in the course of time",  icon: <AboutImg className = "desktopListImg"/>, content: <About />},
    {id: "projects",title: "Projects", description: "contains link to my projects", icon: <ProjectImg className = "desktopListImg"/>, content: <Projects />},
    {id: "more",title: "More", description: "shows what else I am interested in", icon: <MoreImg className = "desktopListImg"/>, content: <More />},
    {id: "contact",title: "Contact", description: "to get in touch with me", icon: <ContactImg className = "desktopListImg"/>, content: <Contact />},
]
