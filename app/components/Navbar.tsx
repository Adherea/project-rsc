// Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logonya from "../../public/Assets/Assets 2-04.png";
import searcnya from "../../public/Assets/transparency.png";
import { poppins } from "../../app/font";

type NavbarProps = {
  onNavigate: (key: string) => void;
};

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Pisahkan ref untuk desktop dan mobile
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Cek apakah klik terjadi di luar semua elemen dropdown dan button
      const isOutsideDesktopMenu = desktopMenuRef.current && !desktopMenuRef.current.contains(target);
      const isOutsideMobileMenu = mobileMenuRef.current && !mobileMenuRef.current.contains(target);
      const isOutsideDesktopButton = desktopButtonRef.current && !desktopButtonRef.current.contains(target);
      const isOutsideMobileButton = mobileButtonRef.current && !mobileButtonRef.current.contains(target);

      // Tutup menu hanya jika klik terjadi di luar semua elemen
      if (isOutsideDesktopMenu && isOutsideMobileMenu && isOutsideDesktopButton && isOutsideMobileButton) {
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
    <nav className="w-full bg-gradient-to-b  fixed top-0 z-50 py-5  md:py-0 from-white/90  lg:bg-transparent ">
      <div className=" mx-auto px-4 md:px-20 flex justify-between items-center ">
        {/* Logo */}
        <div className="">
          <Image src={logonya} alt="Logo" className="w-28 lg:w-48  object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center relative ">
          {/* Hamburger Desktop */}
          <button ref={desktopButtonRef} className="hover:cursor-pointer relative w-8 h-8 flex flex-col justify-center items-center group" onClick={() => setIsOpen((prev) => !prev)}>
            <span className={`absolute w-8 h-1 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`} />
            <span className={`absolute w-8 h-1 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute w-8 h-1 bg-black rounded transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`} />
          </button>

          {/* Dropdown Desktop */}
          {isOpen && (
            <div ref={desktopMenuRef} className="absolute top-12 md:right-0 lg:right-auto opacity-80 bg-[#231f20] text-white shadow-md px-6 py-14  z-40 space-y-2 text-md font-medium w-56 ">
              <button onClick={() => handleClick("hero")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Home
              </button>
              <button onClick={() => handleClick("about")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                About Us
              </button>
              <button onClick={() => handleClick("news")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Latest News
              </button>
              <button onClick={() => handleClick("community")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Our Community
              </button>
              <button onClick={() => handleClick("dashboard")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Dashboard
              </button>
              <button onClick={() => handleClick("support")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Our Support
              </button>
              <button onClick={() => handleClick("contact")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Contact Information
              </button>
              <button onClick={() => handleClick("login")} className="block w-full text-left hover:bg-gray-700 px-2 py-1 rounded hover:cursor-pointer">
                Login
              </button>
            </div>
          )}

          {/* Nav Links */}
          <button onClick={() => handleClick("hero")} className="relative group hover:cursor-pointer md:hidden lg:block">
            <span className={`${poppins.className} relative z-10 tracking-widest font-extralight`}>Home</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </button>

          <button onClick={() => handleClick("about")} className="relative group hover:cursor-pointer md:hidden lg:block">
            <span className={`${poppins.className} relative z-10 tracking-widest font-extralight`}>Tentang Kami</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </button>

          <button onClick={() => handleClick("contact")} className="relative group hover:cursor-pointer md:hidden lg:block">
            <span className={`${poppins.className} relative z-10 tracking-widest font-extralight`}>Kontak Kami</span>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full" />
          </button>
        </div>

        {/* Search Input */}
        <div className="hidden flex-shrink-0 md:hidden lg:block">
          <input type="text" placeholder="🔍︎ Search" className="border rounded-xl py-1 px-2 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-center" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button ref={mobileButtonRef} aria-label="Toggle menu" className="relative w-8 h-8 flex flex-col justify-center items-center" onClick={() => setIsOpen((prev) => !prev)}>
            <span className={`absolute w-8 h-1 bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`} />
            <span className={`absolute w-8 h-1 bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute w-8 h-1 bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden max-w-11/12 md:w-full mx-auto bg-[#343434] text-white shadow-md px-6 py-4 space-y-3 text-sm font-medium">
          <button onClick={() => handleClick("hero")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Home
          </button>
          <button onClick={() => handleClick("about")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            About Us
          </button>
          <button onClick={() => handleClick("news")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Latest News
          </button>
          <button onClick={() => handleClick("community")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Our Community
          </button>
          <button onClick={() => handleClick("dashboard")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Dashboard
          </button>
          <button onClick={() => handleClick("support")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Our Support
          </button>
          <button onClick={() => handleClick("contact")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Contact Information
          </button>
          <button onClick={() => handleClick("login")} className="block w-full text-left hover:bg-gray-600 px-2 py-1 rounded">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
