import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Paragraphs from "./components/Paragraphs/Paragraphs";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { sectionsData } from "./data/sectionsData.js";
import "./app.css";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                <Navbar sectionsData={sectionsData} />
                <Paragraphs sectionsData={sectionsData} />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;