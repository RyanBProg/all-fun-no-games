import { useState } from "react";
import brainImage from "../../assets/quizzy/brain.png";

const QuizBuilder = ({ updateUrl, toggleInGame }) => {
  const [questionQty, setQuestionQty] = useState("");
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [questionType, setQuestionType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUrl(
      `https://opentdb.com/api.php?amount=${questionQty}&category=${questionCategory}&difficulty=${questionDifficulty}&type=${questionType}`
    );
    toggleInGame();
  };

  const isFormValid = () => {
    return (
      questionQty && questionCategory && questionDifficulty && questionType
    );
  };

  return (
    <form
      action=""
      className="flex flex-col gap-4 justify-center items-center py-16 sm:pb-44 sm:pt-24 px-5">
      <img src={brainImage} alt="brain icon" />
      <h2 className="font-bold text-4xl sm:text-5xl">
        Build Your Trivia Questionaire
      </h2>
      <p className="text-slate-500">
        Think you're smart? Test your knowledge with a custom built quiz on a
        wide array of topics.
      </p>
      <div className="flex flex-col bg-slate-100 rounded-lg py-10 px-6 w-[330px] sm:w-[450px] mt-4">
        <label
          htmlFor="question-qty"
          className="mb-2 text-sm font-medium text-slate-500">
          Number of Questions:
        </label>
        <select
          name="question-qty"
          id="question-qty"
          className="max-w-min p-2 mb-6 text-sm text-gray-900 border border-teal-500 rounded-md bg-gray-50 focus:ring-teal-600 focus:border-teal-600"
          onChange={(e) => setQuestionQty(e.target.value)}>
          <option value=""></option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
        <label
          htmlFor="question-category"
          className="mb-2 text-sm font-medium text-slate-500">
          Select Category:
        </label>
        <select
          name="question-category"
          id="question-category"
          className="max-w-min p-2 mb-6 text-sm text-gray-900 border border-teal-500 rounded-md bg-gray-50 focus:ring-teal-600 focus:border-teal-600"
          onChange={(e) => setQuestionCategory(e.target.value)}>
          <option value=""></option>
          <option value="9">General Knowledge</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="17">Science & Nature</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
        </select>
        <label
          htmlFor="question-difficulty"
          className="mb-2 text-sm font-medium text-slate-500">
          Question Difficulty
        </label>
        <select
          name="question-difficulty"
          id="question-difficulty"
          className="max-w-min p-2 mb-6 text-sm text-gray-900 border border-teal-500 rounded-md bg-gray-50 focus:ring-teal-600 focus:border-teal-600"
          onChange={(e) => setQuestionDifficulty(e.target.value)}>
          <option value=""></option>
          <option value="easy">Easy</option>
          <option value="medium">Normal</option>
        </select>
        <label
          htmlFor="question-type"
          className="mb-2 text-sm font-medium text-slate-500">
          Answer Type
        </label>
        <select
          name="question-type"
          id="question-type"
          className="max-w-min p-2 mb-6 text-sm text-gray-900 border border-teal-500 rounded-md bg-gray-50 focus:ring-teal-600 focus:border-teal-600"
          onChange={(e) => setQuestionType(e.target.value)}>
          <option value=""></option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True or False</option>
        </select>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`bg-teal-600 text-white py-2 px-10 rounded-md mt-8 ${
            !isFormValid() ? "bg-gray-400" : "bg-teal-600 hover:bg-teal-700"
          }`}>
          Generate Questions
        </button>
      </div>
    </form>
  );
};

export default QuizBuilder;
