import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="">
      <header className="w-full bg-yellow-300 border-b border-red-500 px-4 pt-3 pb-2">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <MenuIcon
            onClick={() => setOpenDrawer(true)}
            className="text-2xl text-red-500 cursor-pointer"
          />
          <SearchIcon className="text-red-500 mx-2 " />
          <input
            type="text"
            placeholder="Search items..."
            className="bg-transparent outline-none w-full text-red-500 placeholder-gray-400"
          />
          <ShoppingCartIcon onClick={() => navigate('/mealcart')} className="text-2xl text-red-500 cursor-pointer" />
        </div>
        {/* Drawer Component */}
        <Sidebar open={openDrawer} onClose={() => setOpenDrawer(false)} />
        {/* Navigation Links */}
        <nav className="flex justify-around mt-3 text-red-500 font-medium border-t border-gray-200 pt-2">
          <Link
            to="/myorders"
            className="hover:text-red-500 cursor-pointer"
            style={{ background: "none", boxShadow: "none", color: "inherit" }}
          >
            My Orders
          </Link>
          <Link
            to="/login"
            className="hover:text-red-500 cursor-pointer"
            style={{ background: "none", boxShadow: "none", color: "inherit" }}
          >
            Login
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
