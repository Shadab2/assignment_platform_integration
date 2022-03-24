import React, { useContext, useRef } from "react";
import "./login.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import Logo from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";

function Login() {
  const password = useRef();
  const email = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("/auth/login", data);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (e) {
      dispatch({ type: "LOGIN_FAIL", payload: e.message });
    }
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="form-wrapper">
          <Logo />
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="login-title">Welcome Back</h2>
            <span className="login-info-message">
              Enter Your Credentials to Access Your Account
            </span>
            <div className="input-wrapper">
              <MdEmail color="#0536ff" />
              <input
                type="email"
                required
                className="form-input"
                ref={email}
                placeholder="Email"
              />
            </div>
            <div className="input-wrapper">
              <FaLock color="#0536ff" />
              <input
                type="password"
                required
                className="form-input"
                ref={password}
                placeholder="password"
              />
            </div>
            <button className="submit-button" disabled={isFetching}>
              Sign In
            </button>
          </form>
          <div className="forgot-password">
            <span>forgot password?</span>
            <span className="reset">Reset your password</span>
          </div>
          <Link
            to="/register"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            Don't have an Account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
