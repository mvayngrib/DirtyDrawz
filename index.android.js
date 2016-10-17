/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import MyScene from './MyScene';
import Button from './Button';

class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        /*<View>
          <Image
          style={{
            width:200,
	          height: 200
          }}
          source={require('Logo.JPG')}
          />
        </View>*/
        <View style={{
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <MyScene boxWidth={170} caption="First Name: "/>
          <MyScene boxWidth={170} caption="Last Name:"/>
        </View>
          <MyScene boxWidth={340} caption="Address: "/>
          <MyScene boxWidth={340} caption="E-mail: "/>
          <MyScene boxWidth={340} caption="Phone Number: "/>
          <View style={{
            flexDirection:'row',
            paddingTop: 20,
            justifyContent: 'space-around',
            alignItems: 'center',
            width:300,
          }}>
            <Button title="Back" onpress={"()" ==""> {}}/>
            <Button title="Register" onpress={"()" ==""> {}}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column'
  }
});

AppRegistry.registerComponent('test', () => test);
