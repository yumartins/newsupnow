import React from 'react';

import { string, func } from 'prop-types';
import styled from 'styled-components';

import IconSearch from '../../assets/icon-search.svg';
import {
  spacing, color, typography, borderRadius,
} from '../styles/styles';

const {
  xs,
  sm,
  xl,
} = spacing;

/**
 *
 * @todo Create clearButton styled
 */

const SearchInput = ({
  value,
  onValue,
  ...rest
}) => (
  <Search>
    <Icon width={18} height={18} />
    <Input
      {...rest}
      clearButtonMode="while-editing"
      placeholderTextColor={color.gray}
      onChangeText={onValue}
      value={value}
    />
  </Search>
);

const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: ${sm}px ${sm}px ${sm}px ${xl + xs}px;
  font-size: ${typography.size.s2};
  color: ${color.gray};
  background-color: ${color.white};
  border-radius: ${borderRadius.md}px;
  line-height: 20px;
  box-shadow: 0 5px 10px ${color.primary};
  shadow-opacity: 0.1;
`;

const Icon = styled(IconSearch)`
  position: absolute;
  z-index: 2;
  left: ${sm}px;
`;

SearchInput.propTypes = {
  value: string.isRequired,
  onValue: func,
};

SearchInput.defaultProps = {
  onValue: () => {},
};

export default SearchInput;
