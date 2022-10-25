import React from 'react'
import Cards from './Cards'
import './Task4.css'
function MapData(props) {
   const fetchData=props.fetchedData
  return (
    <div className='container'>
    
            {
              fetchData.map(fetchData=>
                   
                    {
                    return <div key={fetchData.id} className="item">

                      {<Cards key={fetchData.id} fetchedData={fetchData} />}

                    </div>
                  }                                                    
                
                )
            }
        
        
    </div>
  )
}

export default MapData
