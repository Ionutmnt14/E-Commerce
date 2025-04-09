"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { useState } from "react";
import { nav_links } from "@/assets/data";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdClose, MdMenu } from "react-icons/md";
import { Button } from "../ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-gray-950 relative transition-all">
      <div className="flex items-center gap-8 sm:justify-between w-full">
        <Link
          href={"/"}
          className="flex flex-row justify-center items-center relative z-50"
        >
          <Image src={logo} alt="logo" width={40} height={40} />
          <p className="text-xl md:text-2xl font-bold px-2 ">Wearify</p>
        </Link>

        {/* Desktop Menu */}
        <div className="gap-8 hidden sm:flex pl-20">
          {nav_links.map(({ name, href }) => (
            <Link
              href={href}
              key={name}
              className="w-full group text-base md:text-lg font-medium "
            >
              {name}
              <span className="w-0 h-0.5 rounded-r-full rounded-l-full bg-soft-purple transition-all duration-700 flex opacity-0 group-hover:opacity-100 group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="gap-8 items-center hidden sm:flex">
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <CiSearch className="size-5" />
          </div>

          <div className="relative cursor-pointer">
            <IoCartOutline className="size-7" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-soft-purple w-[18px] h-[18px] rounded-full">
              3
            </button>
          </div>

          <Button className="cursor-pointer !rounded-full w-24 h-10">
            Login
          </Button>
        </div>
      </div>

      <div className="sm:hidden w-full flex justify-end">
        {/* Menu Icon */}
        <button onClick={toggleMenu} className="flex items-end">
          {open ? <MdClose size={25} /> : <MdMenu size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[47px] left-0 w-full bg-gray-950 shadow-md py-4 flex-col items-center gap-6 px-5 text-sm md:hidden`}
      >
        {nav_links.map(({ name, href }) => (
          <Link
            href={href}
            key={name}
            onClick={() => setOpen(false)}
            className="w-full flex items-center flex-col gap-2 justify-center text-base"
          >
            {name}
            <span className="w-full h-0.5 border-b border-soft-purple/70" />
          </Link>
        ))}
        <Button className="cursor-pointer !rounded-full w-24 h-10">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
