import React from "react";
import { makeStyles } from "@material-ui/core";
import { useAuth } from "../../../contexts/AuthContexts";

export default function GroupMessage(props) {
  const { name, sms, time, id } = props;
  const classes = styles();
  const { currentUser } = useAuth();
  const user = currentUser.uid;
  return (
    <div className={`${classes.root}`}>
      <div className={`${classes.message} ${id === user && classes.receiver}`}>
        <span className={classes.name}>{name}</span>
        {sms}
        <span className={`${classes.time}`}>{time}</span>
      </div>
    </div>
  );
}
const styles = makeStyles({
  message: {
    backgroundColor: "gray",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    marginBottom: "30px",
    padding: "10px",
    position: "relative",
    width: "fit-content"
  },
  name: {
    color: "#FFC000",
    fontSize: "xx-small",
    fontWeight: "800",
    position: "absolute",
    top: "-15px"
  },
  time: {
    fontSize: "xx-small",
    marginLeft: "10px"
  },
  receiver: {
    backgroundColor: "#dcf8c6",
    color: "black",
    marginLeft: "auto"
  }
});
