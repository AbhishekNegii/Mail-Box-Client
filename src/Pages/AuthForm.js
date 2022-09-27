import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/AuthSlice";
import "./AuthForm.css"


const AuthForm = () => {

const[isLogin, setIsLogin]=useState(true)
const[isLoading, setIsLoading]=useState(false)

const dispatch=useDispatch();

const mailInputRef=useRef();
const passInputRef=useRef();
const confirmPassInputRef=useRef();

const switchAuthHandler=()=>{
setIsLogin((prevState)=> !prevState)
}

const forgetPasswordHandler=()=>{

}


const submitHandler=(e)=>{

e.preventDefault();
const mail=mailInputRef.current.value;
const password=passInputRef.current.value;
const confirmPassword=confirmPassInputRef.current.value;

setIsLoading(true)
if(isLogin){
fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",{
    method:"POST",
    body:JSON.stringify({
       email: mail,
       password:password,
       returnSecureToken: true
    }),
    headers:{
        "Content-Type":"application/json"
    }
}).then((resp)=>{
    if(resp.ok){
        console.log(mail,"Successfully login")
        return resp.json()
    }else{
      return resp.json().then((data)=>{
        console.log(data)
      })
    }
}).then((data)=>{
    console.log(data)
    dispatch(authActions.login(data.idToken))

}).catch((err)=>{
    console.log(err)
})
}else{
  fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCXzhbX-HRm-ujGbrRU7-ynAlPT4t8HTY",
    {
      method: "POST",
      body: JSON.stringify({
        email: mail,
        password: password,
        confirmPassword: confirmPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((resp) => {
      if (resp.ok) {
        console.log(mail, "succesfully signed up");
        return resp.json();
      } else {
        resp.json().then((data) => {
          // console.log(data);
        });
      }
    })
    .then((data) => {
      console.log(data);
    dispatch(authActions.login(data.idToken))  
    })
    .catch((err) => {
      console.log(err);
    });
}
}
return (
  <section>
    <div class="form">
      <form onSubmit={submitHandler}>
        <div class="title"> {isLogin ? "Login" : "SignUp"}</div>
        <div class="input-container ic1">
          <input
            id="Email-Id"
            type="text"
            class="input"
            required
            ref={mailInputRef}
          />
          <div class="cut"></div>
          <label class="placeholder">Email-Id</label>
        </div>
        <div class="input-container ic2">
          <input
            id="password"
            class="input"
            type="password"
            ref={passInputRef}
            required
          />
          <div class="cut"></div>
          <label class="placeholder">Password</label>
        </div>
        {!isLogin && (
          <div class="input-container ic2">
            <input
              id="confirmPassword"
              class="input"
              type="password"
              ref={confirmPassInputRef}
              required
            />
            <div class="cut"></div>
            <label class="placeholder">Confirm Password</label>
          </div>
        )}
        <div class="actions">
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request....</p>}
          <button type="button" class="toggle" onClick={switchAuthHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
        {isLogin && (
          <button class="btn" onClick={forgetPasswordHandler}>
            Forget Password
          </button>
        )}
      </form>
    </div>
  </section>
);
};


export default AuthForm;