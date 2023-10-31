import React, { useState } from 'react'

function SetTimeOut() {
    const [range,setRange]=useState(1);
    const [name,setName]=useState("");
    const [displayName,setDisplayName]=useState(false)

    function handelclick(){
        setTimeout(()=>{

         setDisplayName(true)
        

        },range*1000)
    };

  return (
    <>
    <input type="range" min={1} max={10} value={range} onChange={(e)=> setRange(e.target.value,10)}  />
    <span>{range}</span>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={handelclick}>Submit</button>

    {
        displayName ? <p>{name}</p>:""
    }
    
    
    
    </>
  )
}

export default SetTimeOut