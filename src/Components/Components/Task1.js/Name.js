import React from "react";
import Tech from "./Tech";
import "./Tech.css";

const Name = () => {
  const stacks = {
    Techstack0: "React Native",
    Techstack1: "MongoDb",
    Techstack2: "Express",
    Techstack3: "React",
    Techstack4: "Next.js",
  };
  return (
    <div className="Container">
      <div className="FlexItem1">
        <h1>Mosa Beryal</h1>
      </div>
      <div className="FlexItem2">
        <Tech stacks={stacks} />
      </div>
    </div>
  );
};

export default Name;
