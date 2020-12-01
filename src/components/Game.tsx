import React from "react";
import parse from "html-react-parser";
import { GameContext } from '../contexts/GameContext';
import { createAnswersList } from "../helpers/createAnswerslist";
import Modal from "./Modal";


function Game() {
    const [isModalDisplayed, setModalDisplay] = React.useState(false)

  let { gameQuestions, points, currentQuestionId, testUserAnswer } = React.useContext(GameContext);

return (
  <div>
    <p>Game</p>
      <button onClick={() => setModalDisplay(true)}>Go Back</button>

      {isModalDisplayed && <Modal setModalDisplay={setModalDisplay} />}

    <p>Current Score: {points}</p>
    <p>Current Question: {currentQuestionId + 1} / 10</p>
    {gameQuestions
    .filter((gameQuestion, index) => index === currentQuestionId )
    .map((gameQuestion: any, index) => (
      <div key={index}>
        <p>{parse(gameQuestion.question)}</p>
        {createAnswersList(gameQuestion.incorrect_answers, gameQuestion.correct_answer)
        .map((answer, index) => 
          <button
            key={index} 
            onClick={() => testUserAnswer(answer, gameQuestion.correct_answer)}
          >
            {parse(answer)}
          </button>
        )}

      </div>
    ))}
  </div>
);
}

export default Game;
