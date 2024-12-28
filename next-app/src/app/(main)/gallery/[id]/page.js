import ImageDetail from '@/app/components/ImageDetail';
import React from 'react'

export default async function Page({params}) {

    const {id} = params;

    const res = await fetch(`${process.env.MOCK_API_URL}/gallery/${id}`)
    const data = await res.json();

  return (
    <div>
     <ImageDetail detail={data}/>
    </div>
  )
}
