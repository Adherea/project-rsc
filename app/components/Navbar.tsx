// Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logonya from "../../public/Assets/logonya2.png";

type NavbarProps = {
  onNavigate: (key: string) => void;
};

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && buttonRef.current && !menuRef.current.contains(event.target as Node) && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (key: string) => {
    onNavigate(key);
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#E6E6E6] shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-evenly py-5 ">
        {/* Kiri */}
        <div className="flex gap-2 items-center relative xl:w-1/5">
          <div className="relative ">
            <button ref={buttonRef} className="hover:cursor-pointer relative w-8 h-8 flex flex-col justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
              <span className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`}></span>
              <span className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`absolute w-8 h-0.5 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`}></span>
            </button>

            {isOpen && (
              <div ref={menuRef} className="absolute top-full left-0 mt-3 bg-[#343434] text-white shadow-md px-6 py-4 z-40 space-y-2 text-sm font-medium w-56">
                <button onClick={() => handleClick("hero")} className="block hover:text-yellow-500 w-full text-left">
                  Home
                </button>
                <button onClick={() => handleClick("about")} className="block hover:text-yellow-500 w-full text-left">
                  About Us
                </button>
                <button onClick={() => handleClick("contact")} className="block hover:text-yellow-500 w-full text-left">
                  Contact Information
                </button>
                {/* Tambahkan lainnya jika mau */}
              </div>
            )}
          </div>

          <button onClick={() => handleClick("hero")} className="relative group overflow-hidden mx-auto hover:cursor-pointer">
            <span className="relative z-10 hidden md:block">Home</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </button>
        </div>

        {/* Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
          <Image src={logonya} alt="Logo" className="w-24 md:w-32" />
        </div>

        {/* Desktop Menu */}
        <div className="flex gap-4">
          <button onClick={() => handleClick("about")} className="relative group overflow-hidden hover:cursor-pointer">
            <span className="relative z-10 hidden md:block">About Us</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </button>
          <button onClick={() => handleClick("contact")} className="relative group overflow-hidden xl:ml-24 hover:cursor-pointer">
            <span className="relative z-10 hidden md:block">Contact Us</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
