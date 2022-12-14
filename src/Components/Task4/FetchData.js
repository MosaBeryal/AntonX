import React from "react";
import { useState } from "react";
import axios from "axios";
import FetchDataButton from "./FetchDataButton.js";
import Loading from "../Task5/Loading";
import Cards from "./Cards.js";
import "./Task4.css";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUserData() {
    setLoading(true);
    const {data} =await axios.get("https://jsonplaceholder.typicode.com/photos?&_limit=30")
    // console.log(data)
    setData(data)
    setLoading(false)


    // .then((res) => setData(res.data));
    // setLoading(false);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      fetchUserData();
    }
  };
  document.addEventListener("keydown", handleKeyDown);

  return (
    <div>

      {loading && <Loading />}

      <div className="fetchButton">
       <FetchDataButton fetchButton={fetchUserData} className="Button"></FetchDataButton>
      </div>

      <div className="container">

        {data.map((fetchData) => (
          
        <div className="Card" key={fetchData.id}>

        <Cards fetchedData={fetchData} />
          
          </div>

        ))}


      </div>
    </div>
  );
}

export default FetchData;
