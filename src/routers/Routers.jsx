import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Product, Home, About, Products, Contact } from "../pages";
import { RootLayout } from "../Layouts";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="product" element={<Product />} />
    </Route>
  )
);
export const Routers = () => {
  return <RouterProvider router={router} />;
};
