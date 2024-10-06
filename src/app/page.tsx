
import Banner from "@/Components/Banner";
import Faq from "@/Components/Faq";
import Features from "@/Components/Features";
import Footer from "@/Components/GetAcess";
import Hero from "@/Components/Hero";
import Logo from "@/Components/Logo";
import Navbar from "@/Components/Navbar";
import Product from "@/Components/Products";
export default function Home() {
  return (
    <div>
      <Banner/>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Features/>
      <Product/>
      <Faq/>
      <Footer/>
    </div>
  );
}
