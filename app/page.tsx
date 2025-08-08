"use client";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import News from "./components/News";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import background from "../public/Assets/backgroundterbaru.png";
import background2 from "../public/Assets/backgroundselanjuntya.png";
import latarSemua from "../public/Assets/latar.jpg";

const sections = [
  { key: "hero", component: <Hero /> },
  { key: "about", component: <About /> },
  { key: "community", component: <Community /> },
  { key: "news", component: <News /> },
  { key: "support", component: <Support /> },
  { key: "contact", component: <Contact /> },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgImage, setBgImage] = useState(background.src);
  const [isMobile, setIsMobile] = useState(false);

  // Cek ukuran layar (responsive)
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setBgImage(background.src); // Mobile selalu pakai bg1
      } else {
        setBgImage(activeIndex === 0 ? background.src : background2.src); // Tablet ke atas normal
      }
    };

    checkScreenSize(); // cek pertama kali
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [activeIndex]);

  const goToSection = (index: number) => {
    setActiveIndex(index);

    // Kalau mobile -> selalu pakai background pertama
    if (isMobile) {
      setBgImage(background.src);
    } else {
      setBgImage(index === 0 ? background.src : background2.src);
    }
  };

  const handleNavigate = (key: string) => {
    const index = sections.findIndex((section) => section.key === key);
    if (index !== -1) goToSection(index);
  };

  const current = sections[activeIndex];

  return (
    <>
      {/* Background global latar belakang semua (paling bawah) */}
      <div
        className="fixed inset-0 z-[-10] bg-cover bg-center pb-44"
        style={{
          backgroundImage: `url(${latarSemua.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Background dinamis yang berubah sesuai activeIndex */}
      <div
        className="
    fixed inset-0 transition-all duration-700 z-0 
    bg-cover bg-center xl:bg-no-repeat
  "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: bgImage === background2.src ? (window.innerWidth === 1676 && window.innerHeight === 751 ? "80%" : "89%") : "cover",
        }}
      />

      {/* Navbar */}
      <div className="z-50 fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-md">
        <Navbar onNavigate={handleNavigate} />
      </div>

      {/* Gradient cuma pas Hero */}
      {activeIndex === 0 && (
        <div className="fixed inset-0 z-40 pointer-events-none transition-opacity duration-500">
          <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-white/90 to-transparent " />
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white/90 to-transparent" />
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 md:h-screen h-full w-full  pt-16 pb-12 md:pb-0 ">
        <div className="relative md:h-11/12 h-11/12 flex flex-col  justify-center items-center ">
          <div className="relative z-10 w-full h-full ">{current.component}</div>
        </div>
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <Footer />
      </div>
    </>
  );
}
