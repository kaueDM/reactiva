import React, { useContext } from 'react'

import applyClasses from 'utils/applyClasses'
import ThemeContext from 'context/ThemeContext'

const defaultIcon = ['material-icons', 'reactiva-sidebar-icon']
const defaultNavButtons = ['flex', 'items-center', 'flex-no-shrink', 'text-white', 'ml-2']
const defaultNav = ['flex', 'items-center', 'justify-between', 'fixed', 'w-full', 'h-12', 'z-40', 'shadow-md']

export default function Sidebar ({ ...props }) {
  const { header } = useContext(ThemeContext)

  return (
    <nav className={applyClasses(defaultNav, header.background)}>
      <div className={applyClasses(defaultNavButtons, header.text)}>
        <i
          onClick={props.toggleSidebar}
          className={applyClasses(defaultIcon, header.text)}
        >
          menu
        </i>
        <i
          onClick={props.toggleCompact}
          className={applyClasses(defaultIcon, 'ml-1')}
        >
        more_vert
        </i>
      </div>
    </nav>
  )
}
