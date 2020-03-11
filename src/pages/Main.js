import React from 'react';
import { View } from 'react-native';

import Description from '../components/Description';
import Title from '../components/Title';

const Main = () => (
  <View>
    <Title text={'Welcome to \nNews upNow'} />
    <Description text="Here you can follow all the news" />
  </View>
);

export default Main;
