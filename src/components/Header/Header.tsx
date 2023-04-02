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
      className="header"
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
  return <header className="header one">{children}</header>;
};
export const HeaderTwo = ({ children }: SliderHeaderProps) => {
  return <header className="header two">{children}</header>;
};
export const HeaderThree = ({ children }: SliderHeaderProps) => {
  return <header className="header three">{children}</header>;
};
