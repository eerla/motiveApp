// screens/ConfigScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';  // Correct Slider import
import tw from 'tailwind-react-native-classnames';  // Ensure correct import for tw

const ConfigScreen = ({ navigation }) => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(25);
  const [occupation, setOccupation] = useState('');
  const [location, setLocation] = useState({ city: '', country: '' });
  const [messageTime, setMessageTime] = useState(12);

  const handleSubmit = async () => {
    const userData = { gender, age, occupation, location, messageTime };
    await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
    navigation.navigate('Surprise');
  };

  return (
    <View style={tw`flex-1 justify-center p-6`}>
      <Text style={tw`text-lg mb-2`}>Select Gender:</Text>
      {/* Gender radio buttons can go here */}

      <Text style={tw`text-lg mb-2`}>Age: {age}</Text>
      <Slider
        value={age}
        onValueChange={setAge}
        minimumValue={0}
        maximumValue={100}
        style={tw`mb-4`}
      />

      <Text style={tw`text-lg mb-2`}>Occupation:</Text>
      <TextInput
        style={tw`border p-2 mb-4`}
        value={occupation}
        onChangeText={setOccupation}
        placeholder="Enter your occupation"
      />

      <Text style={tw`text-lg mb-2`}>City:</Text>
      <TextInput
        style={tw`border p-2 mb-4`}
        value={location.city}
        onChangeText={(text) => setLocation({ ...location, city: text })}
        placeholder="Enter your city"
      />

      <Text style={tw`text-lg mb-2`}>Country:</Text>
      <TextInput
        style={tw`border p-2 mb-4`}
        value={location.country}
        onChangeText={(text) => setLocation({ ...location, country: text })}
        placeholder="Enter your country"
      />

      <Text style={tw`text-lg mb-2`}>Message Time: {messageTime} hrs</Text>
      <Slider
        value={messageTime}
        onValueChange={setMessageTime}
        minimumValue={0}
        maximumValue={24}
        style={tw`mb-4`}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ConfigScreen;
