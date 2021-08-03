import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroeNavbar from "./components/HeroeNavbar";
import Error404 from "./pages/Error404";
import HeroeScreen from "./pages/HeroeScreen";
import InicioScreen from "./pages/InicioScreen";

const App = () => {
  return (
    <Router>
      <HeroeNavbar />
      <Switch>
        <Route exact path="/" component={InicioScreen} />
        <Route exact path="/heroe/:id" component={HeroeScreen} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
