'use client';

import React, { useState } from 'react'

export default function ClientComp() {
    const [counter , setCounter] = useState(0);
    console.log(counter ,setCounter , 'this is counter');
    
  return (
    <div>
        <h3>This is counter</h3>
        <button onClick={()=>setCounter((prev)=>prev + 1)}>{counter}</button>
    </div>
  )
}
