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
    { name: "Media Gallery", href: "/media" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Home Relocation", href: "/services#home-relocation" },
    { name: "Office Shifting", href: "/services#office-shifting" },
    { name: "Vehicle Transportation", href: "/services#vehicle-transport" },
    { name: "Warehouse Storage", href: "/services#warehouse" },
    { name: "International Moving", href: "/services#international" },
    { name: "Packing & Unpacking", href: "/services#packing" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/terms#refund" },
    { name: "FAQ", href: "/about#faq" },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-red-500" />,
      text: "+91 12345 67890",
      href: "tel:+911234567890",
    },
    {
      icon: <FaWhatsapp className="text-red-500" />,
      text: "+91 98765 43210",
      href: "https://wa.me/919876543210",
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      text: "info@omtechnoware.com",
      href: "mailto:info@omtechnoware.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      text: "123, Tech Park, Sector 15, Mumbai, India",
      href: "https://goo.gl/maps/your-location",
    },
    {
      icon: <FaClock className="text-red-500" />,
      text: "Mon - Sat: 9:00 AM - 7:00 PM",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com/omtechnoware",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/omtechnoware",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/omtechnoware",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/company/omtechnoware",
      label: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/919876543210",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAtFBMVEVHcEwHAKkIAKkIAKkGALYIAKkFAKwFAKoIAKkIAKkGAKsDALYDAK8GAKoGAKv7Cwf7Cgf8CgX7CgcHAKkGAKv6Cgj6Cgn5CgoSAKcAAKsIAKnvCRb7Cgf+CgDFCEQAAK76Cgj7CgjPCEgCAK77CgbUCEXLCTrLCTrMCTlRA45TA41TA44AALNaA5VfBI/5Cgr5Cgr5Cgr6Cgh4BYP7Cgj/DAD6Cgj5CgoEAKyaB3veCTj1ChWcs7fVAAAAPHRSTlMAFiEsCVWe0vb/ekZqk+0VufLL4j3m//qp/4A0qv99rUFyiryBhf+n//+s4f+Fht2RSw1lICXE1YgZjl2US3MkAAABJElEQVR4Ac3QBXKEQBRF0YfTMDh83DLu7vtf17hWFpDc8j7t+A9xvCAInPh7XJIVld1SFe3LRb0hCbzAcxwvGebF9RdZtuNaMvMAnykA9AvzTwwoJCeKmQ/jOgMQTZY8LCUXWV6UzIB5R0hMe2BFGer8p8k8nj1QZPwT8wytvG0qcRnHd+SfuyLtdFH0iv6gf2l4X4ln/qiENhrndp47eYB31hVZBC2e5NmUZuEHztNPnFFFHzhdAOCZ2vDiZW5jtfjAOV1XwmCMlet8A3xii7b3T99J4v5wBMcd2i+siTYLYGdoiawYzWZUlvoLF0QU1tB32m4nG8ZuZ8gNWNXi+XPXsuMKj9Z1a45nqw3dCoOt606D7SzFZ6vanjpETrCZXTb4286DVhvvrRwAvQAAAABJRU5ErkJggg=="
                alt="OM Technoware"
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-3 text-xl font-bold">OM Technoware</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional packers and movers providing comprehensive relocation
              services across India and worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
                  <span className="text-gray-400">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-red-500 transition-colors duration-300"
                      >
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} OM Technoware. All rights reserved.
            </p>
            <span className="block text-center  text-sm md:text-base font-medium text-gray-700">
              Developed By :-{" "}
              <span className="text-red-60 bg-blend-hue font-semibold">
                "चौधरी शिवम श्योकंद"
              </span>
            </span>
            <div className="flex flex-wrap justify-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
