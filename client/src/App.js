import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from './themes/light';
import Logo from './components/Logo';
import styled from '@emotion/styled';
import Disclaimer from './pages/Disclaimer';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
`;

const Main = styled.main`
  margin-top: 10px;
`;

function App() {
  return (
    <ThemeProvider theme={light}>
      <Router>
        <GlobalStyles />
        <Container>
          <Header>
            <Logo />
          </Header>
          <Main>
            <Switch>
              <Route path="/disclaimer">
                <Disclaimer />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Main>
          <footer>
            <Link to="/">Home</Link>
            <Link to="/disclaimer">Impressum</Link>
          </footer>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
