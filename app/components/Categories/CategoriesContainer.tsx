"use client";
import React, { useCallback, useEffect, useRef } from "react";
import CategorCard from "./CategorCard";
import tie from "@/public/categories/tie.webp";
import ac from "@/public/categories/ac.webp";
import auto from "@/public/categories/auto.webp";
import bag from "@/public/categories/bag.webp";
import cutter from "@/public/categories/cutter.webp";
import fixing from "@/public/categories/fixing.webp";
import homeMachine from "@/public/categories/homeMachine.webp";
import kitchen from "@/public/categories/kitchen.webp";
import water from "@/public/categories/water.webp";
import { StaticImageData } from "next/image";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SlidingButton from "./SlidingButton";

const products: { title: string; image: StaticImageData }[] = [
  { title: "عدد يدوية", image: tie },
  { title: "مكيفات سبليت", image: ac },
  { title: "إنارة رحلات", image: auto },
  { title: "العروض و التخفيضات", image: bag },
  { title: "عدد كهربائية", image: cutter },
  { title: "عقود صيانة", image: fixing },
  { title: "الاجهزة المنزلية", image: homeMachine },
  { title: "ادوات المطبخ", image: kitchen },
  { title: "العناية بالسيارة", image: water },
];

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

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }
    }, 16);
    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);
  const duplicatedList = [...products, ...products];

  return (
    <section className="relative">
      <ul
        dir="ltr"
        ref={containerRef}
        className="my-10 flex mx-auto gap-x-4 h-46 overflow-x-hidden scroll-smooth whitespace-nowrap scrollbar-none container"
      >
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
