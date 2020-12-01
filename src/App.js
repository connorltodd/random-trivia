import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./components/Home";
import Game from "./components/Game";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/result" component={Result} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
