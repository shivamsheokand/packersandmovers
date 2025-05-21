"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaTruck, FaHandshake } from "react-icons/fa";
import { PageContainer } from "../../components/ui/page-container";

const AboutPage = () => {
  const achievements = [
    { number: "15+", text: "Years Experience" },
    { number: "10K+", text: "Happy Customers" },
    { number: "50+", text: "Cities Covered" },
    { number: "100%", text: "Satisfaction Rate" },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "https://i.pravatar.cc/300?img=11",
      bio: "20+ years of experience in logistics and moving industry",
    },
    {
      name: "Priya Singh",
      position: "Operations Head",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Expert in managing complex relocation projects",
    },
    {
      name: "Amit Patel",
      position: "Customer Relations",
      image: "https://i.pravatar.cc/300?img=8",
      bio: "Dedicated to ensuring customer satisfaction",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "IBA Approved",
    "Government Registered",
    "FIDI Certified",
  ];

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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8"
          >
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Moving truck"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
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
      <div className="py-16 bg-gray-100">
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
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Expert Team"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <FaAward className="text-4xl text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our team comprises highly trained professionals who ensure
                  your belongings are handled with utmost care.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Customer First"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <FaUsers className="text-4xl text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-gray-600">
                  We prioritize customer satisfaction, ensuring a seamless
                  moving experience from start to finish.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                alt="Modern Fleet"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <FaTruck className="text-4xl text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
                <p className="text-gray-600">
                  Our fleet of well-maintained vehicles ensures safe and timely
                  delivery of your possessions.
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Transparent Pricing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <FaHandshake className="text-4xl text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  We offer clear and upfront pricing with no hidden charges,
                  ensuring trust and reliability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Truck Image with Text Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
              alt="Moving Truck"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reliable and Efficient Moving Services
            </h2>
            <p className="text-gray-600 mb-4">
              At OM Technoware Packers & Movers, we understand the importance of
              a hassle-free moving experience. Our dedicated team ensures that
              every aspect of your move is handled with professionalism and
              care.
            </p>
            <p className="text-gray-600">
              From packing to transportation, we offer comprehensive services
              tailored to meet your specific needs. Trust us to make your
              relocation smooth and stress-free.
            </p>
          </motion.div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
