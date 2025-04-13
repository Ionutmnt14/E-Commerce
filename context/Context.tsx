"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import all_product from "@/assets/data";
import { StaticImageData } from "next/image";

// Type for the cart state (id -> quantity mapping)
type CartItems = {
  [id: number]: number;
};

// Type for detailed product information
type CartItemDetails = {
  id: number;
  image: StaticImageData | string;
  name: string;
  size?: string;
  quantity: number;
  new_price: number;
};

interface ContextType {
  cartItems: CartItems;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemCount: (id: number) => number;
  getTotalAmount: () => number;
  clearCart: () => void;
  getCartItemsDetails: () => CartItemDetails[];
  getTotalItemCount: () => number;
}

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItems>({}); // Fixed type

  const addToCart = (id: number) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    toast.success("Added to cart");
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id]) {
        updated[id] -= 1;
        if (updated[id] <= 0) delete updated[id];
      }
      return updated;
    });
    toast.success("Removed from cart");
  };

  const getTotalItemCount = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const getItemCount = (id: number) => {
    return cartItems[id] || 0;
  };

  const getTotalAmount = () => {
    return Object.entries(cartItems).reduce((sum, [id, qty]) => {
      const product = all_product.find((p) => p.id === parseInt(id));
      return product ? sum + product.new_price * qty : sum;
    }, 0);
  };

  const clearCart = () => {
    setCartItems({});
    toast.success("Cart cleared");
  };

  const getCartItemsDetails = () => {
    return Object.entries(cartItems)
      .map(([id, quantity]) => {
        const product = all_product.find((p) => p.id === parseInt(id));
        if (!product) return null;
        return { ...product, quantity };
      })
      .filter(Boolean) as CartItemDetails[];
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getItemCount,
        getTotalAmount,
        clearCart,
        getCartItemsDetails,
        getTotalItemCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useCart = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
