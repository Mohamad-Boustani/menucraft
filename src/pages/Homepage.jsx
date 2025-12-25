import React from "react";
import { Button, Fab } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-4">
          <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-widest">
            BURGER
          </h1>
          <h1 className="text-orange-500 text-6xl md:text-8xl font-extrabold tracking-widest mt-2">
            HOUSE
          </h1>

          <p className="text-gray-200 mt-6 text-lg">
            Handcrafted burgers & classic American favorites
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Link className="!bg-gradient-to-r !from-orange-600 !to-orange-400 !px-8 !py-3 !rounded-full" to="/menu">
              VIEW MENU
            </Link>
            <Button
              variant="outlined"
              className="!border-white !text-white !px-8 !py-3 !rounded-full"
            >
              ORDER NOW
            </Button>
          </div>
        </div>

        <Fab color="warning" className="!fixed bottom-6 right-6">
          <ShoppingCartIcon />
        </Fab>
      </section>
    </div>
  );
}
