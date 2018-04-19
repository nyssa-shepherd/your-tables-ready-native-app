import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Card, Button } from 'react-native-elements';

import HomeScreen from './src/Home/HomeScreen';
import SearchScreen from './src/Search/SearchScreen';
import UpcomingReservationScreen from './src/Screens/UpcomingReservationScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      home: { screen: HomeScreen },
      upcomingReservation: { screen: UpcomingReservationScreen },
      search: { screen: SearchScreen }
    },
    {
      swipeEnabled: false,
      lazy: false,
    });

    return (
      <View style={styles.container}>
        <MainNavigator style={styles.navBar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  navBar: {
    backgroundColor: 'blue'
  }
});
