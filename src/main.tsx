import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Signup from "./components/Signup";
import Users from "./components/User";
import Login from "./components/Login";
import Slider from "./components/Slider";
import Color from "./components/Color";
import Grocer from "./components/Grocer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/color" element={<Color />} />
        <Route path="/grocer" element={<Grocer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
