import React from "react";
import './home.css';
const Home = () => {

    const getDate = () => {
        let dob = new Date("10/04/1994");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1969);
        return age;
    }

    const email = 'concatofilippo94@gmail.com';

    const mailTo = () => {
        return <a href={`mailto:${email}`}>{email}</a>;
    };


    const gridContent = [
        {label: 'Age', content: getDate() + ' years old'},
        {label: 'Location', content: 'Berlin, Germany'},
        {label: 'Occupation', content: 'FIAE Student at BBQ Berlin'},
        {label: 'Email', content: mailTo()},
    ];

    return (

        <>
            <div className="grid">
                {gridContent.map((gridElement, index) => (
                    <div key={index}>
                        <div><div>{gridElement.label} : {gridElement.content}</div></div>
                    </div>
                ))}
            </div>
            <div>
                <p>Hello! I'm Filippo, a passionate Web Developer. With a background in culinary arts and a knack for
                    crafting the perfect pizza, I've ventured into the world of web development to create digital
                    experiences that are just as satisfying.</p>
                <p>I bring a unique blend of skills to the table. My journey began in Italy, where I discovered at a
                    young age my love for baking and crafting. From kneading dough in Italy to perfecting the art of
                    pizza-making in the vibrant food scene of Melbourne, Australia, my culinary skills evolved across
                    continents. My quest for excellence led me to Berlin, Germany, where I embarked on a new chapter of
                    growth. I started my Umschulung as FIAE, a transformative journey of transitioning from pizza ovens to
                    coding terminals. As I continue this educational path, my passion for learning remains as fresh as a
                    just-baked pizza.</p>
                <p>In the realm of web development, I thrive on crafting intuitive and user-centric experiences. My
                    skills span from creating responsive layouts to bringing intricate designs to life. With each
                    project, I aim to blend the precision I developed in the course of the years with my coding prowess
                    to serve up digital solutions that leave a lasting taste.</p>
                <p>In my free time, you'll find me immersed in coding challenges, exploring new frameworks, and staying
                    connected with the vibrant developer community. I approach every project with enthusiasm, embracing
                    each challenge as an opportunity to grow and refine my skills.</p>
                <p>Beyond the screen, I find solace in the kitchen, experimenting with flavors, and perfecting my baking
                    recipes—the timeless treasures that inspired my journey. Cooking and baking are my creative outlets
                    and just as I blend diverse ingredients to create unforgettable dishes, I blend my skills to create
                    exceptional digital experiences.</p>
            </div>
        </>
    )
}

export default Home;