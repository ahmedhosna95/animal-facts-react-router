import React, { Component } from "react";
// eslint-disable-next-line
import { Route, NavLink, HashRouter, BrowserRouter } from "react-router-dom";
import Home from "./home";
import CatFacts from "./cat-facts";
import DogFacts from "./dog-facts";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Fun Animal Facts</h1>
          <ul className="navbar">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cats">Cat Facts</NavLink>
            </li>
            <li>
              <NavLink to="/dogs">Dog Facts</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/cats" component={CatFacts} />
            <Route path="/dogs" component={DogFacts} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
