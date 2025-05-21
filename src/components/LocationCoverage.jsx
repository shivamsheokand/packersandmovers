"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const majorCities = [
  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1590490350334-4c1b3b0b1f3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1603262110263-3f4e4e1f1f1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kolkata",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pune",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucknow",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kochi",
    image:
      "https://images.unsplash.com/photo-1603787081152-4e1f1e1f1e1f?auto=format&fit=crop&w=800&q=80",
  },
];

const LocationCoverage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Coverage Area</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide moving and packing services across all major cities in
            India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {majorCities.map((city, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={city.image}
                  alt={city.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex items-center justify-center gap-2 text-red-600 text-lg font-semibold">
                <FaMapMarkerAlt />
                <span>{city.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-red-50 inline-block px-6 py-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Don't see your city?</span> We
              might still be able to help!
            </p>
            <p className="text-red-600 mt-2">
              Contact us for service availability in your area
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationCoverage;
