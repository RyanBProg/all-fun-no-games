import gameCardData from "./gameCardData.json";
import { Link } from "react-router-dom";

const Badges = ({ badges }) => {
  return (
    <ul role="list" className="flex gap-2 mb-2">
      {badges.map((badge, index) => {
        return (
          <li key={index} className="text-sm bg-red-400 rounded-md p-1">
            {badge}
          </li>
        );
      })}
    </ul>
  );
};

const Card = ({ gameData }) => {
  return (
    <div className="relative rounded-xl w-64 sm:w-64 h-full border-white border-4 backdrop-blur-sm">
      <div className="font-bold text-4xl bg-white py-3">
        <h3 className="text-center">{gameData.title}</h3>
      </div>
      <div className="text-white m-4 mb-16">
        <div className="flex gap-2 mb-2">
          <Badges badges={gameData.badges} />
        </div>
        <p className="font-extralight">{gameData.description}</p>
      </div>
      <Link to={gameData.link}>
        <button
          aria-label={`Play ${gameData.title} Now`}
          className="absolute bottom-0 bg-white/15 w-full rounded-b-lg text-white font-semibold py-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 transition ease-in">
          Play Now
        </button>
      </Link>
    </div>
  );
};

const GameCards = () => {
  return (
    <ul
      role="list"
      className="max-w-max mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-items-center">
      {gameCardData.map((game, index) => {
        return (
          <li key={`q-${index}`} className="h-full">
            <Card gameData={game} />
          </li>
        );
      })}
    </ul>
  );
};

export default GameCards;
