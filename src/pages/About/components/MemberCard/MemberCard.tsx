import React from "react";
import "./MemberCard.css";

type MemberInfoProps = {
  image: string;
  name: string;
  proffesion: string;
  description: string;
};
export const MemberCard = ({
  image,
  name,
  proffesion,
  description,
}: MemberInfoProps) => {
  return (
    <div className="card">
      <img src={require(`../../../../images/${image}`)} alt="user-img" />
      <span className="member-name">{name}</span>
      <span className="member-proffesion">{proffesion}</span>
      <p>{description}</p>
    </div>
  );
};
