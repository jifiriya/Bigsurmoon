import React, { useState } from "react";
import Button from "../components/common/reusable/Button";
import Eye from "../assets/icons/Eye";
import Crossedeye from "../assets/icons/Crossedeye";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
  };
  return (
    <div className="login">
      <div className="form">
        <h2>
          Visualisation <br />
          Re-imagined
        </h2>

        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Login</Button>
        </form>
        <div className="signup-link">
            Don't have an account yet?   <Link to='/signup' className="link">Sign Up</Link>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default Login;
