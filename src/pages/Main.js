import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Container from '../components/Container';
import Description from '../components/Description';
import SearchInput from '../components/SearchInput';
import Title from '../components/Title';
import { spacing } from '../styles/styles';

const {
  xs,
  sm,
  md,
  xl,
} = spacing;

const styles = StyleSheet.create({
  description: {
    marginTop: xs,
    marginBottom: md,
  },

  spotlight: {
    marginTop: xl + sm,
  },
});

const {
  spotlight,
  description,
} = styles;

const Main = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Title text={'Welcome to \nNews upNow'} />
      <Description style={description} text="Here you can follow all the news" />

      <SearchInput
        placeholder="What are you looking for?"
        onValue={setSearch}
        value={search}
      />

      <View style={spotlight}>
        <Title
          text="Spotlight"
          size="xs"
          appearance="primary"
        />
      </View>
    </Container>
  );
};

export default Main;
