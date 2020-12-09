import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LeftSideBar from "./Left/LeftSideBar";
import RightSideBar from "./Right/RightSideBar";

function Home() {
  const classes = styles();
  return (
    <>
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
