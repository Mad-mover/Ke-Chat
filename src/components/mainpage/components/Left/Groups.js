import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Group(props) {
  const classes = styles();
  const { name, amount, text, time, id } = props;
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}/${id}`}>
      <div className={`${classes.root} ${classes.flexRow}`}>
        <div className={`${classes.avatar}`}>
          <Avatar />
        </div>
        <div className={`${classes.info}`}>
          <div className={`${classes.flexRow} ${classes.margin}`}>
            <div className={`${classes.name}`}>{name}</div>
            <div className={`${classes.color}`}>{time}</div>
          </div>
          <div className={`${classes.flexRow}`}>
            <div className={`${classes.text}`}>{text}</div>
            <div className={`${classes.bg}`}>{amount}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const styles = makeStyles({
  root: {
    color: "#84898C",
    padding: "10px",
    borderBottom: "1px solid rgba(31, 44, 52, 1)",
    position: "relative"
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatar: {
    marginRight: "10px"
  },
  info: {
    flex: "1"
  },
  name: {
    color: "white"
  },
  color: {
    color: "#00B2A0",
    textTransform: "uppercase"
  },
  bg: {
    backgroundColor: "#00B2A0",
    color: "black",
    borderRadius: "50%",
    width: "fitcontent",
    padding: "2px",
    textAlign: "center"
  },
  text: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "70%"
  },
  margin: {
    marginBottom: "10px"
  }
});
