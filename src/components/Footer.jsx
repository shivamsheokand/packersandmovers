"use client";
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Get Quote", href: "/get-quote" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const services = [
    "Home Relocation",
    "Office Shifting",
    "Vehicle Transportation",
    "Warehouse Storage",
    "International Moving",
    "Packing & Unpacking",
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      text: "+91 12345 67890",
      href: "tel:+911234567890",
    },
    {
      icon: <FaEnvelope />,
      text: "info@omtechnoware.com",
      href: "mailto:info@omtechnoware.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "123, Main Street, New Delhi, India - 110001",
      href: "https://goo.gl/maps/your-location",
    },
    {
      icon: <FaClock />,
      text: "Mon - Sun: 24/7 Available",
      href: "#",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAtFBMVEVHcEwHAKkIAKkIAKkGALYIAKkFAKwFAKoIAKkIAKkGAKsDALYDAK8GAKoGAKv7Cwf7Cgf8CgX7CgcHAKkGAKv6Cgj6Cgn5CgoSAKcAAKsIAKnvCRb7Cgf+CgDFCEQAAK76Cgj7CgjPCEgCAK77CgbUCEXLCTrLCTrMCTlRA45TA41TA44AALNaA5VfBI/5Cgr5Cgr5Cgr6Cgh4BYP7Cgj/DAD6Cgj5CgoEAKyaB3veCTj1ChWcs7fVAAAAPHRSTlMAFiEsCVWe0vb/ekZqk+0VufLL4j3m//qp/4A0qv99rUFyiryBhf+n//+s4f+Fht2RSw1lICXE1YgZjl2US3MkAAABJElEQVR4Ac3QBXKEQBRF0YfTMDh83DLu7vtf17hWFpDc8j7t+A9xvCAInPh7XJIVld1SFe3LRb0hCbzAcxwvGebF9RdZtuNaMvMAnykA9AvzTwwoJCeKmQ/jOgMQTZY8LCUXWV6UzIB5R0hMe2BFGer8p8k8nj1QZPwT8wytvG0qcRnHd+SfuyLtdFH0iv6gf2l4X4ln/qiENhrndp47eYB31hVZBC2e5NmUZuEHztNPnFFFHzhdAOCZ2vDiZW5jtfjAOV1XwmCMlet8A3xii7b3T99J4v5wBMcd2i+siTYLYGdoiawYzWZUlvoLF0QU1tB32m4nG8ZuZ8gNWNXi+XPXsuMKj9Z1a45nqw3dCoOt606D7SzFZ6vanjpETrCZXTb4286DVhvvrRwAvQAAAABJRU5ErkJggg=="
                alt="Logo"
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold">OM Technoware</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in professional packing and moving services.
              We ensure safe and timely delivery of your valuables.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com" },
                { icon: <FaTwitter />, href: "https://twitter.com" },
                { icon: <FaInstagram />, href: "https://instagram.com" },
                { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
                { icon: <FaWhatsapp />, href: "https://wa.me/1234567890" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <Link
                    href={info.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <span className="text-red-500">{info.icon}</span>
                    <span>{info.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} OM Technoware. All rights reserved.
            </p>
            <span className="block text-center mt-8 text-sm md:text-base font-medium text-gray-700">
              Developed By :-{" "}
              <span className="text-red-600 font-semibold">
                "चौधरी शिवम श्योकंद"
              </span>
            </span>

            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
