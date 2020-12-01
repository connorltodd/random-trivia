  export const createAnswersList = (incorrectAnswers: string[], correctAnswer: string) => {
    let answers = [...incorrectAnswers]
    let randomIndex = Math.floor(Math.random() * 4);
    answers.splice(randomIndex, 0, correctAnswer);
    return answers;
  }