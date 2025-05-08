"use client";
import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    const scrollStep = 1;
    let intervalId: NodeJS.Timeout;
  
    const startScrolling = () => {
      intervalId = setInterval(() => {
        if (!container) return;
  
        container.scrollLeft += scrollStep;
  
        if (container.scrollLeft >= container.scrollWidth / 2) {
       
          container.scrollLeft = 0;
        }
      }, 16); 
    };
  
    startScrolling();
  
    return () => clearInterval(intervalId);
  }, []);
  

  const duplicatedList = [...products, ...products];

  return (
    <section>
      <ul
        dir="ltr"
        ref={containerRef}
        className="my-10 flex mx-auto gap-x-4 w-[1000px] h-46 overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-none">
        {duplicatedList.map((e, i) => (
          <CategorCard key={i} title={e.title} src={e.image} />
        ))}
      </ul>
    </section>
  );
};

export default CategoriesContainer;
