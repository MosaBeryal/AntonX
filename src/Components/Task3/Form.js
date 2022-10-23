import React from 'react'
import { useState } from 'react';
import './Task3.css'

function Form(props) {
const[name, setName]=useState("");
const[email, setEmail]=useState("");
const[description, setDescription]=useState("");
const[valid,setasValid]=useState(true);

function nameChangeHandler (event)
 {
if(event.target.value.trim().length>0)
{
    setasValid(true)
}
     setName (event.target.value)
     if(name.length===0)
     {
         setasValid(false)
         
     }
     else{
     setasValid(true)
     }
    



}

function emailChangeHandler(event)
{

setEmail(event.target.value)

}

function descriptionHandler(event)
{
    if(event.target.value.trim().length>0)
    {
        setasValid(true)
    }
    setDescription(event.target.value)
}

function SubmitHandler(event){

    event.preventDefault();
    if(name.length===0)
    {
        setasValid(false)
        
    }
    else{
    setasValid(true)
    }
    if(description.length===0)
    {
        setasValid(false)
        
    }
    else{
    setasValid(true)
    }
    if(email.length===0)
    {
        setasValid(false)
        
    }
    else{
    setasValid(true)
    }
   

    const inputData={
        id : Math.random() * 10,
        name:name,
        email:email,
        description:description
    }
    
    
    
    
    setName("");

    setEmail("");

    setDescription("")

    

    props.onData(inputData)
}

return (
    <div className='Form'>
        

    <form action="" onSubmit={SubmitHandler}>
        
        <div className={`input ${!valid?`invalid`:""}`}>
            <h1 className='title'>
        Welcome,{name}
            </h1>

        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        id='name'
        style={
            {
                
                width:300,
                height:30,
                borderRadius:10,

            }
         } 
        value={name}
        onChange={nameChangeHandler}
        
        />
        </div>
        <div className={`input ${!valid?`invalid`:""}`}>
       
        <label htmlFor="email" >Email</label>
        <input 
        type="email" 
        id='email'
        style={
            {
            

                width:300,
                height:30,
                borderRadius:10
            }
         } 
        value={email}
        onChange={emailChangeHandler}
        
        />
        </div>

<div className={`input ${!valid?`invalid`:""}`}>
         <label htmlFor='description' className={`input ${!valid?`invalid`:""}`} >Description</label>
         <textarea
         minLength={1}
         style={
            {
                
                width:300,
                height:60,
                borderRadius:10
            }
         }
         id="description"  
         value={description}
         onChange={descriptionHandler}
        
        />
                  
</div>
<div className='input' id='submitBtn'>

        <button type='submit' className='formSubmit'>Click Me</button>
</div>
    </form>
    </div>
    
  )
}

export default Form