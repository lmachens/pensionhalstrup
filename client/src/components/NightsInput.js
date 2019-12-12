import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Button = styled.button`
  background: ${props => (props.active ? props.theme.colors.primary : '#fff')};
  height: 40px;
  width: 40px;
  font-size: 1.1rem;
`;

function NightsInput({ value, onChange }) {
  return (
    <div>
      {['1', '2', '3', '4', '5', '6', '7+'].map(nights => (
        <Button
          key={nights}
          active={value === parseInt(nights)}
          onClick={() => onChange(parseInt(nights))}
        >
          {nights}
        </Button>
      ))}
    </div>
  );
}

NightsInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};

export default NightsInput;
