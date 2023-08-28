import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Paragraphs from "./components/Paragraphs/Paragraphs";
import {createContext, useState} from "react";
import "./app.css"
import {sectionsData} from "./data/sectionsData.js"
import Switch from "react-switch";

export const ThemeContext = createContext(null)
function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));

    };

  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
        <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <Switch checked={theme === "dark"} onChange={toggleTheme}
                handleDiameter={25}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
                className="react-switch"
                id="material-switch"
                size="small"
        />
        </div>
      <Navbar sectionsData={sectionsData}/>
        <Paragraphs sectionsData={sectionsData}/>

    </div>
</ThemeContext.Provider>
  );
}

export default App;
