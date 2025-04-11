import React from "react";
import { new_collections } from "@/assets/data";
import ProductCard from "../ProductCard";

const NewCollection = () => {
  return (
    <>
      <div className="w-full items-center flex flex-col">
        <div className=" flex flex-col items-center justify-center mb-12">
          <h1 className="text-5xl font-medium">New Collections</h1>
          <div className="w-40 h-1.5 rounded-l-full rounded-r-full bg-soft-purple mt-3" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {new_collections.map(({ id, name, image, new_price, old_price }) => (
            <ProductCard
              key={id}
              name={name}
              image={image}
              new_price={new_price}
              old_price={old_price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewCollection;
