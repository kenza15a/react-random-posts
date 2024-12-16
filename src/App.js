import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostDetails from "./pages/PostDetails/PostDetails";
import Navbar from "./components/Nabar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
