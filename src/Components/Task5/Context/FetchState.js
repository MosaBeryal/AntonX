import React, { useState, useEffect } from "react";
import fetchContext from "./fetchContext";
import axios from "axios";

const FetchState = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProductData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
    };
    fetchProductData();
  },[]);

  return (
    <fetchContext.Provider value={data}>
        {props.children}
    </fetchContext.Provider>
  );
};
export default FetchState;
