import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  func,
  string,
  object,
  objectOf,
  oneOfType,
} from 'prop-types';

import { Container, Header, Divider } from '../components/Base';
import Button from '../components/Button';
import CardPost from '../components/Cards/Post';
import CardSpotlight from '../components/Cards/Spotlight';
import Description from '../components/Description';
import SearchInput from '../components/SearchInput';
import Title from '../components/Title';
import api from '../services/api';
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
});

const {
  title,
  cardList,
  description,
} = styles;

const Main = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [post, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts () {
      const response = await api.get('/posts?_embed');
      setPosts(response.data);
    }

    getPosts();
  }, []);

  /**
   * Filters posts spotlight and latest video
   */
  const postSpolight = post.filter((item) => item.categories.findIndex((field) => field === 17) !== -1);

  console.log(postSpolight);

  const lastedVideo = store.filter((item) => item.spotlight !== true);

  /**
   * Render list from latest video
   */
  const listLastedVideo = ({ item }) => (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Post', { id: item.id }); }}
    >
      <CardPost
        image={item.image}
        title={item.title}
        description={item.description}
        hour={item.hour}
      />
    </TouchableOpacity>
  );

  /**
   * Space between list
   */
  const listSpacing = () => <View style={{ width: 16 }} />;

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
            <TouchableOpacity
              key={item.id}
              style={{ marginTop: sm }}
              onPress={() => { navigation.navigate('Post', { id: item.id }); }}
            >
              <CardSpotlight
                image={item.image}
                title={item.title.rendered}
                description={item.description}
                hour={item.hour}
              />
            </TouchableOpacity>
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
            horizontal
            style={cardList}
            data={lastedVideo}
            keyExtractor={(post) => `${post.id}`}
            ItemSeparatorComponent={listSpacing}
            showsHorizontalScrollIndicator={false}
            renderItem={listLastedVideo}
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
  item: objectOf(string),
};

Main.defaultProps = {
  item: {},
};

export default Main;
