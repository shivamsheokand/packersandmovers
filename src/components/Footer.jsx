"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

// default data
const Ddata = [
  {
    id: 7,
    name: "Om Technoware",
    image: "images/ckcOVVKpBKYcyiyTu8Dnwq6B5a49eXpM1GIKTi8B.png",
    email: "info@omtechnoware.com",
    phone: "+91 8607295210",
    address: "123, Tech Park, Sector 15, Mumbai, India",
    insta: "https://instagram.com/developer.shivam_",
    fb: "https://www.facebook.com/www.aicoders.in",
    twitter: "https://x.com/_ShivamSheokand",
    linkedin: "https://instagram.com/developer.shivam_",
    whatsapp: "8607295210",
    description:
      "Professional packers and movers providing comprehensive relocation services across India and worldwide.",
    time: null,
    created_at: "2025-05-22T06:13:09.000000Z",
    updated_at: "2025-05-23T10:06:25.000000Z",
  },
];

// Footer component
const Footer = () => {
  // for get display data from backend

  const [data, setData] = useState(Ddata);
  // const [haserror, setHasError] = useState(false);
  useEffect(() => {
    try {
      async function fetchdata() {
        const res = await fetch("http://localhost:8000/api/navapi");
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        setData(data);
      }
      fetchdata();
    } catch (error) {
      console.log("Error fetching data:12345");
      setData(data);
    }
  }, []);

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
      text: data[0]["phone"],
      href: "tel:+91" + data[0]["phone"],
    },
    {
      icon: <FaWhatsapp className="text-red-500" />,
      text: "+91" + data[0]["whatsapp"],
      href: "https://wa.me/" + data[0]["whatsapp"],
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      text: data[0]["email"],
      href: "mailto:" + data[0]["email"],
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500" />,
      text: data[0]["address"],
      href: "https://goo.gl/maps" + data[0]["address"],
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
      href: data[0]["fb"],
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: data[0]["twitter"],
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: data[0]["linkdin"],
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/91" + data[0]["whatsapp"],
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
              <Image
                src={`http://localhost:8000/storage/${data[0]["image"]}`}
                width={40}
                height={40}
                alt="OM Technoware"
                className="h-10 w-10 rounded-full"
              />
              <span className="ml-3 text-xl font-bold">{data[0]["name"]}</span>
            </Link>
            <p className="text-gray-400 mb-6">{data[0]["description"]}</p>
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
