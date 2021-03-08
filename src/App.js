import Loginpage from "./pages/login";
import "./App.css";
import cube from "../src/images/4009218.jpg";
import Welcomepage from "./pages/welcome";
import Internalpage from "./pages/intpage";
import State1 from "./pages/state1";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-inverse bg-light">
        <img src={cube} width="40" height="30px" alt=""></img>
      </nav>
      <a href="/.netlify/functions/weather"></a>

      <Switch>
        <Route path="/login" exact>
          <Loginpage />
        </Route>
        <Route path="/home" exact>
          <Welcomepage />
        </Route>
        <Route path="/india" exact>
          <Internalpage />
        </Route>
        <Route path="/state/:id" exact>
          <State1 />
        </Route>
      </Switch>

      {/* <Loginpage /> */}
      {/* {<Welcomepage/>} */}
      {/* {<Internalpage/>} */}
      {/* {<State1/>} */}
    </div>
  );
}

export default App;
