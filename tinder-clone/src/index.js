import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ViewUser from "./ViewUser";
import Login from "./Login";
import Signup from "./Signup";
import Display from "./Display";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/sign-up" component={Signup} />

          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/main" component={App} />
          <Route exact path="/profile" component={ViewUser} />
          <Route exact path="/dev-tinder" component={Display} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
