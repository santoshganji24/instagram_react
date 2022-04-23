import React from "react";
import "../styles/modal.css";

export default function Modal() {

  const[showModel,SetShowModal] = React.useState(false)

  function showModalfunction(){
    console.log("function clicked from outside modal.js"+showModel)
  }
  
  // console.log(showModel)
  
  return (
    <div className="docenter">
      <div className="hover-block">
        <div className="mob-block ">
          <div className="block">
            <a href="#">Block</a>
          </div>
          <div className="restrict">
            <a href="#">Restrict</a>
          </div>
          <div className="report">
            <a href="#">Report</a>
          </div>
          <div className="cancel">
            <a href="#">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  );
}
