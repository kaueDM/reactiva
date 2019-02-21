import React, { useContext } from 'react'
import ThemeContext from 'context/ThemeContext'

export default function Sidebar ({ ...props }) {
  const theme = useContext(ThemeContext)

  return (
    <aside className={_asideClasses(props, theme.sidebar)} />
  )
}

const _asideClasses = (props, { background }) => {
  const classes = ['reactiva-sidebar', 'p-4', 'fixed', background]

  props.isSidebarCompact && classes.push('reactiva-sidebar-compact')

  classes.push(props.isSidebarVisible ? 'reactiva-sidebar-visible' : 'reactiva-sidebar-hidden')

  return classes.join(' ')
}
