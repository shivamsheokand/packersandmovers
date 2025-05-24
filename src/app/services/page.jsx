"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaWarehouse,
  FaBuilding,
  FaGlobeAmericas,
  FaBox,
  FaTruckMoving,
  FaCheckCircle,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const services = [
  {
    icon: <FaHome className="text-4xl text-red-600" />,
    title: "Household Shifting",
    description:
      "Complete packing and moving solutions for your home relocation needs",
    features: [
      "Free pre-move survey",
      "Professional packing team",
      "Safe transportation",
      "Unpacking & rearranging",
    ],
  },
  {
    icon: <FaBuilding className="text-4xl text-red-600" />,
    title: "Office Relocation",
    description:
      "Efficient and secure office moving services with minimal downtime",
    features: [
      "IT equipment handling",
      "Furniture dismantling",
      "Weekend moves available",
      "Asset management",
    ],
  },
  {
    icon: <FaTruckMoving className="text-4xl text-red-600" />,
    title: "Vehicle Transportation",
    description: "Safe and secure vehicle transportation across cities",
    features: [
      "Door-to-door delivery",
      "GPS tracking",
      "Insurance coverage",
      "Enclosed carriers",
    ],
  },
  {
    icon: <FaWarehouse className="text-4xl text-red-600" />,
    title: "Warehouse Storage",
    description: "Secure storage solutions for your belongings",
    features: [
      "24/7 surveillance",
      "Climate control",
      "Inventory management",
      "Flexible duration",
    ],
  },
  {
    icon: <FaGlobeAmericas className="text-4xl text-red-600" />,
    title: "International Moving",
    description: "Comprehensive international relocation services",
    features: [
      "Custom clearance",
      "Documentation support",
      "Air & sea freight",
      "Door-to-door service",
    ],
  },
  {
    icon: <FaBox className="text-4xl text-red-600" />,
    title: "Packing & Unpacking",
    description: "Professional packing services with quality materials",
    features: [
      "Quality packing materials",
      "Fragile item handling",
      "Systematic labeling",
      "Furniture assembly",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
          Our Moving Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Professional moving and packing solutions tailored to your needs. From
          local home relocation to international moving, we've got you covered.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        <div className="bg-red-600 text-white rounded-lg px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Move?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quote. We'll help
            make your move stress-free!
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-white text-red-600 py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
