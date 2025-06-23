import Image from "next/image";
import logo from "../../public/Assets/image/image.png";
import background from "../../public/Assets/mencoba.png";

export default function News() {
  return (
    <section id="news" className="lg:px-28 md:px-10 px-4 lg:bg-center lg:bg-no-repeat xl:bg-[length:100%_100%] min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${background.src})` }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="md:max-w-md md:mx-auto text-center md:text-start text-yellow-300 text-2xl font-extralight mb-6">Latest News</h1>

        <div className="md:h-[500] md:overflow-y-auto text-white space-y-6 pt-0  px-6">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex md:flex-row flex-col items-center gap-4 ">
              <Image src={logo} className="md:w-1/3 lg:w-1/4 w-10/12 mx-auto pt-10 md:pt-0" alt={`News image ${i + 1}`} />
              <p className="text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt aliquid modi culpa inventore iusto ratione, ea optio aspernatur, tenetur error explicabo eum consequuntur. Ad quasi pariatur voluptates inventore
                optio, nobis cumque. Neque excepturi iusto et consequuntur tenetur ex sint, adipisci, cupiditate est, sed distinctio! A architecto, sunt soluta quo nulla, adipisci beatae, enim commodi nobis ab quasi optio placeat! Nam,
                provident.
                <a href="#" className="text-yellow-300 ml-2">
                  read more
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
