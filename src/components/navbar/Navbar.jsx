import Logo from "@/assets/logosaas.png";
import Framer from "@/assets/framer.svg";
import Menu from "@/assets/menu.svg";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-10 ">
      <div className="w-full h-[81px] flex items-center justify-between p-[20px] bg-black">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src={Logo}
              alt="Website-Logo"
              width={40}
              height={41}
              className="mr-1 relative z-[1]"
            />
            <div className="absolute top-0 z-0 rounded-[10px] blur-sm w-[40px] h-[41px] bg-[linear-gradient(to_right,#F87BFF_0%,#FB92CF_24%,#FFDD9B_48%,#C2F0B1_73%,#2FD8FE_100%)]"></div>
          </div>
          <span className="text-sm text-white/70 md:block hidden ">
            made by
          </span>
          <Framer className="w-5 h-5 md:block hidden " />
          <span className="lg:text-lg text-md text-white md:block hidden">
            Farmer
          </span>
        </div>
        <button className="btn md:block hidden">Get for free</button>
        <Menu className="w-7 h-7 text-white md:hidden block" />
      </div>
    </nav>
  );
};

export default Navbar;
