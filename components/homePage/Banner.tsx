import React from "react";
import exclusive_image from "@/assets/exclusive_image.png";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="flex flex-col pt-12 gap-18 md:gap-0 md:pt-0 md:flex-row items-center justify-between rounded bg-gradient-to-b from-soft-purple/20 to-gray-950 to-70% ">
      <div className="w-full  flex flex-col items-center md:items-start gap-10 justify-between md:text-left ">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl max-w-xl md:max-w-2xl font-medium text-center md:text-left leading-snug tracking-wider sm:ml-8 ml-0">
          Where <span className="text-soft-purple font-bold">Elegance</span>{" "}
          Meets Excellence <br /> Shop{" "}
          <span className="underline underline-offset-8 font-bold text-soft-purple decoration-white">
            Wearify
          </span>
        </h1>
        <p className="w-full sm:ml-8 ml-0  text-center md:text-left text-lg md:text-2xl max-w-3xs md:max-w-sm">
          Elevate Your Wardrobe with Timeless Elegance
        </p>
        <Button className="sm:ml-8 ml-0 max-w-3xs md:max-w-sm rounded-full group w-35 md:w-40 md:h-14 h-12 text-base md:text-lg cursor-pointer">
          Check Now{" "}
          <IoIosArrowRoundForward
            style={{ width: "28px", height: "28px" }}
            className="group-hover:translate-x-1 transition-all duration-500"
          />
        </Button>
      </div>
      <div>
        <Image src={exclusive_image} alt="banner-image" />
      </div>
    </div>
  );
};

export default Banner;
