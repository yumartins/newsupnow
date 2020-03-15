import styled from 'styled-components';

import { spacing } from '../styles/styles';

export const Container = styled.View`
  background-color: #FFF;
  height: 100%;
  padding: ${spacing.lg}px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Container;
