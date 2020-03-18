import React from 'react';

import { string, number } from 'prop-types';
import styled from 'styled-components';

import IconClock from '../../../assets/icon-clock.svg';
import IconPlay from '../../../assets/icon-play.svg';
import {
  color,
  spacing,
  typography,
  borderRadius,
} from '../../styles/styles';
import Title from '../Title';

const Spotlight = ({
  hour,
  title,
  image,
}) => (
  <Card>
    <Image>
      <Background
        source={{
          uri: image,
        }}
      />
      <Overlay />
    </Image>
    <BoxHours>
      <IconClock />
      <Hour>{hour}</Hour>
    </BoxHours>
    <Container>
      <Title
        text={title}
        size="xs"
        appearance="white"
      />
    </Container>
    <Button>
      <IconPlay />
    </Button>
  </Card>
);

const {
  xs,
  md,
  xl,
} = spacing;

/**
 * Styled Component
 */

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
  opacity: .4;
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
  padding: ${md}px;
  margin-top: auto;
  max-width: 224px;
`;

const Button = styled.View`
  background-color: ${color.primary};
  width: ${xl + xs}px;
  height: ${xl + xs}px;
  border-radius: ${borderRadius.md}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px ${color.primary};
  shadow-opacity: 0.15;
  position: absolute;
  bottom: -${md}px;
  right: ${md}px;
`;

const BoxHours = styled.View`
  background-color: ${color.primary};
  border-radius: ${borderRadius.sm}px;
  padding: ${xs}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  position: relative;
  top: ${md}px;
  right: ${md}px;
`;

const Hour = styled.Text`
  font-size: ${typography.size.s1};
  font-family: ${typography.font.semiBold};
  color: ${color.white};
  margin-left: ${xs}px;
`;

/**
 * Set properties
 */

Spotlight.propTypes = {
  hour: string,
  title: string.isRequired,
  image: string.isRequired,
};

Spotlight.defaultProps = {
  hour: '',
};

export default Spotlight;
