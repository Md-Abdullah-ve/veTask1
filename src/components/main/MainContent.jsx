import React, { useState } from "react";
import "./styles.css";
import SVG1 from "../../assets/image1.svg";
import SVG2 from "../../assets/image2.svg";
import SVG3 from "../../assets/image3.svg";
import SVG4 from "../../assets/image4.svg";
import { useSelector } from "react-redux";
import ProfileForm from "../profileForm/ProfileForm";
const MainContent = () => {
  const [activeDesing, setActiveDesign] = useState([0]);
  const theme = useSelector((state) => state.darkTheme.theme);
  const handleDesignClick = (val) => {
    if (activeDesing.includes(val)) {
      const index = activeDesing.indexOf(val);
      setActiveDesign((prev) => {
        const newArray = [...prev];
        newArray.splice(index, 1);
        return newArray;
      });
    } else {
      setActiveDesign((prev) => [...prev, val]);
    }
  };
  return (
    <div className="center-content">
      <h2 className={`${theme ? "dark" : ""}`}>Profile</h2>
      <div className="images">
        <p className={`${theme ? "dark" : ""}`}>images</p>
        <div className="images-container">
          <img src="/img1.png" alt="1" className="img1" />
          <img src="/img2.png" alt="1" className="img2" />
        </div>
      </div>
      <ProfileForm/>
      <div className="designs">
        <h4 className={`${theme ? "dark" : ""}`}>Designs</h4>
        <div className="desing-btns">
          <span
            className={`btn ${
              theme
              ? activeDesing.includes(0)
              ? "active-light"
              : "active-dark"
            : activeDesing.includes(0)
            ? "inactive-light"
            : "inactive-dark"
            }`}
            onClick={() => handleDesignClick(0)}
          >
            Minimal
          </span>
          <span
            className={`btn ${
              theme
                ? activeDesing.includes(1)
                  ? "active-light"
                  : "active-dark"
                : activeDesing.includes(1)
                ? "inactive-light"
                : "inactive-dark"
            }`}
            onClick={() => handleDesignClick(1)}
          >
            Creative
          </span>
          <span
            className={`btn ${
              theme
              ? activeDesing.includes(2)
              ? "active-light"
              : "active-dark"
            : activeDesing.includes(2)
            ? "inactive-light"
            : "inactive-dark"
            }`}
            onClick={() => handleDesignClick(2)}
          >
            Bold
          </span>
        </div>
        <div className="profiles">
          <div className="profile-box ">
            <img src={SVG1} alt="" />
            <div className="profile-content white-text">
              <h6>Name</h6>
              <p>BIO SITE DESCRIPTION</p>
            </div>
          </div>
          <div className="profile-box bg-dark">
            <div className="profile-content small-text">
              <p>BIO SITE DESCRIPTION</p>
              <h6>Name</h6>
            </div>
            <img src={SVG2} alt="" />
          </div>
          <div className="profile-box bg-dark ">
            <div className="profile-content">
              <h6>Name</h6>
            </div>
            <img src={SVG3} alt="" />
            <div className="profile-content">
              <p>BIO SITE DESCRIPTION</p>
            </div>
          </div>
          <div className="profile-box bg-dark">
            <img src={SVG4} alt="" />
            <div className="profile-content">
              <h6>Name</h6>
              <p>BIO SITE DESCRIPTION</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="2"
              viewBox="0 0 86 2"
              fill="none"
            >
              <path d="M0 1.24023H86" stroke="#3F3F3F" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
