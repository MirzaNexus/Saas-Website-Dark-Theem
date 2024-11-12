import Night from "@/assets/night.png";
import Image from "next/image";
const Product = () => {
  return (
    <section className="relative w-full lg:min-h-[100vh] h-auto bg-[linear-gradient(to_bottom,#000000_10%,#4F21A1)] lg:pt-20 py-10 lg:pb-12  md:px-8 px-3">
      <div className="w-full flex flex-col items-center justify-center lg:gap-10 md:gap-7 gap-16">
        <div className="lg:w-[45%] md:w-[76%] w-full h-[175px] py-3">
          <h1 className="text-white font-bold md:text-5xl text-4xl text-center mb-5">
            Intuitive interface
          </h1>
          <p className="text-white text-center lg:text-xl text-lg lg:px-5 md:px-10 px-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <Image
          src={Night}
          alt="Night Image"
          className=" w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Product;
