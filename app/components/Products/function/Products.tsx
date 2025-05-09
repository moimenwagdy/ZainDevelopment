"use client";
import React, { memo, useRef } from "react";
import ProductCard from "../ProductCard";
import product from "./getProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Products: React.FC<{ products: product[] }> = memo(({ products }) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const handleScrollRight = () => {
    ulRef?.current?.scrollBy({ left: 200, behavior: "smooth" });
  };
  const handleScrollLeft = () => {
    ulRef?.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  return (
    <>
      <ul
        dir="ltr"
        ref={ulRef}
        className="rounded-2xl w-11/12 flex gap-x-4 overflow-x-scroll scrollbar-none py-2 mx-auto scroll-smooth snap-proximity whitespace-nowrap ">
        {products.map((e, i) => {
          return <ProductCard key={i} product={e} />;
        })}
      </ul>
      <div
        dir="ltr"
        className="absolute top-1/2 -translate-y-1/2 z-100 flex justify-between items-center w-[80%] mx-auto left-1/2 -translate-x-1/2 ">
        <button
          onClick={handleScrollLeft}
          className="text-blackColor dark:text-whiteColor text-7xl animate-pulse cursor-pointer ">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={handleScrollRight}
          className="text-blackColor dark:text-whiteColor text-7xl animate-pulse cursor-pointer ">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </>
  );
});

export default Products;
