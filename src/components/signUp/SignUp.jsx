import Helix1 from "@/assets/a.png";
import Helix2 from "@/assets/b.png";
import Image from "next/image";
const SignUp = () => {
  return (
    <div className="w-full h-[487px] bg-black flex items-center justify-center p-2 overflow-x-clip">
      <div className="lg:w-[45%] md:w-[65%] w-[100%] flex flex-col md:gap-10 gap-14 py-4 relative">
        <div>
          <h1 className="text-white font-bold md:text-5xl text-4xl text-center mb-5">
            Get instant access
          </h1>
          <p className="text-white text-center lg:text-xl md:text-sm text-lg lg:px-5 md:px-10 px-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <form className="flex md:flex-row flex-col items-center justify-between lg:px-10 md:px-14 gap-4">
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-white/20 md:flex-1 lg:mr-2  border-none rounded-[10px] py-2 px-3 text-lg text-white w-[80%]"
          />
          <button className="btn md:text-lg text-xl text-center font-semibold md:w-[115px] w-[80%]">
            Get access
          </button>
        </form>
        <Image
          src={Helix2}
          alt="helix2"
          className="lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] absolute lg:-top-20 -top-16 lg:-left-12 -left-10 -translate-x-[100%] md:block hidden"
        />
        <Image
          src={Helix1}
          alt="helix1"
          className="lg:w-[225px] w-[240px] lg:h-[225px] h-[240px] absolute lg:-bottom-20 -bottom-20 lg:-right-12 -right-3 translate-x-[100%] md:block hidden"
        />
      </div>
    </div>
  );
};

export default SignUp;
