import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Description from '../Description';

const Post = ({
  hour,
  title,
  image,
  description,
}) => (
  <Card>
    <Image>
      <Background source={image} />
      <Overlay />
    </Image>
  </Card>
);

const Card = styled.View`
  width: 256px;
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

const 

export default Post;