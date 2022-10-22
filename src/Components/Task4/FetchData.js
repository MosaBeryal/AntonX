import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Display from './MapData.js'
import Button from './Button.js'

function FetchData() {
     const[data,setData]=useState([])

    async function onLoad(){
        const {data}= await axios.get("https://api.github.com/users")
        setData(data)
    }

    const handleKeyDown = event => {
    
    
        if (event.key === 'Enter') 
        {
            event.preventDefault();

            document.getElementById("btn").click()

            }
          
        }
      


        document.addEventListener('keydown',handleKeyDown)



    return (
    <div>
        {/* <Button onClick={onLoad}id="btn">Fetch Data</Button> */}
    <button onClick={onLoad} id="btn">Fetch Data</button>
    

    <Display fetchData={data}/>
    </div>
  )
}

export default FetchData