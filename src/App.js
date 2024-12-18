import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostDetails from "./pages/PostDetails/PostDetails";
import Navbar from "./components/Nabar/Navbar";
import Footer from "./components/Footer/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <main className="flex flex-grow flex-col w-full  items-center min-h-screen ">
          <Routes>
            {" "}
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
