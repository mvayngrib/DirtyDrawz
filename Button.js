import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native'; 

export default class Button extends Component { 
    constructor(props)	{
		super(props);
		this.state = {text: ""};
	}
    handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  static get defaultProps() {
    return {
      title: 'Button'
    };
  }
	render() {
		return( 
		<View style={{
            justifyContent:'center',
            alignItems:'center',
            backgroundColor: '#ff5522',
            borderColor: 'transparent',
            width:this.props.width,
            height: 50,
            borderRadius: 20
        }}>
			<TouchableHighlight
                underlayColor={'#24CE84'}
                onPress={this.handlePress.bind(this)}>
                <Text style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 18, 
                    fontWeight:'bold',
                }}>
                    {this.props.title} 
                </Text>
			</TouchableHighlight>
		</View>
		);
	}
}

