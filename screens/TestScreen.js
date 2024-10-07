import React from 'react';
import { View, Text, Button } from 'react-native';
import { tw } from 'tailwind-react-native-classnames';

const TestScreen = ({ navigation }) => {

return <Button
               title="Go Back to Config"
               onPress={() => navigation.navigate('Motive')}
             />
};

export default TestScreen;
