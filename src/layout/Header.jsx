import React from "react";
import Navbar from "../components/nav-bar/Navbar";

const Header = () => {
  return (
    <>
      <header className="relative z-10 w-full flex justify-between items-center p-5 bg-black border-b-2 border-pink-950">
        <p className="text-sm font-bold text-white text-center">
          All{" "}
          <span className="text-2xl bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
            Fun
          </span>{" "}
          <span className="block -mt-2 sm:mt-0 sm:inline-block">
            And{" "}
            <span className="text-2xl bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              Games
            </span>
          </span>
        </p>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
