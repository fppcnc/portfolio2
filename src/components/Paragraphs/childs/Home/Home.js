import React from "react";
import './home.css';
import {ReactComponent as OccupationImg} from "../../../../assets/user-tie-solid.svg";
import {ReactComponent as AgeImg} from "../../../../assets/calendar-days-solid.svg";
import {ReactComponent as LocationImg} from "../../../../assets/location-dot-solid.svg";
import {ReactComponent as EmailImg} from "../../../../assets/envelope-solid.svg";

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
        {label: 'Age', content: getDate() + ' years old', img: <AgeImg className="gridImg"/>},
        {label: 'Location', content: 'Berlin, Germany', img: <LocationImg className="gridImg"/>},
        {label: 'Occupation', content: 'FIAE Student at BBQ Berlin', img: <OccupationImg className="gridImg"/>},
        {label: 'Email', content: mailTo(), img: <EmailImg className="gridImg"/>},
    ];

    return (

        <>
            <div className="grid">
                {gridContent.map((gridElement, index) => (
                    <div key={index} className="gridElement">
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
                <p>Hello! I'm Filippo, a passionate Web Developer. With a background in culinary arts and a knack for
                    crafting the perfect pizza, I've ventured into the world of web development to create digital
                    experiences that are just as satisfying.</p>
                <p>My quest for excellence led me to Berlin, Germany, where I embarked on a new chapter of growth. I
                    started my Umschulung as FIAE, a transformative journey of transitioning from pizza ovens to coding
                    terminals. As I continue this educational path, my passion for learning remains as fresh as a
                    just-baked pizza.</p>
                <p>In the realm of web development, I thrive on crafting
                    intuitive and user-centric experiences. My
                    journey began with PHP, where I crafted small logic pieces that laid the foundation for my coding
                    journey. SQL quickly became an important companion as I ventured into backend development. As I
                    expanded my skills, I delved into CSS and HTML, seamlessly combining them with PHP to bring my
                    creations to life. JavaScript was my next logical step, allowing me to add interactivity and dynamic
                    features to my projects. Once I felt confident, I embraced frameworks such as Laravel, Symfony, and
                    React, leveraging their power to create robust and efficient applications.</p>
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