import Banner from "@/components/homePage/Banner";
import Footer from "@/components/homePage/Footer";
import Hero from "@/components/homePage/Hero";
import NewCollection from "@/components/homePage/NewCollection";
import Newsletter from "@/components/homePage/Newsletter";
import Women from "@/components/homePage/Women";

export default function Home() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 gap-64 flex flex-col mx-auto">
      <Hero />
      <Women />
      <Banner />
      <NewCollection />
      <Newsletter />
      <Footer />
    </div>
  );
}
