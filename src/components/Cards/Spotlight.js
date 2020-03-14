import React from 'react';

import styled from 'styled-components';

import { color, borderRadius } from '../../styles/styles';
import Description from '../Description';
import Title from '../Title';

const Spotlight = ({
  date,
  title,
  image,
  description,
}) => (
  <Card>
    <Image>
      <Background source={image} />
      <Overlay />
    </Image>
    <BigTitle
      text={title}
      size="xs"
      appearance="white"
    />
    <Text
      text={description}
      appearance="white"
      size="xs"
    />
  </Card>
);

const Card = styled.View`
  position: relative;
  width: 100%;
`;

const Image = styled.View`
  position: absolute;
  width: 100%;
  height: 300px;
`;

const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${color.black};
  opacity: .2;
  border-radius: ${borderRadius.md}px;
`;

const Background = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: ${borderRadius.md}px;
`;

const BigTitle = styled(Title)``;

const Text = styled(Description)``;

export default Spotlight;
