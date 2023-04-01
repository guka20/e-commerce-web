import React, { ReactNode } from "react";
import "./header.css";
import { Navbar } from "../Navbar";
type HeaderProps = {
  children: ReactNode;
};
export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <Navbar />
      {children}
    </header>
  );
};
