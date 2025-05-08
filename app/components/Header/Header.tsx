import DarkMode from "./DarkModeButton/DarkModeButton";
import Logo from "./Logo/Logo";
import MenuButton from "./Menu/MenuButton/MenuButton";
import NavMenu from "./Menu/NavMenu/NavMenu";
import Navbar from "./Navbar/Navbar";
import NavIcons from "./NavIcons/NavIcons";

const Header = () => {
  return (
    <>
      <NavMenu />
      <header className="dark:bg-greyColor ">
        <nav className="h-18 container mx-auto flex justify-between items-center px-1">
          <Logo />
          <MenuButton />
          <div className="hidden md:flex justify-center items-center gap-x-6 ">
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
