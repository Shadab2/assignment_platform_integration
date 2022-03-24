import React, { useContext, useEffect } from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Pages/Profile/Profile";

function App() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(loggedInUser) });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute user={user} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </>
  );
}

export default App;
