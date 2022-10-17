import React from "react";
import "./Task3.css";

function Third(props) {
  return (
    <div>
      <div>
        <p className="name">{props.name}</p>
        <p className="company">{props.company}</p>
        <p className="description">{props.desc}</p>
      </div>
    </div>
  );
}

export default Third;
