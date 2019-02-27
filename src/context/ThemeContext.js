import React from 'react'

import header from 'theme/header'
import sidebar from 'theme/sidebar'

const theme = {
  header,
  sidebar
}

const ThemeContext = React.createContext(theme)

export default ThemeContext
