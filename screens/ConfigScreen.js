import React, { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const commonOccupations = [
  { label: 'Engineer', value: 'Engineer' },
  { label: 'Teacher', value: 'Teacher' },
  { label: 'Doctor', value: 'Doctor' },
  { label: 'Nurse', value: 'Nurse' },
  { label: 'Salesperson', value: 'Salesperson' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Software Developer', value: 'Software Developer' },
  { label: 'Scientist', value: 'Scientist' },
  { label: 'Artist', value: 'Artist' },
  { label: 'Lawyer', value: 'Lawyer' },
  { label: 'Accountant', value: 'Accountant' },
  { label: 'Construction Worker', value: 'Construction Worker' },
  { label: 'Electrician', value: 'Electrician' },
  { label: 'Chef', value: 'Chef' },
  { label: 'Researcher', value: 'Researcher' },
  { label: 'Pharmacist', value: 'Pharmacist' },
  { label: 'Writer', value: 'Writer' },
  { label: 'Graphic Designer', value: 'Graphic Designer' },
  { label: 'Marketing Specialist', value: 'Marketing Specialist' },
  { label: 'Financial Analyst', value: 'Financial Analyst' },
  { label: 'Veterinarian', value: 'Veterinarian' },
  { label: 'Other', value: 'Other' },
  // Add more occupations as needed...
];

const topLanguages = [
  { label: 'English', value: 'English' },
  { label: 'Mandarin Chinese', value: 'Mandarin Chinese' },
  { label: 'Hindi', value: 'Hindi' },
  { label: 'Spanish', value: 'Spanish' },
  { label: 'French', value: 'French' },
  { label: 'Modern Standard Arabic', value: 'Modern Standard Arabic' },
  { label: 'Bengali', value: 'Bengali' },
  { label: 'Portuguese', value: 'Portuguese' },
  { label: 'Russian', value: 'Russian' },
  { label: 'Japanese', value: 'Japanese' },
  { label: 'Punjabi', value: 'Punjabi' },
  { label: 'German', value: 'German' },
  { label: 'Dutch', value: 'Dutch' },
  { label: 'Korean', value: 'Korean' },
  { label: 'Vietnamese', value: 'Vietnamese' },
  { label: 'Telugu', value: 'Telugu' },
  { label: 'Turkish', value: 'Turkish' },
  { label: 'Tamil', value: 'Tamil' },
  { label: 'Urdu', value: 'Urdu' },
  { label: 'Italian', value: 'Italian' },
  { label: 'Thai', value: 'Thai' },
  // Add more languages as needed...
];

const ConfigScreen = () => {
  const [gender, setGender] = useState('male');
  const [openGender, setOpenGender] = useState(false);
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [openOccupation, setOpenOccupation] = useState(false);
  const [language, setLanguage] = useState('');
  const [openLanguage, setOpenLanguage] = useState(false);
  const navigation = useNavigation(); // Use the hook to access navigation

  const handleAgeChange = (value) => {
    const ageValue = parseInt(value, 10);
    if (!isNaN(ageValue) && ageValue >= 1 && ageValue <= 100) {
      setAge(value);
    } else {
      setAge('');
    }
  };

  const handleSubmit = async () => {
    const finalAge = age === '' ? 24 : parseInt(age, 10);
    const finalOccupation = occupation.trim() === '' ? 'living life' : occupation;
    const finalLanguage = language.trim() === '' ? 'English' : language;

    const userData = { gender, age: finalAge, occupation: finalOccupation, language: finalLanguage };
    await AsyncStorage.setItem('@user_data', JSON.stringify(userData));

    try {
        navigation.navigate('Surprise');
    } catch (error) {
    console.error('Cannot navigate:', error)}
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-gray-100`}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={tw`flex-1 justify-center p-6`}>
        <Text style={tw`text-3xl font-bold text-center mb-6 text-blue-600`}>Motive</Text>

        <Text style={tw`text-lg mb-2 text-gray-700`}>Select Gender:</Text>
        <DropDownPicker
          open={openGender}
          value={gender}
          items={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Others', value: 'others' },
          ]}
          setOpen={setOpenGender}
          setValue={setGender}
          style={tw`border p-3 rounded-lg bg-white mb-4 shadow-sm`}
          dropDownContainerStyle={tw`border rounded-lg shadow-lg bg-white z-20`}
        />

        <Text style={tw`text-lg mb-2 text-gray-700`}>Age:</Text>
        <TextInput
          style={tw`border p-3 rounded-lg bg-white mb-4 shadow-sm`}
          value={age}
          onChangeText={handleAgeChange}
          placeholder="Enter your age (1-100)"
          keyboardType="numeric"
        />

        <Text style={tw`text-lg mb-2 text-gray-700`}>Occupation:</Text>
        <DropDownPicker
          open={openOccupation}
          value={occupation}
          items={commonOccupations}
          setOpen={setOpenOccupation}
          setValue={setOccupation}
          style={tw`border p-3 rounded-lg bg-white mb-4 shadow-sm z-10`} // Lower z-index
          dropDownContainerStyle={tw`border rounded-lg shadow-lg bg-white`}
          direction="DOWN" // Ensure dropdown opens downwards
        />

        <Text style={tw`text-lg mb-2 text-gray-700`}>Language:</Text>
        <DropDownPicker
          open={openLanguage}
          value={language}
          items={topLanguages}
          setOpen={setOpenLanguage}
          setValue={setLanguage}
          style={tw`border p-3 rounded-lg bg-white mb-4 shadow-sm z-0`} // Lower z-index to prevent overlap
          dropDownContainerStyle={tw`border rounded-lg shadow-lg bg-white`}
          direction="DOWN" // Ensure dropdown opens downwards
        />

        <Button title="Submit" onPress={handleSubmit} />


          <Button
            title="Go to Test Screen"
            onPress={() => navigation.navigate('Test')} // Navigate to TestScreen
          />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ConfigScreen;
