import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import { CartProvider } from "./context/Cartcontext";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Logout all users on app startup
    localStorage.removeItem("user");
    localStorage.removeItem("orderId");
    localStorage.removeItem("cart");
  }, []);

  return (
    <>
    
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/home" Component={Homepage} />
        <Route path="/menu" Component={MenuPage} />
        <Route path="/about" Component={About} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </CartProvider>
    </>
  );
}

export default App;
