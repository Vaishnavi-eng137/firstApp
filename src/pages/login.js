import React from "react";
import Btncomp from "../components/btncomp";
import "../App.css";
import Inpcomp from "../components/inpcomp";
import cube from "../../src/images/4009218.jpg";

function Loginpage() {
  return (
    <div className="d-grid gap-3 ">
      <div className="centre">

        <img src={cube} width="200" height="120" alt=""/>
      </div>
      <Inpcomp type="email" placeholder="email"></Inpcomp>
      <Inpcomp type="password" placeholder="password"></Inpcomp>
      <Btncomp text="login" color="btn-primary" />
      {/* <Btncomp text='logout' color='btn-danger'/> */}
      <p style={{ color: "darkblue" }}>Forgot password?</p>
      <p>Not a member? Sign up now</p>
    </div>
  );
}

export default Loginpage;
