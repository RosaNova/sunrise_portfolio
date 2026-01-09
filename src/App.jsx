import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import "./App.scss";
import "./index.scss";
import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar/>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
