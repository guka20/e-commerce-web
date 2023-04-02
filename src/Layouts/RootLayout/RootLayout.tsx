import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../components";
export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
