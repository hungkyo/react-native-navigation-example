import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ScreenNumberTwo extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>This is the Screen #2</Text>
        <Button title={ "Go to #3" }
                onPress={ () => {
                  navigate("screenThree")
                } }/>
      </View>
    )
  }
}

export default ScreenNumberTwo;