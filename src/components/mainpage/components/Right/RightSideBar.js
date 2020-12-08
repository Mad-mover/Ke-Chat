import { makeStyles } from "@material-ui/core";
import { Menu, Search, Send } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import { useAuth } from "../../../contexts/AuthContexts";
import GroupMessages from "./GroupMessages";
import firebase from "firebase";

export default function RightSideBar() {
  const classes = styles();
  const { groupId } = useParams();
  const [name, setName] = useState([]);
  const [text, setText] = useState("");
  const { currentUser } = useAuth();

  function handleInput() {
    if (text !== "") {
      db.collection("groups")
        .doc(groupId)
        .collection("messages")
        .add({
          name: currentUser.displayName,
          message: text,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          id: currentUser.uid
        })
        .then(() => console.log("finished"))
        .catch((error) => console.log(error));
    }
    setText("");
  }

  useEffect(() => {
    db.collection("groups")
      .doc(groupId)
      .onSnapshot((snapshot) => setName(snapshot.data()));
  }, [groupId]);

  return (
    <div className={`${classes.root}`}>
      <div className={classes.navBar}>
        <div className={`${classes.flexRow} ${classes.spaceBWN}`}>
          <div>{name.name}</div>
          <div className={`${classes.flexRow}`}>
            <div className={classes.icon}>
              <Search />
            </div>
            <div className={classes.icon}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.messageBox}`}>
        <GroupMessages />
      </div>
      <div className={`${classes.inputBox}`}>
        <input
          placeholder="enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${classes.input}`}
        />
        <span>
          <Send
            fontSize="large"
            className={`${classes.icon}`}
            onClick={handleInput}
          />
        </span>
      </div>
    </div>
  );
}

const styles = makeStyles({
  root: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column"
  },
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
    marginLeft: "10px",
    color: "#236087",
    cursor: "pointer"
  },
  messageBox: {
    flex: "1",
    position: "relative",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "20px 10px",
    overflow: "scroll",
    backgroundImage:
      "url(https://wi.wallpapertip.com/wsimgs/5-55896_wallpaper-background-whatsapp-default-dark-whatsapp-dark-wallpaper.jpg)"
  },
  inputBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px",
    bottom: "2px",
    backgroundColor: "#1F2C34"
  },
  input: {
    borderRadius: "20px",
    padding: "0 10px",
    height: "50px",
    border: "none",
    outline: "0",
    width: "80%"
  }
});
