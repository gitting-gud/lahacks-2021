import React from 'react';
import { Text, View, Button } from 'react-native';

const UserScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>This is the user screen!</Text>
      <Button
      title="Go to HomeScreen"
      onPress={() =>
        navigation.navigate('HomeScreen', /* { name: 'Jane' } */)
      }></Button>
      <Button
      title="Go to StampCardScreen"
      onPress={() =>
        navigation.navigate('StampCardScreen', /* { name: 'Jane' } */)
      }></Button>
    </View>
  );
}

export default UserScreen;