import React from 'react';

import { string, func } from 'prop-types';
import styled from 'styled-components';

import {
  spacing, color, typography, borderRadius,
} from '../styles/styles';

const SearchInput = ({
  value,
  onValue,
  ...rest
}) => (
  <Search
    {...rest}
    clearButtonMode="while-editing"
    placeholderTextColor={color.gray}
    onChangeText={onValue}
    value={value}
  />
);

const Search = styled.TextInput`
  padding: ${spacing.sm}px;
  font-size: ${typography.size.s2};
  background-color: ${color.white};
  border-radius: ${borderRadius.md}px;
  line-height: 20px;
  box-shadow: 0 5px 10px ${color.primary};
  shadow-opacity: 0.1;
`;

SearchInput.propTypes = {
  value: string.isRequired,
  onValue: func,
};

SearchInput.defaultProps = {
  onValue: () => {},
};

export default SearchInput;
