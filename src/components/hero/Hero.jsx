import Cursor from "@/assets/cursor2.png";
import Message from "@/assets/message.png";
import ArrowRight from "@/assets/Vector.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="w-full relative md:h-[731px] h-[616px] bg-[linear-gradient(to_bottom,#000000_0%,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] overflow-clip flex items-center justify-center">
      <div className="absolute rounded-[100%] b_w border-[#B48CDE] lg:top-[calc(100%-140px)] md:top-[calc(100%-140px)] top-[calc(100%-120px)] left-1/2 -translate-x-1/2 lg:w-[2344px] md:w-[1924px] w-[1200px] md:h-[1014px] h-[500px] lg:bg-[radial-gradient(closest-side,#000000_92%,#9560EB_100%)]  md:bg-[radial-gradient(closest-side,#000000_90%,#9560EB_100%)]  bg-[radial-gradient(ellipse_1200px_500px_at_bottom,#000000_85%,#9560EB_100%)]"></div>
      <div className="lg:w-[595px] md:w-[635px] w-[335px] lg:h-[519px] md:h-[509px] h-[431px] relative flex flex-col items-center  lg:gap-[30px] md:gap-7 gap-[18px] p-2">
        <span className="text-white/70 text-xs b_w border-white/10 py-[5px] px-[13px] rounded-[10px] inline-flex items-center gap-2">
          Version 2.0 is here
          <span className="text-white text-sm inline-flex items-center gap-1">
            Read more
            <ArrowRight className="w-4 h-4" />
          </span>
        </span>
        <h1 className="text-white md:text-[145px] text-[70px] text-center tracking-tighter md:leading-[120px] leading-[60px] w-[300px] h-auto md:w-auto font-bold">
          One Task at a Time
        </h1>
        <p className="md:text-[22px] text-[23px] text-white md:w-[457px] w-[335px] md:h-[93px] h-auto text-center">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <button className="btn">Get for free</button>
        <Image
          src={Cursor}
          alt="cursor"
          className="absolute lg:w-[200px] lg:h-[200px] w-[180.3px] h-[180.3px] lg:top-[200px] lg:-left-[140px] top-[110px] -left-[100px] lg:rotate-0 rotate-[5deg] md:block hidden lg:cursor-shadow cursor-md-shadow"
        />
        <Image
          src={Message}
          alt="message"
          className="absolute lg:w-[200px] lg:h-[200px] w-[151.46px] h-[156px] lg:top-[120px] lg:-right-[164px] top-[140px] -right-[98px] md:block hidden lg:message-shadow message-md-shadow "
        />
      </div>
    </section>
  );
};

export default Hero;
