import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import "./App.scss";
import "./index.scss";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor"
import Introduction from "./components/Introduction";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <AppRoutes />
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerAlpha={0.8}
      innerScale={0.7}
      outerScale={5}
      clickDistance={300}
      outerStyle={{
        border: '1px solid #fb8569'
      }}
    />
    <Introduction />
  </BrowserRouter>
);

export default App;
