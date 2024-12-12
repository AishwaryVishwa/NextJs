'use client'
import { Grid2 } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function layout({children,view,team,analytics,sure}) {
  const router  = useRouter();
  return (
    <Grid2 className='h-72 p-5 bg-red-200 text-center' container spacing={2}>
          <Grid2 size={{md:12}}>

      {children}
      <button className='h-30 w-40 p-3 bg-slate-400' onClick={()=>{
        router.push('dashboard/setting')
      }}>
        go to setting
      </button>
          </Grid2>
           <Grid2  className='bg-white'size={{md:7}}>
                 <div>
                  {view}
                 </div>
           </Grid2>
           <Grid2 className='bg-white' size={{md:5}}>
                 <div>
                  {team}
                 </div>
           </Grid2>
           <Grid2 className='bg-white' size={{md:6}}>
                 <div>
                  {analytics}
                 </div>
           </Grid2>
           <Grid2 className='bg-white' size={{md:6}}>
                 <div>
                  {sure}
                 </div>
           </Grid2>
    </Grid2>
  )
}
