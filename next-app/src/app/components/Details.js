import React from 'react'
import { Card, CardHeader, CardMedia, Typography,CardContent } from '@mui/material'

export default function Details({details}) {
  return (
    <Card style={{height:'700px' , width:'600px',margin:'auto',marginTop:'20px'}}>
    <CardHeader
    title={details?.name}>
    </CardHeader>

    <CardMedia component="img"
    height='60%'
    width='50%'
    image={details.image}
    alt="Paella dish"/>
    <CardContent>
    <Typography>
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </Typography>
  </CardContent>

  </Card>
  )
}
