import Image from "next/image";
import logo from "../../public/Assets/image/image.png";

export default function Contact() {
  return (
    <section id="contact" className="lg:px-28 md:px-10 px-4 md:pt-48 lg:pt-16 pt-12 text-justify ">
      <div className="max-w-xl w-full mx-auto bg-opacity-60 rounded-xl p-6 scrollable">
        <h1 className="text-xl md:text-4xl text-[#000002] mb-6 ">Kontak Kami</h1>

        <form action="" className="pt-10 md:pt-0">
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-1 text-sm md:text-base ">
              USERNAME
            </label>
            <input id="username" type="text" placeholder="Masukkan username" className="bg-white py-1 px-2 focus:outline-none focus:ring-2 focus:ring-black w-full" />
          </div>

          <div className="mb-4 py-5">
            <label htmlFor="email" className="block font-semibold mb-1 text-sm md:text-base ">
              EMAIL
            </label>
            <input id="email" type="email" placeholder="Masukkan email" className="bg-white py-1 px-2 focus:outline-none focus:ring-2 focus:ring-black w-full" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1 text-sm md:text-base ">
              MESSAGE
            </label>
            <textarea id="message" placeholder="Tulis pesan Anda..." className="bg-white py-1 px-2 focus:outline-none focus:ring-2 focus:ring-black w-full" rows={4} />
          </div>

          <div className="flex justify-end">
            <button className="bg-[#000002] text-white py-2 px-5 rounded-md cursor-pointer">Kirim</button>
          </div>
        </form>
      </div>
    </section>
  );
}
