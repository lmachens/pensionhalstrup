import React from 'react';
import Gallery from '../components/Gallery';
import NightsInput from '../components/NightsInput';
import RoomInput from '../components/RoomInput';
import Price from '../components/Price';

function Home() {
  const [nights, setNights] = React.useState(1);
  const [rooms, setRooms] = React.useState([]);
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
    </>
  );
}

export default Home;
