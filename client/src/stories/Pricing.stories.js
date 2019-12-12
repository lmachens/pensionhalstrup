import React from 'react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NightsInput from '../components/NightsInput';

export default {
  title: 'Pricing'
};

export function Nights() {
  return <NightsInput value={number('Nights', 3)} onChange={action('change')} />;
}
