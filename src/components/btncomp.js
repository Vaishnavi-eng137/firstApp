import React from "react";

function Btncomp (props){
    const {text,color}=props
    return(
        <button type="submit" class={`btn ${color}`}>
        {text}
      </button>
    )
}

export default Btncomp;