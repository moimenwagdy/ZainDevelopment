import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavIcons = () => {
  return (
    <div className=" justify-center items-center text-basicColor gap-x-4 flex">
      <FontAwesomeIcon className="w-8 cursor-pointer" icon={faCartShopping} />
      <FontAwesomeIcon className="w-6 cursor-pointer" icon={faUser} />
    </div>
  );
};

export default NavIcons;
