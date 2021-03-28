import React, {useState, useEffect} from 'react';
import CameraObject from '../components/Camera';
import { View, Text, Button } from 'react-native';
import { Input } from 'react-native-elements';

const BizStampingScreen = ({ navigation }) => {

  const [data, setData] = useState('Scanning...');
  const [stampReady, setStampReady] = useState(false);
  
  const displayData = (data) => {
    // get text value, check to make sure it is in database, then enable stamp button
    setData(data.data);
    setStampReady(true);
  }
  const handleCodeInput = (textInput) => {
    if (textInput.length == 6) {
      // check if code is in database
      setData(textInput);
      setStampReady(true);
    }
  }

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        marginTop:300,
        alignItems: 'center'
      }}>
      <CameraObject
        readData={displayData}
      />
      <Text>{data}</Text>
      <Text>Or, enter the code here</Text>
      <Input 
        placeholder='123456'
        containerStyle={{
          paddingRight: 0,
          paddingLeft: 0,
          width: 75,
        }}
        inputContainerStyle={{
          width: 75,
        }}
        inputStyle={{
          textAlign: 'center',
          width: 75,
        }}
        onChangeText={(newValue) => handleCodeInput(newValue)}
      />
      <Button
        disabled={!stampReady}
        title="Stamp"
        onPress={() =>
        // deliver stamp 
        navigation.navigate('BizScreen', /* { name: 'Jane' } */)
      }></Button>
    </View>
  );
}

export default BizStampingScreen;