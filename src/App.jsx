import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/home-page/HomePage";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/home-page/Footer";
import Category from "./Components/category-cart/Category";
import Cart from "./Components/category-cart/Cart";
import AddRestro from "./Components/RoutePage/AddRestro";
import RegisterRestro from "./Components/RoutePage/RegisterRestro";
import UserLogin from "./Components/Login-pages/UserLogin";
import UserRegister from "./Components/Login-pages/UserRegister";
import CheckOut from "./Components/category-cart/CheckOut";
import ViewFood from "./Components/category-cart/ViewFood";

function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/ViewFood" element={<ViewFood />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/AddRestro" element={<AddRestro />} />
          <Route path="/RegisterRestro" element={<RegisterRestro />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserRegister" element={<UserRegister />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
