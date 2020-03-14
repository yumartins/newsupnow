import React from 'react';

import { string } from 'prop-types';
import styled from 'styled-components';

import { color, typography } from '../styles/styles';

const Description = ({ text, ...rest }) => (
  <StyledDescription {...rest}>{text}</StyledDescription>
);

const appearances = {
  gray: 'gray',
  white: 'white',
};

const sizes = {
  lg: 'lg',
  md: 'md',
  xs: 'xs',
};

const weights = {
  regular: 'SegoeUI',
  semiBold: 'SegoeUI-SemiBold',
  bold: 'SegoeUI-Bold',
};

const aligns = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const StyledDescription = styled.Text`
  font-family: 'SegoeUI';
  line-height: 20px;

  /**
   * Sizes
   */
  ${(props) => props.size === sizes.lg && `
    font-size: ${typography.size.s3};
  `}

  ${(props) => props.size === sizes.md && `
    font-size: ${typography.size.s2};
  `}

  ${(props) => props.size === sizes.xs && `
    font-size: ${typography.size.s1};
    line-height: 20px;
  `}

  /**
   * Appearances
   */
  ${(props) => props.appearance === appearances.gray && `
    color: ${color.gray};
  `}

  ${(props) => props.appearance === appearances.white && `
    color: ${color.white};
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
   * Weights
   */
  ${(props) => props.weight === weights.regular && `
    font-weight: ${typography.font.regular};
  `}

  ${(props) => props.weight === weights.semiBold && `
    font-weight: ${typography.font.semiBold};
  `}

  ${(props) => props.weight === weights.bold && `
    font-weight: ${typography.font.bold};
  `}
`;

Description.propTypes = {
  text: string.isRequired,
  size: string,
  weight: string,
  align: string,
  appearance: string,
};

Description.defaultProps = {
  size: 'lg',
  weight: 'regular',
  align: 'left',
  appearance: 'gray',
};

export default Description;
