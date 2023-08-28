import React from "react";

const CardProject = (sectionData) => {


    return (
        <>

        <a href={sectionData.link}>
        <img src={sectionData.img} className="project-img" alt={sectionData.title} loading="lazy"/>
        </a>

    <h3 className="project-title">{sectionData.title}</h3>
    {/*<p className="project-development">{(sectionData.technologies.toString()).replaceAll(",", " | ")}</p>*/}
    {/*<div className="project-buttons">*/}
    {/*    <a href={sectionData.link}>*/}
    {/*        <ion-icon name=""></ion-icon>*/}
    {/*        Go To*/}
    {/*    </a>*/}
    {/*    <a href={sectionData.gitHub}>*/}
    {/*        <ion-icon name="logo-github"></ion-icon>*/}
    {/*        GitHub*/}
    {/*    </a>*/}
    {/*</div>*/}


</>
)
}

export default CardProject