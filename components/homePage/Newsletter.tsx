import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "../ui/button";

// We care about the protection of your data.{" "}

const Newsletter = () => {
  return (
    <div className="rounded bg-gradient-to-b from-soft-purple/20 to-gray-950">
      <div className="flex flex-col items-center justify-center text-center space-y-2 py-24">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-soft-purple">
          {" "}
          Sign up for our newsletter
        </h1>
        <p className="text-sm md:text-lg pb-8 pt-8 max-w-sm md:max-w-2xl">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-between md:max-w-2xl w-full md:h-13 h-12 relative max-w-sm">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <TfiEmail size={24} className="text-soft-purple" />
          </div>
          <input
            className="block p-3 pl-10 text-sm border border-gray-300 rounded-md h-full md:border-r-0 outline-none w-full md:rounded-r-none px-3 placeholder:pl-3 md:placeholder:text-base text-sm"
            type="text"
            placeholder="Enter your email"
            required
          />
          <Button className="md:px-12 px-8 h-full rounded-md md:rounded-l-none cursor-pointer text-sm md:text-lg mt-2 md:mt-0 w-full md:w-max">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
