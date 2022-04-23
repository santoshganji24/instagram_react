import React from "react";
import "../styles/suggestionuser.css";
export default function SuggstionUser(props) {
  return (
    <div className="user-box">
      <img
        className="user-image"
        src={props.img}
      />
      <a className="user-name" href="#">
       {props.name}
      </a>{" "}
      <span>{props.caption}</span>
      <button className="user-follow">Follow</button>
    </div>
  );
}
