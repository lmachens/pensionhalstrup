import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from './themes/light';
import Logo from './components/Logo';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
`;

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <Header>
          <Logo />
        </Header>
        <main></main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
