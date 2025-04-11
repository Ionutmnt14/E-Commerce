"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  const [showAddress, setShowAddress] = useState(false);

  const products = [
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      category: "Footwear",
    },
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      category: "Footwear",
    },
    {
      name: "Running Shoes",
      description: [
        "Lightweight and comfortable",
        "Breathable mesh upper",
        "Ideal for jogging and casual wear",
      ],
      offerPrice: 250,
      price: 200,
      quantity: 1,
      size: 42,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      category: "Footwear",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full h-[90vh] px-6 mx-auto gap-6">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl text-soft-purple font-bold mb-6 flex flex-col">
          Shopping Cart{" "}
          <span className="text-sm text-white font-medium">3 Items</span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr]  text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {products.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr]  items-center text-sm md:text-base font-medium pt-3 border-b border-soft-purple/20 pb-3"
          >
            <div className="flex items-center md:gap-6 gap-3">
              <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-soft-purple/70 rounded">
                <img
                  className="max-w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div>
                <p className="hidden md:block font-semibold">{product.name}</p>
                <div className="font-normal /70">
                  <p>
                    Size: <span>{product.size || "N/A"}</span>
                  </p>
                  <div className="flex items-center text-gray-500 text-2xs">
                    <p>Quantity:</p>
                    <select className="outline-none text-gray-500">
                      {Array(5)
                        .fill("")
                        .map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-soft-purple">
              <sup>$</sup>
              {product.offerPrice * product.quantity}
            </p>
            <button className="cursor-pointer mx-auto text-red-500">
              <CiCircleRemove
                width={40}
                hanging={20}
                style={{ width: "30px", height: "30px" }}
              />
            </button>
          </div>
        ))}

        <button className="group cursor-pointer flex items-center mt-8 gap-2 text-soft-purple font-medium">
          <Link href={"/"} className="flex items-center justify-center gap-1">
            <FaArrowLeftLong width={15} hanging={11} />
            Continue Shopping
          </Link>
        </button>
      </div>

      <div className="max-w-[360px] mx-auto w-full bg-soft-purple/20 p-5 max-md:mt-16 border border-soft-purple/70 rounded  max-h-[480px] h-full">
        <h2 className="text-xl md:text-xl font-semibold text-soft-purple ">
          Order Summary
        </h2>
        <hr className="border-soft-purple my-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Delivery Address</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-sm text-gray-500">No address found</p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-soft-purple hover:underline cursor-pointer"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                <p
                  onClick={() => setShowAddress(false)}
                  className=" p-2 hover:bg-gray-100"
                >
                  New York, USA
                </p>
                <p
                  onClick={() => setShowAddress(false)}
                  className="text-soft-purple text-center cursor-pointer p-2 hover:bg-soft-purple/10"
                >
                  Add address
                </p>
              </div>
            )}
          </div>

          <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

          <select className="w-full border text-gray-500 border-gray-300 bg-white px-3 py-2 mt-2 outline-none appearance-none rounded-md">
            <option value="">Select an option</option>
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>

        <hr className="border-soft-purple" />

        <div className=" mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Price</span>
            <span>
              <sup>$</sup>20
            </span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span>
            <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>
            <span>
              <sup>$</sup>0.8
            </span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3">
            <span>Total Amount:</span>
            <span className="text-soft-purple">
              <sup>$</sup>
              20.8
            </span>
          </p>
        </div>

        <Button className="w-full max-w-xl mt-4">Place Order</Button>
      </div>
    </div>
  );
};

export default Cart;
