import React, { Suspense } from 'react'
import BlockingComp from '../components/BlockingComp'
import ClientComp from '../components/ClientComp'

export default function StreamingPage() {
  return (
    <div>

        <h1>This is non blocking heading</h1>
        <ClientComp/>
        <Suspense fallback={<p>Loading products......</p>}>

        <BlockingComp title={'products details'} delay={3000}/>
        </Suspense>
        <Suspense fallback={<p>Loading reviews.......</p>}>

        <BlockingComp title={'review'}  delay={4000}/>

        </Suspense>
    </div>
  )
}
