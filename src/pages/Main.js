import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { func, object, oneOfType } from 'prop-types';

import { Container, Header, Divider } from '../components/Base';
import Button from '../components/Button';
import CardPost from '../components/Cards/Post';
import CardSpotlight from '../components/Cards/Spotlight';
import Description from '../components/Description';
import SearchInput from '../components/SearchInput';
import Title from '../components/Title';
import store from '../services/store';
import { spacing } from '../styles/styles';

const {
  xs,
  sm,
  md,
  lg,
  xl,
} = spacing;

const styles = StyleSheet.create({
  description: {
    marginTop: xs,
    marginBottom: md,
  },

  title: {
    marginTop: xl + sm,
  },

  cardList: {
    marginTop: sm,
    marginLeft: lg,
  },

  firstCardList: {
    marginRight: xs,
  },

  generalCardList: {
    marginHorizontal: xs,
  },
});

const {
  title,
  cardList,
  description,
  firstCardList,
  generalCardList,
} = styles;

const Main = ({ navigation }) => {
  const [search, setSearch] = useState('');

  /**
   * Filters posts spotlight and latest video
   */
  const postSpolight = store.filter((item) => item.spotlight === true);

  const lastedVideo = store.filter((item) => item.spotlight !== true);

  return (
    <ScrollView>
      <Container>
        <Title
          style={{ marginTop: spacing.lg }}
          text={'Welcome to \nNews upNow'}
        />
        <Description
          style={description}
          text="Here you can follow all the news"
        />

        <SearchInput
          placeholder="What are you looking for?"
          onValue={setSearch}
          value={search}
        />

        <View style={title}>
          <Title
            text="Spotlight"
            size="xs"
            appearance="primary"
          />

          {postSpolight && postSpolight.slice(0, 1).map((item) => (
            <TouchableHighlight
              key={item.id}
              style={{ marginTop: sm }}
              onPress={() => { navigation.navigate('Post', { id: item.id }); }}
            >
              <CardSpotlight
                image={item.image}
                title={item.title}
                description={item.description}
                hour={item.hour}
              />
            </TouchableHighlight>
          ))}
        </View>
      </Container>

      <View style={title}>
        <View>
          <Header>
            <Title
              text="Latest Video"
              size="xs"
              appearance="primary"
            />

            <Button
              text="View more"
              route={() => { navigation.navigate('Posts'); }}
            />
          </Header>

          <FlatList
            style={cardList}
            data={lastedVideo}
            keyExtractor={(post) => `${post.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(({ item, index }) => (
              <TouchableHighlight
                style={index === 0 ? firstCardList : generalCardList}
                onPress={() => { navigation.navigate('Post', { id: item.id }); }}
              >
                <CardPost
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  hour={item.hour}
                />
              </TouchableHighlight>
            ))}
          />
        </View>

        <Divider />

        <View>
          <Header>
            <Title
              text="Portuguese"
              size="xs"
              appearance="primary"
            />

            <Button
              text="View more"
              route={() => { navigation.navigate('Posts'); }}
            />
          </Header>
        </View>
      </View>
    </ScrollView>
  );
};

Main.propTypes = {
  navigation: oneOfType([
    object, func,
  ]).isRequired,
};

export default Main;
