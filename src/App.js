import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./components/Add/Add";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Voca" component={Home} />
        <Route path="/Voca/add" component={Add} />
        <Route path="/Voca/detail/:title" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
