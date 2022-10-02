import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import  "./EmailBody.css"
const DisplayMail = (props) => {

   
  console.log("props", props);

//   const deleteHandler=(mail)=>{
// console.log("token",mail)
//   }
let display
if(props.data==0){
display=<p>SentMail is empty</p>
}else{
  display = props.data.map((item) => (
    <ul>
    <li>
      <div className="emailbody">
        <div className="emailbody__left">
          <h3>To:- {item.mail}</h3>
        </div>
        <div className="emailbody__right">
          <h4>{item.subject} </h4>
        </div>
        <div className="emailbody__middle">
          <div className="emailbody__middle__msg">
            <p>{item.text}</p>
          </div>
        </div>
        {/* <button onClick={deleteHandler}>Del</button>       */}
      </div>
    </li>
  </ul>
));
}
  
  return (
    <div>
        <Header/>
        <Sidebar/>
       <h2>Mail</h2>
        {display}
        
    </div>
  );
};

export default DisplayMail;
