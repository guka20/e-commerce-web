import React from "react";
import "./MemberCard.css";
export const MemberCard = () => {
  return (
    <div className="card">
      <img src={require("../../../../images/team_01.jpg")} alt="" />
      <span className="member-name">Johnny William</span>
      <span className="member-proffesion">Co-founder</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
        nulla.
      </p>
    </div>
  );
};
