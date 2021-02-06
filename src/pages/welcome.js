import React from "react";
import "../App.css";
import Btncomp from "../components/btncomp";

function Welcomepage() {
  return (
    <div>
      <div className="jumbotron bg-success text-white">
        <div className="container">
          <h1 class="display-4">"Welcome to CubeWorld"</h1>
          <h4>
            "A platform for someone who wants to know about Indian
            states,cultures & many more"
          </h4>
        </div>
      </div>
      <h1 className="ert">"Explore!" </h1>
      <div className="card-deck ">
      <div className="card1">
        <div className="CC1">
        <Btncomp className="btn" text="STUDY"color="btn-light"></Btncomp>
        </div>
        <div>
        <p>Let us study together about "INDIA".Reading textbooks may not be fun, but being able to is important. Understanding how to read and use them effectively is key to academic success.
       </p>
        </div>
      </div>
      <div className="card1">
        <div className="CC1">
        <Btncomp className="btn" text="QUIZ"color="btn-light"></Btncomp>
        </div>
        <div>
       <p>
         Test your knowledge here.The following strategies will help you maximize your comprehension and retain information while reading.
       </p>
        </div>
      </div>
      <div className="card1">
        <div className="CC1">
        <Btncomp className="btn" text="NOTES"color="btn-light"></Btncomp>
        </div>
        <div>
      <p>
        Make your short notes for better revision. As you read through your text, highlight important passages that support central themes and concepts. Be selective.
      </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Welcomepage;
