import { makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import LeftSideBar from "./Left/LeftSideBar";
import RightSideBar from "./Right/RightSideBar";

function Home() {
  const classes = styles();
  const { currentUser } = useAuth();

  const setDisplayName = () => {
    if (localStorage.getItem("firstName") !== null) {
      let fName = localStorage.getItem("firstName");
      let sName = localStorage.getItem("secondName");
      let fullName = `${fName} ${sName}`;
      currentUser
        .updateProfile({
          displayName: fullName
        })
        .then(function () {
          // Update successful.
          localStorage.clear();
        })
        .catch(function (error) {
          // An error happened.
          console.log(error);
        });
    }
  };

  setDisplayName();
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
