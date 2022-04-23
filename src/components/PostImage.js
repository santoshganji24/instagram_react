import React from "react";
import "../styles/postimage.css";

export default function PostImage(props) {
  return <img className="gallery-items" src={props.img} />;
}
