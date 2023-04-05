import React from "react";
import "./MemberCard.css";
export const MemberCard = () => {
  return (
    <div className="card">
      <img src={require("../../../../images/team_01.jpg")} alt="" />
      <h4>Johnny William</h4>
      <h5>Co-founder</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis
        nulla.
      </p>
    </div>
  );
};
