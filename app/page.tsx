"use client";
import { useEffect, useState } from "react";

import About from "./components/About";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Support from "./components/Support";
import Contact from "./components/Contact";
import background from "../public/Assets/mencoba.png";

export default function Home() {
  const [bgSize, setBgSize] = useState("contain");

  useEffect(() => {
    const handleResize = () => {
      const isIpadPro = window.innerWidth === 1024 && window.innerHeight === 1366;
      const isWideScreen = window.innerWidth > 1080;

      if (isIpadPro) {
        setBgSize("cover"); // biar tetap penuh, tapi gak melar
      } else if (isWideScreen) {
        setBgSize("contain");
      } else {
        setBgSize("cover"); // untuk HP & tablet, lebih aman pakai cover biar tidak gepeng
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <section className="lg:px-28 md:px-10 px-4 md:pt-16 pt-16">
        <div
          className="relative rounded-bl-4xl md:rounded-bl-[150px] lg:rounded-tr-[150px] bg-no-repeat bg-top"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: bgSize,
          }}
        >
          <div>
            <div className="-mx-4 md:-mx-10 lg:-mx-28">
              <Hero />
            </div>
            <About />
            <Support />
            <News />
            <Community />
            <Contact />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
