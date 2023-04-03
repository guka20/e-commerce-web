import React from "react";
import "./PrimaryButton.css";
type PrimaryButtonProps = {
  children: React.ReactNode;
};
export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <button className="primary-button">{children}</button>;
};
