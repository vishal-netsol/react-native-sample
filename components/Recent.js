import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableHighlight, Text, View} from 'react-native';

export default class Recent extends Component {

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Recent Chats!!
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

AppRegistry.registerComponent('Recent', ()=> Recent);