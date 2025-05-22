"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "../lib/utils.ts";
import { Menu as MenuIcon, X } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaChevronDown,
} from "react-icons/fa";

import HeroSection from "../components/HeroSection";

const serviceLinks = [
  { title: "Home Relocation", href: "/services#home-relocation" },
  { title: "Office Shifting", href: "/services#office-shifting" },
  { title: "Vehicle Transportation", href: "/services#vehicle-transport" },
  { title: "Warehouse Storage", href: "/services#warehouse" },
  { title: "International Moving", href: "/services#international" },
  { title: "Packing & Unpacking", href: "/services#packing" },
];

const mediaLinks = [
  {
    title: "Photos",
    href: "/media#photos",
    description: "View our gallery of moving and packing services",
  },
  {
    title: "Videos",
    href: "/media#videos",
    description: "Watch our service showcase videos",
  },
];

const blogLinks = [
  { title: "All Posts", href: "/blog" },
  { title: "Moving Tips", href: "/blog?category=tips" },
  { title: "Packing Guides", href: "/blog?category=guides" },
];

export function Navbar({ className }) {
  return <NavbarComponent className={className} />;
}

export function NavbarDemo() {
  return (
    <div className="relative w-full flex flex-col items-center justify-start">
      <Navbar className="" />
      <HeroSection />
    </div>
  );
}

