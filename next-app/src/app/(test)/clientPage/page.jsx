'use client'
import ShowCount from '@/components/ShowCount';
import React, { useEffect, useState } from 'react'

function page() {
    let timer;
    const [count , setCount] = useState(0);
    
    useEffect(()=>{
        timer = setInterval(()=>{
            setCount((prev)=>prev + 1);
        },1000);


        return ()=>{
            clearInterval(timer);
        }
    },[])

  return (
    <>
       <ShowCount count={count}/>
    </>
  )
}

export default page