import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
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
import { getDate } from '../hooks';
import api from '../services/api';
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
    marginTop: xl + md,
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
      const response = await api.get('/posts?_embed&per_page=100');
      setPosts(response.data);
    }

    getPosts();
  }, [post]);

  /**
   * Filters posts spotlight and latest video
   */
  const postSpolight = post.filter((item) => item.categories.find((field) => field === 17));

  const lastedVideo = post.filter((item) => item.categories.find((field) => field !== 17));

  /**
   * Render list from latest video
   */
  const listVideo = ({ item }) => (
    <TouchableOpacity
      onPress={() => { navigation.navigate('Post', { id: item }); }}
    >
      <CardPost
        image={item._embedded['wp:featuredmedia']['0'].source_url} // eslint-disable-line
        title={item.title.rendered}
        description={item.excerpt.rendered}
        hour={getDate(item.date, 'en-US')}
      />
    </TouchableOpacity>
  );

  /**
   * Space between list
   */
  const listSpacing = () => <View style={{ width: 16 }} />;

  /**
   *
   * @param {Number} category => Select posts with id categories
   * @param {String} language => String for select the title
   *
   * Filter posts for categories and apply the title the head
   */
  const postOfCategories = (category, language) => {
    const filter = post.filter((item) => item.categories.find((field) => field === category));

    return (
      <View>
        <Header>
          <Title
            text={language}
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
          data={filter.slice(0, 5)}
          keyExtractor={(item) => `${item.id}`}
          ItemSeparatorComponent={listSpacing}
          showsHorizontalScrollIndicator={false}
          renderItem={listVideo}
        />
      </View>
    );
  };

  /**
   * Introducing all programs
   */
  const programs = [
    {
      id: 17,
      title: 'English',
    },
    {
      id: 22,
      title: 'Spanish',
    },
    {
      id: 20,
      title: 'Portuguese',
    },
  ];

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
              onPress={() => { navigation.navigate('Post', { id: item }); }}
            >
              <CardSpotlight
                image={item._embedded['wp:featuredmedia']['0'].source_url} // eslint-disable-line
                title={item.title.rendered}
                hour={getDate(item.date, 'en-US')}
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
            data={lastedVideo.slice(0, 5)}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={listSpacing}
            showsHorizontalScrollIndicator={false}
            renderItem={listVideo}
          />
        </View>

        {programs.map((program) => (
          <View key={program.id}>
            <Divider />
            {postOfCategories(program.id, program.title)}
          </View>
        ))}

        <Button
          style={{ margin: lg }}
          size="lg"
          text="View more"
          route={() => { navigation.navigate('Posts'); }}
        />

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
