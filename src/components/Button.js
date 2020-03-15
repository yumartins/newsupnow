import React from 'react';

import { string, func } from 'prop-types';
import styled from 'styled-components';

import {
  color,
  spacing,
  typography,
  borderRadius,
} from '../styles/styles';

const Button = ({
  text,
  route,
}) => (
  <Action onPress={route}>
    <Text>{text}</Text>
  </Action>
);

/**
 * Styled Component
 */

const Action = styled.TouchableOpacity`
  background-color: ${color.primary};
  border-radius: ${borderRadius.sm}px;
  padding: ${spacing.xs}px ${spacing.sm - 4}px;
  box-shadow: 0 5px 10px ${color.primary};
  shadow-opacity: 0.15;
`;

const Text = styled.Text`
  font-size: ${typography.size.s1};
  color: ${color.white};
`;

/**
 * Set properties
 */

Button.propTypes = {
  text: string.isRequired,
  route: func,
};

Button.defaultProps = {
  route: () => {},
};

export default Button;
