import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from "../DesignTokenComponent/DesignToken"

const Theme = ({mode, children}) => {
  const darkModeTheme = createTheme(getDesignTokens(mode));
  return (
    <ThemeProvider theme={darkModeTheme}>
      {children}
    </ThemeProvider>
  )
}
export default Theme
