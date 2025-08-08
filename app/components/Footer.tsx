import Image from "next/image";
import logo from "../../public/—Pngtree—white instagram icon png instagram_3562066.png";
import logo2 from "../../public/—Pngtree—facebook white icon_3570425.png";
import logo3 from "../../public/—Pngtree—twitter white icon_3570409.png";
import logo4 from "../../public/—Pngtree—white whatsapp icon png_3562063.png";
export default function Footer() {
  return (
    <footer className="px-3 bg-gradient-to-t bg-white  md:from-white/90  pb-5 xl:bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="">
          <h1 className="text-[#333333] text-sm md:text-xl tracking-wide font-light ">Kotaki @2025</h1>
        </div>
        <div className="bg-[#3b3b3b] rounded-tr-3xl rounded-bl-3xl flex items-center px-3  ">
          <a href="https://www.instagram.com/dityaapriatama_/" target="_blank">
            <Image src={logo} width={35} alt="" />
          </a>
          <a href="https://www.facebook.com/ditya.apriatama/" target="_blank">
            <Image src={logo2} width={35} alt="" />
          </a>
          <a href="https://x.com/ApriatamaDitya" target="_blank">
            <Image src={logo3} width={35} alt="" />
          </a>
          <a href="https://wa.me/628113922012" target="_blank" rel="noopener noreferrer">
            <Image src={logo4} width={35} alt="WhatsApp Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
