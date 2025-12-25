import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="fixed" elevation={0} className="!bg-[#e5e1dc]">
      <Toolbar className="flex justify-between">
        <div className="flex items-center gap-2">
          <MenuIcon className="text-black" />
          <span className="font-bold tracking-widest text-black">
            BURGER <span className="text-orange-500">HOUSE</span>
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link className="hover:text-black" to="/menu">Menu</Link>
          <Link className="hover:text-black" to="/about">About</Link>
          {/* <button className="hover:text-black" onClick={<Link to="/contact">Contact</Link>}>Contact</button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}
