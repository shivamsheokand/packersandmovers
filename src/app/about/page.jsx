"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaTruck, FaHandshake } from "react-icons/fa";
import { PageContainer } from "../../components/ui/page-container";

const AboutPage = () => {
  return (
    <PageContainer>
      {/* About Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">OM Technoware</span> Packers
              & Movers
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your trusted partner in professional relocation services with over
              a decade of experience in making moves smooth and stress-free.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg"
            >
              <FaAward className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Highly trained and experienced professionals
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg"
            >
              <FaUsers className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Dedicated to customer satisfaction
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg"
            >
              <FaTruck className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
              <p className="text-gray-600">
                Well-maintained vehicles for safe transit
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg"
            >
              <FaHandshake className="text-4xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden costs, clear communication
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
