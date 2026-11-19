import React from 'react'
import { ThemeContext } from './CartContext'
import { useState } from 'react'

function ThemeProvider({children}) {
    const [isthemeDrak, setInvertedTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{isthemeDrak, setInvertedTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider