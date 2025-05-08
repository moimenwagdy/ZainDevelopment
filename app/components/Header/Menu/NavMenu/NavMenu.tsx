"use client";

import { useAppDispatch, useAppSelector } from "@/Store/ReduxHooks";
import { NavMenuSliceActions } from "@/Store/Slices/NavMenuSlice/NavMenuSlice";
import { AnimatePresence, motion } from "framer-motion";
import NavMenuItem from "./NavMenuItem";
import NavItem from "../../Navbar/NavItem";
import DarkMode from "../../DarkModeButton/DarkModeButton";
import NavIcons from "../../NavIcons/NavIcons";
import ExitMenuButton from "./ExitMenuButton";

const NavMenu = () => {
  const MenuState = useAppSelector((state) => state.NavMenuSlice.navMenuStatus);

  return (
    <AnimatePresence>
      {MenuState && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="ps-4 py-3 m-2 rounded-xl fixed inset-0 md:hidden bg-basicColor dark:bg-darkBasicColor z-1000 backdrop:bg-green-200">
          <ExitMenuButton />
          <ul className="min-w-full text-lg text-whiteColor space-y-4 py-4 ">
            <li className="w-fit">
              <NavIcons />
            </li>
            <NavMenuItem title="الرئيسية" />
            <NavMenuItem title="خدماتنا" />
            <NavMenuItem title="اقسام المتاجر" />
            <NavMenuItem title="من نحن" />
            <NavMenuItem title="الصيانة" />
            <NavMenuItem title="إتصل بنا" />
            <NavMenuItem title="تواصل اجتماعى" />
            <li className="w-fit mt-4">
              <DarkMode />
            </li>
          </ul>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
