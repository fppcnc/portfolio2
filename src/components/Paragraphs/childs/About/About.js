import React from "react";
import "./about.css";

const About = () => {

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
        {label: 'Email', content: + mailTo()},
    ];

    return (

        <>

            <div>
                <p></p>
            </div>
        </>
    )
}

export default About;