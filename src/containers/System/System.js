import Header from './Header'
import Content from './Content'
import React, { useState } from 'react'

const System = _ => {
  const [isSidebarVisible, setSidebarVisible] = useState(true)
  const [isSidebarCompact, setSidebarCompact] = useState(false)

  const _toggleSidebar = _ => setSidebarVisible(!isSidebarVisible)

  const _toggleCompact = _ => setSidebarCompact(!isSidebarCompact)

  return (
    <div>
      <Header
        isSidebarVisible={isSidebarVisible}
        isSidebarCompact={isSidebarCompact}
        toggleSidebar={_ => _toggleSidebar()}
        toggleCompact={_ => _toggleCompact()}
      />
      <Content isSidebarVisible={isSidebarVisible} isSidebarCompact={isSidebarCompact} />
    </div>
  )
}

export default System
