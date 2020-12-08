import React from "react";
import Group from "./Groups";
import { db } from "../../../../firebase";
import { useEffect, useState } from "react";

export default function GroupComp() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("groups").onSnapshot((snapshot) =>
      setGroups(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        groups.map((group) => (
          <Group key={group.id} id={group.id} name={group.data.name} />
        ))
      )}
    </div>
  );
}
