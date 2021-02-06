import React from "react";

function Inpcomp(props){
return(<input
    type={props.type||'text'}
    className="form-control bg-light border"
    placeholder={props.placeholder}
  />
    )
}
export default Inpcomp;