import React from 'react';
import PropTypes from 'prop-types';
import StatusButton from './StatusButton';

function NightsInput({ value, onChange }) {
  return (
    <div>
      {['1', '2', '3', '4', '5', '6', '7+'].map(nights => (
        <StatusButton
          key={nights}
          active={value === parseInt(nights)}
          onClick={() => onChange(parseInt(nights))}
        >
          {nights}
        </StatusButton>
      ))}
    </div>
  );
}

NightsInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default NightsInput;
