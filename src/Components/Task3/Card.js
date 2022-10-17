import React from "react";
 import "./Task3.css"

function Card(props) {
  function clickHandler(){
  

  }
  return (
    <div>
      <div>
        <p className="name">{props.name}</p>
        <p className="email">{props.email}</p>
        <p className="description">{props.description}</p>
        <button className="Deletebtn" onClick={clickHandler}>Delete</button>
        <img src="code.png" alt="" class />
      </div>
    </div>
  );
}

export default Card;
