import React from "react";
import { withRouter } from "react-router-dom";
import { History } from 'history';


interface Props {
  children?: React.ReactNode;
  history : History;
}

interface ContextProps {
  gameQuestions: string[],
  setGameQuestions: (value: any) => void;
  points: number;
  setPoints: (value: number) => void;
  currentQuestionId: number;
  setCurrentQuestionId: (value: number) => void;
  testUserAnswer: (userAnswer: string, correctAnswer: string) => void;
}

export const GameContext = React.createContext({} as ContextProps);

const GameContextProvider: React.FC<Props> = ({ children, history
 }) => {
    const [gameQuestions, setGameQuestions] = React.useState([]);
    const [points, setPoints] = React.useState(0);
    const [currentQuestionId, setCurrentQuestionId] = React.useState(0)

    const testUserAnswer = (userAnswer: string, correctAnswer: string) => {
      if(userAnswer === correctAnswer) {
        setPoints(points + 10)
      }

      if(currentQuestionId === 9) {
        history.push("/result")
      } else {
        setCurrentQuestionId(currentQuestionId + 1)
      }
    }

  return (
    <div>
      <GameContext.Provider 
        value={{ 
          gameQuestions, setGameQuestions, points, setPoints, currentQuestionId, setCurrentQuestionId, testUserAnswer 
        }}
      >
        {children}
      </GameContext.Provider>
    </div>
  );
}

export default withRouter(GameContextProvider);
