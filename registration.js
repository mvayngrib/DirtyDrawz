/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const SideMenu = require('react-native-side-menu');
const Menu=require('./react-native-side-menu/Menu');

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker
} from 'react-native';

import RegistrationItem from './RegistrationItem';
import Button from './Button';
import Topbar from './react-native-side-menu/Topbar';

class MenuButton extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = class registration extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen:false,
      selectedItem:'About',
      servingArea:'Allston'
    }
  }


  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }
  
  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
    <SideMenu 
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <Image source={require('./assets/background.png')} style={styles.container}>
          <MenuButton onPress={()=>this.setState({isOpen:!this.state.isOpen})}
              style={{
              flexDirection:'row',
              alignItems:'center',
              position:'absolute',
              left:15,
              top:19,
           }}>
          <Image source={require('./assets/menu.png')} style={{width: 32, height: 32}} />
          </MenuButton>
        
        <View style={{
          flex:1,
          flexDirection:'column',
          justifyContent:'space-around',
          alignItems:'center',

      }}>
          <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'column',
                width:340,
              }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <RegistrationItem style={{width:170}} ItemType="textinput" caption="First Name: "/>
                    <RegistrationItem style={{width:170}} ItemType="textinput" caption="Last Name:"/>
                </View>
                <RegistrationItem ItemType="textinput" caption="Address: "/>
                <RegistrationItem ItemType="textinput" caption="E-mail: "/>
                <RegistrationItem ItemType="textinput" caption="Phone Number: "/>
                <RegistrationItem ItemType="textinput" caption="Zip Code: "/>
                <RegistrationItem ItemType="dropdown" caption="City/Neiborhod: " 
                  servingArea={this.state.selectedItem}
                  onSelectChange={(itemValue)=>this.setState({servingArea:itemValue})}/>
                <View style={{
                    flexDirection:'row',
                    paddingTop: 20,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width:300,
                  }}>
                    <Button width={300} title="Save Information" onpress={"()" ==""> {}}/>
                </View>
            </View>
          </View>
          </Image>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    width:null,
    height:null
  },
  topBar:{
    height: 70,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#ff5522',
    paddingLeft:15
  },
});
