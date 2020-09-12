import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment'
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Header2 from "./Header2";
import Footer1 from "./Footer1";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
        <Route path="/payment">
            <Header />
            <Header2 />
            <Payment />
            <Footer1 />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Header2 />
            <Checkout />
            <Footer1 />
          </Route>
          <Route path="/">
            <Header />
            <Header2 />
            <Home />
            <Footer1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
