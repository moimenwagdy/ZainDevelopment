import React from "react";

const NavMenuItem: React.FC<{ title: string }> = ({ title }) => {
  return <li>{title}</li>;
};

export default NavMenuItem;
