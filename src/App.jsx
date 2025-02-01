import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { TopBar } from './scenes/global/TopBar';
import { SideBar } from './scenes/global/SideBar';

import { Dashboard } from './scenes/dashboard';
import { Team } from './scenes/team';
import { Invoices } from './scenes/invoices';
import { Contacts } from './scenes/contacts';
import { Bar } from './scenes/bar';
import { Pie } from './scenes/pie';
import { Line } from './scenes/Line';
import { FAQ } from './scenes/faq';
import { Geography } from './scenes/geography';

function App() {

  const [theme, colorMode] = useMode();

  return (

    // provide global theme for all the components
    // and this Context provide switching for the colors and themes
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>

        <CssBaseline />
        <div className='app'>
          <main className='content' >
            <TopBar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
