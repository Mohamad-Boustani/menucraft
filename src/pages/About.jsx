import React from "react";
import { AppBar, Toolbar, Button, Card, CardContent, Fab } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
export default function About() {
  return (
    <section className="bg-[#fffaf5] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold tracking-widest">
            ABOUT <span className="text-orange-500">US</span>
          </h2>
          <p className="text-gray-600">
            At Burger House, we believe in making the perfect burger. Every
            patty is handcrafted from 100% Angus beef and grilled to perfection.
          </p>
          <div className="flex gap-10 pt-6">
            <div className="flex gap-3 items-center">
              <EmojiEventsIcon className="text-orange-500" />
              <div>
                <p className="font-bold">15+</p>
                <p className="text-sm text-gray-500">Years of Excellence</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <PeopleAltIcon className="text-orange-500" />
              <div>
                <p className="font-bold">50K+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="space-y-6">
            <h3 className="text-xl font-bold">Visit Us</h3>
            <div className="flex gap-3">
              <LocationOnIcon className="text-orange-500" />
              <p className="text-sm">123 Burger Street, New York</p>
            </div>
            <div className="flex gap-3">
              <AccessTimeIcon className="text-orange-500" />
              <p className="text-sm">Mon–Sun: 11am – 11pm</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
