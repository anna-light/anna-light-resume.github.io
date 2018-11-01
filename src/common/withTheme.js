import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default Component => props =>
  <ThemeProvider theme={theme}>
    <Component>
      {props.children}
    </Component>
  </ThemeProvider>