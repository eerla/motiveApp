// screens/TestScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { tw } from 'tailwind-react-native-classnames';

const TestScreen = ({ navigation }) => {
console.log('inside testscreen')
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg`}>This is the Test Screen</Text>
      <Button
        title="Go Back to Config"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default TestScreen;
