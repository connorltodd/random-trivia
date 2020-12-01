import React from "react";
import axios from "axios";

function Home() {
  const [gameCategories, setGameCategories] = React.useState([]);

  React.useEffect(() => {
    getGameCategories();
  }, []);

  const getGameCategories = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((response) => setGameCategories(response.data.trivia_categories));
  };

  return (
    <div>
      {gameCategories.map((gameCategory) => (
        <p>{gameCategory.name}</p>
      ))}
      <p>Home</p>
      <button>Randomize your game </button>
    </div>
  );
}

export default Home;
