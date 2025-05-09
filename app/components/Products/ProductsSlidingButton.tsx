import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";

const ProductsSlidingButton: React.FC<{
  onClick: () => void;
  icon: IconDefinition;
  direction: string;
}> = memo(({ onClick, icon, direction }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={` absolute top-1/2 -translate-y-1/2 flex justify-center items-center  ${
        isLeft ? "left-20" : "right-20"
      }  dark:text-whiteColo w-10 h-10 md: md:w-16 md:h-16 rounded-full bg-transparent ring-2 ring-basicColor text-7xl cursor-pointer animate-pulse hover:animate-none hover:scale-105 shadow-md shadow-blackColor `}>
      <FontAwesomeIcon
        className="text-basicColor w-6 h-6 md:w-8 md:h-8"
        icon={icon}
      />
    </button>
  );
});

export default ProductsSlidingButton;
