"use client";

import { Product } from "@/public";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.escuelajs.co/api/v1/products";

const Navbar = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the API response
        setProducts(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl p-4 shadow">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={200}
            height={200}
            className="object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-sm text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
