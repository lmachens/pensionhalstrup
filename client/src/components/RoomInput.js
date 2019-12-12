import React from 'react';
import StatusButton from './StatusButton';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ExtendedStatusButton = styled(StatusButton)`
  width: 80px;
  display: inline-flex;
  justify-content: space-around;
`;

const Icon = styled.img``;

function RoomInput({ value, onChange }) {
  return (
    <div>
      <ExtendedStatusButton active={value.includes('single')} onClick={() => onChange('single')}>
        <Icon src="/icons/single.png" /> EZ
      </ExtendedStatusButton>
      <ExtendedStatusButton active={value.includes('double')} onClick={() => onChange('double')}>
        <Icon src="/icons/double.png" /> DZ
      </ExtendedStatusButton>
    </div>
  );
}

RoomInput.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RoomInput;
