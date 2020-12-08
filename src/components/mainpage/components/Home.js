import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import LeftSideBar from "./Left/LeftSideBar";
import RightSideBar from "./Right/RightSideBar";

function Home() {
  const classes = styles();
  const { width } = useAuth();
  return (
    <>
      {width ? (
        <div className={classes.root}>
          <div className={classes.left}>
            <LeftSideBar />
          </div>
          <div className={classes.right}>
            <Switch>
              <Route path="/home/group/:groupId">
                <RightSideBar />
              </Route>
            </Switch>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Switch>
            {/* <div>
              <button>
                <Link to="/main">main </Link>
              </button>
              <button>
                <Link to="/group">group</Link>
              </button>
            </div> */}
            <Route path="/group">
              <h1>groups</h1>
            </Route>
            <Route path="/home">
              <LeftSideBar />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default Home;

const styles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
    width: "90vw",
    height: "90vh",
    boxShadow: "5px 5px 20px 0px black"
  },
  left: {
    flex: "0.35",
    backgroundColor: "darkgray",
    height: "100%",
    position: "relative"
  },
  right: {
    flex: "0.65",
    backgroundColor: "gray"
  }
});
