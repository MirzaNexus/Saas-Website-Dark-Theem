import Hero from "@/components/hero/Hero";
import LogoTickar from "@/components/logo-tickar/LogoTickar";
import Features from "@/components/features/Features";
import Product from "@/components/product/Product";
import Faq from "@/components/FAQ/FAQ";
import SignUp from "@/components/signUp/SignUp";
import Footer from "@/components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <LogoTickar />
      <Features />
      <Product />
      <Faq />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Home;
