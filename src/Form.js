import React,{useEffect, useState} from 'react'

export default function Form() {
    const data = {name:"" , email:"", password:""};
    const [flag,setFlag] = useState(false);
    const [inputData, setinputData] = useState(data);
    function handleData(e){
        setinputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    
    useEffect(()=>{
        console.log("Registered")},[flag]
    )
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Input Fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }
  return (
    <>
    <pre>
        {(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've registered successfully with the mail id : {inputData.email}</h2>:""}
    </pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type="text" placeholder="Enter your Name" name='name' value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
            <input type="email" placeholder="Enter your Email ID" name='email' value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type="password" placeholder="Enter your Password" name='password' value={inputData.password} onChange={handleData}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}
