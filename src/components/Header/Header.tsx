import React, { ReactNode } from "react";
import "./header.css";
type SliderHeaderProps = {
  children: ReactNode;
};
type HeaderProps = {
  children: ReactNode;
  imageUrl: String;
};
export const Header = ({ children, imageUrl }: HeaderProps) => {
  return (
    <header
      className="page-header"
      style={{
        backgroundImage: `url(${require(`../../images/${imageUrl}`)})`,
        height: "460px",
      }}
    >
      {children}
    </header>
  );
};
export const HeaderOne = ({ children }: SliderHeaderProps) => {
  return <header className="page-header one">{children}</header>;
};
export const HeaderTwo = ({ children }: SliderHeaderProps) => {
  return <header className="page-header two">{children}</header>;
};
export const HeaderThree = ({ children }: SliderHeaderProps) => {
  return <header className="page-header three">{children}</header>;
};
