import React from "react";
import {ReactComponent as OccupationImg} from "../../../assets/user-tie-solid.svg";
import {ReactComponent as AgeImg} from "../../../assets/calendar-days-solid.svg";
import {ReactComponent as LocationImg} from "../../../assets/location-dot-solid.svg";
import {ReactComponent as EmailImg} from "../../../assets/envelope-solid.svg";

const Home = () => {
    const dob = new Date("04/10/1994");
    const getAge = (dob) => {
        let today = new Date();
        let birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const email = 'concatofilippo94@gmail.com';

    const mailTo = () => {
        return <a href={`mailto:${email}`}>{email}</a>;
    };


    const gridContent = [
        {label: 'Location', content: 'Berlin, Germany', img: <LocationImg className="gridHomeImg"/>},
        {label: 'Occupation', content: 'Application Developer', img: <OccupationImg className="gridHomeImg"/>},
        {label: 'Age', content: getAge(dob) + ' years old', img: <AgeImg className="gridHomeImg"/>},
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
            <div className="justifiedText">
                <p>Hey There! </p>
                <p>I'm Filippo, a passionate Web Developer. With a background in culinary arts and a knack for
                    crafting the perfect pizza, I've ventured into the world of web development to create digital
                    experiences that are just as satisfying.</p>
                <p>My quest for excellence led me to Berlin, Germany, where I embarked on a new chapter of growth. From
                    my days as a head chef I began my retraining in the world of IT. This transformative journey marked a shift
                    from the world of gastronomy to the realm of coding.</p>
                <p>In my free time, you'll find me immersed in coding challenges, exploring new frameworks, and staying
                    connected with the developer community. I approach every project with enthusiasm, embracing
                    each challenge as an opportunity to grow and refine my skills.</p>
                <p>Beyond the screen, I find solace in the kitchen, experimenting with flavors, and perfecting my baking
                     — the timeless treasures that inspired my journey. Cooking and baking are my creative outlets,
                    and just as I blend diverse ingredients to create unforgettable dishes, I blend my skills to create
                    exceptional digital experiences.</p>
            </div>
        </>
    )
}

export default Home;