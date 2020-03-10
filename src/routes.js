import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Post from './pages/Post';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Home',
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
      headerTintColor: '#FFF',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7D40E7',
      },
    },
  }),
);

export default Routes;
