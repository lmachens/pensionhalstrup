import React from 'react';
import { array, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NightsInput from '../components/NightsInput';
import RoomInput from '../components/RoomInput';
import Price from '../components/Price';

export default {
  title: 'Pricing'
};

export function Nights() {
  return <NightsInput value={number('Nights', 3)} onChange={action('change')} />;
}

export function Rooms() {
  return <RoomInput value={array('Rooms', ['single'])} onChange={action('change')} />;
}

export function Calculation() {
  return <Price rooms={array('Rooms', ['single', 'double'])} nights={number('Nights', 4)} />;
}
