import React from 'react';
import styled from '@emotion/styled';

const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
`;

function Logo() {
  return (
    <h1>
      Pension<Highlight>Halstrup</Highlight>
    </h1>
  );
}

export default Logo;
