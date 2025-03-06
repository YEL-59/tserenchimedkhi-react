import Mainlayout from "@/layouts/main-layout";
import React from "react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Mainlayout />,
    children: [{ path: "/", element: <h1>Home Page</h1> }],
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact Page</h1>,
  },
]);
