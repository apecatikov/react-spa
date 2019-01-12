import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./components/home";
import Stuff from "./components/stuff";
import Contact from "./components/contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li>
              <NavLink to="/" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff" href="/stuff">
                Stuff
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" href="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
