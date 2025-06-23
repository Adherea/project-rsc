import Image from "next/image";
import logo from "../../public/—Pngtree—white instagram icon png instagram_3562066.png";
import logo2 from "../../public/—Pngtree—facebook white icon_3570425.png";
import logo3 from "../../public/—Pngtree—twitter white icon_3570409.png";
import logo4 from "../../public/—Pngtree—white whatsapp icon png_3562063.png";
export default function Footer() {
  return (
    <footer className="mt-10 max-w-7xl mx-auto px-3">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-[#333333]">Kotaki @2025</h1>
        </div>
        <div className="bg-gray-700 rounded-tr-2xl rounded-bl-2xl flex items-center  ">
          <a href="https://www.instagram.com/dityaapriatama_/" target="_blank">
            <Image src={logo} width={60} alt="" />
          </a>
          <a href="https://www.facebook.com/ditya.apriatama/" target="_blank">
            <Image src={logo2} width={50} alt="" />
          </a>
          <a href="https://x.com/ApriatamaDitya" target="_blank">
            <Image src={logo3} width={50} alt="" />
          </a>
          <a href="https://wa.me/628113922012" target="_blank" rel="noopener noreferrer">
            <Image src={logo4} width={60} alt="WhatsApp Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
