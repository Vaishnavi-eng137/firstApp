import React from "react";

function Jumbotron (props) {
  return(
    <div className="jumbotron bg-success text-white">
        <h1> {props.state}</h1>
        <h5>
          {props.description}
        </h5>

        <h4>{props.headings}</h4>
      </div>
  )  
}
export default Jumbotron;