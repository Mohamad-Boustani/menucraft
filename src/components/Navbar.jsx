import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Sidebar from "./Sidebar";

function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="">
      <header className="w-full bg-gray-600 border-b border-gray-200 px-4 pt-3 pb-2">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <MenuIcon
            onClick={() => setOpenDrawer(true)}
            className="text-2xl text-white cursor-pointer"
          />
          <SearchIcon className="text-white mx-2 " />
          <input
            type="text"
            placeholder="Search items..."
            className="bg-transparent outline-none w-full text-white placeholder-gray-400"
          />
          <ShoppingCartIcon className="text-2xl text-white cursor-pointer" />
        </div>
        {/* Drawer Component */}
        <Sidebar open={openDrawer} onClose={() => setOpenDrawer(false)} />
        {/* Navigation Links */}
        <nav className="flex justify-around mt-3 text-white font-medium border-t border-gray-200 pt-2">
          <Button
            className="hover:text-black cursor-pointer"
            style={{ background: "none", boxShadow: "none", color: "inherit" }}
          >
            My Orders
          </Button>
          <Button
            className="hover:text-black cursor-pointer"
            style={{ background: "none", boxShadow: "none", color: "inherit" }}
          >
            Login
          </Button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
