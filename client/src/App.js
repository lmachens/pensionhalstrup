import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import light from './themes/light';
import Logo from './components/Logo';
import styled from '@emotion/styled';
import Gallery from './components/Gallery';
import NightsInput from './components/NightsInput';
import RoomInput from './components/RoomInput';
import Price from './components/Price';

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

const roomImages = [
  {
    src: '/images/dsc_0002.jpg',
    alt: 'Doppelzimmer'
  },
  {
    src: '/images/dsc_0003.jpg',
    alt: 'Doppelzimmer'
  }
];

function App() {
  const [nights, setNights] = React.useState(1);
  const [rooms, setRooms] = React.useState([]);

  function handleRoomChange(room) {
    const existingRoomIndex = rooms.indexOf(room);
    if (existingRoomIndex !== -1) {
      const newRooms = [...rooms];
      newRooms.splice(existingRoomIndex, 1);
      setRooms(newRooms);
    } else {
      setRooms([...rooms, room]);
    }
  }

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Container>
        <Header>
          <Logo />
        </Header>
        <Main>
          <Gallery images={roomImages} />
          <h2>Angebote</h2>
          <h3>Nächte</h3>
          <NightsInput value={nights} onChange={setNights} />
          <h3>Zimmer</h3>
          <RoomInput value={rooms} onChange={handleRoomChange} />
          <h3>Preis</h3>
          <Price rooms={rooms} nights={nights} />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
