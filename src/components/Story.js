import React from "react";
import "../styles/story.css";
export default function Story(props) {
  return (
    <div className="storycenter">
      <div className="circle"></div>
      <a href="#">
        <img src={props.img} />
      </a>
      <div className="story-caption">{props.storytitle}</div>
    </div>
  );
}
