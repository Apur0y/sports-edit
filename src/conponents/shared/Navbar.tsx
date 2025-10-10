"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "#packages" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "/contact" },
  ];

  const profileLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Settings", href: "/settings" },
    { name: "Logout", href: "/logout" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-neutral-900 bg-opacity-80 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
         Sports Edit
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuLinks.map((link) => (
            <li key={link.name} className="hover:text-blue-400 transition">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          {/* Profile Icon */}
          <li className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <FaUserCircle size={28} />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                {profileLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 hover:bg-gray-200 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleProfile} className="relative">
            <FaUserCircle size={28} />
            {profileOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                {profileLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 hover:bg-gray-200 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </button>

          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black text-white px-6 pb-4 space-y-2 animate-slideDown">
          {menuLinks.map((link) => (
            <li key={link.name} className="hover:text-blue-400 transition">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
