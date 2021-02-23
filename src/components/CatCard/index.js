import React from "react";
import "./style.css";
import images from "../../images.json";

function catCard(props) {
  return (
    <div className="col-md-3">
      <img src={props.pic} alt={props.name} className="rounded" width="250" height="250" onClick={() => props.clickChoice(props.id, props.clicked)} />
    </div>

  );
}

export default catCard;
