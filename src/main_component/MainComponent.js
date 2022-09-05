import React from "react";
import SignIn from "../Sign-In/SignIn";
import Formview from "../viewcomponent/Formview";
// import "./viewcomponent/Formview.css";
import { Routes, Route } from "react-router-dom";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
function Maincomponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Formview />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
}

export default Maincomponent;
