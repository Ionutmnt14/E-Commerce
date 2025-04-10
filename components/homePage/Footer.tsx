import { options, socials } from "@/assets/data";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between items-center gap-14 pb-2">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            className="w-14 sm:w-16 md:w-20 lg:w-24"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Wearify
          </h1>
        </div>
        <div className="flex gap-10 ">
          {options.map(({ name, className }) => (
            <p key={name} className={className}>
              {name}
            </p>
          ))}
        </div>
        <div className="flex gap-6">
          {socials.map(({ icon, id }) => (
            <div key={id} className="">
              {icon}
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-soft-purple/50 rounded-r-full rounded-l-full" />
        <div className="mb-6 text-sm md:text-base">
          <p>© 2025 Wearify™. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
