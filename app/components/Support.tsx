"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/Assets/image/image.png";

export default function Support() {
  const [isEnglish, setIsEnglish] = useState(false); // 🔥 toggle bahasa

  const supportID = {
    title: "Partner Kami",
    intro: "Kami merasa terhormat dapat berkolaborasi dengan berbagai institusi terkemuka yang berdedikasi dalam memajukan riset, pendidikan, dan layanan kesehatan di bidang neurologi di Indonesia dan kawasan sekitarnya:",
    items: [
      {
        name: "ASNO (Asian Society of Neuro-Oncology)",
        desc: "Organisasi regional terkemuka yang berkomitmen untuk mendorong kolaborasi dan inovasi dalam riset serta praktik klinis neuro-onkologi di Asia",
      },
      {
        name: "PERDOSNI (Perhimpunan Dokter Spesialis Bedah Saraf Indonesia)",
        desc: "Organisasi profesi bagi dokter bedah saraf di Indonesia yang berperan penting dalam pengembangan pendidikan, riset, dan pelayanan pasien di bidang bedah saraf.",
      },
      {
        name: "RS Kanker Dharmais",
        desc: "Rumah sakit kanker nasional Indonesia yang mengkhususkan diri dalam pengobatan kanker secara komprehensif, riset, dan pendidikan untuk meningkatkan kualitas perawatan kanker di seluruh negeri.",
      },
    ],
  };

  const supportEN = {
    title: "Our Partners",
    intro: "We are honored to collaborate with leading institutions dedicated to advancing research, education, and healthcare services in the field of neurology in Indonesia and the surrounding region:",
    items: [
      {
        name: "ASNO (Asian Society of Neuro-Oncology)",
        desc: "A leading regional organization committed to fostering collaboration and innovation in neuro-oncology research and clinical practice across Asia.",
      },
      {
        name: "PERDOSNI (Indonesian Neurosurgical Society)",
        desc: "A professional organization for neurosurgeons in Indonesia that plays an important role in advancing education, research, and patient care in the field of neurosurgery.",
      },
      {
        name: "Dharmais Cancer Hospital",
        desc: "Indonesia’s national cancer hospital specializing in comprehensive cancer treatment, research, and education to improve cancer care quality nationwide.",
      },
    ],
  };

  const content = isEnglish ? supportEN : supportID;

  return (
    <section id="support" className="lg:px-28 md:px-10 px-4 md:pt-48 lg:pt-16 pt-12 text-justify ">
      <div className="max-w-2xl w-full mx-auto bg-opacity-60 rounded-xl p-3 tracking-wide scrollable">
        <h1 className="text-4xl text-[#000002] mb-6 ">{content.title}</h1>
        <div className="md:text-xl text-base lg:text-base max-h-100 md:max-h-120 lg:max-h-85 overflow-y-auto  md:pr-5 pr-4">
          <p className="">{content.intro}</p>
          {content.items.map((item, index) => (
            <div key={index} className={index === 1 ? "py-5" : index === 2 ? "pb-4 pt-5" : "pt-5"}>
              <h1 className="font-semibold">{item.name}</h1>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-red-500 mt-2">
          <button onClick={() => setIsEnglish(!isEnglish)} className="underline">
            {isEnglish ? "indonesia version" : "eng version"}
          </button>
        </div>

        <div className="mt-2 ">
          <div className="grid md:grid-rows-1 grid-cols-4 grid-flow-col auto-cols-[minmax(120px,1fr)] gap-4 px-10">
            <Image src={logo} alt="partner logo" />
            <Image src={logo} alt="partner logo" />
            <Image src={logo} alt="partner logo" />
            <Image src={logo} alt="partner logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
