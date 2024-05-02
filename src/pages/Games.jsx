import React from "react";
import GameCards from "../components/home/GameCards.jsx";

const Games = () => {
  return (
    <div className="bg-[url(./assets/all-fun-and-games/home-bg.jpg)] px-5 pb-5 z-0">
      <h1 className=" text-white mx-auto py-10 text-4xl sm:text-5xl font-bold text-center">
        View Our{" "}
        <span className="text-6xl sm:text-7xl mx-1 bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
          Games
        </span>
      </h1>
      <GameCards />
    </div>
  );
};

export default Games;
