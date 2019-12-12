import styled from '@emotion/styled';

const StatusButton = styled.button`
  background: ${props => (props.active ? props.theme.colors.primary : '#fff')};
  height: 40px;
  width: 40px;
  font-size: 1.1rem;
`;

export default StatusButton;
