"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTruck, FaBoxOpen, FaShieldAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Your Trusted Partner in
              <span className="text-red-600"> Moving Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Professional packing and moving services for homes and businesses.
              Safe, reliable, and hassle-free relocation across India.
            </p>
            <div className="flex gap-4">
              <Link href="/get-quote">
                <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-semibold">
                  Get Free Quote
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full hover:bg-red-50 transition-colors font-semibold">
                  Our Services
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg"
              alt="Moving Services"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTruck className="text-3xl text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Moving</h3>
            <p className="text-gray-600">
              Expert team handling your belongings with care
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBoxOpen className="text-3xl text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Packing</h3>
            <p className="text-gray-600">
              High-quality materials for safe transportation
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaShieldAlt className="text-3xl text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Full Insurance</h3>
            <p className="text-gray-600">Complete coverage for peace of mind</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
