import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Mealcart from "./pages/Mealcart.jsx";
import Myorders from "./pages/Myorders";
import Offers from "./pages/Offers.jsx";
import Meals from "./pages/Meals.jsx";
function App() {
  return (
    <div className="bg-gray-300 text-blck min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/mealcart" element={<Mealcart />} />
      </Routes>
    </div>
  );
}

export default App;
