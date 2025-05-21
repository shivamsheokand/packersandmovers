"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaHome, FaBuilding, FaWarehouse } from "react-icons/fa";

const GetQuotePage = () => {
  const [step, setStep] = useState(1);

  const moveTypes = [
    { icon: <FaHome />, title: "House Shifting" },
    { icon: <FaBuilding />, title: "Office Relocation" },
    { icon: <FaTruck />, title: "Vehicle Transport" },
    { icon: <FaWarehouse />, title: "Storage Services" },
  ];

  return (
    <div className="pt-24">
      {/* Quote Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your <span className="text-red-600">Free Quote</span>
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and get an instant estimate for your move
            </p>
          </motion.div>
        </div>
      </div>

      {/* Multi-step Quote Form */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className={`flex items-center ${
                    number !== 3 ? "flex-1" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= number
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {number}
                  </div>
                  {number !== 3 && (
                    <div
                      className={`flex-1 h-1 mx-4 ${
                        step > number ? "bg-red-600" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Move Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Select Move Type</h2>
                <div className="grid grid-cols-2 gap-4">
                  {moveTypes.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => setStep(2)}
                      className="p-6 border rounded-lg hover:border-red-600 hover:shadow-md transition-all text-center"
                    >
                      <div className="text-3xl text-red-600 mb-3 flex justify-center">
                        {type.icon}
                      </div>
                      <div className="font-semibold">{type.title}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Move Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Move Details</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Moving From
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                        placeholder="Origin City"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Moving To
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                        placeholder="Destination City"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Preferred Moving Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
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
                    <label className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-600 h-32"
                      placeholder="Any specific requirements or questions?"
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => alert("Quote request submitted!")}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;
