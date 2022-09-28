import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../Store/MailSlice";
import DisplayMail from "./DisplayMail";

const GetMail = () => {
  const [mail, setMail] = useState([]);
  const dispatch = useDispatch();
  const display = useSelector((state) => state.mail.mailData);
  
  useEffect(()=>{
    displaymail()
  },[])
  const displaymail = async () => {
    const response = await fetch(
      "https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail.json"
    );
    const data = await response.json();
    //  console.log(data)
    dispatch(mailAction.addedMail(data));
    const array = [];
    for (const key in data) {
      array.push({
        mail: data[key].mail,
        subject: data[key].subject,
        text: data[key].text,
      });
    }
    setMail(array);
  };
  return (
    <div>
      {display.map((mail) => (
        <li>
          {mail.mail}
          {mail.subject}
          {mail.text}
        </li>
      ))}
      <DisplayMail data={mail} />
    </div>
  );
};

export default GetMail;
