import React from 'react'
import Cards from './Cards'
import './Task4.css'
function MapData(props) {
   const data=props.fetchData
  return (
    <div className='container'>
    
            {
                data.map(fetchData=>
                   
                    <div key={fetchData.id} className="item">

                        {
                            <Cards key={fetchData.id} fetch={fetchData}/>

                        }  

                      </div>                                                    
                
                )
            }
        
        
    </div>
  )
}

export default MapData
