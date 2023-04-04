import { ReactNode } from "react";

export type ProductCardProps = {
  image: string;
  title: String;
  price: String;
  description: String;
  rating: Number;
  review: String;
};
export type ComponentProps = {
  children: ReactNode;
};
export type ProductsDataProt = [
  {
    id: number;
    images: string[];
    price: Number;
    description: string;
    rating: number;
    stock: Number;
    title: string;
  }
];
