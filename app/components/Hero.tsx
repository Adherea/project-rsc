import Image from "next/image";
import gambar from "../../public/Assets/KOTAK.png";
import background from "../../public/Assets/mencoba.png";

export default function HeroWithAbout() {
  return (
    <section id="home">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:py-24 rounded-tr-[150] md:px-5 lg:px-0">
        {/* Gambar di kiri, full tanpa padding luar */}
        <div className="w-full md:w-auto">
          <Image alt="KOTAKI - Komunitas Tumor Otak Indonesia" src={gambar} className="md:w-full w-11/12 mx-auto md:max-w-2xl max-w-xl md:rounded-tr-3xl rounded-br-3xl opacity-90" priority />
        </div>

        {/* Konten kanan */}
        <div className="py-10 min-h-[500px] rounded-tr-4xl rounded-bl-4xl flex flex-col md:flex-row justify-end items-center w-full lg:px-40 md:px-10">
          <div className="max-w-md bg-[#FFDF01]/30 py-8 px-6 mx-6 md:mx-0 rounded-tr-4xl rounded-bl-4xl shadow-2xl ">
            <div className="space-y-6 ">
              <p className="text-right text-sm md:text-base leading-relaxed text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae magni totam mollitia explicabo ullam consequuntur iure nostrum dignissimos hic facere dolores minima ab voluptatum, officia delectus ipsum odio ex!
                Enim molestias corrupti laborum exercitationem eligendi similique sunt temporibus, esse soluta odio iure! Omnis similique nemo delectus temporibus labore qui!
              </p>
              <p className="text-right text-sm md:text-base leading-relaxed text-white">
                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
              </p>
            </div>

            <div className="flex justify-end mt-8">
              <a href="#" className="bg-[#FFDF01] hover:bg-yellow-500 text-black py-3 px-8 rounded-tr-2xl rounded-bl-2xl font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
