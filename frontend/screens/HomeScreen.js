import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>This is the home screen!</Text>
      <Button
      title="Go to UserScreen"
      onPress={() =>
        navigation.navigate('UserScreen', /* { name: 'Jane' } */)
      }></Button>
      <Button
      title="Go to BizScreen"
      onPress={() =>
        navigation.navigate('BizScreen', /* { name: 'Jane' } */)
      }></Button>
    </View>
  );
}

export default HomeScreen;