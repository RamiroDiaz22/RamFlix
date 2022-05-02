import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import Profile from "./Pages/Profile.jsx";
import { auth } from "./firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice.js";
import Paypal from "./Pages/Paypal.jsx";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Route path="/" render={() => <Login />} />
        ) : (
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route path="/profile" render={() => <Profile />} />
            <Route path="/checkout" render={() => <Paypal />} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
