import GameCards from "../components/home/GameCards.jsx";

const Home = () => {
  return (
    <main className="bg-[url(./assets/all-fun-and-games/home-bg.jpg)] px-5 pb-5">
      <section className="flex flex-col justify-center items-center py-32 text-white">
        <p className="text-xl font-semibold text-gray-400 mx-auto -mb-1">
          Welcome to
        </p>
        <h1 className="mx-auto text-4xl sm:text-5xl font-bold text-center">
          All{" "}
          <span className="text-6xl sm:text-7xl mx-1 bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text">
            Fun
          </span>{" "}
          <span className="block -mt-2 sm:mt-0 sm:inline-block">
            And{" "}
            <span className="text-6xl sm:text-7xl mx-1 bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              Games
            </span>
          </span>
        </h1>
        <p className="text-center max-w-[60ch] mx-auto mt-6 font-light text-lg">
          Where the only thing serious is the fun you'll have! 🎮 Get ready to
          embark on a wild ride through our virtual wonderland, where every
          click brings laughter.
        </p>
      </section>
      <section className="bg-white/5 py-14 sm:py-20 rounded-xl">
        <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
          Popular Games
        </h2>
        <GameCards />
      </section>
    </main>
  );
};

export default Home;
