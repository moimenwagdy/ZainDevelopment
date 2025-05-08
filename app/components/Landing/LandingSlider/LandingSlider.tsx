"use client";
import React, { useEffect, useState } from "react";
import zainImg1 from "@/public/Zain1.webp";
import zainImg2 from "@/public/zain2.webp";
import { StaticImageData } from "next/image";
import SlidingImage from "./SlidingImage";

const LandingSlider = () => {
  const images: StaticImageData[] = [zainImg1, zainImg2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="max-w-[1200px] mx-auto rounded-lg mt-3 overflow-hidden shadow-lg shadow-black/10 max-h-[400px] ">
      <SlidingImage images={images} index={index} key={index} />
    </section>
  );
};

export default LandingSlider;
