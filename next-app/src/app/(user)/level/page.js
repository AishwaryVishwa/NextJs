'use client'
import React, { useEffect, useState } from 'react'

function page() {
  let timer;
  const [count,setCount] = useState(0);
  useEffect(()=>{
    timer  = setInterval(() => {
      setCount((prev)=>prev + 1);
    }, 1000);
  },[])

  if(count > 5) {
    throw new Error('Level page error')
  }
  return (
    <div>Level page</div>
  )
}

export default page