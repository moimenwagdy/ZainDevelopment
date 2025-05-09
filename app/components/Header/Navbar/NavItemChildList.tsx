import { motion } from "framer-motion";
import { memo } from "react";

const NavItemChildList: React.FC<{ childList: string[]; hovered: boolean }> =
  memo(({ childList, hovered }) => {
    const childAnimationVariants = {
      initial: { opacity: !hovered ? 0 : 1 },
      hover: { opacity: hovered ? 1 : 0 },
    };
    const ulAnimationVariants = {
      initial: { display: !hovered ? "none" : "flex" },
      hover: {
        display: hovered ? "flex" : "none",
        transition: {
          staggerChildren: 0.05,
        },
      },
    };
    const isSocialmedia = childList.length === 4;
    return (
      <motion.ul
        variants={ulAnimationVariants}
        animate="hover"
        className={`absolute h-6  hidden flex-wrap justify-start items-center gap-x-1 gap-y-1 md:-bottom-7 ${
          isSocialmedia ? " left-0  " : "right-10  "
        }`}>
        {childList?.map((child, index) => {
          return (
            <motion.li
              variants={childAnimationVariants}
              key={index}
              className="text-sm bg-greyColor text-blackColor md:text-white md:bg-basicColor px-2 py-1 rounded-lg shadow-md ">
              <p className=" text-center">{child}</p>
            </motion.li>
          );
        })}
      </motion.ul>
    );
  });

export default NavItemChildList;
