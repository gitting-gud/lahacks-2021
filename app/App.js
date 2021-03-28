import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import BizScreen from './screens/BizScreen';
import UserStamping from './screens/UserStamping';
import BizStamping from './screens/BizStamping';
import StampCardScreen from './screens/StampCardScreen'
import MapScreen from './screens/MapScreen';
import NewStampScreen from './screens/NewStampScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="BizScreen" component={BizScreen} />
        <Stack.Screen name="UserStamping" component={UserStamping} />
        <Stack.Screen name="BizStamping" component={BizStamping} />
        <Stack.Screen name="NewStampScreen" component={NewStampScreen}  options={{ title: 'Build a Stamp Card' }}/>
        <Stack.Screen name="StampCardScreen" component={StampCardScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};