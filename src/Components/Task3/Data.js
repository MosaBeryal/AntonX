import React from 'react'
import Form from './Form'
import Display from './Display'
import {useState} from 'react'
function Data() {
    const initialData=[
        {
            id:1,
            name:"mosa",
            email:"beryalkhan@gmail.com",
            description:"Hello, This is me mosa beryal"
        },
        {
            id:2,
            name:"mosa",
            email:"beryal@gmail.com",
            description:"Hello, This is me mosa beryal"
        },
        {
            id:3,
            name:"mosa",
            email:"beryaljan@gmail.com",
            description:"Hello, This is me mosa beryal"
        }
    ]

const[Data,setData]=useState(initialData)

function recivedData(inputData)//user data from user Form
{

setData((old)=>{ // old data in initial state
    return[inputData,...old ]
})  
} 
function removeComponent(recievedId){
    const updataData=Data.filter((d)=>d.id!==recievedId)
    setData(updataData)

}




return (
<div>
<Form onData={recivedData}/>
<Display Data={Data} remove={removeComponent} />
</div>

  )
}

export default Data
