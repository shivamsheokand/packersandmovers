"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi to Mumbai",
      rating: 5,
      comment:
        "Excellent service! The team was very professional and handled everything with care. Would definitely recommend.",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Priya Singh",
      location: "Bangalore to Hyderabad",
      rating: 5,
      comment:
        "Very satisfied with the moving service. Everything was delivered on time and in perfect condition.",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Amit Patel",
      location: "Chennai to Pune",
      rating: 5,
      comment:
        "Great experience! The packing was done meticulously and the staff was very courteous.",
      image: "https://i.pravatar.cc/150?img=8",
    },
  ];

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
          <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to
            say about our services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 relative"
            >
              <div className="absolute top-6 right-8 text-red-600 text-4xl opacity-20">
                <FaQuoteRight />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-red-50 inline-block px-6 py-3 rounded-full">
            <span className="text-red-600 font-semibold">4.9/5</span>
            <div className="flex gap-1 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Average Customer Rating
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
