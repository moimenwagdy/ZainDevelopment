import DarkMode from "./DarkModeButton/DarkModeButton";
import Logo from "./Logo/Logo";
import MenuButton from "./Menu/MenuButton/MenuButton";
import Navbar from "./Navbar/Navbar";
import NavIcons from "./NavIcons/NavIcons";

const Header = () => {
  return (
    <>
      <header className=" dark:bg-greyColor ">
        <nav className="h-20 container mx-auto flex justify-between items-center px-1">
          <Logo />
          <MenuButton />
          <div className="flex justify-center items-center gap-x-6">
            <NavIcons />
            <DarkMode />
          </div>
        </nav>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
