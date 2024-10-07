// screens/SurpriseScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tw } from 'tailwind-react-native-classnames';
import { getMotivationalQuote } from '../services/OpenAIServices';

const SurpriseScreen = () => {
  const [message, setMessage] = useState(''); // State for message
  const [loading, setLoading] = useState(true); // Loading state
  console.log('inside func')
  useEffect(() => {
    const fetchMessage = async () => {
        console.log('fetchMessage invoked'); // Log when the function is called
    try {
      const userDataString = await AsyncStorage.getItem('@user_data');
      console.log('Fetched user data:', userDataString); // Debug log
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        console.log('Parsed user data:', userData); // Debug log
        const quote = await getMotivationalQuote(userData);
        console.log('Fetched quote:', quote); // Debug log
        if (quote) {
          setMessage(quote); // Set the quote if fetched
        }
      } else {
        setMessage('User data not found.');
      }
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('Failed to load message.');
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

    fetchMessage();
  }, []); // The empty array ensures this only runs on mount
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      {loading ? ( // Show loading spinner while fetching data
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={tw`text-lg text-center text-gray-700`}>
          {'You are all set for now!'}
        </Text>
      )}
    </View>
  );
};

export default SurpriseScreen;
