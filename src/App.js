import React,{useState, useMemo} from 'react';
import ThemeMode from './Components/ChangeTheme/ThemeMode';
import Theme from './Components/ChangeTheme/ThemeComponent/Theme';
import ChangeThemeButton from './Components/ChangeTheme/ChangeThemeButtonComponent'
import { Container } from '@mui/system'
import Header from './Components/HeaderComponent';
import NewsContainer from './Containers/NewsContainer'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = useState('light');
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
      <Header>
        
      </Header>
      
      {/* <Container> */}
      
        <ColorModeContext.Provider value={colorMode}>
          <Theme mode={mode}>
            <ThemeMode>
              <ChangeThemeButton 
                ColorModeContext={ColorModeContext}
              />
              <NewsContainer />
            </ThemeMode>
          </Theme>
        </ColorModeContext.Provider>
      {/* </Container> */}
    </>
  );
}

