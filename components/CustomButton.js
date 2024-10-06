
import { tw } from 'tailwind-react-native-classnames';
// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={tw('bg-blue-500 p-3 rounded-lg')}
      onPress={onPress}
    >
      <Text style={tw('text-white text-center text-lg')}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
