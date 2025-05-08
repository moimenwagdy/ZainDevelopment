"use client";
import Image from "next/image";
import cardBG from "@/public/cardBG.png";
import product from "./function/getProducts";
import { motion } from "framer-motion";
import { Capriola } from "next/font/google";

const capriola = Capriola({
  variable: "--capriola",
  weight: "400",
  subsets: ["latin"],
});
const ProductCard: React.FC<{ product: product }> = ({ product }) => {
  return (
    <motion.li
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      className={`snap-end cursor-pointer relative min-w-40 max-h-[296px]  rounded-lg ${capriola.className} text-sm  ring-basicColor ring-offset-2 ring-offset-whiteColor dark:ring-offset-blackColor ring-2 shaodow-lg dark:shadow-whiteColor dark:shadow-md`}
      dir="ltr">
      <Image
        src={cardBG}
        alt="cardBG"
        width={500}
        height={700}
        className="absolute rounded-lg -z-10 top-0 "
      />
      <p className={` font-bold text-center z-10  text-whiteColor h-10 mt-2 `}>
        {product.title}
      </p>
      <Image
        src={product.images[0]}
        alt="product"
        width={150}
        height={700}
        className="w-fit mx-auto"
      />
      <p className="-mt-2 ms-2 text-green-400" dir="rtl">
        {product.price}رس
      </p>
      <p className="line-clamp-2 text-shadow-sm py-1 font-sans px-1">
        {product.description}
      </p>
      <button className="w-full px-2 bg-basicColor py-1 text-whiteColor cursor-pointer rounded-br-lg rounded-bl-lg">
        Add to cart
      </button>
    </motion.li>
  );
};

export default ProductCard;
