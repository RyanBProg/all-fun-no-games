const quizzyInitialState = {
  score: 0,
  answeredQuestions: {},
  quizFinished: false,
};

const quizzyReducer = (state, action) => {
  switch (action.type) {
    case "score_incremented":
      return {
        ...state,
        score: state.score + 1,
      };
    case "game_reset":
      return {
        score: 0,
        answeredQuestions: {},
        quizFinished: false,
      };
    case "quiz_finished":
      return {
        ...state,
        quizFinished: true,
      };
    case "quiz_not_finished":
      return {
        ...state,
        quizFinished: false,
      };
    case "question_answered":
      return {
        ...state,
        answeredQuestions: {
          ...state.answeredQuestions,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

export { quizzyInitialState, quizzyReducer };
