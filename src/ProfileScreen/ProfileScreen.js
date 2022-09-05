import React from "react";
import CardItem from "./CardItem";
import "./Profile.css";

function ProfileScreen() {
  const card = Array.from({ length: 2 }, () => 0);
  return (
    <>
      <h3 className="text-underline align-center m-top-6 m-bottom-5">
        Profile Screen
      </h3>
      <div className="profile-field b-color-violet position-relative d-flex d-wrap">
        {card.map((item, i) => {
          return (
            <CardItem key={i} />
          );
        })}
      </div>
    </>
  );
}

export default ProfileScreen;
