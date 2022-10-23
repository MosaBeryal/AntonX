import React from 'react'

function Card(props) {
  const fetchData=props.fetch;

  return (
    <div>
        <h1>
            {
                fetchData.login
            }
        </h1>
      
    </div>
  )
}

export default Card
