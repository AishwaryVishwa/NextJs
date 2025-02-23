import React from 'react'
import { resolve } from 'styled-jsx/css'

export default async function Server1() {
    await new Promise((resolve)=>setTimeout(resolve,3000));
  return (
    <div>This is server one</div>
  )
}
