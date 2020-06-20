import React from 'react';
import { ThemeProvider} from 'styled-components';
// Hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery';

// Styles
import { GlobalStyles, darkTheme, lightTheme} from 'styles/GlobalStyles';

const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  console.log('data', data)
  
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
        Layout component
        {children}
    </ThemeProvider>
  )
}

export default Layout;