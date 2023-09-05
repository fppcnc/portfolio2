import React from "react";
import {ReactComponent as OccupationImg} from "../../../assets/user-tie-solid.svg";
import {ReactComponent as AgeImg} from "../../../assets/calendar-days-solid.svg";
import {ReactComponent as LocationImg} from "../../../assets/location-dot-solid.svg";
import {ReactComponent as EmailImg} from "../../../assets/envelope-solid.svg";

const Home = () => {

    const getDate = () => {
        let dob = new Date("10/04/1994");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        return Math.abs(year - 1969);

    }

    const email = 'concatofilippo94@gmail.com';

    const mailTo = () => {
        return <a href={`mailto:${email}`}>{email}</a>;
    };


    const gridContent = [
        {label: 'Location', content: 'Berlin, Germany', img: <LocationImg className="gridHomeImg"/>},
        {label: 'Occupation', content: 'FIAE Student at BBQ Berlin', img: <OccupationImg className="gridHomeImg"/>},
        {label: 'Age', content: getDate() + ' years old', img: <AgeImg className="gridHomeImg"/>},
        {label: 'Email', content: mailTo(), img: <EmailImg className="gridHomeImg"/>},
    ];

    return (

        <>
            <div className="gridHome">
                {gridContent.map((gridElement, index) => (
                    <div key={index} className="gridHomeElement">
                        <div>
                            {gridElement.img}
                            <div>
                                <div>{gridElement.label} : {gridElement.content}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p>Hey There! I'm Filippo, a passionate Web Developer. With a background in culinary arts and a knack for
                    crafting the perfect pizza, I've ventured into the world of web development to create digital
                    experiences that are just as satisfying.</p>
                <p>My quest for excellence led me to Berlin, Germany, where I embarked on a new chapter of growth. From
                    my days as a head chef I began my Umschulung as FIAE. This transformative journey marked a shift
                    from the world of gastronomy to the realm of coding. As I continue this educational path, my passion
                    for learning remains as fresh as the ingredients I decide to use when I cook.</p>
                <p>My expertise in web development is built on a solid foundation. Starting with PHP, I've honed my
                    skills by crafting intricate logic pieces that underpin my coding voyage. The journey continued with
                    a seamless integration of CSS and HTML, working harmoniously with PHP to bring my projects to life.
                    As I delved into backend development, SQL became an indispensable companion, contributing to the
                    robustness of my creations. The natural progression led me to JavaScript, enabling me to infuse
                    interactivity and dynamic elements into my work. This evolution culminated in my adeptness with
                    frameworks like Laravel, Symfony, and React, which I skillfully leverage to craft efficient and
                    impactful applications.</p>
                <p>In my free time, you'll find me immersed in coding challenges, exploring new frameworks, and staying
                    connected with the vibrant developer community. I approach every project with enthusiasm, embracing
                    each challenge as an opportunity to grow and refine my skills.</p>
                <p>Beyond the screen, I find solace in the kitchen, experimenting with flavors, and perfecting my baking
                    recipes—the timeless treasures that inspired my journey. Cooking and baking are my creative outlets,
                    and just as I blend diverse ingredients to create unforgettable dishes, I blend my skills to create
                    exceptional digital experiences.</p>

            </div>
        </>
    )
}

export default Home;