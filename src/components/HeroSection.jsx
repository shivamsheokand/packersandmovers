"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaBoxOpen,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaPhoneAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const HeroSection = () => {
  const stats = [
    { number: "15+", text: "Years Experience" },
    { number: "10K+", text: "Happy Customers" },
    { number: "50+", text: "Cities Covered" },
    { number: "100%", text: "Satisfaction Rate" },
  ];

  const services = [
    "Home Relocation",
    "Office Shifting",
    "Vehicle Transportation",
    "Warehouse Storage",
    "International Moving",
    "Packing & Unpacking",
  ];

  return (
    <div className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                <FaStar className="text-yellow-500" />
                <span>#1 Rated Packers & Movers in India</span>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Move with
              <span className="text-red-600"> Confidence</span> and{" "}
              <span className="text-red-600">Care</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Experience hassle-free relocation with our premium moving
              services. Professional team, advanced equipment, and dedicated
              support at every step.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/get-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors font-semibold flex items-center gap-2 text-lg"
                >
                  Get Free Quote <FaArrowRight />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-8 py-4 rounded-full border-2 border-red-600 hover:bg-red-50 transition-colors font-semibold flex items-center gap-2 text-lg"
                >
                  <FaPhoneAlt /> Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-4 rounded-lg shadow-lg inline-block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaClock className="text-red-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600">Quick Response Time</p>
                  <p className="font-semibold">24/7 Customer Support</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg"
                alt="Professional Moving Services"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -right-8 top-8 bg-white p-4 rounded-lg shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaCheck className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Verified by</p>
                    <p className="font-semibold">10,000+ Customers</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.h3
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-4xl font-bold text-red-600"
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 mt-2">{stat.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Premium Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <FaTruck className="text-2xl text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{service}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">Fully Insured</h4>
              <p className="text-gray-600">
                Complete protection for your belongings
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBoxOpen className="text-2xl text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">Professional Packing</h4>
              <p className="text-gray-600">
                High-quality materials & techniques
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
              </div>
              <h4 className="font-semibold mb-2">Pan India Service</h4>
              <p className="text-gray-600">Covering all major cities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
