import Instagram from "@/assets/social-insta.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Pin from "@/assets/social-pin.svg";
import X from "@/assets/social-x.svg";
import Youtube from "@/assets/social-youtube.svg";
const Footer = () => {
  return (
    <div
      className="w-full flex md:flex-row flex-col-reverse items-start md:justify-between justify-center p-5
    bg-black
    md:gap-0
    gap-3
    "
    >
      <span className="text-white/70 md:text-left text-center md:w-auto w-full text-lg">
        @ 2024 Your Company, Inc. All rights reserved
      </span>
      <span className="inline-flex items-start md:justify-between justify-center md:w-auto w-full gap-4">
        <Instagram className="md:w-7 md:h-7 h-6 text-white/70" />
        <Linkedin className="md:w-7 md:h-7 h-6 text-white/70" />
        <Pin className="md:w-7 md:h-7 h-6 text-white/70" />
        <X className="md:w-7 md:h-7 h-6 text-white/70" />
        <Youtube className="md:w-7 md:h-7 h-6 text-white/70" />
      </span>
    </div>
  );
};

export default Footer;
