import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose, goToMenuSection }) {
  const handleMenuClick = (sectionId) => {
    goToMenuSection?.(sectionId);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="w-64 p-4">
        <p className="text-xs text-gray-400 mb-2">NAVIGATION</p>

        <List>
          <ListItemButton component={Link} to="/home" onClick={onClose}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton component={Link} to="/about" onClick={onClose}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>

          <ListItemButton component={Link} to="/contact" onClick={onClose}>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </List>

        <Divider className="my-4" />

        <p className="text-xs text-gray-400 mb-2">MENU</p>

        <List>
          <ListItemButton onClick={() => handleMenuClick("burger")}>
            <ListItemIcon>
              <LunchDiningIcon />
            </ListItemIcon>
            <ListItemText primary="Burgers" />
          </ListItemButton>

          <ListItemButton onClick={() => handleMenuClick("side")}>
            <ListItemIcon>
              <LocalDiningIcon />
            </ListItemIcon>
            <ListItemText primary="Sides" />
          </ListItemButton>

          <ListItemButton onClick={() => handleMenuClick("drink")}>
            <ListItemIcon>
              <LocalDrinkIcon />
            </ListItemIcon>
            <ListItemText primary="Drinks" />
          </ListItemButton>

          <ListItemButton onClick={() => handleMenuClick("combo")}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Combos" />
          </ListItemButton>
        </List>
      </div>
    </Drawer>
  );
}
