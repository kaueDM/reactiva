import React from 'react'
import { MdMenu, MdViewCompact } from 'react-icons/md'

const Header = ({ ...props }) => (
  <nav className='flex items-center justify-between bg-indigo-darkest fixed w-full h-12 z-40'>
    <div className='flex items-center flex-no-shrink text-white ml-5'>
      <MdMenu size={30} className='text-white' onClick={props.toggleSidebar} />

      <MdViewCompact size={30} className='text-white' onClick={props.toggleCompact} />
    </div>

    <div className='border text-white border-white p-2 mr-5'>
      profile button
    </div>
  </nav>
)

export default Header
