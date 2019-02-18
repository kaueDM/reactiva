import Sidebar from './Sidebar'
import React, { useState } from 'react'

const _handleSidebarFormat = (format, setFormat) => {
  return setFormat(format === 'normal' ? 'hidden' : 'normal')
}

const System = _ => {
  const [sidebarFormat, setSidebarFormat] = useState('normal')

  return (
    <div>
      <p>Current sidebar format: {sidebarFormat}</p>

      <button onClick={_ => _handleSidebarFormat(sidebarFormat, setSidebarFormat)}>
        Change format
      </button>

      <Sidebar />
    </div>
  )
}

export default System
