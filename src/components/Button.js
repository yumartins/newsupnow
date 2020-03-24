import React, { useRef } from 'react';
import { StyleSheet, Text } from 'react-native';

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
  ...rest
}) => {
  const ref = useRef(null);

  const styles = StyleSheet.create({
    text: {
      color: color.white,
      textAlign: 'center',
      fontSize: ref.current !== null && ref.current.props.size === 'sm' ? 12 : 16,
      fontFamily: typography.font.semiBold,
    },
  });

  return (
    <Action
      {...rest}
      ref={ref}
      onPress={route}
    >
      <Text style={styles.text}>{text}</Text>
    </Action>
  );
};

/**
 * Styled Component
 */

const sizes = {
  lg: 'lg',
  sm: 'sm',
};

const Action = styled.TouchableOpacity`
  background-color: ${color.primary};
  box-shadow: 0 5px 10px ${color.primary};
  shadow-opacity: 0.15;

  /**
   * Sizes
   */
  ${(props) => props.size === sizes.sm && `
    border-radius: ${borderRadius.sm}px;
    padding: ${spacing.xs}px ${spacing.sm - 4}px;
  `}

  ${(props) => props.size === sizes.lg && `
    border-radius: ${borderRadius.md}px;
    padding: ${spacing.md}px;
  `}
`;

/**
 * Set properties
 */

Button.propTypes = {
  text: string.isRequired,
  size: string,
  route: func,
};

Button.defaultProps = {
  size: 'sm',
  route: () => {},
};

export default Button;
