import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import Layout from "./Layout";
import Home from "./components/Home/Home";
import Manufacturer from "./components/ManuFacturer/Manufacturer";
import Seller from "./components/Seller/Seller";
import Consumer from "./components/Consumer/VerifyProducts";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login/Login";

const paths = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="manufacturer" element={<Manufacturer />} />
      <Route path="seller" element={<Seller />} />
      <Route path="consumer" element={<Consumer />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
