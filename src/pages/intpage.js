import React from "react";
import "../App.css";
import Btncomp from "../components/btncomp";
import Listcomp from "../components/listcomp";
import Image from "../images/map.png";
import Jumbotron from "../components/jumbotroncomp";

function Internalpage() {
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
        </div>
        <div className="box2">
          <h3>Union Territories</h3>
        </div>
      </div>
    </div>
  );
}
export default Internalpage;
