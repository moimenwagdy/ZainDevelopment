import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

const ProductsSlidingButton: React.FC<{
  onClick: () => void;
  icon: IconDefinition;
  direction: string;
}> = memo(({ onClick, icon, direction }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={` hidden absolute top-1/2 -translate-y-1/2 group-hover:flex justify-center items-center bg-whiteColor dark:bg-blackColor ${
        isLeft ? "left-5 md:left-20" : "right-5 md:right-20"
      }  dark:text-whiteColo w-10 h-10 md: md:w-13 md:h-13 rounded-full bg-transparent ring-2 ring-basicColor text-7xl cursor-pointer animate-pulse hover:animate-none hover:scale-105 shadow-md shadow-blackColor opacity-0 hover:opacity-100`}>
      <FontAwesomeIcon
        className="text-basicColor w-4 h-4 md:w-6 md:h-6"
        icon={icon}
      />
    </button>
  );
});

export default ProductsSlidingButton;
