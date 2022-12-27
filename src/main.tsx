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
import Student from "./components/Student";
import { ShoppingCartProvider } from "./context/Context";
import Cart from "./components/Cart";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
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
          <Route path="/student" element={<Student />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
);
