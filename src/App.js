import { makeStyles } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { AuthProvider } from "./components/contexts/AuthContexts";
import Home from "./components/mainpage/components/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signup/Signup";
import RightSideBar from "./components/mainpage/components/Right/RightSideBar";

export default function App() {
  const clsasses = styles();
  return (
    <div className={clsasses.root}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/">
              <Redirect to="/home" />
            </PrivateRoute>
            <Route path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/group" component={RightSideBar} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

const styles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "lightgray",
    display: "grid",
    placeItems: "center"
  }
});
