import { useEffect, useContext } from "react";
import sprakleImage from "../../assets/quizzy/sparkle.png";
import fireworksImage from "../../assets/quizzy/fireworks.png";
import playAgainImage from "../../assets/quizzy/play-again.png";
import { QuestionDataContext } from "../../context/quizzy-context.js";

const ResultsList = ({ gameState }) => {
  const questionData = useContext(QuestionDataContext);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
      {questionData.map((currentQuestion, index) => {
        const correctAnswer = currentQuestion.correctAnswer;
        const playerAnswer = gameState.answeredQuestions[index];

        const resultTextColor = () => {
          if (correctAnswer === playerAnswer) {
            return "text-green-600";
          } else {
            return "text-red-600";
          }
        };

        return (
          <li key={index} className="flex flex-col">
            <div className={`text-lg ${resultTextColor()} mb-1 font-bold`}>
              <span className="text-teal-600 text-sm mr-2">{`${
                index + 1
              }.`}</span>
              {currentQuestion.question}
            </div>
            <div>
              <span className="text-slate-500 text-sm mr-2 font-light">
                You answered:
              </span>
              {playerAnswer}
            </div>
            <div>
              <span className="text-slate-500 text-sm mr-2 font-light">
                The correct answer was:
              </span>
              {correctAnswer}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const ScorePage = ({ gameState, dispatch, toggleInGame }) => {
  // to scroll to the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-slate-50 pb-44 pt-24 px-5">
        <img src={fireworksImage} alt="fireworks icon" className="mb-2" />
        <h2 className="text-5xl font-bold text-teal-700 text-center">
          You completed the quiz
        </h2>
        <p className="mt-4 text-xl text-slate-500">
          Your score was: {gameState.score} out of{" "}
          {Object.keys(gameState.answeredQuestions).length}
        </p>
        <ResultsList gameState={gameState} />
        <div className="flex gap-3 sm:gap-4">
          <button
            className="bg-teal-600 text-white flex items-center gap-1 py-1 px-3 sm:py-2 sm:px-10 rounded-md hover:bg-teal-700"
            onClick={() => dispatch({ type: "game_reset" })}>
            Play Again
            <img
              src={playAgainImage}
              alt="play again icon"
              className="filter invert"
            />
          </button>
          <button
            className="border flex items-center gap-1 border-slate-500 text-slate-700 py-1 px-3 sm:py-2 sm:px-10 rounded-md hover:bg-slate-200 hover:text-slate-900"
            onClick={toggleInGame}>
            Change Game
            <img src={sprakleImage} alt="sparkle icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ScorePage;
