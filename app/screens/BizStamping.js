import React, {useState, useEffect} from 'react';
import BizStamping from '../components/BizStamping';
import { View, Text, Button } from 'react-native';

const BizStampingScreen = ({ navigation }) => {

  const [data, setData] = useState('Scanning...');
  const displayData = (data) => {
    // get text value, check to make sure it is in database, then enable stamp button
    setData(data.data);
  }
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>This is the business stamping screen!</Text>
      <BizStamping
        readData={displayData}
      />
      <Button
          title="Go to HomeScreen"
          onPress={() =>
            navigation.navigate('HomeScreen', /* { name: 'Jane' } */)
          }></Button>
          <Button
          title="Stamp"
          onPress={() =>
            // deliver stamp 
            navigation.navigate('UserScreen', /* { name: 'Jane' } */)
          }></Button>
          <Text>{data}</Text>
    </View>
  );
}

export default BizStampingScreen;