import Icon from "@/assets/Icons.svg";
const FeatureCard = ({ title, description }) => {
  return (
    <div className="b_w border-white/25 lg:w-[33%] md:w-[50%] w-[80%] h-full flex flex-col items-center justify-center lg:gap-3 gap-5 rounded-[10px] bg-[#0D0D0D] py-6 lg:px-6 md:px-3">
      <div className="w-14 h-12 bg-white rounded-[10px] relative flex items-center justify-center">
        <Icon className=" w-5 h-5 " />
      </div>
      <h3 className="text-white font-bold">{title}</h3>
      <p className="text-white/80 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
