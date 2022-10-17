import React from "react";
import Card from "./Card";
import './Task3.css'

function Display(props) {
  const recivedData = props.Data;
  return (
    
      <div className="container">
        {recivedData.length===0?<h1 className="enterDetail">Enter your detail</h1>:recivedData.map((studentDetail) => 
        
        
          <div className="item1">
            <Card
            key={studentDetail.email}
             name={studentDetail.name} 
            email={studentDetail.email} 
            description={studentDetail.description} />
          </div>
        
        )
}
          
        


          

    </div>
  );
}
export default Display
