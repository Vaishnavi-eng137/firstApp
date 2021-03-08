import React from "react";

function Btncomp (props){
    const {text,color,onClick,style}=props

    // let mystyle = {margin:'10px'}
    return(
        <button style={style} type="submit" className={`btn ${color}`} onClick={onClick}>
        {text}
      </button>
    )
}

export default Btncomp;