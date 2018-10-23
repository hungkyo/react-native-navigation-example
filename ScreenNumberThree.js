import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ScreenNumberThree extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>This is the Screen #3</Text>
        <Button title={ "Go back to #1" }
                onPress={ () => {
                  navigate("screenOne")
                } }/>
      </View>
    )
  }
}

export default ScreenNumberThree;