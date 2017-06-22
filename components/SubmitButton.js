import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableHighlight, Text, Button, View, Image } from 'react-native';

export default class SubmitButton extends Component {

  onPressButton(){
    alert('Profile')
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableHighlight style={styles.submit_button} onPress={() => navigate('Profile')}>
          <Image style={styles.icon} source={require('../images/profile.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    height: 25,
    width: 25.
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('SubmitButton', () => SubmitButton);