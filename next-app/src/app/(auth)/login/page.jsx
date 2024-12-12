import React from 'react'
import { redirect } from 'next/navigation'
import NavigateBtn from '@/components/NavigateBtn'
function page() {
  return (
    <div>
      Login page
      <NavigateBtn/>
    </div>
  )
}

export default page