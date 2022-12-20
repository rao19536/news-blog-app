import React,{useState, useMemo} from 'react'
import ThemeMode from './Components/ChangeTheme/ThemeMode'
import Theme from './Components/ChangeTheme/ThemeComponent/Theme'
import ChangeThemeButton from './Components/ChangeTheme/ChangeThemeButtonComponent'
import Header from './Components/HeaderComponent'
import CategoryContainer from './Containers/CategoryContainer'
// import {
//   QueryClientProvider,
//   QueryClient
// } from 'react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = useState('light')
  const queryClient = new QueryClient()
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
          <ColorModeContext.Provider value={colorMode}>
            <Theme mode={mode}>
              <ThemeMode>
                <ChangeThemeButton 
                  ColorModeContext={ColorModeContext}
                />
                <CategoryContainer />
              </ThemeMode>
            </Theme>
          </ColorModeContext.Provider>
        </QueryClientProvider>
    </>
  );
}

