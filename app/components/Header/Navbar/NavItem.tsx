"use client";
import NavItemChildList from "./NavItemChildList";
import { memo, useState } from "react";

const NavItem: React.FC<{
  title: string;
  childList?: string[];
}> = memo(({ title, childList }) => {
  const [hovered, setCHildHoverd] = useState<boolean>(false);

  return (
    <li
      onMouseEnter={() => {
        setCHildHoverd(true);
      }}
      onMouseLeave={() => setCHildHoverd(false)}
      className="cursor-pointer flex gap-x-1 justify-start items-center h-12 hover:bg-blackColor/50 rounded-lg px-2">
      <p className="text-shadow-sm text-shadow-black/30 text-base ">{title}</p>
      {childList && <p>*</p>}
      {childList && (
        <NavItemChildList childList={childList} hovered={hovered} />
      )}
    </li>
  );
});

export default NavItem;
