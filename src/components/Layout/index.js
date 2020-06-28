import React from 'react';
import { ThemeProvider} from 'styled-components';
// Hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery';
// Components
import Header from 'components/Header';

// Styles
import { GlobalStyles, darkTheme, lightTheme} from 'styles/GlobalStyles';

const Layout = ({ children }) => {
  const data = useMetaDataQuery();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
        <Header siteTitle={data.title} />
        {children}
    </ThemeProvider>
  )
}

export default Layout;