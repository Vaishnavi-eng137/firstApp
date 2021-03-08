import React, { useEffect, useState } from "react";
import "../App.css";
import Box1comp from "../components/box1comp";
import Box2comp from "../components/box2comp";
import Box3comp from "../components/box3comp";
import Btncomp from "../components/btncomp";
import Jumbotron from "../components/jumbotroncomp";
import jkmap from "../images/jk.PNG";
import { useParams } from "react-router-dom";
import { States } from "../tr";

function State1(props) {
  const param = useParams();

  const [stateData, setStateData] = useState({ subtopics: [], name: "" });

  console.log(param, States[parseInt(param.id)]);

  useEffect(() => {
    if (param.id && parseInt(param.id)<=35) {
      let currentState = States.filter((state) => state.id === param.id);
      setStateData(currentState[0]);
    }
  }, [param.id]);

  return (
    <div>
      <Jumbotron state={stateData.name} description={stateData.details} />
      <div className="studybox">
        <Box1comp mapImage={stateData.maplink} />
        <Box2comp points={stateData.subtopics}></Box2comp>
        <Box3comp imgLink={stateData.religions} />
      </div>
    </div>
  );
}

export default State1;
