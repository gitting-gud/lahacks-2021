import React from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const UserScreen = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }>
      <Text>This is the user screen!</Text>
      <Button
      title="Go to HomeScreen"
      onPress={() =>
        navigation.navigate('HomeScreen', /* { name: 'Jane' } */)
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
      type="outline"
      ></Button>
      <Button
        title="Go to StampCardScreen"
        onPress={() =>
          navigation.navigate('StampCardScreen', /* { name: 'Jane' } */)
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
        type="outline"
      ></Button>
    
    </View>
  );
}

export default UserScreen;