"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaClipboardList,
  FaBox,
  FaTruck,
  FaHome,
} from "react-icons/fa";

const WorkProcess = () => {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact Us",
      description: "Call us or fill out the quote form to get started",
    },
    {
      icon: <FaClipboardList />,
      title: "Free Survey",
      description: "Our team visits to assess your requirements",
    },
    {
      icon: <FaBox />,
      title: "Packing",
      description: "Professional packing with quality materials",
    },
    {
      icon: <FaTruck />,
      title: "Transportation",
      description: "Safe and timely transportation of goods",
    },
    {
      icon: <FaHome />,
      title: "Delivery",
      description: "Careful unloading and arrangement at destination",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our seamless process ensures a stress-free experience from start to
            finish.
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Line Between Steps */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-purple-300 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative z-10 w-full md:w-auto flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white/70 backdrop-blur-md border border-blue-200 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 text-blue-600 text-3xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
