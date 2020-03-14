import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { func, object, oneOfType } from 'prop-types';

import ImagePost from '../../assets/images/post.jpg';
import CardPost from '../components/Cards/Post';
import CardSpotlight from '../components/Cards/Spotlight';
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

  cardSpotlight: {
    marginTop: sm,
  },
});

const {
  spotlight,
  description,
  cardSpotlight,
} = styles;

const Main = ({ navigation }) => {
  const [search, setSearch] = useState('');

  return (
    <ScrollView>
      <Container>
        <Title text={'Welcome to \nNews upNow'} />
        <Description
          style={description}
          text="Here you can follow all the news"
        />

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

          <TouchableHighlight
            style={cardSpotlight}
            onPress={() => { navigation.navigate('Post'); }}
          >
            <CardSpotlight
              image={ImagePost}
              title="Congratulations New York"
              description="Lorem ipsum its door me goold head look for tree"
              hour="5 hours ago"
            />
          </TouchableHighlight>
        </View>

        <View style={spotlight}>
          <Title
            text="Latest Video"
            size="xs"
            appearance="primary"
          />

          <TouchableHighlight
            style={cardSpotlight}
            onPress={() => { navigation.navigate('Post'); }}
          >
            <CardPost
              image={ImagePost}
              title="Congratulations New York"
              description="Lorem ipsum its door me goold head look for tree"
              hour="5 hours ago"
            />
          </TouchableHighlight>
        </View>
      </Container>
    </ScrollView>
  );
};

Main.propTypes = {
  navigation: oneOfType([
    object, func,
  ]).isRequired,
};

export default Main;
