"use client";

import { useAppDispatch } from "@/Store/ReduxHooks";
import { NavMenuSliceActions } from "@/Store/Slices/NavMenuSlice/NavMenuSlice";
import { motion } from "framer-motion";

const MenuButton = () => {
  const dispatch = useAppDispatch();
  const barVariants = {
    hover: { width: "100%", transition: { type: "spring", stiffness: 200 } },
  };

  const handleOpenMenu = () => {
    dispatch(NavMenuSliceActions.openMenu());
  };
  return (
    <motion.div
      onClick={handleOpenMenu}
      className="w-16 h-7 flex flex-col justify-between cursor-pointer md:hidden"
      dir="ltr"
      variants={{ hover: {} }}
      initial="initial"
      whileHover="hover">
      <motion.span
        variants={barVariants}
        className="w-12 h-1 bg-basicColor rounded "></motion.span>
      <motion.span
        variants={barVariants}
        className="w-10 h-1 bg-basicColor rounded "></motion.span>
      <motion.span
        variants={barVariants}
        className="w-14 h-1 bg-basicColor rounded "></motion.span>
    </motion.div>
  );
};

export default MenuButton;
