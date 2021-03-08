import React from "react";
import "../App.css";
import Btncomp from "../components/btncomp";
import Listcomp from "../components/listcomp";
import Image from "../images/map.png";
import Jumbotron from "../components/jumbotroncomp";
import state1 from "./state1"
import  {States}  from "../tr";

function Internalpage() {

  const handleRoute1Change=(stateID)=>{
  window.location.href=`/state/${stateID}`
  
  }

 const handleRoute2Change = (stid) =>{
   window.location.href = `/state/${stid}`
 }

  return (
    <div>
      <Jumbotron
        state={"India"}
        description={`India is a federal union comprising 28 states and 8 union
          territories,for a total of 36 entities. The states and union
          territories are further subdivided into districts and smaller
          administrative divisions.The Constitution of India distributes the
          sovereign executive and legislative powers exercisable with respect to
          the territory of any State between the Union and that State.`}
          headings={`States and Union Territories of India`}
      />
      <div className="studybox">
        <div className="box2">
          <img src={Image}></img>
        </div>
        <div className="box2">
          <h3>States</h3>
          {States.map((state,index)=>{
            if(index<28){
            return <li style={{cursor:'pointer'}} onClick={()=>handleRoute1Change(state.id)}>{state.name}</li>}
          })}
          
        </div>
        <div className="box2">
          <h3>Union Territories</h3>
          {States.map((state,index)=>{
            if(index>=28){
            return <li onClick={()=>handleRoute2Change(state.id)}>{state.name}</li>}
          })}
        </div>
      </div>
    </div>
  );
}


export default Internalpage;
