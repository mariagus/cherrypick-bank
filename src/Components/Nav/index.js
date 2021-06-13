import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import DisplayAccounts from "../DisplayAccounts";
import NewAccount from "../NewAccount";
import "./nav.css";

function Nav() {
  return (
    <Router>
      <ul className="nav">
        <li>
          <Link to="/accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/new">New Account</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/deposit">Deposit</Link>
        </li>
        <li>
          <Link to="/withdraw">Withdrawal</Link>
        </li>
        <li>
          <Link to="/transfer">Transfer</Link>
        </li>
        <li>
          <Link to="/transfer">Remove account</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/accounts" component={DisplayAccounts} />
        <Route exact path="/new" component={NewAccount} />
        {/* <Route exact path="/search" component={}/>
      <Route exact path="/deposit" component={}/>
      <Route exact path="/withdraw" component={}/>
      <Route exact path="/transfer" component={}/>
      <Route exact path="/remove" component={}/> */}
      </Switch>
    </Router>
  );
}

export default Nav;
