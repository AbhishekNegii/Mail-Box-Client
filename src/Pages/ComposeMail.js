import React, { useRef } from "react";


const ComposeMail = () => {

    const emailInputRef=useRef();
    const subjectInputRef=useRef();
    const textInputRef=useRef();

    const submitHandler=(e)=>{
        e.preventDefault()
        const mail=emailInputRef.current.value;
        const subject=subjectInputRef.current.value;
        const text=textInputRef.current.value;
        console.log(mail,subject,text)

        fetch("https://chat-box-2fbd2-default-rtdb.firebaseio.com/mail.json",{
            method:"POST",
            body:JSON.stringify({
                mail:mail,
                subject:subject,
                text:text
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((resp)=>{
            if(resp.ok){
                console.log("resp1",resp)
                return resp.json();
                
            }else{
                return resp.json().then((data)=>{
                    console.log(data)
                })
            }
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            alert(err)
        })
    
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>To:</label>
          <input type="email" placeholder="mail id" ref={emailInputRef} required />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" placeholder="Subject" ref={subjectInputRef} required/>
        </div>
        <div>
          <label>Text</label>
          <input type="text" width="100" placeholder="text" ref={textInputRef} required/>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeMail;
