// import React from 'react'
// import Header from './Header'
// import NavBar from './NavBar'
// import ListContainer from './ListContainer'
// import ListForm from './ListForm'

// function App() {
//   return (
//     <div>
//       <p>Hi from App!</p>
//       <Header />
//       <NavBar />
//       <ListContainer />
//       <ListForm />
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    0
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Routes />
    // </ThemeProvider>
  );
}

export default App;
