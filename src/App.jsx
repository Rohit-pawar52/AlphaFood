import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
