import React from 'react';

import styled from 'styled-components';

import { color, borderRadius, spacing } from '../../styles/styles';
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
    <Container>
      <Title
        text={title}
        size="xs"
        appearance="white"
      />
      <Text
        text={description}
        appearance="white"
        size="xs"
      />
    </Container>
  </Card>
);

const Card = styled.View`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Image = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
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

const Container = styled.View`
  z-index: 3;
  padding: ${spacing.sm}px;
  margin-top: auto;
  max-width: 212px;
`;

const Text = styled(Description)`
  margin-top: ${spacing.xs - 4}px;
`;

export default Spotlight;
