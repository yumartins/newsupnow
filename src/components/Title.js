import React from 'react';

import { string } from 'prop-types';
import styled from 'styled-components';

import { color, typography } from '../styles/styles';

const Title = ({ text, ...rest }) => <StyledTitle {...rest}>{text}</StyledTitle>;

const sizes = {
  lg: 'lg',
  md: 'md',
  xs: 'xs',
};

const appearances = {
  primary: 'primary',
  gray: 'gray',
  dark: 'dark',
  white: 'white',
};

const aligns = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const StyledTitle = styled.Text`
  font-family: 'SegoeUI-Bold';
  color: ${color.primary};

  /**
   * Sizes
   */
  ${(props) => props.size === sizes.lg && `
    font-size: ${typography.size.l2};
    letter-spacing: -0.12px;
    line-height: 42px;
  `}

  ${(props) => props.size === sizes.md && `
    font-size: ${typography.size.l1};
    letter-spacing: -0.12px;
    line-height: 36px;
  `}

  ${(props) => props.size === sizes.xs && `
    font-size: ${typography.size.m2};
    font-family: ${typography.font.semiBold};
    letter-spacing: -0.24px;
    line-height: 28px;
  `}

  /**
   * Aligns
   */
  ${(props) => props.align === aligns.left && `
    text-align: left;
  `}

  ${(props) => props.align === aligns.center && `
    text-align: center;
  `}

  ${(props) => props.align === aligns.right && `
    text-align: right;
  `}

  /**
   * Appearances
   */
  ${(props) => props.appearance === appearances.primary && `
    color: ${color.primary};
  `}

  ${(props) => props.appearance === appearances.gray && `
    color: ${color.gray};
  `}

  ${(props) => props.appearance === appearances.dark && `
    color: ${color.dark};
  `}

  ${(props) => props.appearance === appearances.white && `
    color: ${color.white};
  `}
`;

Title.propTypes = {
  text: string.isRequired,
  size: string,
  appearance: string,
  align: string,
};

Title.defaultProps = {
  size: 'lg',
  appearance: 'dark',
  align: 'left',
};

export default Title;
