"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/Context"; // ✅ import cart context

const ProductCard = ({
  id,
  name,
  image,
  new_price,
  old_price,
  category,
}: {
  id: number;
  name: string;
  image: StaticImageData | string;
  new_price: number;
  old_price: number;
  category?: string;
}) => {
  const { addToCart, removeFromCart, getItemCount } = useCart(); // ✅ use context
  const count = getItemCount(id); // ✅ get count from context

  return (
    <div className="hover:bg-soft-purple/20 transition-all duration-500 p-3 min-w-56 max-w-sm w-full rounded-lg">
      <Image src={image} alt={name} className="rounded-lg mx-auto mt-2.5" />
      <p className="text-xs text-gray-500 mt-2 capitalize">{category}</p>
      <p className="text-lg mt-1">{name}</p>

      <div className="flex flex-row items-center justify-between mt-2">
        <div className="flex flex-col items-start justify-center">
          <p className="text-2xl text-soft-purple font-medium">
            <sup>$</sup>
            <strong>{new_price}</strong>
          </p>
          <p className="text-sm text-gray-500 line-through">${old_price}</p>
        </div>

        <div>
          {count === 0 ? (
            <Button className="cursor-pointer" onClick={() => addToCart(id)}>
              <IoCartOutline style={{ width: "18px", height: "18px" }} />
              Add to Cart
            </Button>
          ) : (
            <Button>
              <span
                onClick={() => removeFromCart(id)}
                className="text-lg px-2 cursor-pointer"
              >
                -
              </span>
              <span className="w-5 text-center">{count}</span>
              <span
                onClick={() => addToCart(id)}
                className="text-lg px-2 cursor-pointer"
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
