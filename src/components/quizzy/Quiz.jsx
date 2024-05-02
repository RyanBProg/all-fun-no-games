import { useContext, useReducer } from "react";
import QuizQuestions from "./QuizQuestions";
import ScorePage from "./ScorePage";
import { QuestionDataContext } from "../../context/quizzy-context.js";
import {
  quizzyInitialState,
  quizzyReducer,
} from "../../state/quizzy-reducer.js";

const Quiz = ({ toggleInGame }) => {
  const [gameState, dispatch] = useReducer(quizzyReducer, quizzyInitialState);
  const questionData = useContext(QuestionDataContext);

  const getGameResults = () => {
    questionData.forEach((currentQuestion, index) => {
      const correctAnswer = currentQuestion.correctAnswer;
      const playerAnswer = gameState.answeredQuestions[index];

      if (correctAnswer === playerAnswer) {
        dispatch({ type: "score_incremented" });
      }
    });
    dispatch({ type: "quiz_finished" });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    getGameResults();
  };

  const Loading = () => {
    return (
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <span className="text-teal-600 font-semibold text-xl">Loading</span>
        <div className="flex space-x-2 justify-center items-center">
          <div className="h-6 w-4 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-6 w-4 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-6 w-4 bg-teal-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  };

  // check if data has been fetched and formatted
  if (questionData.length > 0) {
    const allQuestionsAnswered =
      Object.keys(gameState.answeredQuestions).length === questionData.length;

    if (gameState.quizFinished) {
      return (
        <ScorePage
          gameState={gameState}
          dispatch={dispatch}
          toggleInGame={toggleInGame}
        />
      );
    } else {
      return (
        <form action="" className="p-10">
          <QuizQuestions dispatch={dispatch} />
          <button
            type="submit"
            onClick={formSubmit}
            disabled={!allQuestionsAnswered}
            className={`text-white py-2 px-10 rounded-md mt-4  ${
              !allQuestionsAnswered
                ? "bg-gray-400"
                : "bg-red-500 hover:bg-red-600"
            }`}>
            Submit Answers
          </button>
        </form>
      );
    }
  } else {
    return <Loading />;
  }
};

export default Quiz;
