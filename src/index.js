import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Mypages/Sign in page/Signinpage";
import ErrorPage from "./Mypages/Errorpage";
import Homepage from "./Mypages/Home Page/Homepage";
import Bone from "./Mypages/Bone page/Bone";
import Mummy from "./Mypages/Mummy page/Mummy";
import Buddha from "./Mypages/Buddha page/Buddha";
import Stonedog from "./Mypages/Stone Dog Page/Stonedog";
import Toycar from "./Mypages/Toy Car Page/Toycar";
import Theplates from "./Mypages/The Plates Page/Theplates";
import Thebrush from "./Mypages/The Brush/Thebrush";
import Theholy from "./Mypages/The Holy Page/Theholy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/bone",
    element: <Bone />,
  },
  {
    path: "/mummy",
    element: <Mummy />,
  },
  {
    path: "/buddha",
    element: <Buddha />,
  },
  {
    path: "/doggy",
    element: <Stonedog />,
  },
  {
    path: "/toycar",
    element: <Toycar />,
  },
  {
    path: "/plates",
    element: <Theplates />,
  },
  {
    path: "/brush",
    element: <Thebrush />,
  },
  {
    path: "/holy",
    element: <Theholy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
