import React from "react";
import "./Tech.css";

const Tech = (props) => {
  // const { Techstack0, Techstack1, Techstack2, Techstack3, Techstack4 } = stacks;
  return (
    <>
      <h3>{props.stacks.Techstack0}</h3>
      <h3>{props.stacks.Techstack1}</h3>
      <h3>{props.stacks.Techstack2}</h3>
      <h3>{props.stacks.Techstack3}</h3>
      <h3>{props.stacks.Techstack4}</h3>
    </>
  );
};

export default Tech;
