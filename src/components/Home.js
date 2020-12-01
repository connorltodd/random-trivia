import React from "react";
import axios from "axios";

function Home() {
  const [gameCategories, setGameCategories] = React.useState([]);
  const [selectedGameCategoryId, setSelectedGameCategoryId] = React.useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState("easy");

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
        console.log(response);
      });
  };

  return (
    <div>
      {/* Game Categories dropdown */}
      <select
        onChange={(event) => setSelectedGameCategoryId(event.target.value)}
      >
        {gameCategories.map((gameCategory) => (
          <option value={gameCategory.id}>{gameCategory.name}</option>
        ))}
      </select>
      {/* Difficulty dropdown */}
      <select onChange={(event) => setSelectedDifficulty(event.target.value)}>
        {["easy", "medium", "hard"].map((difficulty) => (
          <option value={difficulty}>{difficulty}</option>
        ))}
      </select>
      <p>SelectedGame: {selectedGameCategoryId}</p>
      <p>Home</p>
      <button onClick={getGameInfo}>Confirm Game Choice</button>
    </div>
  );
}

export default Home;
