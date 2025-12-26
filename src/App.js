import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" Component={Homepage} />
        <Route path="/menu" Component={MenuPage} />
        <Route path="/about" Component={About} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
}

export default App;
