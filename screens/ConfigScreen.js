import React, { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker'; // Import the DropDownPicker
import tw from 'tailwind-react-native-classnames';

const ConfigScreen = ({ navigation }) => {
  const [gender, setGender] = useState('male');
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState(1); // Default age set to 1
  const [occupation, setOccupation] = useState(''); // Initially empty
  const [location, setLocation] = useState({ city: '', country: '' });
  const [messageTime, setMessageTime] = useState(24); // Default message time set to 24 hrs
  const [language, setLanguage] = useState(''); // Initially empty

  const handleSubmit = async () => {
    // Check if age is 1, if so set to 24
    const finalAge = age === 1 ? 24 : age;

    // Set default values if occupation and language are empty
    const finalOccupation = occupation.trim() === '' ? 'living life' : occupation;
    const finalLanguage = language.trim() === '' ? 'English' : language;

    const userData = { gender, age: finalAge, occupation: finalOccupation, location, messageTime, language: finalLanguage };
    await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
    navigation.navigate('Surprise');
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjusts behavior based on the platform
    >
      <View style={tw`flex-1 justify-center p-6`}>
        <Text style={tw`text-lg mb-2`}>Select Gender:</Text>
        <DropDownPicker
          open={open}
          value={gender}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Others', value: 'others' }
          ]}
          setOpen={setOpen}
          setValue={setGender}
          style={tw`border p-2 mb-4`}
          dropDownContainerStyle={tw`border p-2`}
        />

        <Text style={tw`text-lg mb-2`}>Age: {age}</Text>
        <Slider
          value={age}
          onValueChange={(value) => setAge(Math.round(value))}
          minimumValue={1}
          maximumValue={100}
          step={1}
          style={tw`mb-4`}
        />

        <Text style={tw`text-lg mb-2`}>Occupation:</Text>
        <TextInput
          style={[tw`border p-2 mb-4 bg-white`, { backgroundColor: 'white' }]}
          value={occupation}
          onChangeText={setOccupation}
          placeholder="Enter your occupation"
        />

        <Text style={tw`text-lg mb-2`}>Language:</Text>
        <TextInput
          style={[tw`border p-2 mb-4 bg-white`, { backgroundColor: 'white' }]}
          value={language}
          onChangeText={setLanguage}
          placeholder="Enter your preferred language"
        />

        <Text style={tw`text-lg mb-2`}>City:</Text>
        <TextInput
          style={[tw`border p-2 mb-4 bg-white`, { backgroundColor: 'white' }]}
          value={location.city}
          onChangeText={(text) => setLocation({ ...location, city: text })}
          placeholder="Enter your city"
        />

        <Text style={tw`text-lg mb-2`}>Country:</Text>
        <TextInput
          style={[tw`border p-2 mb-4 bg-white`, { backgroundColor: 'white' }]}
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
          step={1}
          style={tw`mb-4`}
        />

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ConfigScreen;
