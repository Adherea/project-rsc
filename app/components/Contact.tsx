import Image from "next/image";
import logo from "../../public/Assets/image/image.png";
import background from "../../public/Assets/mencoba.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="lg:px-28 md:px-10 px-4 lg:bg-center lg:bg-no-repeat xl:bg-[length:100%_100%] min-h-screen flex justify-center items-center md:rounded-bl-[150px] rounded-bl-4xl"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-yellow-300 text-2xl mb-4">Contact Us</h1>
        <p className="text-white text-justify max-w-3xl leading-relaxed mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus rem, nobis possimus ad soluta molestiae deleniti facere iste omnis dignissimos dolore facilis exercitationem porro. Quidem tenetur expedita sequi nam suscipit
          consectetur nesciunt, consequuntur aperiam, deleniti et accusantium, aliquid nihil libero.
        </p>

        <div className="text-white leading-8 mb-12">
          <h2 className="text-yellow-300 text-xl font-semibold mb-2">KOTAKI (Komunitas Tumor Otak Indonesia)</h2>
          <p>Street Address, Number - Village</p>
          <p>📩 youremail@email.com</p>
          <p>📞 +11 012 1234-5678</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Image key={i} src={logo} alt={`Logo ${i + 1}`} className="w-full h-auto object-contain" />
            ))}
        </div>
      </div>
    </section>
  );
}
