import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2b1a14] to-[#1a0f0b] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 pb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide">
              BURGER <span className="text-orange-500">HOUSE</span>
            </h2>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Serving the juiciest burgers in town since 2010.
              <br />
              Made with love, served with a smile.
            </p>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">FIND US</h3>
            <div className="flex items-start gap-3 text-gray-300 mb-3">
              <LocationOnIcon className="text-orange-500" />
              <span>Tripoli dam w farez ,achrafkabara street</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <PhoneIcon className="text-orange-500" />
              <span>(961) 70/300300</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">HOURS</h3>
            <div className="flex items-start gap-3 text-gray-300">
              <AccessTimeIcon className="text-orange-500 mt-1" />
              <div className="text-sm leading-6">
                <p>Mon - Thu: 11AM - 10PM</p>
                <p>Fri - Sat: 11AM - 12AM</p>
                <p>Sunday: 12PM - 9PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
          © 2026 Burger House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
