"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({
  name,
  image,
  new_price,
  old_price,
  category,
}: {
  name: string;
  image: StaticImageData | string;
  new_price: number;
  old_price: number;
  category?: string;
}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="hover:bg-soft-purple/20 transition-all duration-500 p-3 min-w-56 max-w-sm w-full rounded-lg">
      <Image src={image} alt={name} className="rounded-lg " />
      <p className="text-xs text-gray-500 mt-2 capitalize">{category}</p>
      <p className="text-lg mt-1">{name}</p>
      <div className="flex flex-row items-center justify-between mt-2">
        <div className="flex flex-col items-start justify-center ">
          <p className="text-2xl text-soft-purple font-medium">
            <sup>$</sup>
            <strong className="">{new_price}</strong>
          </p>
          <p className="text-sm text-gray-500 line-through">${old_price}</p>
        </div>
        <div>
          {count === 0 ? (
            <Button onClick={() => setCount(1)} className="cursor-pointer">
              <IoCartOutline style={{ width: "18px", height: "18px" }} />
              Add to Cart
            </Button>
          ) : (
            <Button>
              <span
                onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                className="text-lg"
              >
                -
              </span>
              <span className="w-5 text-center">{count}</span>
              <span
                onClick={() => setCount((prev) => Math.max(prev + 1))}
                className="text-lg"
              >
                +
              </span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
