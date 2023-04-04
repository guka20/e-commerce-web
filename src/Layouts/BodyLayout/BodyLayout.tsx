import React from "react";
import { ComponentProps } from "../../props/props";
import "./BodyLayout.css";
export const BodyLayout = ({ children }: ComponentProps) => {
  return <main className="body-place">{children}</main>;
};
