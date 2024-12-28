import React from 'react'

export default function layout({children,modal}) {
  return (
    <div>
      <h1>This is gallery</h1>
      {modal}
      {children}
    </div>
  )
}
        