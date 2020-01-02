import React from 'react';
import Gallery from '../components/Gallery';
import NightsInput from '../components/NightsInput';
import RoomInput from '../components/RoomInput';
import Price from '../components/Price';
import Description from '../components/Description';
import Contact from '../components/Contact';
import Map from '../components/Map';
import { useSessionStorage } from '../hooks/useStorage';

function Home() {
  const [nights, setNights] = useSessionStorage('nights', 1);
  const [rooms, setRooms] = useSessionStorage('rooms', []);
  const [roomImages, setRoomImages] = React.useState(null);

  React.useEffect(() => {
    async function fetchImages() {
      const response = await fetch('/api/images');
      const images = await response.json();
      setRoomImages(images);
    }

    fetchImages();
  }, []);

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
    <>
      <Gallery images={roomImages || []} />
      <h2>Angebote</h2>
      <h3>Nächte</h3>
      <NightsInput value={nights} onChange={setNights} />
      <h3>Zimmer</h3>
      <RoomInput value={rooms} onChange={handleRoomChange} />
      <h3>Preis</h3>
      <Price rooms={rooms} nights={nights} />
      <h3>Karte</h3>
      <Map />
      <h3>Beschreibung</h3>
      <Description />
      <h3>Kontakt</h3>
      <Contact />
    </>
  );
}

export default Home;
