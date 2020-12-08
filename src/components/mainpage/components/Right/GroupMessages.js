import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import GroupMessage from "./GroupMessage";

export default function GroupMessages() {
  const { groupId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("groups")
      .doc(groupId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    return unsubscribe;
  }, [groupId]);
  return (
    <>
      {messages.map((message) => (
        <GroupMessage
          key={message.id}
          name={message.name}
          sms={message.message}
          id={message.id}
          time={
            message.timestamp && moment(message.timestamp.toDate()).calendar()
          }
        />
      ))}
    </>
  );
}
