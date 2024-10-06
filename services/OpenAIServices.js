// services/OpenAIService.js
import axios from 'axios';

const apiKey = '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';

export const getMotivationalQuote = async (userData) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: `Generate a motivational quote for a ${userData.age}-year-old ${userData.occupation} from ${userData.city}, ${userData.country}.`,
        max_tokens: 50,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return 'Stay motivated!';
  }
};
