import Image from "next/image";
import gambar from "../../public/Assets/KOTAK.png";

export default function Hero() {
  return (
    <section className="w-full h-full flex flex-col md:flex-col xl:flex-row items-center xl:justify-center">
      {/* Gambar */}
      <div className="lg:w-1/2 flex justify-center ">
        <Image alt="KOTAKI" src={gambar} className="xl:rounded-br-[100] xl:rounded-tr-[100]" />
      </div>

      {/* Konten */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-end px-4 py-4">
        <div className="bg-[#FFDF01]/30 text-white p-6 rounded-tr-4xl rounded-bl-4xl shadow-xl max-w-md space-y-4 leading-relaxed text-right">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero repudiandae magni totam mollitia explicabo ullam consequuntur iure nostrum dignissimos hic facere dolores minima ab voluptatum, officia delectus ipsum odio ex!
            Enim molestias corrupti laborum exercitationem eligendi similique sunt temporibus, esse soluta odio iure! Omnis similique nemo delectus temporibus labore qui!
          </p>
          <p>nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at</p>
          <div className="flex justify-end">
            <a href="#" className="bg-[#FFDF01] text-black font-bold px-6 py-2 rounded-tr-2xl rounded-bl-2xl hover:bg-yellow-400 transition-all">
              MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
