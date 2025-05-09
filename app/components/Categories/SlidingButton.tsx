import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";

const SlidingButton: React.FC<{
  onClick: () => void;
  icon: IconDefinition;
  direction: string;
}> = memo(({ onClick, icon, direction }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={` absolute min-w-10 min-h-10 rounded-full ring-4 bg-whiteColor dark:bg-blackColor ring-basicColor top-1/2 -translate-y-1/2 ${
        isLeft ? " left-5 md:left-20 " : " right-5 md:right-20 "
      }     animate-pulse hover:animate-none hover:scale-105 shadow-md shadow-blackColor dark:shadow-md dark:shadow-white cursor-pointer`}>
      <FontAwesomeIcon className="text-basicColor w-10 h-10" icon={icon} />
    </button>
  );
});

export default SlidingButton;
