import React from 'react';
import { View } from 'react-native';

import Title from '../components/Title';

const Main = () => (
  <View>
    <Title
      size="md"
      appearance="dark"
      align="left"
    >
      {'Welcome to \nNews upNow'}
    </Title>
  </View>
);

export default Main;
