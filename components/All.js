import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableHighlight, Text, View, Animated} from 'react-native';

export default class All extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>
          All Chats!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

AppRegistry.registerComponent('All', ()=> All);