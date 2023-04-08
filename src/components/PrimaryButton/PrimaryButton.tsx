import React from "react";
import "./PrimaryButton.css";
type PrimaryButtonProps = {
  children: React.ReactNode;
  type?: string;
};
export const PrimaryButton = ({
  children,
  type = "button" as string,
}: PrimaryButtonProps) => {
  return (
    <button
      className="primary-button"
      type={type as "button" | "submit" | "reset" | undefined}
    >
      {children}
    </button>
  );
};
