"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {
  const blogs = [
    {
      title: "Essential Tips for a Smooth House Relocation",
      excerpt:
        "Planning to move? Here are the top tips to ensure your house relocation goes smoothly...",
      date: "May 15, 2025",
      image:
        "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      category: "Moving Tips",
    },
    {
      title: "How to Pack Fragile Items Safely",
      excerpt:
        "Learn the professional techniques for packing and protecting your delicate items during a move...",
      date: "May 10, 2025",
      image:
        "https://www.yrcpackersmovers.com/admin/assets/images/1717653770yrc%20(4).jpeg",
      category: "Packing Guide",
    },
    {
      title: "Choosing the Right Moving Company",
      excerpt:
        "Important factors to consider when selecting a professional moving service...",
      date: "May 5, 2025",
      image:
        "https://www.yrcpackersmovers.com/admin/assets/images/1717653852yrc%20(18).jpeg",
      category: "Moving Tips",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Latest Blog Posts
          </h2>
          <p className="text-[#000000] max-w-2xl mx-auto">
            Stay updated with our latest moving tips, guides, and industry
            insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#000000] text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl text-teal-900 font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-[#000000] mb-4">{blog.excerpt}</p>
                <Link
                  href="/blog"
                  className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
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
          <Link href="/blog">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
              View All Posts
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
