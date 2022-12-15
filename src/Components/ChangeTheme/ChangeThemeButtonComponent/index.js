import React from 'react'
import { useTheme } from '@mui/material/styles'
import * as Style from './style'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ChangeThemeButton = ({ColorModeContext}) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext)
  console.log('ColorModeContext=>', ColorModeContext)
  return (
    <Style.StyledBox>
      <Style.StyledTypography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {theme.palette.mode}
      </Style.StyledTypography>
    </Style.StyledBox>
  )
}

export default ChangeThemeButton