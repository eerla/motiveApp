import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConfigScreen from './screens/ConfigScreen';
import SurpriseScreen from './screens/SurpriseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Config">
        <Stack.Screen name="Config" component={ConfigScreen} />
        <Stack.Screen name="Surprise" component={SurpriseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
