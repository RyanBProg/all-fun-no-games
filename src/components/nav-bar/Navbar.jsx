import { React, useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/all-fun-and-games/mobile-menu.png";
import exitIcon from "../../assets/all-fun-and-games/exit-icon.png";

const Navbar = () => {
  const navData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Games",
      link: "/games",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white text-4xl font-semibold">
      <button
        aria-label="toggleMenu"
        className="size-10 sm:hidden hover:opacity-70 relative"
        onClick={toggleMenu}>
        <img
          className={`size-10/12 mx-auto transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          src={menuIcon}
          alt="mobile menu icon"
        />
        <img
          className={`size-full mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          src={exitIcon}
          alt="mobile menu close icon"
        />
      </button>
      <ul
        role="menu"
        className={`animate-mobMenu gap-6 text-lg font-semibold text-white sm:flex absolute left-0 top-full flex-col items-end bg-black/90 w-full p-10 sm:relative sm:p-0 sm:flex-row ${
          isOpen ? "flex" : "hidden"
        }`}>
        {navData.map((item, index) => {
          return (
            <li
              role="none"
              key={index}
              className="hover:text-red-400 transition-color duration-300"
              onClick={() => {
                setIsOpen(false);
              }}>
              <Link to={item.link} role="menuitem">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
