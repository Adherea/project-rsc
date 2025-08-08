"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/Assets/Assets 2-06.png";
import logos from "../../public/Assets/image/image.png";

export default function Community() {
  const [isEnglish, setIsEnglish] = useState(false); // 🔥 toggle bahasa

  const textID = {
    title: "Komunitas",
    desc: "Komunitas Tumor Otak Indonesia (KOTAKI) adalah sebuah inisiatif dari Pokja Neuroonkologi PERDOSNI yang bertujuan menjadi wadah dukungan bagi pasien dan keluarga penyintas tumor otak di Indonesia. Melalui edukasi, advokasi, dan peningkatan kesadaran publik, KOTAKI berperan sebagai jembatan antara komunitas dan tenaga medis untuk mendorong kolaborasi dalam menciptakan layanan kesehatan yang lebih holistik dan berpusat pada pasien.",
  };

  const textEN = {
    title: "Community",
    desc: "The Indonesian Brain Tumor Community (KOTAKI) is an initiative of the Neuro-Oncology Working Group of PERDOSNI that aims to provide support for brain tumor patients and survivors in Indonesia. Through education, advocacy, and public awareness, KOTAKI serves as a bridge between the community and medical professionals to foster collaboration in creating more holistic and patient-centered healthcare services.",
  };

  const content = isEnglish ? textEN : textID;

  return (
    <section id="community" className="lg:px-28 md:px-10 px-4 md:pt-48 lg:pt-28 pt-12 text-justify py-20">
      <div className="max-w-2xl mx-auto scrollable">
        <div className="">
          <Image src={logos} alt="" className="max-w-1/4 mx-auto" />
        </div>
        <h1 className="text-[#000002] text-2xl md:text-4xl mb-4 w-full">{content.title}</h1>
        <p>{content.desc}</p>
        <button onClick={() => setIsEnglish(!isEnglish)} className="text-red-500 py-5 underline">
          {isEnglish ? "indonesia version" : "eng version"}
        </button>
        <a href="https://chat.whatsapp.com/JmoHnrZOvie9uzMJh5ItUp" target="_blank" rel="noopener noreferrer">
          <Image src={logo} alt="WhatsApp Group" className="w-32 cursor-pointer" />
        </a>
      </div>
    </section>
  );
}
