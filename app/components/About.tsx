"use client";
import Image from "next/image";
import { useState } from "react";
import gambar from "../../public/Assets/Assets 2-07.png";
import gambar2 from "../../public/Assets/Assets 2-08.png";
import gambar3 from "../../public/Assets/Assets.png";

export default function About() {
  const [isEnglish, setIsEnglish] = useState(false); // 🔥 state toggle bahasa

  const textID = {
    title: "Tentang Kami",
    p1: "Sebagai wadah komunitas bagi pasien dan keluarga yang terdampak tumor otak. KOTAKI berperan penting dalam memberikan dukungan melalui edukasi, advokasi, dan peningkatan kesadaran publik mengenai tumor otak. Komunitas ini juga menjadi jembatan antara masyarakat dan tenaga medis, mendorong kolaborasi aktif dengan institusi riset serta penyedia layanan kesehatan guna mengembangkan strategi perawatan yang lebih holistik dan berpusat pada pasien.",
    p2Prefix: "Sebagai bagian dari misi ini, ",
    highlight: "National Cancer Registry for Brain Tumors",
    p2Suffix:
      " diinisiasi oleh Pokja Neuroonkologi PERDOSNI bekerja sama dengan Kementerian Kesehatan Republik Indonesia. Registri ini bertujuan untuk memperkuat penelitian, meningkatkan kualitas layanan pasien, serta menyediakan data yang relevan untuk mendukung pengambilan kebijakan kesehatan nasional melalui pemantauan angka kejadian, luaran terapi, dan tren epidemiologis tumor otak di Indonesia.",
  };

  const textEN = {
    title: "About Us",
    p1: "This website is an initiative of the Neuro-Oncology Working Group of PERDOSNI (Indonesian Neurosurgical Society), introducing KOTAKI (Indonesian Brain Tumor Community) as a platform for patients and families affected by brain tumors. KOTAKI plays an important role in providing support through education, advocacy, and raising public awareness. It also serves as a bridge between the community and medical professionals, fostering collaboration with research institutions and healthcare providers to promote more holistic and patient-centered care strategies.",
    p2Prefix: "As part of this mission, ",
    highlight: "National Cancer Registry for Brain Tumors",
    p2Suffix:
      " was initiated by the Neuro-Oncology Working Group of PERDOSNI in collaboration with the Indonesian Ministry of Health. This registry aims to strengthen research, improve the quality of patient care, and provide relevant data to support national health policy through monitoring incidence rates, treatment outcomes, and epidemiological trends of brain tumors in Indonesia.",
  };

  const content = isEnglish ? textEN : textID;

  return (
    <section id="about" className="lg:px-28 md:px-10 px-4 pt-28 scroll-mt-[80px]">
      <div className="max-w-3xl mx-auto">
        <div className="flex xl:flex-row flex-col items-center justify-center">
          <div className="md:max-w-2xl xl:max-w-3xl">
            <h1 className="text-[#000002] text-2xl md:text-4xl mb-4 w-full">{content.title}</h1>
            {/* Gambar */}
            <div className="flex flex-col md:flex-row items-center">
              <Image src={gambar} className="lg:max-w-sm md:max-w-xs max-w-xs md:ml-7" alt="" />
              <Image src={gambar3} className="lg:max-w-sm md:max-w-xs max-w-xs md:-ml-9" alt="" />
            </div>

            {/* Text */}
            <div className="text-justify">
              <p className="overflow-y-auto text-justify pb-5 px-2 text-sm md:text-base scrollable">{content.p1}</p>
              <p className="scrollable text-sm md:text-base">
                {content.p2Prefix}
                <span className="italic font-semibold">{content.highlight}</span>
                {content.p2Suffix}
              </p>
            </div>
            <button onClick={() => setIsEnglish(!isEnglish)} className="text-red-500 py-5 underline">
              {isEnglish ? "indonesia version" : "eng version"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
