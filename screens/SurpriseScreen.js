// screens/SurpriseScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tw } from 'tailwind-react-native-classnames';
import { getMotivationalQuote } from '../services/OpenAIServices';

const SurpriseScreen = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const userData = JSON.parse(await AsyncStorage.getItem('@user_data'));
      const quote = await getMotivationalQuote(userData);
      setMessage(quote);
    };
    fetchMessage();
  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg text-center text-gray-700`}>
        {message ? message : 'Loading your surprise...'}
      </Text>
    </View>
  );
};

export default SurpriseScreen;
