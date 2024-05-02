import { useContext, useEffect } from "react";
import { QuestionDataContext } from "../../context/quizzy-context.js";

const QuizQuestions = ({ dispatch }) => {
  const questionData = useContext(QuestionDataContext);

  // to scroll to the top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUserAnswer = (e) => {
    dispatch({
      type: "question_answered",
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <ul className="flex flex-col gap-2">
      {questionData.map((currentQuestion, questionIndex) => {
        return (
          <li
            key={questionIndex}
            className="p-4 text-slate-900 font-bold bg-slate-50 rounded-md hover:bg-slate-100 hover:shadow-md">
            <h2 className="text-lg text-slate-800 mb-3">
              <span className="text-teal-600 text-sm mr-2">{`${
                questionIndex + 1
              }.`}</span>
              {currentQuestion.question}
            </h2>
            <div className="flex flex-col gap-2">
              {currentQuestion.answers.map((currentAnswer, answerIndex) => {
                return (
                  <div
                    key={answerIndex}
                    className="flex items-center py-1 font-light bg-teal-500 pl-3 max-w-max rounded-md text-teal-100 hover:bg-teal-600">
                    <input
                      type="radio"
                      name={`${questionIndex}`}
                      id={`question${questionIndex}-option${answerIndex}`}
                      value={currentAnswer}
                      onChange={handleUserAnswer}
                    />
                    <label
                      htmlFor={`question${questionIndex}-option${answerIndex}`}
                      className="px-2">
                      {currentAnswer}
                    </label>
                  </div>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default QuizQuestions;
