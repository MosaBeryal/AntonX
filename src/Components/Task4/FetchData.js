import React from "react";
import { useState } from "react";
import axios from "axios";
import MapData from "./MapData.js";

function FetchData() {
  const [data, setData] = useState([]);
  async function onLoad() {
    const {data } =await axios.get("https://jsonplaceholder.typicode.com/photos?&_limit=30")
    console.log(data)
    
    setData(data)
    
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {                                                                                                        
      event.preventDefault();

      document.getElementById("btn").click();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return (
    <div>
      {/* <Button onClick={onLoad}id="btn">Fetch Data</Button> */}
      <button onClick={onLoad} id="btn" className="center">
        Fetch Data
      </button>

      <MapData fetchData={data} />
    </div>
  );
}

export default FetchData;
