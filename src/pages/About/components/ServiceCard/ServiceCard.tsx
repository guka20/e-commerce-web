import React from "react";
import "./ServiceCard.css";
import { IoMdSettings } from "react-icons/io";
import { PrimaryButton } from "../../../../components";
type ServiceCardProp = {
  title: string;
  description: string;
  buttonText: string;
};
export const ServiceCard = ({
  title,
  description,
  buttonText,
}: ServiceCardProp) => {
  return (
    <div className="service-card">
      <div className="small-container">
        <div className="icon">
          <IoMdSettings />
        </div>
      </div>

      <h4>{title}</h4>
      <p>{description}</p>
      <PrimaryButton>{buttonText}</PrimaryButton>
    </div>
  );
};
