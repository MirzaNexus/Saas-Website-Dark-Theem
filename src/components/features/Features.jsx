import FeatureCard from "./feature-card/FeatureCard";
const FeatureCardInfo = [
  {
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];
const Features = () => {
  return (
    <section className="relative overflow-hidden w-full lg:h-[742px] h-auto bg-black md:px-16 px-5 md:py-24 py-10">
      <div className="w-full h-full flex flex-col items-center justify-between gap-10">
        <div className="lg:w-[45%] md:w-[76%] w-full h-[175px] py-3">
          <h1 className="text-white font-bold md:text-5xl text-4xl text-center mb-5">
            Everything you need
          </h1>
          <p className="text-white text-center lg:text-xl text-lg  lg:px-5 md:px-10 px-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="w-[100%] lg:h-[260px] h-auto flex lg:flex-row flex-col items-center justify-between gap-x-5 gap-y-10  md:py-12 py-6 lg:py-0">
          {FeatureCardInfo.map(({ title, description }, id) => (
            <FeatureCard key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
