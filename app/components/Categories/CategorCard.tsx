import Image, { StaticImageData } from "next/image";
import React from "react";

const CategorCard: React.FC<{ src: StaticImageData; title: string }> = ({
  src,
  title,
}) => {
  return (
    <li className="cursor-pointer relative  min-w-36 h-36 my-auto bg-whiteColor rounded-lg ring-2  ring-basicColor shadow-lg">
      <Image src={src} alt={title} className="rounded-lg w-full h-full" />
      <p className="absolute top-1/2 -translate-y-0.5 text-base  w-full text-center font-bold bg-whiteColor dark:bg-blackColor">
        {title}
      </p>
    </li>
  );
};

export default CategorCard;
