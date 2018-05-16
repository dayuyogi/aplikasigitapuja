import React from 'react';
import { Button, View, ListView, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class KidungScreen extends React.Component {
    static navigationOptions = {
      title: 'Kidung',
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

    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['Kawitan Wargasari', 'Nunas Tirta']),
      };
    }

    render() {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Detail')}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </TouchableOpacity>
      );
    }
  }

  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#BBDEFB',
      flex: 1,
      flexDirection: 'column'
    },
  });

