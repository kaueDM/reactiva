import React, { useContext } from 'react'

import routes from 'routes'
import SidebarItem from './SidebarItem'
import ThemeContext from 'context/ThemeContext'

export default function Sidebar ({ ...props }) {
  const { sidebar } = useContext(ThemeContext)

  return (
    <aside className={_asideClasses(props, sidebar)}>
      <ul>
        {_generateItems(sidebar.text)}
      </ul>
    </aside>
  )
}

const _generateItems = color => {
  return routes.map(item => {
    if (!item['hideFromSidebar']) {
      return <SidebarItem key={item.name} icon={item.icon} label={item.name} />
    }

    return null
  })
}

const _asideClasses = (props, { background }) => {
  const classes = ['reactiva-sidebar', 'fixed', background]

  props.isSidebarCompact && classes.push('reactiva-sidebar-compact')

  classes.push(props.isSidebarVisible ? 'reactiva-sidebar-visible' : 'reactiva-sidebar-hidden')

  return classes.join(' ')
}
