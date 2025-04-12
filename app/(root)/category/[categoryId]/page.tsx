import React from "react";
import all_product, { banners } from "@/assets/data";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import CategoryBanner from "@/components/categoryBanner/CategoryBanner";

const page = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;

  // Filter products based on the categoryId
  const filteredProducts = all_product.filter(
    (product) => product.category === categoryId
  );

  const filteredImages = banners.filter(
    (image) => image.category === categoryId
  );

  return (
    <div className="mt-12 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col gap-18">
      {filteredImages.map(({ banner, text, subtext, index, button, icon }) => (
        <CategoryBanner
          key={index}
          text={text}
          subtext={subtext}
          banner={banner}
          button={button}
          icon={icon}
        />
      ))}
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
