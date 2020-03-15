import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Post from './pages/Post';
import Posts from './pages/Posts';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Home',
      },
    },
    Posts: {
      screen: Posts,
      navigationOptions: {
        title: 'Posts',
      },
    },
    Post: {
      screen: Post,
      navigationOptions: {
        title: 'Post',
      },
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#07153B',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: 'transparent',
      },
    },
  }),
);

export default Routes;
