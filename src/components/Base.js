import styled from 'styled-components';

import { spacing, color } from '../styles/styles';

export const Container = styled.View`
  padding: 0 ${spacing.lg}px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.lg}px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${color.light};
  margin: ${spacing.md}px 0;
`;

export default Container;
