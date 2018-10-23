import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ScreenNumberOne extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>This is the Screen #1</Text>
        <Button title={ "Go to #2" }
                onPress={ () => {
                  navigate("screenTwo")
                } }/>
      </View>
    )
  }
}

export default ScreenNumberOne;