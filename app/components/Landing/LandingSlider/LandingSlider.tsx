"use client";
import React, { useEffect, useState } from "react";
import zainImg1 from "@/public/zain1.webp";
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
    <section className="w-11/12 mx-auto rounded-lg mt-3 overflow-hidden">
      <SlidingImage images={images} index={index} key={index} />
    </section>
  );
};

export default LandingSlider;
