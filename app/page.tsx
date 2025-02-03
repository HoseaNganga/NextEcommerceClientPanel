import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeHero from "@/components/HomeHero/HomeHero";

export default function Home() {
  return (
    <div className="w-full h-screen items-center justify-center overflow-hidden ">
      <Header />
      <HomeHero />
      <Footer />
    </div>
  );
}
