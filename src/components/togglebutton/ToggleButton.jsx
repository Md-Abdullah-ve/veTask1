import React, { useState } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import "./styles.css";
import { setTheme } from "../../redux/slices/Theme";
import { useDispatch } from "react-redux";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    console.log("changing", darkMode);
    setDarkMode(!darkMode);
    dispatch(setTheme(darkMode))
  };
  return (
    <div className="theme-container">
      <button
        className="btn"
        onClick={toggleTheme}
        type="button "
        title={!darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? (
          <IoSunnySharp className={`icon ${!darkMode ? "dark-mode" : "light-mode"}`}/>
        ) : (
          <FaRegMoon className={`icon ${!darkMode ? "dark-mode" : "light-mode"}`}/>
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
