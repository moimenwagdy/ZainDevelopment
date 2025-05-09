"use client";
import React, { useCallback, useEffect, useRef } from "react";
import CategorCard from "./CategorCard";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SlidingButton from "./SlidingButton";
import { categories } from "./CategoriesArray";



const CategoriesContainer = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const handleScrollRight = useCallback(() => {
    containerRef?.current?.scrollBy({ left: 200, behavior: "smooth" });
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
  }, []);
  const handleScrollLeft = useCallback(() => {
    containerRef?.current?.scrollBy({ left: -200, behavior: "smooth" });
    if (intervalIdRef.current) clearInterval(intervalIdRef.current);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrollStep = 1;
    intervalIdRef.current = setInterval(() => {
      if (!container) return;
      container.scrollLeft += scrollStep;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }
    }, 16);
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);
  const duplicatedList = [...categories, ...categories];

  return (
    <section className="relative">
      <ul
        dir="ltr"
        ref={containerRef}
        className="my-10 flex mx-auto gap-x-4 h-46 overflow-x-hidden scroll-smooth whitespace-nowrap scrollbar-none container">
        {duplicatedList.map((e, i) => (
          <CategorCard key={i} title={e.title} src={e.image} />
        ))}
      </ul>
      <SlidingButton
        direction="right"
        icon={faAngleRight}
        onClick={handleScrollRight}
      />
      <SlidingButton
        direction="left"
        icon={faAngleLeft}
        onClick={handleScrollLeft}
      />
    </section>
  );
};

export default CategoriesContainer;
