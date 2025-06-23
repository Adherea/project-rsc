"use client";

import Link from "next/link";
import logonya from "../../public/Assets/logonya2.png";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref untuk dropdown
  const buttonRef = useRef(null); // Ref untuk hamburger button

  // Klik di luar dropdown -> tutup menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && buttonRef.current && !menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-evenly py-5 ">
        <div className="flex gap-2 items-center relative xl:w-1/5 ">
          {/* Hamburger dan Dropdown */}
          <div className="relative ">
            <button ref={buttonRef} className="relative w-8 h-8 flex flex-col justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
              <span className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`}></span>
              <span className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`}></span>
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div ref={menuRef} className="absolute top-full left-0 mt-3 bg-[#343434] text-white shadow-md px-6 py-4 z-40 space-y-2 text-sm font-medium w-56">
                <a href="#home" className="block hover:text-yellow-500">
                  Home
                </a>
                <a href="#about" className="block hover:text-yellow-500">
                  About Us
                </a>
                <a href="#news" className="block hover:text-yellow-500">
                  Latest News
                </a>
                <a href="#community" className="block hover:text-yellow-500">
                  Our Community
                </a>
                <a href="#" className="block hover:text-yellow-500">
                  Dashboard
                </a>
                <a href="#" className="block hover:text-yellow-500">
                  Our Support
                </a>
                <a href="#" className="block hover:text-yellow-500">
                  Contact Information
                </a>
                <Link href="/login" className="block bg-yellow-400 px-4 py-2 rounded text-center hover:bg-yellow-300">
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Home (non-dropdown, hanya di md ke atas) */}
          <a href="#home" className="relative group overflow-hidden mx-auto">
            <span className="relative z-10 hidden md:block">Home</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </a>
        </div>

        {/* Logo tengah */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
          <Image src={logonya} alt="Logo" className="w-24 md:w-32" />
        </div>

        {/* Menu utama di desktop */}
        <div className="flex gap-4 ">
          <a href="#about" className="relative group overflow-hidden">
            <span className="relative z-10 hidden md:block">About Us</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group overflow-hidden xl:ml-24">
            <span className="relative z-10 hidden md:block">Contact Us</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
