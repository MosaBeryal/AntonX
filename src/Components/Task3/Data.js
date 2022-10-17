import React from 'react'
import Form from './Form'
import Display from './Display'
import {useState} from 'react'
function Data() {
    const initialData=[
        // {
            
        //     name:"mosa",
        //     email:"beryalkhan@gmail.com",
        //     description:"Hello, This is me mosa beryal"
        // },
        // {
        //     name:"mosa",
        //     email:"beryal@gmail.com",
        //     description:"Hello, This is me mosa beryal"
        // },
        // {
        //     name:"mosa",
        //     email:"beryaljan@gmail.com",
        //     description:"Hello, This is me mosa beryal"
        // }
    ]

const[Data,setData]=useState(initialData)

function RecivedData(inputData)
{

setData((parray)=>{
    return[inputData,...parray ]
})


    
} 





return (
<div>
<Form onData={RecivedData}/>
<Display Data={Data} />
</div>

  )
}

export default Data
