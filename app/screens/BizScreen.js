import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const BizScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Create a New Stamp Card!</Text>
      <Button
      title="Create New Stamp Card"
      onPress={() =>
        navigation.navigate('NewStampScreen', /* { name: 'Jane' } */)
      }
      buttonStyle={{
        backgroundColor: '#FFF',
        borderColor: '#71AAFF',
        borderWidth: 2,
        borderRadius: 10,
      }}
      titleStyle={{
        color: '#000',
      }}
      ></Button>
      <Button
      title="Stamp a Card"
      onPress={() =>
        navigation.navigate('BizStamping', /* { name: 'Jane' } */)
      }
      buttonStyle={{
        backgroundColor: '#FFF',
        borderColor: '#71AAFF',
        borderWidth: 2,
        borderRadius: 10,
      }}
      titleStyle={{
        color: '#000',
      }}
      ></Button>
    </View>
  );
}

export default BizScreen;