import Image from "next/image";
import hero_image from "@/assets/hero_image.png";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="flex-col md:flex-row md:flex w-full md:items-center pt-32 md:justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="font-bold text-soft-purple">Wearify</span> – Style
            that speaks.
          </h1>
          <p className="text-center md:text-left max-w-3xl my-7 text-sm sm:text-base md:text-lg lg:text-xl">
            Discover the latest trends and timeless classics, curated just for
            you. Wearify <br /> brings comfort, quality, and fashion
            together—because your wardrobe <br /> should be as unique as you
            are.
          </p>
          <Button className="group max-w-3xs w-48 h-14 text-lg cursor-pointer">
            <p>Latest Collection</p>
            <IoIosArrowRoundForward
              className="group-hover:translate-x-1 transition-all duration-300"
              style={{ width: "28px", height: "28px" }}
            />
          </Button>
        </div>
        <div className="flex justify-center pt-16 md:pt-0">
          <Image
            src={hero_image}
            alt="hero_image"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
