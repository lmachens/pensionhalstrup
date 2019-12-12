import React from 'react';
import PropTypes from 'prop-types';

const prices = {
  single: {
    1: 22,
    2: 22,
    3: 20,
    4: 20,
    5: 20,
    6: 20,
    7: 18
  },
  double: {
    1: 27,
    2: 27,
    3: 25,
    4: 25,
    5: 25,
    6: 25,
    7: 23
  }
};

function Position({ nights, pricePerNight, room }) {
  return (
    <div>
      {nights} Nächte x {pricePerNight},-€ ({room === 'single' ? 'EZ' : 'DZ'})
    </div>
  );
}

Position.propTypes = {
  nights: PropTypes.number.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  room: PropTypes.string.isRequired
};

function Price({ nights, rooms }) {
  const hasSingleRoom = rooms.includes('single');
  const hasDoubleRoom = rooms.includes('double');

  const singleRoomCosts = hasSingleRoom ? prices.single[nights] : 0;
  const doubleRoomCosts = hasDoubleRoom ? prices.double[nights] : 0;
  const total = singleRoomCosts * nights + doubleRoomCosts * nights;

  return (
    <div>
      {hasSingleRoom && <Position nights={nights} pricePerNight={singleRoomCosts} room="single" />}
      {hasDoubleRoom && <Position nights={nights} pricePerNight={doubleRoomCosts} room="double" />}
      Gesamt: {total},-€
    </div>
  );
}

Price.propTypes = {
  nights: PropTypes.number.isRequired,
  rooms: PropTypes.array.isRequired
};

export default Price;
