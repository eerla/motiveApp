// services/OpenAIService.js
import axios from 'axios';

const apiKey = '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';

export const getMotivationalQuote = async (userData) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: `Generate a motivational quote for a ${userData.age}-year-old ${userData.occupation} in ${userData.language} language.`,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    // Check if choices exist before accessing them
    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim(); // Trim to remove extra whitespace
    } else {
      console.warn('No choices returned from API.');
      return 'Stay motivated!';
    }
  } catch (error) {
    console.error('Error fetching quote:', error); // Log the error for debugging
    return 'Stay motivated!';
  }
};
