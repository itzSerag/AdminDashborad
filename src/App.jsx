import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import TopBar from './scenes/global/TopBar';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/SideBar';
import { Team } from './scenes/team/index';
import { Contacts } from './scenes/contacts';
import { Invoices } from './scenes/invoice';
import { Form } from './scenes/form';

function App() {

  const [theme, colorMode] = useMode();

  return (

    // Provide global theme for all the components
    // and this Context provides switching for the colors and themes
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>

          {/* sidebar component -- in app not main */}
          <Sidebar />

          <main className='content'>
            <TopBar />

            {/* Define the app routes */}
            <Routes>
              {/* <Route path='/' element={<Dashboard />} /> */}
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />

              { /*
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/line' element={<Line />} />  */}
            </Routes>
          </main>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
