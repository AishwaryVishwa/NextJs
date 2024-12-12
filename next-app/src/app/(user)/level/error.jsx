'use client'
import React from 'react'

export default function ErrorBoundary({error , reset}) {

    console.log(error);
    
  return (
    <>
    <button onClick={()=>reset()}>reset</button>
    <div>{error.message}</div>
    </>
  )
}
