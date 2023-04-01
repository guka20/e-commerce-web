import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components";
import { Header } from "../components/Header";
export const RootLayout = () => {
  return (
    <>
      <Header>
        <h1>Header</h1>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
