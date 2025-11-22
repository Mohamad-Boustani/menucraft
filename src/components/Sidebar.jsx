import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [{ label: "About" }, { label: "Offers" }];

export default function Sidebar({ open, onClose }) {
  const [active, setActive] = useState("About");

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="w-72 h-full bg-white px-6 pt-8">
        {/* Close Button */}
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <IconButton onClick={onClose}>
            <CloseIcon className="text-red-500" />
          </IconButton>
        </div>

        {/* Menu Options */}
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-4 text-lg font-medium px-4 py-3 rounded-xl transition-all
                ${
                  active === item.label
                    ? "bg-red-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </Drawer>
  );
}
