import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "./navbar";
import Movies from "./movies";
import Customers from "./customers";
import Rentals from "./rentals";
import NotFound from "./not-found";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="content container mt-3">
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Redirect exact from="/" to="/movies" />
            <Route component={NotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
