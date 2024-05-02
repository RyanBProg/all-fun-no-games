import he from "he";
import { useEffect, useState } from "react";
import QuizBuilder from "../components/quizzy/QuizBuilder.jsx";
import Quiz from "../components/quizzy/Quiz.jsx";
import { QuestionDataContext } from "../context/quizzy-context.js";

const Quizzy = () => {
  const [fetchUrl, setFetchUrl] = useState("");
  const [questionData, setQuestionData] = useState({});
  const [inGame, setInGame] = useState(false);

  const updateUrl = (url) => {
    setFetchUrl(url);
  };

  const toggleInGame = () => {
    setInGame(!inGame);
    setQuestionData({});
  };

  const formatData = (data) => {
    return data.results.map((item) => {
      const answersArray = [];
      answersArray.push(he.decode(item.correct_answer));
      item.incorrect_answers.forEach((answer) => {
        answersArray.push(he.decode(answer));
      });
      answersArray.sort(() => Math.random() - 0.5);

      return {
        question: he.decode(item.question),
        answers: answersArray,
        correctAnswer: he.decode(item.correct_answer),
      };
    });
  };

  const fetchData = async () => {
    try {
      const data = await fetch(fetchUrl);
      const jsonData = await data.json();
      const formattedData = formatData(jsonData);
      setQuestionData(formattedData);
    } catch {
      toggleInGame();
      console.error("issue fetching the question data");
    }
  };

  useEffect(() => {
    if (fetchUrl) {
      fetchData();
    }
  }, [fetchUrl]);

  return (
    <>
      <QuestionDataContext.Provider value={questionData}>
        {inGame ? (
          <Quiz toggleInGame={toggleInGame} />
        ) : (
          <QuizBuilder updateUrl={updateUrl} toggleInGame={toggleInGame} />
        )}
      </QuestionDataContext.Provider>
    </>
  );
};

export default Quizzy;
