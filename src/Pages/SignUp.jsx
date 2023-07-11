import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/reusable/Button";
import Eye from "../assets/icons/Eye";
import Crossedeye from "../assets/icons/Crossedeye";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="login">
      <div className="form">
        <h2>Get Started.</h2>

        <form onSubmit={handleSubmit}>
          <div class="group">
            <input
              type="text"
              required
              name="name"
              value={values.email}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Name</label>
          </div>
          <div class="group">
            <input
              type="text"
              required
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Company Name</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Email</label>
          </div>

          <div class="group">
            <select
              required
              name="question"
              value={values.question}
              onChange={handleChange}
            >
             
              <option value="When is your date od birth?">When is your date od birth?</option>
              <option value="In which city you were born?">In which city you were born?</option>
              <option value="What is your Mothers maiden Name">What is your Mothers maiden Name</option>
              
            </select>
            <span class="bar"></span>
            <label>Choose a Security Question</label>
          </div>
          <div class="group">
            <input
              type="text"
              required
              name="answer"
              value={values.answer}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Security Answer</label>
          </div>
          <div class="group">
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Password</label>
            <i
              className={`password-toggle-icon ${showPassword ? "show" : ""}`}
              onClick={handleTogglePassword}
            >
              {showPassword ? <Eye /> : <Crossedeye />}
            </i>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="signup-link">
          Already have an Account{" "}
          <Link to="/login" className="link">
            Sign In
          </Link>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default SignUp;
