import React from 'react';
import { View, Text } from 'react-native';

import { func, object, oneOfType } from 'prop-types';

const Post = ({ navigation }) => {
  const post = navigation.getParam('id');

  return (
    <View>
      <Text>{post.id}</Text>
    </View>
  );
};

Post.propTypes = {
  navigation: oneOfType([
    object, func,
  ]).isRequired,
};

export default Post;
