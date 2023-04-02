import React from "react";
import "./BodyLayout.css";
type BodyLayoutProps = {
  children: React.ReactNode;
};
export const BodyLayout = ({ children }: BodyLayoutProps) => {
  return <main className="body-place">{children}</main>;
};
