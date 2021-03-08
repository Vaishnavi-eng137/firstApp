import React from "react";
import "../App.css";
import Inpcomp from "../components/inpcomp";
import cube from "../../src/images/4009218.jpg";
import Welcomepage from "./welcome";
import { Redirect } from "react-router";

function Loginpage() {
  return (
    <div className="d-grid gap-3 ">
      <div className="centre">
        <img src={cube} width="200" height="120" alt="cube" />
      </div>
      <Inpcomp type="email" placeholder="email"></Inpcomp>
      <Inpcomp type="password" placeholder="password"></Inpcomp>
      <button className="login" onClick={handleClick}>
        <b>Login</b>
      </button>
      {/* <Btncomp text='logout' color='btn-danger'/> */}
      <p style={{ color: "darkblue" }}>Forgot password?</p>
      <p style={{ color: "#800080" }}>Not a member? Sign up now</p>
    </div>
  );
}

const handleClick = () => {
  window.location ="/home"}

// function clickHandler() {return ("hello")}

// function clickHandler() {
//   console.log("You are awesome")
// }

export default Loginpage;
