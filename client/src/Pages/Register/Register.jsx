import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io";
import axios from "axios";

function Register() {
  const password = useRef();
  const email = useRef();
  const confirmpassword = useRef();
  const username = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmpassword.current.value) {
      confirmpassword.setCustomValidity("Password don't match");
      return;
    }
    const data = {
      email: email.current.value,
      password: password.current.value,
      username: username.current.value,
    };
    try {
      await axios.post("/auth/register", data);
      alert("Account created successully");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="form-wrapper">
          <div className="logo">
            <IoLogoXing color="0536ff" size={20} />
            <span className="logo-text">ToDo's</span>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">Welcome to ToDo's</h2>
            <span className="login-info-message">
              Enter Your Credentials to Create Your Account
            </span>
            <div className="input-wrapper">
              <MdEmail color="#0536ff" />
              <input
                type="email"
                className="form-input"
                ref={email}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-wrapper">
              <MdEmail color="#0536ff" />
              <input
                type="text"
                className="form-input"
                ref={username}
                placeholder="User Name"
                required
              />
            </div>
            <div className="input-wrapper">
              <FaLock color="#0536ff" />
              <input
                type="password"
                className="form-input"
                ref={password}
                placeholder="password"
                required
                min={6}
              />
            </div>
            <div className="input-wrapper">
              <FaLock color="#0536ff" />
              <input
                type="password"
                className="form-input"
                ref={confirmpassword}
                placeholder="confirm password"
                required
              />
            </div>
            <button className="submit-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
