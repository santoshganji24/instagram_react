import React from "react";
import "../styles/tagged.css";

export default function TaggedImage(props) {
  return <img className="gallery-items" src={props.img} />;
}
