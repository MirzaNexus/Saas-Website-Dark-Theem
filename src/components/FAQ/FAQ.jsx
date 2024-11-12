import Questions from "./question's/Qusetions";
const FrequentlyAskQuestion = [
  "How does the pricing work for teams",
  "How does the pricing work for teams",
  "How does the pricing work for teams",
  "How does the pricing work for teams",
];
const Faq = () => {
  return (
    <div className="w-full lg:px-20 h-[706px] bg-[linear-gradient(to_bottom,#4F21A1,#000000)] flex items-center justify-center">
      <div className="lg:p-5 p-0 lg:w-[70%] md:w-[80%] w-[90%] flex flex-col gap-10 ">
        <h1 className="text-white text-5xl text-center font-semibold">
          Frequently asked questions
        </h1>
        {FrequentlyAskQuestion.map((data, id) => (
          <Questions key={id} question={data} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
