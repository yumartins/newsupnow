import React from 'react';
import { StyleSheet } from 'react-native';

import Container from '../components/Container';
import Description from '../components/Description';
import Title from '../components/Title';

const Main = () => (
  <Container>
    <Title text={'Welcome to \nNews upNow'} />
    <Description text="Here you can follow all the news" />
  </Container>
);

export default Main;
