import {ReactComponent as AboutImg} from "../assets/user-solid.svg";
import {ReactComponent as ProjectImg} from "../assets/diagram-project-solid.svg";
import {ReactComponent as MoreImg} from "../assets/icons-solid.svg";
import {ReactComponent as ContactImg} from "../assets/address-book-solid.svg";


export const menuItems = [
        {text: "About", icon: <AboutImg className="desktopListImg"/>},
        {text: "Projects", icon: <ProjectImg className="desktopListImg"/>},
        {text: "More", icon: <MoreImg className="desktopListImg"/>},
        {text: "Contact", icon: <ContactImg className="desktopListImg"/>}
    ];

