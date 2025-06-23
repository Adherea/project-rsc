import Image from "next/image";
import aboutgambar from "../../public/Picture3-removebg-preview.png";
import background from "../../public/Assets/mencoba.png";
export default function About() {
  return (
    <>
      <section id="about" className="lg:px-28 md:px-10 px-4 lg:bg-center lg:bg-no-repeat xl:bg-[length:100%_100%] min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${background.src})` }}>
        <div className="flex xl:flex-row flex-col items-center justify-center gap-10">
          {/* Gambar */}
          <div>
            <Image alt="" src={aboutgambar} />
          </div>

          {/* Teks */}
          <div className="py-4 md:py-0 text-center md:text-left">
            <h1 className="text-yellow-300 text-2xl">About Us</h1>
            <p className="max-w-2xl text-white h-64 overflow-y-auto md:py-2 py-3.5 100 rounded lg:pr-5 pr-2 md:pr-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint laborum, nulla asperiores explicabo aut quasi quidem qui accusamus facilis culpa autem reiciendis, nesciunt tenetur fugit dolor consequuntur
              necessitatibus doloribus velit provident corrupti temporibus dicta. Asperiores dolorum earum dolorem iure qui veniam, velit provident, libero explicabo tenetur voluptatibus eligendi, deleniti sunt obcaecati perspiciatis
              voluptate. Aut eos ducimus aperiam facilis est cumque! Tempore tenetur aperiam aliquam nobis omnis a architecto quae ut facere perferendis, voluptas eligendi impedit ipsa. Quis quia sunt esse quibusdam nostrum vero in
              asperiores distinctio molestiae consequatur blanditiis commodi aliquam, eaque minus modi fugit dicta officiis aspernatur assumenda laborum. Deleniti corporis eius id quam. Ipsam fugit quae earum incidunt. Quam ut tempora amet.
              Fugiat obcaecati repudiandae minus, adipisci enim porro quo sequi iste corrupti totam ipsam voluptates tempore officia voluptatum tenetur odit, dolorum fugit cum illum impedit! Laboriosam eaque soluta itaque praesentium. Eius
              necessitatibus optio alias mollitia, distinctio voluptatibus sint beatae iure ullam aut cupiditate cum consequatur voluptatum, asperiores, rerum aperiam dolores? Enim libero porro optio illum minus officiis, quos eos
              consequatur maiores odio, nemo ex vitae? Delectus excepturi similique magnam saepe, hic minus, consectetur non deleniti expedita doloribus nihil eaque atque repudiandae blanditiis consequatur laborum. Tempora, labore?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
