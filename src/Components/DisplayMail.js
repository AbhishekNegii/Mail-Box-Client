import React from "react";
import ComposeMail from "../Pages/ComposeMail";
import {useHistory} from "react-router-dom"
const DisplayMail = (props) => {
const history= useHistory()
    const composeMailHandler=()=>{
history.replace('/composemail')
    }
  console.log("props", props);
  const display = props.data.map((item) => (
    <li>
      {item.mail}
      {item.subject}
      {item.text}
    </li>
  ));
  return (
    <div>
    <button onClick={composeMailHandler}>ComposeMail</button>
      <div>DisplayMail</div>
      {display}
    </div>
  );
};

export default DisplayMail;
