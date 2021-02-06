import React from "react";

function Box2comp(props) {
  const { points, color } = props;
  return (
    <div className="box2" style={{color:'grey'}}>

      {points.map((point,index)=>{
          return (
              <h4>{point}</h4>
          )
      })}
    </div>
  );
}

export default Box2comp;
