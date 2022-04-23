import React from "react";
import SuggestionUser from "./SuggestionUser";
import "../styles/suggestions.css"
export default function Suggestions() {
  return (
    <div className="suggestions">
      <span>Suggested</span>
      <div className="suggestedusers">
        <SuggestionUser name="aish" caption="Producer" img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
        <SuggestionUser name="pooja"  caption="Director" img="https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
        <SuggestionUser name="shreya" caption="Actor" img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
       
      </div>
    </div>
  );
}
