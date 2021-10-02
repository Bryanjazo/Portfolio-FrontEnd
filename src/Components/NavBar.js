import React from "react";
import BryansPic from "../img/BryansPic.jpg";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="profile">
        <img src={BryansPic} alt="" />
      </div>
    </div>
  );
}
