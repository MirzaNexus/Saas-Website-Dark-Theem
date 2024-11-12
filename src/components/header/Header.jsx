import ArrowRight from "@/assets/arrow-right.svg";
const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full h-[46px] bg-[linear-gradient(to_right,#FEECFF,#FECAFF,#FEB5FF,#FEB5FF,#FFF4D6,#F3FCD7,#D2F5EE,#C3EFFF,#FBEFFF)] flex items-center justify-center">
        <span className=" inline-flex items-center gap-3 lg:text-sm text-md ">
          <span className="hidden md:block">
            This page is included in a free SaaS Website Kit.
          </span>
          <span className="inline-flex items-center gap-1 lg:text-sm text-md">
            <span>View the complete Kit</span>
            <ArrowRight className="w-4 h-4" />
          </span>
        </span>
      </div>
    </header>
  );
};

export default Header;
