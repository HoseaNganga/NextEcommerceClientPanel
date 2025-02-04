import FlashProducts from "@/components/FlashProducts/FlashProducts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeHero from "@/components/HomeHero/HomeHero";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] items-center justify-center overflow-hidden ">
      <Header />
      <HomeHero />
      <FlashProducts />
      <Footer />
    </div>
  );
}
