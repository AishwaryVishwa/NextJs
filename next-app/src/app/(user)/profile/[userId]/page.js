import React from 'react'

function page({params}) {
  return (
    <div>This is userId : {params.userId}</div>
  )
}

export default page