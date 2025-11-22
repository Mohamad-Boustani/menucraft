import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div className="bg-gray-700">
      <Navbar />
      <Routes>
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
}

export default App;
