import React from 'react';
import { Button, View, FlatList, TouchableOpacity, AppRegistry, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'detail',
      headerStyle: {
        backgroundColor: "orange"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: 'center',
        flex: 1
      }
     
    };
    render() {
      return (
        <TouchableOpacity onPress={this._onPressButton}>
        <Image
          style={styles.button}
          source={require('./doa.png')}
        />
      </TouchableOpacity>
      );
    }
  }
  

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    containerMain: {
      backgroundColor: '#BBDEFB',
      flex: 1,
      flexDirection: 'column'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
  // skip this line if using Create React Native App
  AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);

