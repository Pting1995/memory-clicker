import React from "react";
import "./style.css";

function clickChoice(id) {
  
}

function catCard(props) {
  return (
    <div className="col-md-3">
      
        <img src={props.pic} alt={props.name} className="rounded" width="250" height="250" onClick={() => clickChoice(this.props.id)} />
      {/* make onclick for the image */}
    </div>
    
  );
}

export default catCard;
