import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import BizScreen from './screens/BizScreen';
import UserStamping from './screens/UserStamping';
import BizStamping from './screens/BizStamping';
import StampCardScreen from './screens/StampCardScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="BizScreen" component={BizScreen} />
        <Stack.Screen name="UserStamping" component={UserStamping} />
        <Stack.Screen name="BizStamping" component={BizStamping} />
        <Stack.Screen name="StampCardScreen" component={StampCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};