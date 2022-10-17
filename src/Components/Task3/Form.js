import React from 'react'
import { useState } from 'react';
import './Task3.css'

function Form(props) {
const[name, setName]=useState("");
const[email, setEmail]=useState("");
const[description, setDescription]=useState("");

function nameChangeHandler (event)
 {

setName (event.target.value)

console.log(event)

}

function emailChangeHandler(event)
{

setEmail(event.target.value)

}

function descriptionHandler(event)
{
    setDescription(event.target.value)
}

function SubmitHandler(event){

    event.preventDefault();

    const inputData={
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
        
        <div className=' input'>
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
                borderRadius:10
            }
         } 
        value={name}
        onChange={nameChangeHandler}
        required
        />
        </div>
        <div className='input'>
       
        <label htmlFor="email">Email</label>
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
        required
        />
        </div>

<div className='input'>
         <label htmlFor='description' >Description</label>
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
         required
        />
                  
</div>
<div className='input' id='submitBtn'>

        <button type='submit' className='formSubmit'>Submit</button>
</div>
    </form>
    </div>
    
  )
}

export default Form