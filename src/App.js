//import logo from "./logo.svg";
import "./App.css";

import { Home } from "./Home";
import { Department } from "./Department";
import { Employee } from "./Employee";

import { Tesis } from "./Tesis";
import { Fatura } from "./Fatura";
import { Navigation } from "./Navigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m3 d-flex justify-content-center sm-2">
          Elektrik Faturaları Giriş Ekranı
        </h3>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
          <Route path="/tesis" component={Tesis} />
          <Route path="/fatura" component={Fatura} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
