'use client'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import UserList from './List';

export default function Time({name}) {
    const [time , setTime] = useState();
    console.log('redering time ',name);
    
    // useEffect(()=>{
    //    const timeout = setTimeout(()=>{
    //     setTime(moment().format('dd-mm-yyyy'))
    //    },3000)

    //    return ()=>clearTimeout(timeout)
    // },[])
  return (
    <>
    <div>Time is {time}</div>
    <button onClick={()=>setTime(new Date().toLocaleTimeString())}>Click</button>
    {/* <UserList/> */}
    </>
  )
}
