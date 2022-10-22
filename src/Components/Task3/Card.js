import React from "react";
 import "./Task3.css"

function Card(props) {
  console.log(props.id)
  return (
    
    <div>
      <div>
        <p className="name">{props.name}</p>
        <p className="email">{props.email}</p>
        <p className="description">{props.description}</p>
        <button className="Deletebtn" onClick={()=>props.remove(props.id)}>Delete</button>
      </div>
      
    </div>
  );
}

export default Card;
