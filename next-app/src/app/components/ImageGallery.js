'use client'
import { Box, Card, CardHeader, CardMedia } from '@mui/material'
import { useRouter } from 'next/navigation'

import React from 'react'

export default function ImageGallery({ images }) {

    const router = useRouter();
    const handleClick = (id)=>{
      router.push(`/gallery/${id}`)
    }
    return (
        <Box>
            {images?.map((image) => {
                return <>
                    <Card onClick={()=>handleClick(image.id)}>
                        <CardHeader
                            title={image?.name}>

                        </CardHeader>
                        <CardMedia component='img' height='400px' image={image?.image} />
                    </Card>
                </>
            })}
        </Box>
    )
}
