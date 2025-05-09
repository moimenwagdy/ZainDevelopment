"use client";
import React, { memo, useCallback, useRef } from "react";
import ProductCard from "./ProductCard";
import product from "./function/getProducts";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ProductsSlidingButton from "./ProductsSlidingButton";

const Products: React.FC<{ products: product[] }> = memo(({ products }) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const handleScrollRight = useCallback(() => {
    ulRef?.current?.scrollBy({ left: 200, behavior: "smooth" });
  }, []);
  const handleScrollLeft = useCallback(() => {
    ulRef?.current?.scrollBy({ left: -200, behavior: "smooth" });
  }, []);

  return (
    <>
      <ul
        dir="ltr"
        ref={ulRef}
        className="rounded-2xl container flex gap-x-4 overflow-x-scroll scrollbar-none py-2 mx-auto scroll-smooth snap-proximity whitespace-nowrap ">
        {products.map((e, i) => {
          return <ProductCard key={i} product={e} />;
        })}
      </ul>
      <ProductsSlidingButton
        direction="left"
        onClick={handleScrollLeft}
        icon={faAngleLeft}
      />
      <ProductsSlidingButton
        direction="right"
        onClick={handleScrollRight}
        icon={faAngleRight}
      />
    </>
  );
});

export default Products;
