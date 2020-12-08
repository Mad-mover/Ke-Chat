import { makeStyles } from "@material-ui/core";
import { MoreVert, PhotoCamera, Search } from "@material-ui/icons";
import React from "react";
import { Link, Route, useLocation, useRouteMatch } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContexts";

import GroupComp from "./GroupComp";

export default function LeftSideBar() {
  const classes = styles();
  const classes2 = styles2();
  const { url, path } = useRouteMatch();
  const { width } = useAuth();

  function NavLink({
    to,
    className,
    activeClassName,
    inActiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;

    let allClassNames =
      className + (isActive ? ` ${activeClassName}` : ` ${inActiveClassName}`);
    return <Link to={to} className={allClassNames} {...rest} />;
  }
  return (
    <div className={`${width ? classes.root : classes2.root}`}>
      <div className={classes.navBar}>
        <div className={`${classes.flexRow} ${classes.spaceBWN}`}>
          <div>Ke-Chat</div>
          <div className={`${classes.flexRow}`}>
            <div className={classes.icon}>
              <Search />
            </div>
            <div className={classes.icon}>
              <MoreVert />
            </div>
          </div>
        </div>
        <div className={`${classes.flexRow} ${classes.bg}`}>
          <div>
            <NavLink
              to={`${url}/camera`}
              activeClassName={classes.active}
              inActiveClassName={classes.inactive}
            >
              <PhotoCamera />
            </NavLink>
          </div>
          <div className={`${classes.bottomIcons}`}>
            <div className={classes.icon}>
              <NavLink
                to={`${url}/chat`}
                className={classes.margin}
                activeClassName={classes.active}
                inActiveClassName={classes.inactive}
              >
                chat
              </NavLink>
            </div>
            <div className={classes.icon}>
              <NavLink
                to={`${url}/group`}
                className={classes.margin}
                activeClassName={classes.active}
                inActiveClassName={classes.inactive}
              >
                group
              </NavLink>
            </div>
            <div className={classes.icon}>
              <NavLink
                to={`${url}/status`}
                className={classes.margin}
                activeClassName={classes.active}
                inActiveClassName={classes.inactive}
              >
                status
              </NavLink>
            </div>
            <div className={classes.icon}>
              <NavLink
                to={`${url}/call`}
                className={classes.margin}
                activeClassName={classes.active}
                inActiveClassName={classes.inactive}
              >
                call
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.body}>
        <Route path={`${path}/group`}>
          <GroupComp />
        </Route>
      </div>
    </div>
  );
}

const styles = makeStyles({
  navBar: {
    display: "flex",
    flexDirection: "column",
    color: "#969FA1",
    backgroundColor: "#1F2C34",
    padding: "10px"
  },
  spaceBWN: {
    justifyContent: "space-between"
  },
  flexRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
  },
  icon: {
    marginLeft: "10px"
  },
  bottomIcons: {
    width: "100%",
    marginLeft: "10px",
    justifyContent: "space-evenly",
    display: "flex",
    textTransform: "uppercase"
  },
  active: {
    borderBottom: "3px solid #00B29D",
    color: "#00B29D",
    textDecoration: "none"
  },
  inactive: {
    opacity: "0.7",
    color: "lightgray",
    textDecoration: "none"
  },
  margin: {
    marginBottom: "5px"
  },
  body: {
    flex: "1",
    height: "100%",
    backgroundImage:
      "url(https://www.wallpapertip.com/wmimgs/11-118104_black-line.jpg)",
    backgroundPosition: "center"
  },
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  bg: {}
});
const styles2 = makeStyles({
  root: {
    width: "90vw",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "1px 1px 20px 0px black"
  }
});
