"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// default data
const Ddata = [
  {
    id: 7,
    name: "Om Technoware",
    image: "images/ckcOVVKpBKYcyiyTu8Dnwq6B5a49eXpM1GIKTi8B.png",
    email: "info@omtechnoware.com",
    phone: "+91 8607295210",
    address: "123, Tech Park, Sector 15, Mumbai, India",
    insta: "https://instagram.com/developer.shivam_",
    fb: "https://www.facebook.com/www.aicoders.in",
    twitter: "https://x.com/_ShivamSheokand",
    linkedin: "https://instagram.com/developer.shivam_",
    whatsapp: "8607295210",
    description:
      "Professional packers and movers providing comprehensive relocation services across India and worldwide.",
    time: null,
    created_at: "2025-05-22T06:13:09.000000Z",
    updated_at: "2025-05-23T10:06:25.000000Z",
  },
];

const ContactPage = () => {
  const [data, setData] = useState(Ddata);
  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch("http://localhost:8000/api/navapi");
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        setData(data);
      } catch (error) {
        console.log("Error fetching data:12345");
        setData(data);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className="pt-24">
      {/* Contact Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about our services? We're here to help you with
              your moving needs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600 h-32"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600"> {data[0]["phone"]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">{data[0]["email"]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">{data[0]["address"]}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
