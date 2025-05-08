"use client";

import { useAppDispatch, useAppSelector } from "@/Store/ReduxHooks";
import { NavMenuSliceActions } from "@/Store/Slices/NavMenuSlice/NavMenuSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import NavMenuItem from "./NavMenuItem";

const NavMenu = () => {
  const MenuState = useAppSelector((state) => state.NavMenuSlice.navMenuStatus);
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(NavMenuSliceActions.closeMenu());
  };
  return (
    <AnimatePresence>
      {MenuState && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="px-3 py-2 m-2 rounded-xl fixed inset-0 md:hidden bg-basicColor dark:bg-darkBasicColor z-1000 backdrop:bg-green-200">
          <button
            className="text-whiteColor "
            onClick={handleCloseModal}
            type="button">
            X
          </button>
          <ul className="min-w-full text-base text-whiteColor">
            <NavMenuItem title="الرئيسية" />
            <NavMenuItem title="خدماتنا" />
            <NavMenuItem title="اقسام المتاجر" />
            <NavMenuItem title="من نحن" />
            <NavMenuItem title="الصيانة" />
            <NavMenuItem title="إتصل بنا" />
            <NavMenuItem title="تواصل اجتامى" />
          </ul>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
