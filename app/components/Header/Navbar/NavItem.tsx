"use client";
import NavItemChildList from "./NavItemChildList";
import { useState } from "react";

const NavItem: React.FC<{
  title: string;
  childList?: string[];
}> = ({ title, childList }) => {
  const [hovered, setCHildHoverd] = useState<boolean>(false);

  return (
    <li
      onMouseEnter={() => {
        setCHildHoverd(true);
      }}
      onMouseLeave={() => setCHildHoverd(false)}
      className="cursor-pointer flex gap-x-1 justify-center items-center h-12">
      <p className="text-shadow-sm text-shadow-black/30 text-base">{title}</p>
      {childList && <p>*</p>}
      {childList && (
        <NavItemChildList childList={childList} hovered={hovered} />
      )}
    </li>
  );
};

export default NavItem;
