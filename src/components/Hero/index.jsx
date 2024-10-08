import React from "react";
import Navbar from "../navbar/Navbar";
import "./styles.css";
import HeroImage from "../heroImage";

import { useSelector } from "react-redux";
const Hero = ({children}) => {
  const theme = useSelector((state) => state.darkTheme.theme);

  console.log("theme in redux", theme);
  return (
    <div className={` hero-section  ${theme ? "dark" : ""}`}>
      <Navbar />
      {children}
      <HeroImage />
    </div>
  );
};

export default Hero;
