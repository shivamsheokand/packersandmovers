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
} from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Household Shifting",
      description:
        "Complete packing and moving solutions for your home relocation needs",
    },
    {
      icon: <FaWarehouse />,
      title: "Warehouse Storage",
      description:
        "Secure storage facilities for short and long-term requirements",
    },
    {
      icon: <FaBuilding />,
      title: "Office Relocation",
      description:
        "Professional moving services for your business with minimal downtime",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "International Moving",
      description:
        "Reliable overseas relocation services with proper documentation",
    },
    {
      icon: <FaBox />,
      title: "Packing & Unpacking",
      description:
        "Expert packing services using quality materials for maximum protection",
    },
    {
      icon: <FaTruckMoving />,
      title: "Vehicle Transportation",
      description: "Safe and secure transportation of cars and other vehicles",
    },
  ];

  return (
    <div className="pt-24">
      {/* Services Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Premium</span> Services
            </h1>
            <p className="text-lg text-gray-600">
              Comprehensive moving solutions tailored to your needs. We handle
              everything from packing to transportation with utmost care and
              professionalism.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-red-600 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Move?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free quote and let us help you plan
            your perfect move
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Free Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
