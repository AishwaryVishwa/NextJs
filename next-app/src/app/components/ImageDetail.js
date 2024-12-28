
import Image from 'next/image'
import React from 'react'

export default function ImageDetail({detail}) {
  return (
    <div>
          <h1>{detail?.name}</h1>
          <Image width={400} height={400} src={detail.image}/>
          <h3>{detail?.desctiption}</h3>
    </div>
  )
}
