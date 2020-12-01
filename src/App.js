import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import GameContextProvider from "./contexts/GameContext";

import Home from "./components/Home";
import Game from "./components/Game";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GameContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/result" component={Result} />
            <Redirect to="/" />
          </Switch>
        </GameContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
