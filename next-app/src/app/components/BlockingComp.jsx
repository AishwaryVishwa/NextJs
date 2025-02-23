import React from 'react'

export default async function BlockingComp({title,delay,error}) {

  await new Promise((resolve)=>setTimeout(resolve,delay))
  
  if(error) {
    throw new Error("Server error")
  }
  return (
    <p>{title} with a delay of {delay}</p>
  )
}
