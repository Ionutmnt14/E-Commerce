import { StaticImageData } from "next/image";

export type CartItem = {
  id: number;
  name: string;
  image: StaticImageData | string;
  price: number;
  quantity: number;
};
