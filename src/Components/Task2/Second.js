import React from "react";
import Third from "./Third";
// import './Task2.css'
function Second(props) {
  const recivedDetail = props.Detail;
  return (
    <div>
      <h1 className="center">All Team</h1>
      <div className="container">
        {recivedDetail.map((StudentDetail) => (
          <div className="item1">
            <Third name={StudentDetail.name} company={StudentDetail.company} desc={StudentDetail.desc} />
          </div>
        ))}
      </div>

      <h1 className="center">Seniors</h1>

      <div className="container">
        {recivedDetail.map((StudentDetail) =>
          StudentDetail.senior ? 
            <div className="item1">
              <Third name={StudentDetail.name}
               company={StudentDetail.company} 
               desc={StudentDetail.desc} />
            </div>:""
          
        )}
      </div>
    </div>
  );
}
export default Second;
