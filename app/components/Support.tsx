import Image from "next/image";
import logo from "../../public/Assets/image/image.png";

export default function Support() {
  return (
    <>
      <section id="support" className="lg:px-28 md:px-10 px-4 lg:bg-center lg:bg-no-repeat xl:bg-[length:100%_100%] pt-14 md:pt-16 lg:pt-20 xl:pt-28 flex justify-center items-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-yellow-300 text-2xl  mb-4">Our Support</h1>

          <div className="text-white h-64 overflow-y-auto text-justify space-y-1 md:pr-10 pr-6 scrollable">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In maiores dolor doloremque quibusdam voluptatum perferendis tenetur. Obcaecati possimus illo odio ipsa, sit debitis at velit quas. Hic, dolorem ea! Dolore aperiam
              aspernatur ullam quo quia maxime illum tempore accusantium facilis repudiandae iure nulla nesciunt modi cupiditate laboriosam repellat quaerat ad illo a voluptatum, quas esse! Veritatis, eum dolorum quaerat magni, corrupti
              quis reiciendis impedit consectetur culpa repellat tempora assumenda maiores inventore error rerum incidunt possimus optio dolor temporibus ratione velit. Facilis vitae perspiciatis blanditiis magni consectetur, tenetur nam.
              Quia aliquam odio doloremque consectetur deleniti. Nostrum corporis illo voluptates aliquam voluptatem?
            </p>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eveniet aspernatur fuga ducimus excepturi nostrum magni ut doloribus? Voluptatum fuga dignissimos possimus dolorem exercitationem distinctio hic quisquam.
              Adipisci numquam est sapiente ut vero odio nam reiciendis similique possimus provident, deleniti laudantium, dolore explicabo perferendis non dolorem et dolorum tempore dignissimos? Atque omnis et reprehenderit consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero atque repellendus harum perspiciatis quis nam esse vitae eaque dolorem incidunt est error, accusantium corporis voluptatem totam, ipsum consequatur. Minus, modi?
            </p>
          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 mt-10 md:pr-10">
            <div>
              <Image src={logo} alt={`logo`} />
            </div>
            <div>
              <Image src={logo} alt={`logo`} />
            </div>
            <div>
              <Image src={logo} alt={`logo`} />
            </div>
            <div>
              <Image src={logo} alt={`logo`} />
            </div>
            <div>
              <Image src={logo} alt={`logo`} />
            </div>
            <div>
              <Image src={logo} alt={`logo`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
