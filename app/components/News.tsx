"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../../public/Assets/image/image.png";

export default function News() {
  const [isEnglish, setIsEnglish] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const newsID = {
    title: "Berita",
    items: [
      {
        headline: "Brain Tumor Awareness Month",
        date: "Tanggal Peringatan: Mei",
        content: `Puncak Peringatan: 8 Juni – World Brain Tumor Day 
Brain Tumor Awareness adalah kampanye global yang bertujuan untuk meningkatkan pemahaman masyarakat mengenai tumor otak—baik jinak maupun ganas—dan dampaknya terhadap kehidupan pasien dan keluarga. Kampanye ini juga mendorong deteksi dini, dukungan emosional, akses terhadap pengobatan yang tepat, dan pentingnya penelitian untuk meningkatkan kualitas hidup penyintas tumor otak.`,
        followUp: "Komunitas melaksanakan kegiatan brain tumor awareness berupa …. cek lebih lanjut di social media / grup komunitas",
      },
    ],
  };

  const newsEN = {
    title: "News",
    items: [
      {
        headline: "Brain Tumor Awareness Month",
        date: "Awareness Month: May",
        content: `Main Event: June 8 – World Brain Tumor Day 
Brain Tumor Awareness is a global campaign aimed at increasing public understanding of brain tumors—both benign and malignant—and their impact on the lives of patients and families. The campaign also promotes early detection, emotional support, access to proper treatment, and the importance of research to improve the quality of life of brain tumor survivors.`,
        followUp: "The community organizes brain tumor awareness activities such as… check our social media / community groups for more info.",
      },
    ],
  };

  const content = isEnglish ? newsEN : newsID;
  const logos = [...Array(12)];

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section id="news" className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-start lg:px-28 md:px-10 px-4 md:pt-48 lg:pt-16 pt-12 text-justify">
      <div className="max-w-5xl w-full mx-auto bg-opacity-60 rounded-xl p-3 scrollable">
        {/* 🔥 Judul */}
        <h1 className=" text-4xl text-[#000002] mb-6 max-w-xs mx-auto">{content.title}</h1>

        {/* 🔥 Berita */}
        <div className="md:max-h-[300px] max-h-screen overflow-y-auto scrollable pr-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex md:flex-row flex-col items-center gap-4 mb-6">
              <Image src={logo} className="md:w-1/3 lg:w-4/12 max-w-7/12 mx-auto md:pt-0" alt={`News image ${i + 1}`} />
              <div>
                <h1 className="font-bold ">{content.items[0].headline}</h1>
                <div className="pr-2">
                  <p>{content.items[0].date}</p>
                  <p className="text-justify text-sm md:text-base whitespace-pre-line">{content.items[0].content}</p>
                  <p>{content.items[0].followUp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 Toggle Bahasa */}
        <div className="flex justify-start mt-4 max-w-xs mx-auto">
          <button onClick={() => setIsEnglish(!isEnglish)} className="text-red-400 underline">
            {isEnglish ? "indonesia version" : "eng version"}
          </button>
        </div>

        {/* 🔥 Grid Logo + Arrow */}
        <div className="relative mt-10">
          {/* Tombol kiri */}
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Grid Scrollable */}
          <div ref={scrollRef} className="overflow-x-auto scroll-smooth no-scrollbar">
            <div className="grid grid-rows-1 grid-flow-col auto-cols-[minmax(120px,1fr)] gap-4 px-10">
              {logos.map((_, i) => (
                <div key={i} className="flex justify-center items-center ">
                  <Image src={logo} alt={`logo ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Tombol kanan */}
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* CSS Hilangin Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
