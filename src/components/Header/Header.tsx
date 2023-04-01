import React, { ReactNode } from "react";
import "./header.css";
type HeaderProps = {
  children: ReactNode;
};
export const HeaderOne = ({ children }: HeaderProps) => {
  return <header className="header one">{children}</header>;
};
export const HeaderTwo = ({ children }: HeaderProps) => {
  return <header className="header two">{children}</header>;
};
export const HeaderThree = ({ children }: HeaderProps) => {
  return <header className="header three">{children}</header>;
};
