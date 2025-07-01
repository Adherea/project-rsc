import Image from "next/image";
import logo from "../../public/Assets/image/image.png";

export default function Community() {
  return (
    <section id="community" className="lg:px-28 md:px-10 px-4 lg:bg-center lg:bg-no-repeat xl:bg-[length:100%_100%] pt-14 md:pt-16 lg:pt-20 xl:pt-28 flex justify-center items-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="md:max-w-md md:mx-auto text-center md:text-start text-yellow-300 text-2xl font-extralight mb-6">Our Community</h1>

        <div className="lg:h-96 md:h-[800px] overflow-y-auto text-white space-y-6 scrollable">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex md:flex-row items-center flex-col ">
              <Image src={logo} className="md:w-1/3 lg:w-1/4 w-10/12" alt={`Community image ${i + 1}`} />
              <div className="pt-0  px-6">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa tempore sapiente nihil repudiandae. Incidunt labore, doloremque sequi minima ex eos soluta ad cupiditate cum beatae dolores eaque tempore ipsum,
                  repellendus, sunt fugiat nulla! Laboriosam eum nihil qui quas harum maxime maiores odit ipsum, ut illo tempore, excepturi cupiditate similique voluptate earum tempora fugiat voluptas atque assumenda distinctio eos
                  quisquam, beatae rerum ipsa? Maiores veniam unde rerum dignissimos rem. Porro natus nobis libero? Ex officia ipsa aut quam explicabo, quo, rerum soluta, tenetur delectus voluptatem voluptates? Maiores, dignissimos.
                  <a href="#" className="text-yellow-300 ml-2">
                    More info
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
