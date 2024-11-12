import Logo1 from "@/assets/acme.svg";
import Logo2 from "@/assets/apex.svg";
import Logo3 from "@/assets/celestia.svg";
import Logo4 from "@/assets/echo.svg";
import Logo5 from "@/assets/pulse.svg";
import Logo6 from "@/assets/quantum.svg";
import Image from "next/image";
const LogoTickar = () => {
  return (
    <div className="w-full lg:h-[150px] min-h-[150px] bg-black flex lg:px-16 md:px-2 py-5 justify-center">
      <div className="w-full  flex flex-col items-center md:justify-between justify-center px-3 py-2 lg:gap-0 md:gap-8 gap-6">
        <span className="text-lg h-full text-[#7a7a7a] inline-flex lg:flex-nowrap flex-wrap text-center md:w-fit w-[230px]">
          Trusted by the world’s most innovative teams
        </span>
        <div className="w-[100%] lg:h-[87px] mh-[130px] flex items-end lg:justify-between justify-center flex-wrap lg:gap-5 lg:gap-x-10 gap-x-20 gap-y-2 lg:px-5 md:px-3 py-2 md:py-0">
          <Logo1 className="md:w-[120px] w-[110px] md:h-[35px]  text-[#7a7a7a]" />
          <Logo4 className="md:w-[120px] w-[110px] md:h-[35px]  text-[#7a7a7a]" />
          <Logo5 className="md:w-[100px] w-[100px] md:h-[35px]  text-[#7a7a7a]" />
          <Logo2 className="md:w-[90px]  w-[90px]  md:h-[35px]  text-[#7a7a7a]" />
          <Logo3 className="md:w-[120px] w-[110px] md:h-[35px]  text-[#7a7a7a]" />
          <Logo6 className="md:w-[120px] w-[110px] md:h-[35px]  text-[#7a7a7a]" />
        </div>
      </div>
    </div>
  );
};

export default LogoTickar;
