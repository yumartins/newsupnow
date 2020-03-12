import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Container from '../components/Container';
import Description from '../components/Description';
import Title from '../components/Title';
import { spacing } from '../styles/styles';

const styles = StyleSheet.create({
  description: {
    marginTop: spacing.xs,
  },
});

const {
  description,
} = styles;

const Main = () => {
  const [search, setSearch] = useState();

  return (
    <Container>
      <Title text={'Welcome to \nNews upNow'} />
      <Description style={description} text="Here you can follow all the news" />

      <TextInput
        placeholder="What are you looking for?"
        clearButtonMode="while-editing"
        onChangeText={setSearch}
        value={search}
      />
    </Container>
  );
};

export default Main;
