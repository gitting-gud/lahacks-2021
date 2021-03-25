import React from 'react';
import { Text, View, Button } from 'react-native';

const BizScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>This is the business screen!</Text>
      <Button
      title="Go to HomeScreen"
      onPress={() =>
        navigation.navigate('HomeScreen', /* { name: 'Jane' } */)
      }></Button>
      <Button
      title="Go to BizStampingScreen"
      onPress={() =>
        navigation.navigate('BizStamping', /* { name: 'Jane' } */)
      }></Button>
    </View>
  );
}

export default BizScreen;