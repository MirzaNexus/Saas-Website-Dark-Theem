const Questions = ({ question }) => {
  return (
    <span className="border-b border-white/20 border-solid w-full inline-flex items-center justify-between lg:py-3 md:py-2 py-3">
      <p className="text-white/70 text-lg">{question}</p>
      <span className="text-white/70 font-bold text-3xl cursor-pointer">+</span>
    </span>
  );
};

export default Questions;
