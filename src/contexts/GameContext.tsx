import React from "react";

interface Props {
  children?: React.ReactNode;
}

interface ContextProps {
  gameQuestions: string[],
  setGameQuestions: (value: any) => void;
}

export const GameContext = React.createContext({} as ContextProps);

const GameContextProvider: React.FC<Props> = ({ children }) => {
    const [gameQuestions, setGameQuestions] = React.useState([]);
  return (
    <div>
      <GameContext.Provider 
        value={{ gameQuestions, setGameQuestions }}
      >
        {children}
      </GameContext.Provider>
    </div>
  );
}

export default GameContextProvider;
