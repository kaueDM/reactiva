import React from 'react'
import Sidebar from './Sidebar'

const Content = ({ ...props }) => (
  <div className='pt-12 flex flex-row flex-wrap reactiva-content'>
    <Sidebar {...props} />

    <main className='w-full reactiva-sidebar-spacer'>

      {_renderOverlay(props.isSidebarVisible)}

      {Array.from({ length: 100 }, (_, i) => i).map(i => <p key={i}>{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}{i}</p>)}
    </main>
  </div>
)

const _renderOverlay = visible => visible ? <div className='reactiva-sidebar-overlay' /> : null

export default Content
