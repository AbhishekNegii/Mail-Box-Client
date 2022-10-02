import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./EmailBody.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const InboxDisplay = (props) => {
  console.log(props.data);
const loggedInEmail=useSelector((state)=>state.auth.loggedInEmail)
const updatedLoggedInEmail=loggedInEmail.replace('@','').replace('.','')
  const deleteHandler=(email)=>{
    console.log("delete",email)
    fetch(`https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}Inbox/${email}.json/`,{
        method:"DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        alert(err)
    })
  }

  const display = props.data.map((item) => (
    <ul>
      <li>
        <div className="emailbody">
          <div className="emailbody__left">
            <h3>From:- {item.mail}</h3>
          </div>
          <div className="emailbody__right">
            <h4>{item.subject} </h4>
          </div>
          <div className="emailbody__middle">
            <div className="emailbody__middle__msg">
              <p>{item.text}</p>
            </div>
          </div>
          <button onClick={()=>deleteHandler(item.mail)}>Del</button>      
        </div>
      </li>
    </ul>
  ));

  return (
    <div>
      <Header />
      <Sidebar />
      <h3>Inbox</h3>
      {/* <Link to="/singlemsg">{display}</Link> */}
      {display}
    </div>
  );
};

export default InboxDisplay;
