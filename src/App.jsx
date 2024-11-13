import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import Category from "./Components/RoutePage/Category";
import Cart from "./Components/RoutePage/Cart";

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Category" element={<Category/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
