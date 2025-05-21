"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    {
      url: "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      title: "Professional Packing",
    },
    {
      url: "https://www.yrcpackersmovers.com/admin/assets/images/1717653770yrc%20(4).jpeg",
      title: "Safe Transportation",
    },
    {
      url: "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      title: "Warehouse Storage",
    },
    {
      url: "https://www.yrcpackersmovers.com/admin/assets/images/1717653770yrc%20(4).jpeg",
      title: "Office Relocation",
    },
    {
      url: "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      title: "Vehicle Transport",
    },
    {
      url: "https://www.yrcpackersmovers.com/admin/assets/images/1717653770yrc%20(4).jpeg",
      title: "International Moving",
    },
  ];

  const videos = [
    {
      thumbnail:
        "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      title: "Our Moving Process",
      duration: "2:30",
    },
    {
      thumbnail:
        "https://www.yrcpackersmovers.com/admin/assets/images/1717653770yrc%20(4).jpeg",
      title: "Professional Packing Tips",
      duration: "3:45",
    },
    {
      thumbnail:
        "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      title: "Customer Testimonials",
      duration: "4:15",
    },
  ];

  return (
    <div className="pt-24">
      {/* Media Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Gallery</span>
            </h1>
            <p className="text-lg text-gray-600">
              Take a look at our work through photos and videos
            </p>
          </motion.div>
        </div>
      </div>

      {/* Media Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-8 py-2 rounded-full ${
                  activeTab === "photos"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-8 py-2 rounded-full ${
                  activeTab === "videos"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Photos Grid */}
          {activeTab === "photos" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Videos Grid */}
          {activeTab === "videos" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white">
                      <FaPlay className="text-xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{video.title}</h3>
                    <p className="text-sm opacity-80">{video.duration}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
