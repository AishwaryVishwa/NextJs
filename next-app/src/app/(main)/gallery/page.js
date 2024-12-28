import ImageGallery from '@/app/components/ImageGallery';
import React from 'react'

export default async function Gallery() {

    const response  = await fetch(`${process.env.MOCK_API_URL}/gallery`);
    const data = await response.json();
  return (
    <>
       <ImageGallery images={data}/>
    </>
  )
}
