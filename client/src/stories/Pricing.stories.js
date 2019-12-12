import React from 'react';
import { array, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NightsInput from '../components/NightsInput';
import RoomInput from '../components/RoomInput';

export default {
  title: 'Pricing'
};

export function Nights() {
  return <NightsInput value={number('Nights', 3)} onChange={action('change')} />;
}

export function Rooms() {
  return <RoomInput value={array('Rooms', ['single'])} onChange={action('change')} />;
}
