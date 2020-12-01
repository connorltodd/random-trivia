import React from "react";
import { History } from 'history';
import axios from "axios";

import { GameContext } from "../contexts/GameContext";

interface IGameCategories {
  id: number;
  name: string;
}

interface ChildComponentProps {
  history : History
}

const Home : React.SFC<ChildComponentProps> = ({ history }) => {
  const [gameCategories, setGameCategories] = React.useState<IGameCategories[]>([]);
  const [selectedGameCategoryId, setSelectedGameCategoryId] = React.useState<number>(0);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<string>("easy");

  const { setGameQuestions } = React.useContext(GameContext);
  React.useEffect(() => {
    getGameCategories();
  }, []);

  const getGameCategories = () => {
    axios.get("https://opentdb.com/api_category.php").then((response) => {
      setGameCategories(response.data.trivia_categories);
      setSelectedGameCategoryId(response.data.trivia_categories[0].id);
    });
  };

  const getGameInfo = () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${selectedGameCategoryId}&type=multiple&difficulty=${selectedDifficulty}`
      )
      .then((response) => {
        setGameQuestions(response.data.results);
        history.push("/game")
      });
  };



  return (
    <div>
      {/* Game Categories dropdown */}
      <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>  
        setSelectedGameCategoryId(Number(event.target.value))
      }>
        {gameCategories.map((gameCategory) => (
          <option key={gameCategory.id} value={gameCategory.id}>{gameCategory.name}</option>
        ))}
      </select>
      {/* Difficulty dropdown */}
      <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelectedDifficulty(event.target.value)}>
        {["easy", "medium", "hard"].map((difficulty) => (
          <option key={difficulty} value={difficulty}>{difficulty}</option>
        ))}
      </select>
      <p>SelectedGame: {selectedGameCategoryId}</p>
      <p>Home</p>
      <button onClick={getGameInfo}>Confirm Game Choice</button>
    </div>
  );
}

export default Home;
