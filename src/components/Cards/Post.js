import React from 'react';

import { string, number } from 'prop-types';
import styled from 'styled-components';

import IconPlay from '../../../assets/icon-play.svg';
import {
  color,
  spacing,
  typography,
  borderRadius,
} from '../../styles/styles';
import Description from '../Description';

const Post = ({
  hour,
  title,
  image,
  description,
}) => (
  <Card>
    <Container>
      <ContentImage>
        <Background
          source={{
            uri: image,
          }}
        />
        <Overlay />
      </ContentImage>

      <Button>
        <IconPlay height={14} />
      </Button>
    </Container>
    <Title>{title.replace(/(&#(\d*);)/g, "'")}</Title>
    <Text
      size="xs"
      text={description.replace(/((&#(\d*);))/g, "'").substring(3, description.length - 5)}
    />
    <Hour>{hour}</Hour>
  </Card>
);

const {
  xs,
  sm,
  lg,
} = spacing;

/**
 * Styled Component
 */

const Card = styled.View`
  width: 256px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.View`
  width: 100%;
  height: 210px;
`;

const ContentImage = styled.View`
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

const Title = styled.Text`
  color: ${color.dark};
  font-size: ${typography.size.s3};
  text-transform: uppercase;
  font-family: ${typography.font.bold};
  margin-top: ${sm}px;
  width: 192px;
  line-height: 24px;
`;

const Hour = styled.Text`
  font-size: ${typography.size.s1};
  font-family: ${typography.font.semiBold};
  color: ${color.gray};
  margin-top: ${xs}px;
`;

const Text = styled(Description)`
  margin-top: ${xs - 4}px;
  width: 192px;
`;

const Button = styled.View`
  background-color: ${color.primary};
  width: ${lg}px;
  height: ${lg}px;
  border-radius: ${borderRadius.md}px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px ${color.primary};
  shadow-opacity: 0.15;
  position: absolute;
  bottom: -${sm}px;
  right: ${sm}px;
`;

/**
 * Set properties
 */

Post.propTypes = {
  hour: string,
  title: string.isRequired,
  image: number.isRequired,
  description: string,
};

Post.defaultProps = {
  hour: '',
  description: '',
};

export default Post;
