import React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import KidungScreen from './src/KidungScreen'
import DetailScreen from './src/DetailScreen'
import OpenScreen from './src/Open'
import HomeScreen from './src/home'


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Open: {
      screen: OpenScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Kidung: {
      screen: KidungScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'Open',
  }
);


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
});