function NavbarComponent({ className }) {
  const [active, setActive] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState("");
  const [hideMiniHeader, setHideMiniHeader] = useState(false);
  const navRef = useRef();
  const lastScrollTop = useRef(0);

  const handleMouseEnter = (item) => {
    if (!clickedItem) setActive(item);
  };

  const handleMouseLeave = () => {
    if (!clickedItem) setActive(null);
  };

  const handleItemClick = (item) => {
    if (clickedItem === item) {
      setClickedItem(null);
      setActive(null);
    } else {
      setClickedItem(item);
      setActive(item);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setClickedItem(null);
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.current) {
        setHideMiniHeader(true); // hide on scroll down
      } else {
        setHideMiniHeader(false); // show on scroll up
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn("fixed top-0 inset-x-0 z-50 bg-white", className)}
    >
      {/* Mini Header */}
      <div
        className={cn(
          "w-full text-white text-xs sm:text-sm font-medium bg-red-600 transition-all duration-300 ease-in-out",
          hideMiniHeader
            ? "h-0 opacity-0 overflow-hidden"
            : "h-auto opacity-100"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Left - Contact Info */}
          <ul className="flex md:font-bold md:text-xl flex-wrap items-center gap-4 md:gap-10 text-xs sm:text-sm font-medium">
            <li>
              <Link
                href="mailto:info@omtechnoware.com"
                className="hover:underline"
              >
                info@omtechnoware.com
              </Link>
            </li>
            <li>
              <Link href="tel:+911234567890" className="hover:underline">
                +91 12345 67890
              </Link>
            </li>
          </ul>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4 text-white text-lg">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              {" "}
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {/* Logo Image */}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAtFBMVEVHcEwHAKkIAKkIAKkGALYIAKkFAKwFAKoIAKkIAKkGAKsDALYDAK8GAKoGAKv7Cwf7Cgf8CgX7CgcHAKkGAKv6Cgj6Cgn5CgoSAKcAAKsIAKnvCRb7Cgf+CgDFCEQAAK76Cgj7CgjPCEgCAK77CgbUCEXLCTrLCTrMCTlRA45TA41TA44AALNaA5VfBI/5Cgr5Cgr5Cgr6Cgh4BYP7Cgj/DAD6Cgj5CgoEAKyaB3veCTj1ChWcs7fVAAAAPHRSTlMAFiEsCVWe0vb/ekZqk+0VufLL4j3m//qp/4A0qv99rUFyiryBhf+n//+s4f+Fht2RSw1lICXE1YgZjl2US3MkAAABJElEQVR4Ac3QBXKEQBRF0YfTMDh83DLu7vtf17hWFpDc8j7t+A9xvCAInPh7XJIVld1SFe3LRb0hCbzAcxwvGebF9RdZtuNaMvMAnykA9AvzTwwoJCeKmQ/jOgMQTZY8LCUXWV6UzIB5R0hMe2BFGer8p8k8nj1QZPwT8wytvG0qcRnHd+SfuyLtdFH0iv6gf2l4X4ln/qiENhrndp47eYB31hVZBC2e5NmUZuEHztNPnFFFHzhdAOCZ2vDiZW5jtfjAOV1XwmCMlet8A3xii7b3T99J4v5wBMcd2i+siTYLYGdoiawYzWZUlvoLF0QU1tB32m4nG8ZuZ8gNWNXi+XPXsuMKj9Z1a45nqw3dCoOt606D7SzFZ6vanjpETrCZXTb4286DVhvvrRwAvQAAAABJRU5ErkJggg=="
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="font-bold text-lg">OM Technoware</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-16 font-bold">
          <Link href="/">
            <HoveredLink href="/">Home</HoveredLink>
          </Link>
          <Link href="/about">
            <HoveredLink href="/about">About Us</HoveredLink>
          </Link>

          <div
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick("Services")}
          >
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/services#home-relocation">
                  Home Relocation
                </HoveredLink>
                <HoveredLink href="/services#office-shifting">
                  Office Shifting
                </HoveredLink>
                <HoveredLink href="/services#vehicle-transport">
                  Vehicle Transportation
                </HoveredLink>
                <HoveredLink href="/services#warehouse">
                  Warehouse Storage
                </HoveredLink>
                <HoveredLink href="/services#international">
                  International Moving
                </HoveredLink>
                <HoveredLink href="/services#packing">
                  Packing & Unpacking
                </HoveredLink>
              </div>
            </MenuItem>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("Media")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick("Media")}
          >
            <MenuItem setActive={setActive} active={active} item="Media">
              <div className="text-sm grid grid-cols-1 gap-10 p-4">
                <ProductItem
                  title="Photos"
                  href="/media#photos"
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115"
                  description="Browse our gallery of moving and packing services."
                />
                <ProductItem
                  title="Videos"
                  href="/media#videos"
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                  description="Watch our service showcase videos."
                />
              </div>
            </MenuItem>
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("Blog")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleItemClick("Blog")}
          >
            <MenuItem setActive={setActive} active={active} item="Blog">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/blog">All Posts</HoveredLink>
                <HoveredLink href="/blog?category=tips">
                  Moving Tips
                </HoveredLink>
                <HoveredLink href="/blog?category=guides">
                  Packing Guides
                </HoveredLink>
              </div>
            </MenuItem>
          </div>

          <Link href="/contact">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-3 bg-white p-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <HoveredLink href="/">Home</HoveredLink>
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <HoveredLink href="/about">About Us</HoveredLink>
          </Link>

          <button
            onClick={() =>
              setMobileSubmenu(mobileSubmenu === "services" ? "" : "services")
            }
            className="text-left font-semibold flex items-center justify-between"
          >
            <span>Services</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                mobileSubmenu === "services" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileSubmenu === "services" && (
            <div className="pl-4 flex flex-col gap-2 text-sm">
              {serviceLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() =>
              setMobileSubmenu(mobileSubmenu === "media" ? "" : "media")
            }
            className="text-left font-semibold flex items-center justify-between"
          >
            <span>Media</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                mobileSubmenu === "media" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileSubmenu === "media" && (
            <div className="pl-4 flex flex-col gap-2 text-sm">
              {mediaLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}

          <button
            onClick={() =>
              setMobileSubmenu(mobileSubmenu === "blog" ? "" : "blog")
            }
            className="text-left font-semibold flex items-center justify-between"
          >
            <span>Blog</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                mobileSubmenu === "blog" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileSubmenu === "blog" && (
            <div className="pl-4 flex flex-col gap-2 text-sm">
              {blogLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}

          <Link href="/get-quote" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
