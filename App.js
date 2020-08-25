//StackNavigator -> createStackNavigator
//import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
  "Main": {
    screen: PeoplePage
  },
  "PeopleDetail": {
    screen: PeopleDetailPage,
    navigationOptions: ({navigation}) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return ({
        title: peopleName,
        headerTitleStyle: {
          color: "white",
          fontSize: 30,
        }
      });
    }
  }
}, {
  defaultNavigationOptions: {
    title: "People",
    headerStyle: {
      backgroundColor: "#6ca2f7",
      borderBottomWidth: 1,
      borderBottomColor: "#C5C5C5",
    },
    headerTitleStyle: {
      color: "white",
      fontSize: 30,
      alignSelf: "center",
    },
    headerTintColor: "white"
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
