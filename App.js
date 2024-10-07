import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConfigScreen from './screens/ConfigScreen';
import SurpriseScreen from './screens/SurpriseScreen';
import TestScreen from './screens/TestScreen'; // Import the new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Motive">
        <Stack.Screen name="Motive" component={ConfigScreen} />
        <Stack.Screen name="Surprise" component={SurpriseScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
