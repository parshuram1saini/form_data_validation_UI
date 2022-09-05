import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function SignIn() {
  const navigate = useNavigate();
  const [ username,setUsername]=useState("")
  const [ password,setPassword]=useState("")
  const handleSignIn = (e) => {
    e.preventDefault();
    e.preventDefault();
    fetch("/api/user/getstudent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password }),
    })
      .then((response) => {
        console.log(response.status);
        if (response.ok) {
         
          navigate("/profile");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <h3 className="text-underline align-center m-top-12 m-bottom-5">
        Sign-In Screen
      </h3>
      <form className="signin-container d-flex justify-between flex-dir-column border-radius-10 ">
        <div className="d-flex justify-between m-top-3">
          <label>Username</label>
          <input type="text" className="input-field" required onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="d-flex justify-between m-top-3">
          <label>Password</label>
          <input type="password" className="input-field" onChange={(e)=>setPassword(e.target.value)}required />
        </div>
        <input
          type="submit"
          value="Sign-In"
          className="p-4 b-color-blue border-radius-5 m-left-30 m-top-3 width-30"
          onClick={handleSignIn}
        />
      </form>
    </>
  );
}

export default SignIn;
