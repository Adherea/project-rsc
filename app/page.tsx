"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import News from "./components/News";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import background from "../public/Assets/mencoba.png";

const sections = [
  { key: "hero", component: <Hero />, animation: "fade" },
  { key: "about", component: <About />, animation: "fade" },
  { key: "support", component: <Support />, animation: "zoom" },
  { key: "news", component: <News />, animation: "slideRight" },
  { key: "community", component: <Community />, animation: "slideLeft" },
  { key: "contact", component: <Contact />, animation: "fade" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  let lastScrollTime = 0;

  // Fungsi navigasi dari Navbar
  const handleNavigate = (key: string) => {
    const index = sections.findIndex((section) => section.key === key);
    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const now = Date.now();

      // ✅ CEGAH jika scroll berasal dari area scrollable seperti .scrollable
      const target = e.target as HTMLElement;
      const isInScrollable = target.closest(".scrollable");
      if (isInScrollable) return;

      if (now - lastScrollTime < 1000) return;
      lastScrollTime = now;

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  const getMotion = (type: string) => {
    switch (type) {
      case "zoom":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.1 },
        };
      case "slideRight":
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 },
        };
      case "slideLeft":
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 },
        };
      default:
        return {
          initial: { opacity: 0, y: 40, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -40, scale: 0.95 },
        };
    }
  };

  const current = sections[activeIndex];
  const motionProps = getMotion(current.animation);

  return (
    <>
      {/* Navbar dengan prop navigasi */}
      <div className="z-50 fixed top-0 left-0 right-0">
        <Navbar onNavigate={handleNavigate} />
      </div>

      <main className="h-screen w-full overflow-hidden px-2 md:px-12 lg:px-24 pt-16">
        <div
          className="md:h-11/12 h-11/12 flex flex-col justify-center items-center rounded-tr-[100] md:rounded-tr-[150px] md:rounded-bl-[150px] overflow-hidden"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div key={current.key} initial={motionProps.initial} animate={motionProps.animate} exit={motionProps.exit} transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} className="w-full h-full">
              {current.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <Footer />
      </div>
    </>
  );
}
