import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableHighlight, Text, View, Button, Image} from 'react-native';
import SubmitButton from './SubmitButton';

export default class Welcome extends Component{

  static navigationOptions = {
    title: 'Welcome',
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.flex2}>
          <Text style={styles.welcome}>
            Hello, this is first screen!!
          </Text>
        </View>
        <View style={styles.flex3}>
          <SubmitButton navigation={this.props.navigation}/>
        </View>
        <View style={styles.flex4}>
          <TouchableHighlight style={styles.submit_button} onPress={() => navigate('Chats')}>
            <Image style={styles.icon} source={require('../images/chat-icon.png')} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  flex2: {
    height: 50,
  },
  flex3:{
    height: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    height: 10,
    fontSize: 7,
  },
  icon:{
    height: 25,
    width: 25,
  },
})

AppRegistry.registerComponent('Welcome', ()=> Welcome);
