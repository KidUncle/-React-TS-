import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, NotFound, DetailPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/signInPage" component={SignInPage}></Route>
          <Route path="/registerPage" component={RegisterPage}></Route>
          <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
