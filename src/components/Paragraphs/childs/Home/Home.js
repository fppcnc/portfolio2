import React from "react";

const Home = () => {
    const getDate = () => {
        let dob = new Date("10/04/1994");
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        return age;
    }
    return (
        <>
            <h1>{getDate()}</h1>
        </>
    )
}

export default Home;