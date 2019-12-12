import React from 'react';
import Gallery from '../components/Gallery';

export default {
  title: 'Gallery'
};

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
export function Rooms() {
  return <Gallery images={roomImages} />;
}
