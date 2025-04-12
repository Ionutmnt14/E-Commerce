import React from "react";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";

const CategoryBanner = ({
  banner,
  text,
  subtext,
  icon,
  button,
}: {
  banner: StaticImageData | string;
  icon: React.ReactNode;
  button: string;
  text: string;
  subtext: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between mx-auto bg-gradient-to-b md:bg-gradient-to-r from-soft-purple/20 to-gray-950 to-70% rounded md:max-w-5xl max-w-sm pt-8 md:pt-4 gap-18 md:gap-0 md:p-8 ">
      <div className="mx-10 flex flex-col items-center md:items-start gap-6">
        <h1 className="text-center md:text-left text-2xl  lg:text-4xl font-bold">
          {text}
        </h1>
        <p className="font-medium text-sm md:text-base lg:text-xl">{subtext}</p>
        <Button className="max-w-fit !px-6 h-10 rounded-full">
          <p>{button}</p>
          {icon}
        </Button>
      </div>
      <div className="mx-10">
        <Image
          src={banner}
          alt="banners"
          width={220}
          height={220}
          className="bg-cover object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryBanner;
