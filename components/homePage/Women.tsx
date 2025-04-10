import { data_product } from "@/assets/data";
import React from "react";
import ProductCard from "../ProductCard";

const Women = () => {
  return (
    <div>
      <div className="w-full flex items-center flex-col pb-24">
        <h1 className="text-5xl font-medium">Women&apos;s favorites</h1>
        <div className="w-40 h-1.5 rounded-l-full rounded-r-full bg-soft-purple mt-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {data_product.map(
          ({ id, name, image, new_price, old_price, category }) => (
            <ProductCard
              key={id}
              name={name}
              image={image}
              new_price={new_price}
              old_price={old_price}
              category={category}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Women;
