import React from "react";
import parse from "html-react-parser";
import { History } from 'history';
import { GameContext } from '../contexts/GameContext';
import { createAnswersList } from '../helpers/createAnswerslist';
import Modal from "./Modal";

interface ChildComponentProps {
  history: History,
}

const Result: React.SFC<ChildComponentProps> = ({ history }) =>  {
    const [isModalDisplayed, setModalDisplay] = React.useState(false)
    let { gameQuestions, points } = React.useContext(GameContext);
  return (
    <div>
      <button onClick={() => setModalDisplay(true)}>Go Back</button>
      {isModalDisplayed && <Modal setModalDisplay={setModalDisplay} />}
     <p>Result</p>
     <p>Your score was {points}</p>
     <p>You scored {points / 10} out of 10</p>
    {gameQuestions.map((gameQuestion: any, index: number) => (
      <div key={index}>
        <p>{parse(gameQuestion.question)}</p>
        {createAnswersList(gameQuestion.incorrect_answers, gameQuestion.correct_answer)
          .map((answer, index) => answer === gameQuestion.correct_answer ?
            <button
              key={index} 
              style={{ backgroundColor: "red"}}
            >
              {parse(answer)}
            </button>
            :
            <button
              key={index} 
            >
              {parse(answer)}
            </button>
          
          )}
      </div>
    ))}
    </div>
  );
}

export default Result;
