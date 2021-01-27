import React from "react"
import "./LeftMenu.css"
import logo from "../assets/img/logo-react.png"
import Content from "./Content";
import Content2 from "./Content2";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function LeftMenu() {
    return (
        <Router>
            <div id="leftMenu">
                <div className="logo">
                    <img className="nav-logo" src={logo} alt="react"></img>
                </div>
                <ul id="nav">
                    <li><i className="icon"></i><Link className="text-link" to="/App1">App 1</Link></li>
                    <li><i className="icon"></i><Link className="text-link" to="/App2">App 2</Link></li>
                    <li><i className="icon"></i><Link className="text-link" to="/App3">App 3</Link></li>
                    <li><i className="icon"></i><Link className="text-link" to="/App4">App 4</Link></li>
                    <li><i className="icon"></i><Link className="text-link" to="/App5">App 5</Link></li>
                    <li><i className="icon"></i><Link className="text-link" to="/App6">App 6</Link></li>
                </ul>
            </div>
            <Switch>
              <Route path="/App1">
                <Content />
              </Route>
              <Route path="/App2">
                <Content2 />
              </Route>
            </Switch>
        </Router>
    );
}

export default LeftMenu