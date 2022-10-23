import React from 'react'
import Card from './Card'
import './Task3.css'
function MapData(props) {
   const data=props.fetchData
  return (
    <div className='container'>
    
            {
                data.map(fetchData=>
                   
                    <div key={fetchData.id} className='item1'>

                        {
                            <Card key={fetchData.id} fetch={fetchData}/>

                        }  

                      </div>                                                    
                
                )
            }
        
        
    </div>
  )
}

export default MapData
