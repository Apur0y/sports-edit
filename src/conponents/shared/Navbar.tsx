"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const menuLinks = [
    { name: "Home", href: "/",  },
    { name: "All Games", href: "/games", games:["lacrossec", "soccer","football"] },
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

  const handleHover=(games:any)=>{
    return(
      <div>
        {games?.map(p=>p)}

      </div>
    )
  }

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white bg-opacity-80 text-black shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center h-[72px]">
        {/* Logo */}
        <Link href="/" className="text-4xl font-bold tracking-wide flex ">
          <Image
            src="/pplogo.png"
            alt="Logo"
            width={400}
            height={400}
            className="w-20 h-20 object-contain"
          />
          <div className="text-2xl flex items-center">
            {/* <span className="bg-gradient-to-t from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold">
              Play
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-bold">
              Picker
            </span> */}
            <span className=" ">
              Play
            </span>
            <span className=" ">
              Picker
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuLinks.map((link, index) => (
            <li
          
              key={link.name}
              className="hover:text-orange-600 hover:underline transition uppercase text-sm font-medium flex items-center "
            >
              
              {link?.games ? <Link onMouseMove={()=>handleHover(link?.games+)}  className="tracking-widest " href={link.href}>{link.name}</Link> : <Link  className="tracking-widest " href={link.href}>{link.name}</Link>}
                            

              {/* Add separator except for last item */}
              {index < menuLinks.length - 1 && (
                <span className="ml-5 text-gray-400">|</span>
              )}
            </li>
          ))}

          {/* Profile Icon */}
          <li className="relative">
            <button
              onClick={toggleProfile}
              className="flex items-center gap-2 hover:text-orange-400 transition"
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
