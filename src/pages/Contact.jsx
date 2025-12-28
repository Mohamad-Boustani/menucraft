import React from "react";
import { TextField, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-widest">
            CONTACT <span className="text-orange-500">US</span>
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            We'd love to hear from you. Get in touch with us today!
          </p>
        </div>

        {/* Content Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <PhoneIcon className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(961) 70/300300</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <EmailIcon className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@burgerhouse.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <LocationOnIcon className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Tripoli dam w farez, achrafkabara street
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
                variant="outlined"
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                className="!bg-gradient-to-r !from-orange-500 !to-red-600 !text-white !py-3 !text-lg !font-semibold !rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
