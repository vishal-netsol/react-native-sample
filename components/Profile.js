import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableHighlight, Text, View, TextInput} from 'react-native';
import {ActionsContainer, Button, FieldsContainer, Fieldset, Form, FormGroup, Input, Label, Select, Switch} from 'react-native-clean-form';

export default class Profile extends Component {

  static navigationOptions = {
    title: 'Profile',
  };

  render(){
    return(
      <View style={styles.container}>
        <Form>
          <FieldsContainer>
            <Fieldset label="Contact details">
              <FormGroup>
                <Label>First name</Label>
                <Input placeholder="John" autocomplete={false} />
              </FormGroup>
              <FormGroup>
                <Label>Last name</Label>
                <Input placeholder="Doe" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input placeholder="john.doe@gmail.com" />
              </FormGroup>
              <FormGroup>
                <Label>Phone</Label>
                <Input placeholder="9034567812" />
              </FormGroup>
            </Fieldset>
            <Fieldset label="Shipping details" last>
              <FormGroup>
                <Label>Address</Label>
                <Input placeholder="Riverdale st." />
              </FormGroup>
              <FormGroup>
                <Label>City</Label>
                <Input placeholder="Delhi" />
              </FormGroup>
              <FormGroup>
                <Label>ZIP Code</Label>
                <Input placeholder="160001" />
              </FormGroup>
              <FormGroup>
                <Label>Country</Label>
                <Select
                    name="country"
                    label="Country"
                    options={countryOptions}
                    placeholder="India"
                />
              </FormGroup>
              <FormGroup border={false}>
                <Label>Save my details</Label>
                <Switch />
              </FormGroup>
            </Fieldset>
          </FieldsContainer>
        </Form>
      </View>
    );
  }
}

const countryOptions = [
  {label: 'India', value: 'IN'},
  {label: 'England', value: 'UK'},
  {label: 'United States', value: 'US'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    marginTop: 10,
    marginLeft: 20
  },
  input: {
    height: 15,
    width: 100,
    borderColor: 'grey',
    fontSize: 10,
    borderWidth: 1,
  }
})

AppRegistry.registerComponent('Profile', ()=> Profile);