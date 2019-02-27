import React, { useContext } from 'react'
import applyClasses from 'utils/applyClasses'
import ThemeContext from 'context/ThemeContext'

const defaultText = ['ml-2']
const defaultIcon = ['material-icons', 'reactiva-sidebar-icon']
const defaultItem = ['h-12', 'flex', 'flex-row', 'items-center', 'cursor-pointer', 'group']

export default function SidebarItem ({ icon, label }) {
  const { sidebar } = useContext(ThemeContext)

  return (
    <li className={applyClasses(defaultItem, sidebar.item)}>
      <div className='pl-2 flex items-center justify-center'>
        <i className={applyClasses(defaultIcon, sidebar.text)}>{icon}</i>
      </div>
      <p className={applyClasses(defaultText, sidebar.text)}>{label}</p>
    </li>
  )
}
