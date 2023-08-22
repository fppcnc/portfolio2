import React, {useRef} from "react";
import {sectionsData} from "../../data/sectionsData";


const Test = () => {

    const ref = useRef(null);

    return (
        <>
            {sectionsData.map((sectionData, index) => (
            <div style ={{backgroundColor: 'black'}}>{sectionData.title}</div>
            ))}

        </>
    )
}
export default Test;