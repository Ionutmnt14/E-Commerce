import Hero from "@/components/homePage/Hero";
import Women from "@/components/homePage/Women";

export default function Home() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 gap-32 flex flex-col pb-[1000px]">
      <Hero />
      <Women />
    </div>
  );
}
