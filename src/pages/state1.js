import React from "react";
import "../App.css";
import Box1comp from "../components/box1comp";
import Box2comp from "../components/box2comp";
import Box3comp from "../components/box3comp";
import Btncomp from "../components/btncomp";
import Jumbotron from "../components/jumbotroncomp";
import jkmap from "../images/jk.PNG";

function State1(props) {
  return (
    <div>
      <Jumbotron
        state={"Jharkhand"}
        description={`Jharkhand is a state in eastern India.The state shares its border with the states of Bihar to the north, Uttar Pradesh to the northwest, Chhattisgarh to the west, Odisha to the south and West Bengal to the east. It has an area of 79,710 km2 (30,778 sq mi). It is the 15th largest state by area, and the 14th largest by population. Hindi is the official language of the state. The city of Ranchi is its capital and Dumka its sub capital. The state is known for its waterfalls, hills and holy places;[7] Baidyanath Dham, Parasnath and Rajrappa are major religious sites. The state was formed in 2000, from the territory that had previously been part of Bihar.`}
      />
      <div className="studybox">
        <Box1comp
          mapImage={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/IN-JH.svg/250px-IN-JH.svg.png"
          }
        />
        <Box2comp points=
          {["Symbols of Jharkhand",
            "Etymology & HISTORY",
            "Naxal insurgency",
            "Geography",
            "Major Cities",
            "Universities and colleges",
            "Languages & Cultures",
            "Folk Music & Dance",
            "Tribals",
            'Foods G.I tags'
          ]}>
        </Box2comp>
        <Box3comp imgLink={jkmap}/>
      </div>
    </div>
  );
}

export default State1;
