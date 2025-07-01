"use client";
import Image from "next/image";
import aboutgambar from "../../public/Picture3-removebg-preview.png";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px", // biar animasi baru jalan pas beneran kelihatan
  });

  return (
    <section id="about" className="lg:px-28 md:px-10 px-4 lg:bg-center lg:bg-no-repeat xl:bg-[length:100%_100%] pt-14 md:pt-16 lg:pt-20 xl:pt-28 flex justify-center items-center">
      <motion.div ref={ref} className="flex xl:flex-row flex-col items-center justify-center gap-10" initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Gambar */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
          <Image alt="Tentang Kami" src={aboutgambar} />
        </motion.div>

        {/* Teks */}
        <motion.div className="py-4 md:py-0 text-center md:text-left" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}>
          <h1 className="text-yellow-300 text-2xl mb-4">About Us</h1>
          <p className="max-w-2xl text-white h-64 overflow-y-auto text-justify pr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint laborum, nulla asperiores explicabo aut quasi quidem qui accusamus facilis culpa autem reiciendis, nesciunt tenetur fugit dolor consequuntur necessitatibus
            doloribus velit provident corrupti temporibus dicta. Asperiores dolorum earum dolorem iure qui veniam, velit provident, libero explicabo tenetur voluptatibus eligendi, deleniti sunt obcaecati perspiciatis voluptate. Aut eos
            ducimus aperiam facilis est cumque! Tempore tenetur aperiam aliquam nobis omnis a architecto quae ut facere perferendis, voluptas eligendi impedit ipsa...
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
