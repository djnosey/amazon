import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Header2 from "./Header2";
import Footer1 from "./Footer1";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HQbEcL6pAjGhJ5Dp4SYhIqNPm8XUme90M9RNjZduzWwYzUQOMDwHPah8b9t6c3RsZGvZ8dDp0ZkEqO0cIdLpxW100DAbOCb8A"
);

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
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer1 />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path ="/orders">
          <Header />
            <Header2 />
            <Orders />
            <Footer1 />
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
