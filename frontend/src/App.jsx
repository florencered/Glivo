import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Components/Product/ProductDetails";
import LoginSignUp from "./Pages/User/LoginSignUp";
import Profile from "./Pages/User/Profile";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lawyer/:id" element={<ProductDetails/>} />
            <Route path="/loginSignup" element={<LoginSignUp/>} />
            <Route path="/account" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
