import Link from 'next/link'
import React from 'react'

export default function LandingPage() {
  return (
    <div>
      This is landing page
      <Link href='/gallery'>Image gallery</Link>
    </div>
  )
}
