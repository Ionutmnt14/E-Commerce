import React from "react";
import all_products from "@/assets/all_product";
import Image from "next/image";

const page = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;

  // Filter products based on the categoryId
  const filteredProducts = all_products.filter(
    (product) => product.category === categoryId
  );

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">Category: {categoryId}</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full  object-cover rounded-md"
                width={150}
                height={500}
              />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-600">
                <span className="line-through">${product.old_price}</span>{" "}
                <span className="text-red-500">${product.new_price}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-6">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default page;
