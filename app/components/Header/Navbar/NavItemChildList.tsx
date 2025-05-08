import { motion } from "framer-motion";

const NavItemChildList: React.FC<{ childList: string[]; hovered: boolean }> = ({
  childList,
  hovered,
}) => {
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
      className={`absolute flex-col md:flex-row h-6 left-70 md:left-0  hidden md:flex-wrap md:justify-start md:items-center gap-x-1 gap-y-1 md:-bottom-7 ${
        isSocialmedia ? " md:left-0  " : "md:right-0  right-20"
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
};

export default NavItemChildList;
