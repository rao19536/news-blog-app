import React from 'react'
import * as Style from './style'

const ThemeMode = ({children}) => {
  return (
    <Style.StyledParentContainer>
      {children}
    </Style.StyledParentContainer>
  )
}
export default ThemeMode
