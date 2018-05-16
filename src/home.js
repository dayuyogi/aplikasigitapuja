import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      headerTitle: 'Gita Puja',
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
  constructor(props) {
      super(props);
      this.state = {
        nama: '',
      };
    }
    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
          
            <Image source={require('./besakih.jpg')} 
              style={{width: 540,height: 300}} 
            />
          
          <View style={{flex: 1, flexDirection: "row",justifyContent: "center"}}> 
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Kidung')}>
              <Image source={require('./doa.png')} 
                style={{width: 150,height: 150,margin: 50}}
              /> 
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Detail')}>
              <Image source={require('./otonan.png')} 
                style={{width: 150,height: 150,margin: 50,backgroundColor:"red"}}    
              />
</TouchableOpacity>
             
          </View>
          
          <View style={{flex: 1, flexDirection: "row",justifyContent: "center"}}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Kidung')}>
              <Image source={require('./kidung.png')} 
               style={{width: 150,height: 150,margin: 50}}
                onPress={() => this.props.navigation.navigate('Profile')}
                /> 
              </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Kidung')}>
            <Image source={require('./pura.jpg')} 
               style={{width: 150,height: 150,margin: 50 }}  
                />
            </TouchableOpacity>

          </View>
          

         
  
        </View>
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

