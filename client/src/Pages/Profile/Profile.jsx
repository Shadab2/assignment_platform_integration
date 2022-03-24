import React, { useContext, useRef } from "react";
import TopBar from "../Topbar/TopBar";
import { RiExchangeBoxFill } from "react-icons/ri";
import axios from "axios";
import "./profile.css";
import { AuthContext } from "../../Context/AuthContext";

function Profile() {
  const username = useRef();
  const password = useRef();
  const { user, dispatch } = useContext(AuthContext);
  const changePassword = async () => {
    try {
      await axios.put("/auth/" + user._id, {
        userId: user._id,
        password: password.current.value,
      });
      alert("Succesfully updated");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { ...user, password: password.current.value },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const changeUserName = async () => {
    try {
      await axios.put("/auth/" + user._id, {
        userId: user._id,
        username: username.current.value,
      });
      alert("Succesfully updated");
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { ...user, username: username.current.value },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    localStorage.clear();
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {},
    });
    window.location.reload();
  };
  return (
    <>
      <TopBar />
      <div className="profile-container">
        <div className="change-profile">
          <h2 className="login-title">Update Your credenitals</h2>
          <div className="change-cred">
            <input
              type="text"
              className="form-input"
              placeholder="Update your username"
              ref={username}
            />
            <RiExchangeBoxFill
              size={30}
              color="orange"
              onClick={changeUserName}
            />
          </div>
          <div className="change-cred">
            <input
              type="password"
              className="form-input"
              placeholder="Update password"
              ref={password}
            />
            <RiExchangeBoxFill
              size={30}
              color="orange"
              onClick={changePassword}
            />
          </div>
        </div>
        <button className="submit-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </>
  );
}

export default Profile;
