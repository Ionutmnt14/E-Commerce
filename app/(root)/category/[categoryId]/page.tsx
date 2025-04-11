import React from "react";
import all_product from "@/assets/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { banner_men, banner_women, banner_kids } from "@/assets/data";
import { FaGift } from "react-icons/fa";

const page = async ({
  params,
}: {
  params: { categoryId: string; images: string };
}) => {
  const { categoryId } = await params;

  // Filter products based on the categoryId
  const filteredProducts = all_product.filter(
    (product) => product.category === categoryId
  );

  // const filteredImages = all_product.filter(
  //   (product) => product.category === categoryId
  // );

  return (
    <div className="mt-12 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col gap-18">
      <div className="flex h-72  w-full items-center justify-between mx-auto bg-gradient-to-r from-soft-purple/20 to-gray-950 to-70% rounded max-w-5xl">
        <div className="mx-10 flex flex-col gap-6">
          <h1 className="text-4xl">
            Exclusive Men&apos;s Deals – Up to 50% Off!
          </h1>
          <p>Shop Now & Upgrade Your Style</p>
          <Button className="max-w-40 h-10 rounded-full">
            Get a Discount <FaGift />
          </Button>
        </div>
        <div className="mx-10">
          <Image src={banner_men} alt="banner-mens" width={200} height={200} />
        </div>
      </div>
      <div>
        <p></p>
        <Button></Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
        {filteredProducts.map(
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

export default page;
