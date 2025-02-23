'use client'
import React, { memo } from 'react'

function HydrationErrorComp() {
  return (
    <div>
        <h1>
            Time this component is rendered {new Date().toLocaleTimeString()}
        </h1>
    </div>
  )
}

export default memo(HydrationErrorComp)