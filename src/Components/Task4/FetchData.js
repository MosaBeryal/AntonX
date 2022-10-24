import React from "react";
import { useState } from "react";
import axios from "axios";
import MapData from "./MapData.js";
import Button1 from "./Button1.js";

function FetchData() {
  const [data, setData] = useState([]);
  async function onLoad() {
    const {data } =await axios.get("https://jsonplaceholder.typicode.com/photos?&_limit=30")
    
    setData(data)
    
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {                                                                                                        
      event.preventDefault();

      onLoad();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return (
    <div>
    
      <Button1 LoadData={onLoad} ></Button1>

      <MapData fetchData={data} />
      
    </div>
  );
}

export default FetchData;
