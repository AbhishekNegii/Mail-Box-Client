import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inboxActions } from "../Store/inboxSlice";
import InboxDisplay from "./InboxDisplay";

const InboxMail = () => {
  const [inbox, setInbox] = useState([]);
  const loggedInEmail = useSelector((state) => state.auth.loggedInEmail);
  console.log("InboxMail", loggedInEmail);
  const updatedLoggedInEmail = loggedInEmail.replace("@", "").replace(".", "");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
      getMail()
  }, []);

  const getMail = async () => {
    try {
      const response = await fetch(
        `https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}Inbox.json/`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data == null) {
        <h2>Inbox is Empty</h2>;
      } else {
        dispatch(inboxActions.onEmailFetch(data));
        const array = [];
        for (const key in data) {
          array.push({
            mail: data[key].mail,
            subject: data[key].subject,
            text: data[key].text,
          });
        }
        setInbox(array);
        console.log(array);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <InboxDisplay data={inbox} />
    </div>
  );
};

export default InboxMail;
