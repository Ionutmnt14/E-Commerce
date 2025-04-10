import React from "react";
import exclusive_image from "@/assets/exclusive_image.png";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="flex flex-col pt-12 gap-18 md:gap-0 md:pt-0 md:flex-row items-center justify-between rounded bg-gradient-to-b from-soft-purple/20   to-gray-950 to-70% ">
      <div className="ml-8 flex flex-col items-center md:items-start gap-10 justify-between md:text-left text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-xl md:max-w-2xl font-medium ">
          Where <span className="text-soft-purple">Elegance</span> Meets
          Excellence –<br /> Shop{" "}
          <span className="underline underline-offset-8 font-bold text-soft-purple decoration-white">
            Wearify
          </span>
        </h1>
        <p className="text-2xl max-w-sm">
          Elevate Your Wardrobe with Timeless Elegance
        </p>
        <Button className="rounded-full group w-32 h-12">
          Check Now{" "}
          <IoIosArrowRoundForward className="group-hover:translate-x-1 transition-all duration-500" />
        </Button>
      </div>
      <div>
        <Image src={exclusive_image} alt="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
