import React from 'react'
import Cards from './Cards'
import './Task4.css'
function MapData(props) {
   const fetchData=props.fetchData
  return (
    <div className='container'>
    
            {
              fetchData.map(fetchData=>
                   
                    {
                    return <div key={fetchData.id} className="item">

                      {<Cards key={fetchData.id} fetch={fetchData} />}

                    </div>
                  }                                                    
                
                )
            }
        
        
    </div>
  )
}

export default MapData
