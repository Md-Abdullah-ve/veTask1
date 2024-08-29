import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const theme = useSelector((state) => state.darkTheme.theme);
  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!name) {
      return "Name is required.";
    } else if (!regex.test(name)) {
      return "Name cannot contain numbers or special characters.";
    } else {
      return "";
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return "Email is required.";
    } else if (!regex.test(email)) {
      return "Please enter a valid email address ( must not start with a number ).";
    } else {
      return "";
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "name") {
      setErrors({ ...errors, name: validateName(value) });
    } else if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };
  return (
    <div className="about-form">
      <h5 className={theme ? "dark" : ""}>About</h5>
      <div className={theme ? "dark" : ""}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
         {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className={theme ? "dark" : ""}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className={theme ? "dark" : ""}>
        <input
          type="text"
          name="Description"
          id="Description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default ProfileForm;
