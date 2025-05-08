import Image from "next/image";
import React from "react";
import logo from "@/public/zainLogo.png";

const Logo = () => {
  return <Image src={logo} width={180} height={40} priority alt="Logo" className="w-30 md:w-40"/>;
};

export default Logo;
